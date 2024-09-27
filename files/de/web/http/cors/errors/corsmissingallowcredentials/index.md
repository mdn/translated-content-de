---
title: "Grund: erwartetes 'true' im CORS-Header 'Access-Control-Allow-Credentials'"
slug: Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

## Grund

```plain
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## Was ist schiefgelaufen?

Die [CORS](/de/docs/Glossary/CORS)-Anfrage erfordert, dass der Server die Verwendung von Anmeldeinformationen zulässt, aber der Wert des {{HTTPHeader("Access-Control-Allow-Credentials")}}-Headers des Servers ist nicht auf `true` gesetzt, um deren Verwendung zu ermöglichen.

Um dieses Problem auf der Client-Seite zu beheben, überarbeiten Sie den Code so, dass die Verwendung von Anmeldeinformationen nicht angefordert wird.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) ausgeführt wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) `false` ist (das ist der Standardwert).

Um diesen Fehler durch Ändern der Server-Konfiguration zu beseitigen, passen Sie die Konfiguration des Servers an, um den Wert des `Access-Control-Allow-Credentials`-Headers auf `true` zu setzen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
