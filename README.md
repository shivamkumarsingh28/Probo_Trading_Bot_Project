# **Trading Bot Backend and Frontend Application - Documentation**

---

## **Overview**

This project simulates a basic trading bot that monitors stock prices and executes trades based on predefined rules. The application is built with a **Node.js** backend and a **React** frontend. The backend service continuously monitors stock prices, implements a trading strategy, and tracks the bot’s profit/loss, while the frontend visualizes this data for easy monitoring.

---

## **Trading Logic**

The bot employs a simple trading strategy based on stock price movements:
1. **Buying Condition**: The bot buys stock when the price drops by **2%** from the initial price.
2. **Selling Condition**: The bot sells stock when the price rises by **3%** from the purchase price.

This strategy ensures the bot buys low and sells high to generate a profit. The bot continuously monitors stock prices and performs trades based on these rules.

The logic works as follows:
- The bot starts with an initial balance (e.g., $1000).
- When the price meets the buying condition, the bot converts the balance into stocks.
- When the price meets the selling condition, the bot sells all stocks and converts them back to cash.
- The bot tracks and logs each trade in a trade log, which records the time, price, and type (buy/sell) of each trade.

---

## **API Usage**

The backend provides three API endpoints to fetch real-time data about stock prices, balance, and trade logs.

### **API Endpoints**

1. **Get Current Stock Price**
   - **Endpoint**: `/api/stock`
   - **Method**: `GET`
   - **Response**:
     ```json
     {
       "stock": {
         "symbol": "XYZ",
         "price": "125.00",
         "timestamp": "2024-10-04T10:15:30.000Z"
       }
     }
     ```
   - **Description**: Returns the current stock price and its timestamp.

2. **Get Current Balance and Position**
   - **Endpoint**: `/api/balance`
   - **Method**: `GET`
   - **Response**:
     ```json
     {
       "balance": 500.00,
       "position": 5.0
     }
     ```
   - **Description**: Returns the current cash balance and the number of stocks the bot holds.

3. **Get Trade Log**
   - **Endpoint**: `/api/trade-log`
   - **Method**: `GET`
   - **Response**:
     ```json
     {
       "TRADE_LOG": [
         { "type": "BUY", "price": "120.00", "time": "2024-10-04T10:00:00.000Z" },
         { "type": "SELL", "price": "123.60", "time": "2024-10-04T10:05:00.000Z" }
       ]
     }
     ```
   - **Description**: Returns the bot’s trade history, showing all buy and sell transactions with price and time details.


# [Backend](https://github.com/shivamkumarsingh28/Probo_Trading_Bot_Project/tree/main/backend) 

# [Frontend](https://github.com/shivamkumarsingh28/Probo_Trading_Bot_Project/tree/main/frontend)

![Screenshot 2024-10-04 224258](https://github.com/user-attachments/assets/b6d4cfde-6bdc-4cc4-bd67-148de68c6b3c)
![Screenshot 2024-10-04 224218](https://github.com/user-attachments/assets/576392e5-7da0-4bc5-b9aa-11464372f0c4)
![Screenshot 2024-10-04 224151](https://github.com/user-attachments/assets/ed88eff3-b590-4d8a-97e9-7a2d4941e447)
![Screenshot 2024-10-04 224134](https://github.com/user-attachments/assets/8a3c6f30-3126-43ad-8d3b-97aeed4f0d2c)

