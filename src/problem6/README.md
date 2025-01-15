## Scoreboard API Service

### Overview

This API module handles user score updates and ensures the scoreboard is accurate and secure. It broadcasts live score updates to all clients.

### Features

- **Live Updates**: Real-time updates of the top 10 user scores.
- **Score Handling**: Updates scores only for authorized users.
- **Security**: Prevents unauthorized score manipulation.
- **Real-Time Broadcast**: Sends updates to all connected clients.

### Endpoints

#### 1. **POST /api/update_score**
Updates a user's score after an action.

- **Request**:
    ```json
    {
      "user_id": "string",
      "score_increment": "int"
    }
    ```

- **Response**:
    ```json
    {
      "status": "success",
      "new_score": "int"
    }
    ```

- **Security**:
  - Requires authorization token.
  - Uses HMAC for request integrity.
  - Rate limits to prevent abuse.

#### 2. **GET /api/scoreboard**
Returns the top 10 scores.

- **Response**:
    ```json
    {
      "top_scores": [
        { "user_id": "string", "score": "int" },
        ...
      ]
    }
    ```

### Security

- **Authentication**: Validates users via tokens.
- **Authorization**: Only allows users to update their own scores.
- **HMAC**: Verifies the integrity of requests.
- **Rate Limiting**: Limits frequent requests to prevent abuse.

### Score Update Process

1. Validate user authentication and authorization.
2. Increment the score.
3. Broadcast updated scores to all clients using WebSockets.
4. Return updated score.

### Real-Time Broadcast

- **WebSocket**: Updates broadcast to clients immediately.

### Dependencies

- **Database**: Store scores (e.g., Redis for fast access).
- **WebSocket Server**: For real-time updates.
- **Authentication**: JWT tokens.

### Example Requests

**POST /api/update_score**:

```bash
curl -X POST https://api.example.com/api/update_score \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{
    "user_id": "user123",
    "score_increment": 10
  }'
```

**GET /api/scoreboard**:

```bash
curl -X GET https://api.example.com/api/scoreboard
```

### Example Responses

**POST /api/update_score**:

```json
{
  "status": "success",
  "new_score": 120
}
```

**GET /api/scoreboard**:

```json
{
  "top_scores": [
    { "user_id": "user123", "score": 120 },
    { "user_id": "user456", "score": 115 },
    ...
  ]
}
```

### Flow Diagram

```plaintext
User action -> POST /api/update_score
    |
    v
Validate user
    |
    v
Update score
    |
    v
Broadcast score (WebSocket)
    |
    v
Return updated score
```

### Additional Features

- **Scalability**: Consider horizontal scaling and distributed message brokers for large user bases.
- **Caching**: Cache top 10 scores to reduce database load.
- **Logging**: Implement error logging and monitoring.
