---
title: "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
slug: Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage wurde mit gesetzter Anmeldeinformationen-Flag versucht, aber der Server ist so konfiguriert, dass er den Platzhalter (`"*"`) als Wert von {{HTTPHeader("Access-Control-Allow-Origin")}} verwendet, was die Verwendung von Anmeldeinformationen nicht erlaubt.

Um dieses Problem auf der Clientseite zu beheben, stellen Sie sicher, dass der Wert des Anmeldeinformationen-Flags `false` ist, wenn Sie Ihre CORS-Anfrage stellen.

- Wenn Sie die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` steht.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) erfolgt, achten Sie darauf, [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` zu setzen.
- Wenn Sie [Server-sent events](/de/docs/Web/API/Server-sent_events) verwenden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) `false` ist (dies ist der Standardwert).

Wenn Sie stattdessen das Verhalten des Servers anpassen müssen, ändern Sie den Wert von `Access-Control-Allow-Origin`, um den Zugriff auf den Ursprungsort zu gewähren, von dem der Client geladen wird.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
