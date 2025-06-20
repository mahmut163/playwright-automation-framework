# Qorela Automation Framework

This is an end-to-end Playwright automation framework for testing the Qorela DC web application.

## 📦 Tech Stack
- Playwright
- JavaScript (ES Modules)
- Page Object Model (POM)
- GitHub Actions (CI)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/qorela-automation.git
cd qorela-automation
```

### 2. Install Dependencies
```bash
npm install
npx playwright install
```

---

## 🚀 Run Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests in headed mode:
```bash
npx playwright test --headed
```

### Run specific file:
```bash
npx playwright test tests/login.spec.js
```

---

## 🧪 Project Structure

```
qorela-automation/
├── tests/               # Test specs
├── pages/               # Page Object files
├── fixtures/            # Static test data
├── utils/               # Helper functions
├── .github/workflows/   # CI pipeline
├── playwright.config.js # Global Playwright config
└── README.md
```

---

## 🤝 Contributing

- Create a feature branch
- Push and open a pull request
- Review and merge after approval

---

## 👨‍💻 Environment Configuration (optional)
You can define multiple environments in a file like `env.config.js` if needed later.
