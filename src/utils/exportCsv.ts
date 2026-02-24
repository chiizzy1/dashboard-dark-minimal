export function exportCsv<T extends Record<string, any>>(data: T[], filename: string) {
  if (!data || !data.length) return;

  const headers = Object.keys(data[0]);

  const csvContent = [
    headers.join(","),
    ...data.map((row) =>
      headers
        .map((header) => {
          const cell = row[header];
          // Handle strings with commas or quotes
          const cellStr = typeof cell === "object" ? JSON.stringify(cell).replace(/"/g, '""') : String(cell).replace(/"/g, '""');
          return `"${cellStr}"`;
        })
        .join(","),
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename.endsWith(".csv") ? filename : `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
