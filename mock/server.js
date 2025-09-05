const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Доступ сервиса
app.get('/ping', (req, res) => {
  res.json({ status: 'ok' });
});

// 2. Баланс
app.get('/balance', (req, res) => {
  res.json({
    accounts: [
      { currency: 'RUB', balance: { amount: 100 } }
    ]
  });
});

// 3. Создание платежа
app.post('/payments', (req, res) => {
  res.json({
    transaction: 'tx123',
    amount: req.body.amount,
    status: 'created'
  });
});

// 4. Исполнение платежа
app.post('/payments/execute', (req, res) => {
  res.json({
    transaction: req.body.transaction,
    status: 'success'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});