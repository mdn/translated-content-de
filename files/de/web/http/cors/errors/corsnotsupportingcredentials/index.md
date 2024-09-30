---
title: "Reason: Credential wird nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '*' ist"
slug: Web/HTTP/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## Was ist schief gelaufen?

Die [CORS](/de/docs/Glossary/CORS)-Anfrage wurde mit gesetztem Credentials-Flag versucht, aber der Server ist so konfiguriert, dass das Platzhaltersymbol (`"*"`) als Wert für {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet wird. Dies erlaubt nicht die Verwendung von Anmeldeinformationen.

Um dieses Problem auf der Clientseite zu beheben, stellen Sie sicher, dass der Wert des Credentials-Flags `false` ist, wenn Sie Ihre CORS-Anfrage stellen.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gestellt wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) `false` ist (das ist der Standardwert).

Wenn Sie stattdessen das Verhalten des Servers anpassen müssen, müssen Sie den Wert von `Access-Control-Allow-Origin` ändern, um den Zugriff auf den Ursprung zu gewähren, von dem der Client geladen wird.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
