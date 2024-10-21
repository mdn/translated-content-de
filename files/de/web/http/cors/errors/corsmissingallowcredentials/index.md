---
title: "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
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

Die {{Glossary("CORS", "CORS")}}-Anfrage erfordert, dass der Server die Verwendung von Anmeldeinformationen erlaubt, aber der {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header des Servers ist nicht auf `true` gesetzt, um deren Verwendung zu ermöglichen.

Um dieses Problem auf der Clientseite zu beheben, überarbeiten Sie den Code, um nicht die Verwendung von Anmeldeinformationen anzufordern.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) auf `false` gesetzt ist (das ist der Standardwert).

Um diesen Fehler durch Ändern der Serverkonfiguration zu beseitigen, passen Sie die Konfiguration des Servers an, um den Wert des `Access-Control-Allow-Credentials`-Headers auf `true` zu setzen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
