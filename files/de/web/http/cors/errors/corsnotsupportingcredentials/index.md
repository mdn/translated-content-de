---
title: "Grund: Anmeldedaten werden nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '*' ist"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

## Grund

```plain
Grund: Anmeldedaten werden nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '*' ist
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS")}}-Anfrage wurde mit gesetztem Credential-Flag versucht, aber der Server ist so konfiguriert, dass er das Platzhalter-Zeichen (`"*"`) als Wert von {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet, was die Verwendung von Anmeldedaten nicht erlaubt.

Um dieses Problem auf der Clientseite zu beheben, stellen Sie sicher, dass der Wert des Credential-Flags `false` ist, wenn Sie Ihre CORS-Anfrage senden.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass {{domxref("Request.credentials")}} `"omit"` ist.
- Wenn die Anfrage mit {{domxref("XMLHttpRequest")}} gesendet wird, stellen Sie sicher, dass Sie nicht {{domxref("XMLHttpRequest.withCredentials", "withCredentials")}} auf `true` setzen.
- Wenn Sie [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass {{domxref("EventSource.withCredentials")}} `false` ist (dies ist der Standardwert).

Wenn Sie stattdessen das Verhalten des Servers anpassen müssen, sollten Sie den Wert von `Access-Control-Allow-Origin` ändern, um Zugriff auf den Ursprung zu gewähren, von dem aus der Client geladen wird.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
