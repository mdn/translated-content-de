---
title: "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage wurde mit gesetztem Berechtigungs-Flag versucht, aber der Server ist so konfiguriert, dass das Platzhalterzeichen (`"*"`) als Wert von {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet wird, was die Nutzung von Berechtigungen nicht zulässt.

Um dieses Problem auf der Client-Seite zu beheben, stellen Sie sicher, dass der Wert des Berechtigungs-Flags `false` ist, wenn Sie Ihre CORS-Anfrage stellen.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) auf `false` gesetzt ist (das ist der Standardwert).

Falls Sie stattdessen das Verhalten des Servers anpassen müssen, sollten Sie den Wert von `Access-Control-Allow-Origin` ändern, um den Zugriff auf den Ursprung zu ermöglichen, von dem der Client geladen wird.

## Siehe auch

- [CORS Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
