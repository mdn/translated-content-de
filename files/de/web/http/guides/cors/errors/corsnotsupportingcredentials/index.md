---
title: "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
slug: Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage wurde mit gesetztem Berechtigungs-Flag versucht, aber der Server ist so konfiguriert, dass der Platzhalter (`"*"` ) als Wert von {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet wird, was die Nutzung von Berechtigungen nicht erlaubt.

Um dieses Problem auf der Client-Seite zu beheben, stellen Sie sicher, dass der Wert des Berechtigungs-Flags `false` ist, wenn Sie Ihre CORS-Anfrage stellen.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt wird, stellen Sie sicher, dass [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` gesetzt ist.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) `false` ist (das ist der Standardwert).

Falls Sie stattdessen das Verhalten des Servers anpassen müssen, müssen Sie den Wert von `Access-Control-Allow-Origin` ändern, um den Zugriff der Quelle zu gestatten, von der der Client geladen wird.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/Guides/CORS)
