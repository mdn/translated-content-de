---
title: "Reason: expected 'true' im CORS-Header 'Access-Control-Allow-Credentials'"
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

Die [CORS](/de/docs/Glossary/CORS)-Anfrage erfordert, dass der Server die Verwendung von Anmeldeinformationen erlaubt, aber der Wert des {{HTTPHeader("Access-Control-Allow-Credentials")}}-Headers des Servers ist nicht auf `true` gesetzt, um deren Gebrauch zu ermöglichen.

Um dieses Problem auf der Clientseite zu beheben, passen Sie den Code so an, dass die Verwendung von Anmeldeinformationen nicht angefordert wird.

- Wenn die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet wird, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn [Server-sent events](/de/docs/Web/API/Server-sent_events) verwendet werden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) `false` ist (es ist der Standardwert).

Um diesen Fehler durch Änderung der Serverkonfiguration zu beseitigen, passen Sie die Serverkonfiguration so an, dass der Wert des `Access-Control-Allow-Credentials`-Headers auf `true` gesetzt wird.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
