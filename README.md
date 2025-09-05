# QIWI Test Assignment

## 📌 Описание
Тестовое задание: проверка доступности сервиса QIWI Payouts API (мок-реализация).  
Реализованы Postman-коллекция и автотесты на Playwright.

---

## 📂 Структура проекта
- `/postman`  
  - `QiwiPayouts.collection.json` - оригинальная коллекция  
  - `QiwiPayouts.environment.json` - оригинальное окружение  
  - `QiwiPayoutsMock.collection.json` - адаптированная коллекция для мок-сервера  
  - `QiwiPayoutsMock.environment.json` - окружение для мок-сервера  
- `/mock` - простой mock-сервер (Express)  
- `/tests` - автотесты на Playwright  

---

## 🚀 Запуск проекта

### 1. Установить зависимости
```bash
npm install