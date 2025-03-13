---
title: "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
slug: Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## Was ist schiefgelaufen?

Anfrage in {{Glossary("CORS", "CORS")}} erfordert, dass der Server die Verwendung von Anmeldeinformationen zulässt, aber der Wert des {{HTTPHeader("Access-Control-Allow-Credentials")}} Headers des Servers nicht auf `true` gesetzt ist, um deren Verwendung zu ermöglichen.

Um dieses Problem auf der Client-Seite zu beheben, überarbeiten Sie den Code, sodass keine Anmeldeinformationen angefordert werden.

- Wenn die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet wird, stellen Sie sicher, dass [`Request.credentials`](/de/docs/Web/API/Request/credentials) auf `"omit"` gesetzt ist.
- Wenn die Anfrage mit [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchgeführt wird, stellen Sie sicher, dass Sie [`withCredentials`](/de/docs/Web/API/XMLHttpRequest/withCredentials) nicht auf `true` setzen.
- Wenn [Server-sent events](/de/docs/Web/API/Server-sent_events) verwendet werden, stellen Sie sicher, dass [`EventSource.withCredentials`](/de/docs/Web/API/EventSource/withCredentials) auf `false` gesetzt ist (es ist der Standardwert).

Um diesen Fehler durch Änderung der Konfiguration des Servers zu beseitigen, passen Sie die Konfiguration des Servers an, sodass der Wert des `Access-Control-Allow-Credentials` Headers auf `true` gesetzt wird.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
