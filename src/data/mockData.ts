export const MOCK_USER = {
  name: "Alicia Sterling",
  email: "alicia@metricsflow.com",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDkcd5goAmGjlaGZRw_wPRRMKDWeAYJx_XvSpWsqUJklnFsrhrlWtvFa_BD4nYLfbytDxu62iVuiWHnf20s-RApd9amzX8Z5133NqXzFLGfW5-lS7kg2bATsJK--EcH66plJAq1KaMupgI4PV0P1JMIxT3C21bzB7TmtRkgCc9Wg1fTLIQ2-BBpM3ARc2KlCgcw6bt-PvDrMZJy49tv2b3aWFPAKk_dh1fNqr8yPlJUxcef02MPx06ZWso3D2sHqoHaMmzIrnLylHs",
};

// Deduplicated MOCK_USER

export const DASHBOARD_DATA = {
  "7d": {
    chart: {
      linePath: "M0 150 C 100 180, 200 80, 350 120 S 600 60, 800 40",
      areaPath: "M0 150 C 100 180, 200 80, 350 120 S 600 60, 800 40 V 200 H 0 Z",
    },
    kpis: {
      mrr: { value: "$12,450.00", trend: 2.1, subtitle: "vs last week" },
      subscribers: { value: "125", trend: 1.5, subtitle: "vs last week" },
      churn: { value: "0.5%", trend: -0.1, subtitle: "Excellent", status: "positive" },
      netNew: { value: "$2,100", target: "85%" },
    },
    regions: [
      { id: "na", name: "North America", percentage: 55, icon: "public", color: "blue" },
      { id: "eu", name: "Europe", percentage: 25, icon: "euro", color: "purple" },
      { id: "ap", name: "Asia Pacific", percentage: 20, icon: "temple_buddhist", color: "orange" },
    ],
    transactions: [
      {
        id: "INV-001",
        customer: {
          name: "Marcus Horizon",
          email: "marcus@acme.inc",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_wvSLZK237qteNfT8AOO6AOBtxfzl8_kVlYT9unBgcy15xB6WHkNa0fWfUob4WgDPOpgs9uQlweq7MQbCnQ2nP8k6ljrtxoG4YiEOil6XU9q5uYuj4C9sJxfzb84d-KOjH56GLB3_3aUcw3sZCHvK5eE7N6TYG6C7aRM18g4BPQMkb5t6VFnlbQY4x-xcRTBh93xpC_7f4ObK7Hb5M2uTdGVPsA_W6LwMCsxfEBhvFPm3D1lqq1wbd53SgrhW3rCf16XY1E_d9Y",
        },
        date: "Today",
        amount: "$450.00",
        status: "Paid",
      },
      {
        id: "INV-002",
        customer: {
          name: "Sarah Jenkins",
          email: "sarah@design.co",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtJ5xvcFehdI61nGWX5xMMiupCwmG-f621qaf6GeRBs6Dauki0C6PDghJykziZPQRF5WVhu8wThIf_qmAyI3rfZk1gw8YAn1P7phq_1oXuRPtRWmfCJtJflGR7yP8WMHcTCwBeLta-FWafKud1ZdGE4xYs4w9FQ0pBs9ri22pHJPtn7MDoJYUyJLu0fMzpPX-xVlGVH_Rdq9v9F5J9Peo0yQeTBWJkL-s8LzYYwmLw6e2QKagk93yPGaVrUFlCD5L8P1P9EoSeE",
        },
        date: "Yesterday",
        amount: "$1,200.00",
        status: "Pending",
      },
      {
        id: "INV-003",
        customer: {
          name: "David Ross",
          email: "david@techflow.io",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kxJLydmH47CL1_dHl_WMrxCv8xS7Du2KdbKByMqaxLXCggHzq2gymCkmMpNbkGzIbgGoHUtl2Xn7i0KUhNBfk6bxOSXJHW4nLHnb6MsedcXSFkdGFIEJXlAsIBX9hH7CU9D9PrLwy3k4LggX328SHq9b8hGsu9MwY9KDDv-LS2d-Mn6CjAwgy5BahZfpfD-RQvt7KEESzNoGMw67OBdk-gyhUcncQ7YT2cI1E_yq1OKcEi9mOS5cY_F6DRlIz38Q60KgtJylq4",
        },
        date: "2 days ago",
        amount: "$89.00",
        status: "Failed",
      },
      {
        id: "INV-004",
        customer: {
          name: "Olivia Chen",
          email: "olivia@startup.net",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYqVwJU-ZaRgtYvNdSi20cxaj0SKkhYgZy7RbpPzhttkpOCU8p1upL7cvBzJ5ybQ9dvIWRCSVmDOW3RhgsOPrdOFYANxYmhQxJ9BC0w4tzHlttjLuqY58IHvjUPywgT0Zo4Z3pu3SMhECTWa9O6Z8_r85BN5Rnk3UUN0iJfoBQE5GAfvIgI2cLdI4j-2W-oPUNMq0M-iFxh4CQiwRYGtXn6nPhytk-42hWcHP8eSIZWZJR5564osXmFqIxa73qP9EBOPRohlLVsk",
        },
        date: "3 days ago",
        amount: "$2,400.00",
        status: "Paid",
      },
    ],
  },
  "30d": {
    chart: {
      linePath: "M0 160 C 150 160, 200 100, 350 110 S 600 50, 800 30",
      areaPath: "M0 160 C 150 160, 200 100, 350 110 S 600 50, 800 30 V 200 H 0 Z",
    },
    kpis: {
      mrr: { value: "$45,231.89", trend: 12.5, subtitle: "vs last month" },
      subscribers: { value: "2,350", trend: 4.2, subtitle: "vs last month" },
      churn: { value: "1.8%", trend: 0.5, subtitle: "Good", status: "positive" },
      netNew: { value: "$3,400", target: "75%" },
    },
    regions: [
      { id: "na", name: "North America", percentage: 45, icon: "public", color: "blue" },
      { id: "eu", name: "Europe", percentage: 32, icon: "euro", color: "purple" },
      { id: "ap", name: "Asia Pacific", percentage: 18, icon: "temple_buddhist", color: "orange" },
    ],
    transactions: [
      {
        id: "INV-005",
        customer: {
          name: "Elena Rodriguez",
          email: "elena@techstart.io",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_wvSLZK237qteNfT8AOO6AOBtxfzl8_kVlYT9unBgcy15xB6WHkNa0fWfUob4WgDPOpgs9uQlweq7MQbCnQ2nP8k6ljrtxoG4YiEOil6XU9q5uYuj4C9sJxfzb84d-KOjH56GLB3_3aUcw3sZCHvK5eE7N6TYG6C7aRM18g4BPQMkb5t6VFnlbQY4x-xcRTBh93xpC_7f4ObK7Hb5M2uTdGVPsA_W6LwMCsxfEBhvFPm3D1lqq1wbd53SgrhW3rCf16XY1E_d9Y",
        },
        date: "Oct 24, 2023",
        amount: "$1,450.00",
        status: "Paid",
      },
      {
        id: "INV-006",
        customer: {
          name: "Tom Baker",
          email: "tom.b@creative.agency",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtJ5xvcFehdI61nGWX5xMMiupCwmG-f621qaf6GeRBs6Dauki0C6PDghJykziZPQRF5WVhu8wThIf_qmAyI3rfZk1gw8YAn1P7phq_1oXuRPtRWmfCJtJflGR7yP8WMHcTCwBeLta-FWafKud1ZdGE4xYs4w9FQ0pBs9ri22pHJPtn7MDoJYUyJLu0fMzpPX-xVlGVH_Rdq9v9F5J9Peo0yQeTBWJkL-s8LzYYwmLw6e2QKagk93yPGaVrUFlCD5L8P1P9EoSeE",
        },
        date: "Oct 23, 2023",
        amount: "$3,200.00",
        status: "Pending",
      },
      {
        id: "INV-007",
        customer: {
          name: "Sophia Lee",
          email: "sophia@data.net",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kxJLydmH47CL1_dHl_WMrxCv8xS7Du2KdbKByMqaxLXCggHzq2gymCkmMpNbkGzIbgGoHUtl2Xn7i0KUhNBfk6bxOSXJHW4nLHnb6MsedcXSFkdGFIEJXlAsIBX9hH7CU9D9PrLwy3k4LggX328SHq9b8hGsu9MwY9KDDv-LS2d-Mn6CjAwgy5BahZfpfD-RQvt7KEESzNoGMw67OBdk-gyhUcncQ7YT2cI1E_yq1OKcEi9mOS5cY_F6DRlIz38Q60KgtJylq4",
        },
        date: "Oct 22, 2023",
        amount: "$450.00",
        status: "Failed",
      },
      {
        id: "INV-008",
        customer: {
          name: "Ryan Clarke",
          email: "ryan@finance.co",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYqVwJU-ZaRgtYvNdSi20cxaj0SKkhYgZy7RbpPzhttkpOCU8p1upL7cvBzJ5ybQ9dvIWRCSVmDOW3RhgsOPrdOFYANxYmhQxJ9BC0w4tzHlttjLuqY58IHvjUPywgT0Zo4Z3pu3SMhECTWa9O6Z8_r85BN5Rnk3UUN0iJfoBQE5GAfvIgI2cLdI4j-2W-oPUNMq0M-iFxh4CQiwRYGtXn6nPhytk-42hWcHP8eSIZWZJR5564osXmFqIxa73qP9EBOPRohlLVsk",
        },
        date: "Oct 21, 2023",
        amount: "$8,400.00",
        status: "Paid",
      },
      {
        id: "INV-009",
        customer: {
          name: "Nina Patel",
          email: "nina@retail.com",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_wvSLZK237qteNfT8AOO6AOBtxfzl8_kVlYT9unBgcy15xB6WHkNa0fWfUob4WgDPOpgs9uQlweq7MQbCnQ2nP8k6ljrtxoG4YiEOil6XU9q5uYuj4C9sJxfzb84d-KOjH56GLB3_3aUcw3sZCHvK5eE7N6TYG6C7aRM18g4BPQMkb5t6VFnlbQY4x-xcRTBh93xpC_7f4ObK7Hb5M2uTdGVPsA_W6LwMCsxfEBhvFPm3D1lqq1wbd53SgrhW3rCf16XY1E_d9Y",
        },
        date: "Oct 19, 2023",
        amount: "$150.00",
        status: "Paid",
      },
      {
        id: "INV-010",
        customer: {
          name: "Chris Evans",
          email: "chris@building.org",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtJ5xvcFehdI61nGWX5xMMiupCwmG-f621qaf6GeRBs6Dauki0C6PDghJykziZPQRF5WVhu8wThIf_qmAyI3rfZk1gw8YAn1P7phq_1oXuRPtRWmfCJtJflGR7yP8WMHcTCwBeLta-FWafKud1ZdGE4xYs4w9FQ0pBs9ri22pHJPtn7MDoJYUyJLu0fMzpPX-xVlGVH_Rdq9v9F5J9Peo0yQeTBWJkL-s8LzYYwmLw6e2QKagk93yPGaVrUFlCD5L8P1P9EoSeE",
        },
        date: "Oct 15, 2023",
        amount: "$2,100.00",
        status: "Pending",
      },
    ],
  },
  YTD: {
    chart: {
      linePath: "M0 180 C 200 170, 400 120, 500 90 S 700 50, 800 20",
      areaPath: "M0 180 C 200 170, 400 120, 500 90 S 700 50, 800 20 V 200 H 0 Z",
    },
    kpis: {
      mrr: { value: "$542,890.00", trend: 32.4, subtitle: "vs last year" },
      subscribers: { value: "18,450", trend: 15.2, subtitle: "vs last year" },
      churn: { value: "2.1%", trend: 0.2, subtitle: "Warning", status: "negative" },
      netNew: { value: "$41,200", target: "92%" },
    },
    regions: [
      { id: "na", name: "North America", percentage: 50, icon: "public", color: "blue" },
      { id: "eu", name: "Europe", percentage: 28, icon: "euro", color: "purple" },
      { id: "ap", name: "Asia Pacific", percentage: 22, icon: "temple_buddhist", color: "orange" },
    ],
    transactions: [
      {
        id: "INV-011",
        customer: {
          name: "Acme Corp Ltd.",
          email: "billing@acme.inc",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_wvSLZK237qteNfT8AOO6AOBtxfzl8_kVlYT9unBgcy15xB6WHkNa0fWfUob4WgDPOpgs9uQlweq7MQbCnQ2nP8k6ljrtxoG4YiEOil6XU9q5uYuj4C9sJxfzb84d-KOjH56GLB3_3aUcw3sZCHvK5eE7N6TYG6C7aRM18g4BPQMkb5t6VFnlbQY4x-xcRTBh93xpC_7f4ObK7Hb5M2uTdGVPsA_W6LwMCsxfEBhvFPm3D1lqq1wbd53SgrhW3rCf16XY1E_d9Y",
        },
        date: "Sep 15, 2023",
        amount: "$45,000.00",
        status: "Paid",
      },
      {
        id: "INV-012",
        customer: {
          name: "Design Co Global",
          email: "finance@design.co",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtJ5xvcFehdI61nGWX5xMMiupCwmG-f621qaf6GeRBs6Dauki0C6PDghJykziZPQRF5WVhu8wThIf_qmAyI3rfZk1gw8YAn1P7phq_1oXuRPtRWmfCJtJflGR7yP8WMHcTCwBeLta-FWafKud1ZdGE4xYs4w9FQ0pBs9ri22pHJPtn7MDoJYUyJLu0fMzpPX-xVlGVH_Rdq9v9F5J9Peo0yQeTBWJkL-s8LzYYwmLw6e2QKagk93yPGaVrUFlCD5L8P1P9EoSeE",
        },
        date: "Aug 22, 2023",
        amount: "$12,500.00",
        status: "Paid",
      },
      {
        id: "INV-013",
        customer: {
          name: "TechFlow Enterprise",
          email: "ap@techflow.io",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kxJLydmH47CL1_dHl_WMrxCv8xS7Du2KdbKByMqaxLXCggHzq2gymCkmMpNbkGzIbgGoHUtl2Xn7i0KUhNBfk6bxOSXJHW4nLHnb6MsedcXSFkdGFIEJXlAsIBX9hH7CU9D9PrLwy3k4LggX328SHq9b8hGsu9MwY9KDDv-LS2d-Mn6CjAwgy5BahZfpfD-RQvt7KEESzNoGMw67OBdk-gyhUcncQ7YT2cI1E_yq1OKcEi9mOS5cY_F6DRlIz38Q60KgtJylq4",
        },
        date: "Jul 10, 2023",
        amount: "$8,900.00",
        status: "Failed",
      },
      {
        id: "INV-014",
        customer: {
          name: "Startup Network",
          email: "billing@startup.net",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYqVwJU-ZaRgtYvNdSi20cxaj0SKkhYgZy7RbpPzhttkpOCU8p1upL7cvBzJ5ybQ9dvIWRCSVmDOW3RhgsOPrdOFYANxYmhQxJ9BC0w4tzHlttjLuqY58IHvjUPywgT0Zo4Z3pu3SMhECTWa9O6Z8_r85BN5Rnk3UUN0iJfoBQE5GAfvIgI2cLdI4j-2W-oPUNMq0M-iFxh4CQiwRYGtXn6nPhytk-42hWcHP8eSIZWZJR5564osXmFqIxa73qP9EBOPRohlLVsk",
        },
        date: "Jun 05, 2023",
        amount: "$24,000.00",
        status: "Paid",
      },
      {
        id: "INV-015",
        customer: {
          name: "Retail Solutions",
          email: "ap@retail.com",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBT_wvSLZK237qteNfT8AOO6AOBtxfzl8_kVlYT9unBgcy15xB6WHkNa0fWfUob4WgDPOpgs9uQlweq7MQbCnQ2nP8k6ljrtxoG4YiEOil6XU9q5uYuj4C9sJxfzb84d-KOjH56GLB3_3aUcw3sZCHvK5eE7N6TYG6C7aRM18g4BPQMkb5t6VFnlbQY4x-xcRTBh93xpC_7f4ObK7Hb5M2uTdGVPsA_W6LwMCsxfEBhvFPm3D1lqq1wbd53SgrhW3rCf16XY1E_d9Y",
        },
        date: "May 19, 2023",
        amount: "$150,000.00",
        status: "Paid",
      },
      {
        id: "INV-016",
        customer: {
          name: "Building Org",
          email: "finance@building.org",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJdtJ5xvcFehdI61nGWX5xMMiupCwmG-f621qaf6GeRBs6Dauki0C6PDghJykziZPQRF5WVhu8wThIf_qmAyI3rfZk1gw8YAn1P7phq_1oXuRPtRWmfCJtJflGR7yP8WMHcTCwBeLta-FWafKud1ZdGE4xYs4w9FQ0pBs9ri22pHJPtn7MDoJYUyJLu0fMzpPX-xVlGVH_Rdq9v9F5J9Peo0yQeTBWJkL-s8LzYYwmLw6e2QKagk93yPGaVrUFlCD5L8P1P9EoSeE",
        },
        date: "Apr 12, 2023",
        amount: "$210,000.00",
        status: "Pending",
      },
      {
        id: "INV-017",
        customer: {
          name: "Finance Co",
          email: "ap@finance.co",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDa5kxJLydmH47CL1_dHl_WMrxCv8xS7Du2KdbKByMqaxLXCggHzq2gymCkmMpNbkGzIbgGoHUtl2Xn7i0KUhNBfk6bxOSXJHW4nLHnb6MsedcXSFkdGFIEJXlAsIBX9hH7CU9D9PrLwy3k4LggX328SHq9b8hGsu9MwY9KDDv-LS2d-Mn6CjAwgy5BahZfpfD-RQvt7KEESzNoGMw67OBdk-gyhUcncQ7YT2cI1E_yq1OKcEi9mOS5cY_F6DRlIz38Q60KgtJylq4",
        },
        date: "Mar 02, 2023",
        amount: "$84,000.00",
        status: "Paid",
      },
      {
        id: "INV-018",
        customer: {
          name: "Data Net",
          email: "billing@data.net",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDPYqVwJU-ZaRgtYvNdSi20cxaj0SKkhYgZy7RbpPzhttkpOCU8p1upL7cvBzJ5ybQ9dvIWRCSVmDOW3RhgsOPrdOFYANxYmhQxJ9BC0w4tzHlttjLuqY58IHvjUPywgT0Zo4Z3pu3SMhECTWa9O6Z8_r85BN5Rnk3UUN0iJfoBQE5GAfvIgI2cLdI4j-2W-oPUNMq0M-iFxh4CQiwRYGtXn6nPhytk-42hWcHP8eSIZWZJR5564osXmFqIxa73qP9EBOPRohlLVsk",
        },
        date: "Feb 18, 2023",
        amount: "$4,500.00",
        status: "Failed",
      },
    ],
  },
};
