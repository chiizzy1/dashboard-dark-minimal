import React, { useState } from "react";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { exportCsv } from "@/utils/exportCsv";

// Define the shape of our data
import { DASHBOARD_DATA } from "@/data/mockData";

type Transaction = (typeof DASHBOARD_DATA)["7d"]["transactions"][0];

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      const customer = row.original.customer;
      return (
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${customer.avatar}')` }}></div>
          <div>
            <div className="text-sm font-medium text-white">{customer.name}</div>
            <div className="text-xs text-muted">{customer.email}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="text-sm text-muted">{row.original.date}</div>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <div className="text-sm font-medium text-white">{row.original.amount}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      let style = "";
      switch (status) {
        case "Paid":
          style = "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
          break;
        case "Pending":
          style = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
          break;
        case "Failed":
          style = "bg-red-500/10 text-red-500 border-red-500/20";
          break;
      }
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${style}`}>
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Invoice</div>,
    cell: () => {
      return (
        <div className="text-right">
          <button className="text-muted hover:text-white transition-colors duration-150 active:scale-[0.98]">
            <span className="material-symbols-outlined text-lg">description</span>
          </button>
        </div>
      );
    },
  },
];

interface TransactionsTableProps {
  globalFilter?: string;
  data: any[];
}

export function TransactionsTable({ globalFilter = "", data }: TransactionsTableProps) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 4,
  });
  const [isExporting, setIsExporting] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
      globalFilter,
    },
  });

  // Watch for statusFilter changes and apply specifically to the Status column
  React.useEffect(() => {
    table.getColumn("status")?.setFilterValue(statusFilter === "All" ? "" : statusFilter);
  }, [statusFilter, table]);

  // Reset pagination to page 1 when the dataset physically changes
  React.useEffect(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [data]);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      const exportData = table.getFilteredRowModel().rows.map((row) => ({
        CustomerName: row.original.customer.name,
        CustomerEmail: row.original.customer.email,
        Date: row.original.date,
        Amount: row.original.amount,
        Status: row.original.status,
      }));
      exportCsv(exportData, "transactions-report");
      setIsExporting(false);
    }, 800);
  };
  return (
    <div className="bg-card-dark border border-border-dark rounded-xl overflow-hidden flex flex-col">
      <div className="p-4 sm:p-6 border-b border-border-dark flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <div>
          <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
          <p className="text-sm text-muted">Latest financial activity from your customers.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
          <div className="relative flex-1 sm:flex-none">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full h-8 appearance-none pl-8 pr-10 text-xs font-medium text-muted bg-transparent border border-border-dark rounded-lg hover:text-white hover:bg-background-dark transition-colors focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="All" className="bg-card-dark">
                All Status
              </option>
              <option value="Paid" className="bg-card-dark text-emerald-500">
                Paid
              </option>
              <option value="Pending" className="bg-card-dark text-yellow-500">
                Pending
              </option>
              <option value="Failed" className="bg-card-dark text-red-500">
                Failed
              </option>
            </select>
            <span className="material-symbols-outlined text-sm absolute left-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
              filter_list
            </span>
            <span className="material-symbols-outlined text-sm absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
              expand_content
            </span>
          </div>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 h-8 text-xs font-medium text-muted border border-border-dark rounded-lg hover:text-white hover:bg-background-dark transition-colors disabled:opacity-50"
          >
            {isExporting ? (
              <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
            ) : (
              <span className="material-symbols-outlined text-sm">download</span>
            )}
            {isExporting ? "Exporting..." : "Export"}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-border-dark bg-background-dark/50 text-xs text-muted uppercase tracking-wider"
              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4 font-medium">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-border-dark">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="group hover:bg-background-dark/30 transition-colors duration-150 ease-out">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-border-dark bg-background-dark/30 flex justify-between items-center">
        <span className="text-xs text-muted">
          Showing{" "}
          {table.getFilteredRowModel().rows.length === 0
            ? 0
            : table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          -
          {Math.min(
            (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length,
          )}{" "}
          of {table.getFilteredRowModel().rows.length} transactions
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="size-8 flex items-center justify-center rounded-lg border border-border-dark text-muted hover:bg-card-dark hover:text-white transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="size-8 flex items-center justify-center rounded-lg border border-border-dark text-muted hover:bg-card-dark hover:text-white transition-colors disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
