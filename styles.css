* {
  box-sizing: border-box;
}

:root {
  --primary: #2f6fed;
  --primary-dark: #1f4fb6;
  --secondary: #eaf1ff;
  --accent: #20b26b;
  --text: #1f2937;
  --muted: #6b7280;
  --border: #dfe7f5;
  --bg: #f5f7fb;
  --white: #ffffff;
  --danger: #dc2626;
  --shadow: 0 10px 25px rgba(31, 41, 55, 0.08);
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

.container {
  width: min(1200px, 90%);
  margin: 0 auto;
}

.topbar {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--white);
  padding: 28px 0;
  box-shadow: var(--shadow);
}

.topbar h1 {
  margin: 0;
  font-size: 2rem;
}

.topbar p {
  margin: 8px 0 0;
  opacity: 0.9;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.card,
.panel {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-card span {
  color: var(--muted);
  font-size: 0.92rem;
}

.stat-card strong {
  font-size: 2rem;
  font-weight: bold;
}

.stat-card.accent {
  background: linear-gradient(135deg, #eefcf4, #dff9eb);
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
}

.panel {
  padding: 22px;
}

.wide-panel {
  grid-column: 1 / -1;
}

.panel h2 {
  margin-top: 0;
  margin-bottom: 18px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.small-field {
  max-width: 130px;
}

label {
  font-weight: 600;
  color: var(--text);
}

input,
select,
button {
  border-radius: 10px;
  border: 1px solid var(--border);
  font-size: 1rem;
}

input,
select {
  padding: 12px 14px;
  background: var(--white);
}

button {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 12px 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  background: var(--primary-dark);
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-box {
  background: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 16px;
}

.item-box h3 {
  margin: 0 0 6px;
  font-size: 1.05rem;
}

.item-box p {
  margin: 0;
  color: var(--muted);
}

.table-container {
  overflow-x: auto;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
}

.table-container th,
.table-container td {
  border: 1px solid var(--border);
  padding: 12px 14px;
  text-align: left;
}

.table-container th {
  background: var(--secondary);
}

.empty-state {
  color: var(--muted);
  font-style: italic;
}

@media (max-width: 760px) {
  .dashboard,
  .grid-layout,
  .two-columns,
  .form-row {
    grid-template-columns: 1fr;
  }

  .small-field {
    max-width: none;
  }
}
