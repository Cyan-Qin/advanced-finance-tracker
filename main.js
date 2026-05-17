"use strict";
// ---------- 国际化 ----------
const translations = {
  en: {
    // 头部
    appEyebrow: "Personal Finance",
    appTitle: "Advanced Finance Tracker",
    appSubtitle: "Track income, expenses, and your balance with clarity.",
    // 摘要
    totalBalance: "Total Balance",
    totalIncome: "Total Income",
    totalExpenses: "Total Expenses",
    // 图表区
    cashFlowTitle: "Cash Flow Overview",
    cashFlowSub: "Income vs Expense",
    monthlyTrendTitle: "Monthly Expense Trend",
    monthlyTrendSub: "Expense by month",
    // 表单
    addTransactionTitle: "Add Transaction",
    titleLabel: "Title",
    amountLabel: "Amount",
    categoryLabel: "Category",
    dateLabel: "Date",
    addBtn: "Add Transaction",
    cancelEditBtn: "Cancel Edit",
    // 过滤器
    filtersTitle: "Filters & Search",
    categoryFilter: "Category",
    typeFilter: "Type",
    searchLabel: "Search by title",
    allCategories: "All categories",
    allTypes: "All",
    incomeType: "Income",
    expenseType: "Expense",
    // 交易列表
    transactionsTitle: "Transactions",
    resultsCount: "results",
    emptyState: "No transactions yet. Add your first one to get started.",
    emptyBtn: "Add First Transaction",
    // 按钮通用
    edit: "Edit",
    delete: "Delete",
    // 导出
    exportCsv: "Export CSV",
    resetFilters: "Reset Filters",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    // 图表 canvas 文字
    chartIncome: "Income",
    chartExpense: "Expense",
    // Cookie 横幅（独立于 main.js 的脚本，但为了统一也可放在这里）
    cookieMessage: "We use cookies to enhance your experience. By continuing to use this site, you agree to our",
    cookiePrivacyLink: "Privacy Policy",
    cookieAccept: "Accept",
    // 模态框
    deleteConfirmTitle: "Delete transaction?",
    deleteConfirmMsg: "This action cannot be undone.",
    cancel: "Cancel",
    confirmDelete: "Delete",
    // Toast 消息（新增/编辑/删除等）动态使用，后面函数内处理
  },
  zh: {
    appEyebrow: "个人财务",
    appTitle: "高级财务追踪器",
    appSubtitle: "清晰追踪收入、支出和结余。",
    totalBalance: "总余额",
    totalIncome: "总收入",
    totalExpenses: "总支出",
    cashFlowTitle: "现金流概览",
    cashFlowSub: "收入 vs 支出",
    monthlyTrendTitle: "月度支出趋势",
    monthlyTrendSub: "每月支出",
    addTransactionTitle: "添加交易",
    titleLabel: "标题",
    amountLabel: "金额",
    categoryLabel: "分类",
    dateLabel: "日期",
    addBtn: "添加交易",
    cancelEditBtn: "取消编辑",
    filtersTitle: "筛选与搜索",
    categoryFilter: "分类",
    typeFilter: "类型",
    searchLabel: "按标题搜索",
    allCategories: "全部分类",
    allTypes: "全部",
    incomeType: "收入",
    expenseType: "支出",
    transactionsTitle: "交易记录",
    resultsCount: "条结果",
    emptyState: "暂无交易记录。添加第一条开始使用。",
    emptyBtn: "添加第一笔交易",
    edit: "编辑",
    delete: "删除",
    exportCsv: "导出 CSV",
    resetFilters: "重置筛选",
    lightMode: "浅色模式",
    darkMode: "深色模式",
    chartIncome: "收入",
    chartExpense: "支出",
    cookieMessage: "我们使用 Cookie 来提升您的体验。继续使用本网站即表示您同意我们的",
    cookiePrivacyLink: "隐私政策",
    cookieAccept: "接受",
    deleteConfirmTitle: "删除交易？",
    deleteConfirmMsg: "此操作不可撤销。",
    cancel: "取消",
    confirmDelete: "删除",
  }
};

let currentLang = localStorage.getItem("financeLang") || "en";

function t(key) {
  return translations[currentLang][key] || key;
}

function updatePageLanguage() {
  // 更新头部
  document.querySelector(".app__eyebrow").textContent = t("appEyebrow");
  document.querySelector(".app__title").textContent = t("appTitle");
  document.querySelector(".app__subtitle").textContent = t("appSubtitle");
  // 更新摘要卡片标题
  document.querySelectorAll(".summary__card")[0].querySelector(".summary__label").textContent = t("totalBalance");
  document.querySelectorAll(".summary__card")[1].querySelector(".summary__label").textContent = t("totalIncome");
  document.querySelectorAll(".summary__card")[2].querySelector(".summary__label").textContent = t("totalExpenses");
  // 图表区标题
  document.querySelector(".chart .transactions__header .section-title").textContent = t("cashFlowTitle");
  document.querySelector(".chart .transactions__header .transactions__meta").textContent = t("cashFlowSub");
  // 月度趋势区
  document.querySelector(".trend .transactions__header .section-title").textContent = t("monthlyTrendTitle");
  document.querySelector(".trend .transactions__header .transactions__meta").textContent = t("monthlyTrendSub");
  // 表单区域
  document.querySelector(".form .section-title").textContent = t("addTransactionTitle");
  const formLabels = document.querySelectorAll(".form__field span");
  if (formLabels[0]) formLabels[0].textContent = t("titleLabel");
  if (formLabels[1]) formLabels[1].textContent = t("amountLabel");
  if (formLabels[2]) formLabels[2].textContent = t("categoryLabel");
  if (formLabels[3]) formLabels[3].textContent = t("dateLabel");
  document.getElementById("submitBtn").textContent = t("addBtn");
  document.getElementById("cancelEditBtn").textContent = t("cancelEditBtn");
  // 筛选区
  document.querySelector(".filters .section-title").textContent = t("filtersTitle");
  const filterLabels = document.querySelectorAll(".filters .form__field span");
  if (filterLabels[0]) filterLabels[0].textContent = t("categoryFilter");
  if (filterLabels[1]) filterLabels[1].textContent = t("typeFilter");
  if (filterLabels[2]) filterLabels[2].textContent = t("searchLabel");
  // 下拉框选项（需要保留 value，只改显示文本）
  const categorySelect = document.getElementById("filterCategory");
  if (categorySelect && categorySelect.options[0]) {
    categorySelect.options[0].text = t("allCategories");
  }
  const typeSelect = document.getElementById("filterType");
  if (typeSelect && typeSelect.options[0]) typeSelect.options[0].text = t("allTypes");
  if (typeSelect && typeSelect.options[1]) typeSelect.options[1].text = t("incomeType");
  if (typeSelect && typeSelect.options[2]) typeSelect.options[2].text = t("expenseType");
  // 交易列表区域标题
  document.querySelector(".transactions .section-title").textContent = t("transactionsTitle");
  // 导出按钮和重置按钮（已有文字，但可动态）
  document.getElementById("exportCsvBtn").textContent = t("exportCsv");
  document.getElementById("resetFiltersBtn").textContent = t("resetFilters");
  // 主题按钮（如果主题是 light，显示 Dark Mode，否则 Light Mode，但语言切换也要改）
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.textContent = state.theme === "light" ? t("darkMode") : t("lightMode");
  }
  // 语言切换按钮本身显示（用来切换的目标语言）
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.textContent = currentLang === "en" ? "中文" : "English";
  }
  // 删除确认模态框
  document.getElementById("confirmTitle").textContent = t("deleteConfirmTitle");
  document.querySelector("#confirmModal .modal__text").textContent = t("deleteConfirmMsg");
  document.getElementById("cancelDeleteBtn").textContent = t("cancel");
  document.getElementById("confirmDeleteBtn").textContent = t("confirmDelete");
  // 重新渲染动态区域（交易列表，因为它内部包含“Edit”/“Delete”按钮文字，且空状态也需翻译）
  renderTransactions();
  // 重新渲染图表（图表中的文字：Income / Expense）
  renderChart();
  // 重新渲染月度趋势（趋势内的文字“No expense trend data available”）
  renderMonthlyTrend();
}

import {
  escapeHTML,
  formatCurrency,
  formatDate,
  groupByMonth,
} from "./utils.js";

const STORAGE_KEY = "financeTrackerData";
const THEME_KEY = "financeTrackerTheme";

const state = {
  transactions: [],
  filters: {
    category: "all",
    type: "all",
    search: "",
  },
  editingId: null,
  pendingDeleteId: null,
  theme: "dark",
};

const dom = {
  form: document.getElementById("transactionForm"),
  titleInput: document.getElementById("titleInput"),
  amountInput: document.getElementById("amountInput"),
  categoryInput: document.getElementById("categoryInput"),
  dateInput: document.getElementById("dateInput"),
  titleError: document.getElementById("titleError"),
  amountError: document.getElementById("amountError"),
  categoryError: document.getElementById("categoryError"),
  dateError: document.getElementById("dateError"),
  submitBtn: document.getElementById("submitBtn"),
  cancelEditBtn: document.getElementById("cancelEditBtn"),
  filterCategory: document.getElementById("filterCategory"),
  filterType: document.getElementById("filterType"),
  searchInput: document.getElementById("searchInput"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  transactionsList: document.getElementById("transactionsList"),
  resultsCount: document.getElementById("resultsCount"),
  totalBalance: document.getElementById("totalBalance"),
  totalIncome: document.getElementById("totalIncome"),
  totalExpenses: document.getElementById("totalExpenses"),
  financeChart: document.getElementById("financeChart"),
  monthlyTrendContainer: document.getElementById("monthlyTrendContainer"),
  confirmModal: document.getElementById("confirmModal"),
  confirmDeleteBtn: document.getElementById("confirmDeleteBtn"),
  cancelDeleteBtn: document.getElementById("cancelDeleteBtn"),
  toastContainer: document.getElementById("toastContainer"),
  skeleton: document.getElementById("skeleton"),
};

const generateID = () => {
  return `tx_${Date.now()}_${Math.random().toString(16).slice(2)}`;
};

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions));
};

const isValidTransaction = (tx) => {
  return (
    tx &&
    typeof tx.id === "string" &&
    typeof tx.title === "string" &&
    typeof tx.amount === "number" &&
    Number.isFinite(tx.amount) &&
    typeof tx.category === "string" &&
    typeof tx.date === "string"
  );
};
const loadFromLocalStorage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    state.transactions = [];
    return;
  }
  try {
    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      throw new Error("Stored finance data is not an array.");
    }
    const validTransactions = parsed.filter(isValidTransaction);
    if (validTransactions.length !== parsed.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(validTransactions));
      console.warn("Some invalid transactions were removed during recovery.");
    }
    state.transactions = validTransactions;
  } catch (error) {
    console.error("Failed to load finance data from LocalStorage:", error);

    const backupKey = `${STORAGE_KEY}_corrupted_${Date.now()}`;
    localStorage.setItem(backupKey, stored);
    localStorage.removeItem(STORAGE_KEY);

    state.transactions = [];

    setTimeout(() => {
      showToast(
        "Saved finance data was corrupted. A backup was created and the app has recovered safely.",
        "error",
      );
    }, 0);
  }
};

const saveTheme = () => {
  localStorage.setItem(THEME_KEY, state.theme);
};

const setTheme = (theme) => {
  state.theme = theme;
  document.body.classList.toggle("theme-light", theme === "light");
  dom.themeToggleBtn.textContent =
    theme === "light" ? "Dark Mode" : "Light Mode";
  saveTheme();
};

const loadTheme = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  setTheme(storedTheme || "dark");
};

const showToast = (message, variant = "success") => {
  const toast = document.createElement("div");
  toast.className = `toast${variant === "error" ? " toast--error" : ""}`;
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
};

const clearErrors = () => {
  const fields = [
    { input: dom.titleInput, error: dom.titleError },
    { input: dom.amountInput, error: dom.amountError },
    { input: dom.categoryInput, error: dom.categoryError },
    { input: dom.dateInput, error: dom.dateError },
  ];

  fields.forEach(({ input, error }) => {
    input.classList.remove("is-invalid");
    error.textContent = "";
  });
};

const setError = (input, errorEl, message) => {
  input.classList.add("is-invalid");
  errorEl.textContent = message;
};

const validateForm = () => {
  clearErrors();

  const title = dom.titleInput.value.trim();
  const amountValue = dom.amountInput.value.trim();
  const amount = Number(amountValue);
  const category = dom.categoryInput.value;
  const date = dom.dateInput.value;

  let isValid = true;

  if (!title) {
    setError(dom.titleInput, dom.titleError, "Title is required.");
    isValid = false;
  }

  if (!amountValue || Number.isNaN(amount) || amount === 0) {
    setError(dom.amountInput, dom.amountError, "Enter a valid amount.");
    isValid = false;
  }

  if (!category) {
    setError(dom.categoryInput, dom.categoryError, "Select a category.");
    isValid = false;
  }

  if (!date) {
    setError(dom.dateInput, dom.dateError, "Pick a date.");
    isValid = false;
  }

  return isValid;
};

const resetFormState = () => {
  dom.form.reset();
  state.editingId = null;
  dom.submitBtn.textContent = "Add Transaction";
  dom.cancelEditBtn.hidden = true;
  clearErrors();
};

const addTransaction = () => {
  if (!validateForm()) {
    showToast("Please fix the highlighted fields.", "error");
    return;
  }

  const title = dom.titleInput.value.trim();
  const amount = Number(dom.amountInput.value);
  const category = dom.categoryInput.value;
  const date = dom.dateInput.value;

  if (state.editingId) {
    state.transactions = state.transactions.map((tx) =>
      tx.id === state.editingId ? { ...tx, title, amount, category, date } : tx,
    );
    showToast("Transaction updated.");
  } else {
    const newTransaction = {
      id: generateID(),
      title,
      amount,
      category,
      date,
    };

    state.transactions = [newTransaction, ...state.transactions];
    showToast("Transaction added.");
  }

  resetFormState();
  saveToLocalStorage();
  renderApp();
};

const startEditing = (id) => {
  const transaction = state.transactions.find((tx) => tx.id === id);
  if (!transaction) return;

  dom.titleInput.value = transaction.title;
  dom.amountInput.value = transaction.amount;
  dom.categoryInput.value = transaction.category;
  dom.dateInput.value = transaction.date;

  state.editingId = id;
  dom.submitBtn.textContent = "Save Changes";
  dom.cancelEditBtn.hidden = false;
  dom.titleInput.focus();
  showToast("Editing mode enabled.");
};

const deleteTransaction = (id) => {
  state.transactions = state.transactions.filter((tx) => tx.id !== id);
  saveToLocalStorage();
  renderApp();
  showToast("Transaction deleted.");
};

const openConfirmModal = (id) => {
  state.pendingDeleteId = id;
  dom.confirmModal.classList.add("is-open");
  dom.confirmModal.setAttribute("aria-hidden", "false");
};

const closeConfirmModal = () => {
  state.pendingDeleteId = null;
  dom.confirmModal.classList.remove("is-open");
  dom.confirmModal.setAttribute("aria-hidden", "true");
};

const renderSummary = () => {
  const amounts = state.transactions.map((tx) => tx.amount);

  const totalIncome = amounts
    .filter((amount) => amount > 0)
    .reduce((sum, amount) => sum + amount, 0);

  const totalExpenses = amounts
    .filter((amount) => amount < 0)
    .reduce((sum, amount) => sum + amount, 0);

  const totalBalance = totalIncome + totalExpenses;

  dom.totalIncome.textContent = formatCurrency(totalIncome);
  dom.totalExpenses.textContent = formatCurrency(Math.abs(totalExpenses));
  dom.totalBalance.textContent = formatCurrency(totalBalance);
};

const renderTransactions = () => {
  const filtered = filterTransactions();

  dom.resultsCount.textContent = `${filtered.length} results`;

  if (filtered.length === 0) {
  dom.transactionsList.innerHTML = `
    <div class="transactions__empty">
      <div class="empty__icon">+</div>
      <p>${t("emptyState")}</p>
      <button class="btn btn--accent empty-add-btn" type="button">${t("emptyBtn")}</button>
    </div>
  `;
  return;
}

  const groups = groupByMonth(filtered);

  dom.transactionsList.innerHTML = groups
    .map(
      (group) => `
        <div class="month-group">
          <p class="month-title">${group.label}</p>
          ${group.items.map(renderTransactionItem).join("")}
        </div>
      `,
    )
    .join("");
};

const renderTransactionItem = (tx) => {
  const typeClass = tx.amount >= 0 ? "amount--income" : "amount--expense";
  const formattedAmount = formatCurrency(tx.amount);
  const formattedDate = formatDate(tx.date);

  return `
    <div class="transaction">
      <div>
        <p class="transaction__title">${escapeHTML(tx.title)}</p>
        <div class="transaction__meta">
          <span class="badge">${escapeHTML(tx.category)}</span>
          <span>${escapeHTML(formattedDate)}</span>
        </div>
      </div>
      <div>
        <p class="amount ${typeClass}">${escapeHTML(formattedAmount)}</p>
        <button class="edit-btn" data-id="${escapeHTML(tx.id)}">${t("edit")}</button>
        <button class="delete-btn" data-id="${escapeHTML(tx.id)}">${t("delete")}</button>
      </div>
    </div>
  `;
};

const filterTransactions = () => {
  const { category, type, search } = state.filters;

  return state.transactions.filter((tx) => {
    const matchesCategory = category === "all" || tx.category === category;

    const matchesType =
      type === "all" ||
      (type === "income" && tx.amount > 0) ||
      (type === "expense" && tx.amount < 0);

    const matchesSearch = tx.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesType && matchesSearch;
  });
};



const renderChart = () => {
  const canvas = dom.financeChart;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;

  const displayWidth = canvas.clientWidth;
  const displayHeight = 260;

  canvas.width = displayWidth * dpr;
  canvas.height = displayHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const width = displayWidth;
  const height = displayHeight;

  ctx.clearRect(0, 0, width, height);

  const amounts = state.transactions.map((tx) => tx.amount);
  const income = amounts.filter((a) => a > 0).reduce((s, a) => s + a, 0);
  const expenses = Math.abs(
    amounts.filter((a) => a < 0).reduce((s, a) => s + a, 0),
  );

  const maxValue = Math.max(income, expenses, 1);
  const barWidth = 120;
  const gap = 80;
  const baseY = height - 40;

  const incomeHeight = (income / maxValue) * (height - 80);
  const expenseHeight = (expenses / maxValue) * (height - 80);

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.moveTo(40, baseY);
  ctx.lineTo(width - 40, baseY);
  ctx.stroke();

  ctx.fillStyle = "#22c55e";
  ctx.fillRect(160, baseY - incomeHeight, barWidth, incomeHeight);

  ctx.fillStyle = "#f97316";
  ctx.fillRect(
    160 + barWidth + gap,
    baseY - expenseHeight,
    barWidth,
    expenseHeight,
  );

  ctx.fillStyle = "#f8f4e9";
  ctx.font = "14px sans-serif";
  ctx.fillText(t("chartIncome"), 170, baseY + 20);
  ctx.fillText(t("chartExpense"), 160 + barWidth + gap, baseY + 20);

  ctx.fillText(formatCurrency(income), 150, baseY - incomeHeight - 10);
  ctx.fillText(
    formatCurrency(expenses),
    150 + barWidth + gap,
    baseY - expenseHeight - 10,
  );
};

const renderMonthlyTrend = () => {
  const monthlyExpenses = {};

  state.transactions.forEach((tx) => {
    if (tx.amount < 0) {
      const month = new Date(tx.date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      monthlyExpenses[month] =
        (monthlyExpenses[month] || 0) + Math.abs(tx.amount);
    }
  });

  const entries = Object.entries(monthlyExpenses);

  if (entries.length === 0) {
  dom.monthlyTrendContainer.innerHTML = `<p>${t("noExpenseTrend") || "No expense trend data available."}</p>`;
  return;
}

  dom.monthlyTrendContainer.innerHTML = entries
    .map(
      ([month, total]) => `
        <div class="trend-item">
          <span>${month}</span>
          <strong>${formatCurrency(total)}</strong>
        </div>
      `,
    )
    .join("");
};

const renderApp = () => {
  renderSummary();
  renderTransactions();
  renderChart();
  renderMonthlyTrend();
};

const exportToCSV = () => {
  if (state.transactions.length === 0) {
    showToast("No data to export.", "error");
    return;
  }

  const headers = ["Title", "Amount", "Category", "Date"];
  const rows = state.transactions.map((tx) => [
    tx.title,
    tx.amount,
    tx.category,
    tx.date,
  ]);

  const csv = [headers, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","),
    )
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "transactions.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  showToast("CSV exported.");
};

const initializeApp = () => {
  loadFromLocalStorage();
  loadTheme();
  renderApp();

  setTimeout(() => {
    dom.skeleton.classList.add("is-hidden");
  }, 300);

  dom.form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTransaction();
  });

  dom.cancelEditBtn.addEventListener("click", () => {
    resetFormState();
  });

  dom.transactionsList.addEventListener("click", (e) => {
    const deleteButton = e.target.closest(".delete-btn");
    const editButton = e.target.closest(".edit-btn");
    const emptyAdd = e.target.closest(".empty-add-btn");

    const deleteId = deleteButton?.dataset?.id;
    const editId = editButton?.dataset?.id;

    if (deleteId) {
      openConfirmModal(deleteId);
    }

    if (editId) {
      startEditing(editId);
    }

    if (emptyAdd) {
      dom.titleInput.focus();
    }
  });

  dom.filterCategory.addEventListener("change", (e) => {
    state.filters.category = e.target.value;
    renderTransactions();
  });

  dom.filterType.addEventListener("change", (e) => {
    state.filters.type = e.target.value;
    renderTransactions();
  });

  dom.searchInput.addEventListener("input", (e) => {
    state.filters.search = e.target.value;
    renderTransactions();
  });

  dom.resetFiltersBtn.addEventListener("click", () => {
    state.filters = { category: "all", type: "all", search: "" };
    dom.filterCategory.value = "all";
    dom.filterType.value = "all";
    dom.searchInput.value = "";
    renderTransactions();
  });

  dom.exportCsvBtn.addEventListener("click", exportToCSV);

  dom.themeToggleBtn.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
  });

  dom.confirmDeleteBtn.addEventListener("click", () => {
    if (state.pendingDeleteId) {
      deleteTransaction(state.pendingDeleteId);
    }
    closeConfirmModal();
  });

  dom.cancelDeleteBtn.addEventListener("click", closeConfirmModal);

  dom.confirmModal.addEventListener("click", (e) => {
    if (e.target.dataset.close) {
      closeConfirmModal();
    }
  });
};

initializeApp();

const langToggleBtn = document.getElementById("langToggleBtn");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    localStorage.setItem("financeLang", currentLang);
    updatePageLanguage();
    // 重新渲染可能依赖语言的其他动态内容（如 Toast 消息文字硬编码，但不受影响）
  });
}
