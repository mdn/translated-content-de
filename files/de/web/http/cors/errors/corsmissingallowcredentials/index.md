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

Die {{Glossary("CORS")}}-Anfrage erfordert, dass der Server die Verwendung von Anmeldeinformationen zulässt. Der Wert des Server-{{HTTPHeader("Access-Control-Allow-Credentials")}}-Headers ist jedoch nicht auf `true` gesetzt, um deren Verwendung zu ermöglichen.

Um dieses Problem auf der Client-Seite zu beheben, überarbeiten Sie den Code, damit die Verwendung von Anmeldeinformationen nicht angefordert wird.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass {{domxref("Request.credentials")}} `"omit"` ist.
- Wenn die Anfrage mithilfe von {{domxref("XMLHttpRequest")}} gesendet wird, stellen Sie sicher, dass Sie {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} nicht auf `true` setzen.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass {{domxref("EventSource.withCredentials")}} `false` ist (dies ist der Standardwert).

Um diesen Fehler durch Ändern der Serverkonfiguration zu beseitigen, passen Sie die Serverkonfiguration so an, dass der `Access-Control-Allow-Credentials`-Header den Wert `true` hat.

## Siehe auch

- [CORS Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
