---
title: "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowCredentials
l10n:
  sourceCommit: a8b5a77bb154e0c3a124fb4af441d11e4259836e
---

## Grund

```plain
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage erfordert, dass der Server die Verwendung von Anmeldedaten erlaubt. Der Wert des Server-Headers {{HTTPHeader("Access-Control-Allow-Credentials")}} ist jedoch nicht auf `true` gesetzt.

Um das Problem auf Client-Seite zu beheben, ändern Sie den Code so, dass keine Anmeldedaten angefordert werden.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn Sie [Server-Sent Events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) auf `false` gesetzt ist (dies ist der Standardwert).

Um den Fehler durch eine Änderung der Serverkonfiguration zu beheben, setzen Sie den Wert des Headers `Access-Control-Allow-Credentials` auf `true`.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
