---
title: "Reason: CORS request external redirect not allowed"
slug: Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request external redirect not allowed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage wurde vom Server mit einem HTTP-Redirect zu einer URL auf einem anderen Ursprung als der ursprünglichen Anfrage beantwortet, was bei CORS-Anfragen nicht erlaubt ist.

Wenn beispielsweise die Seite `https://service.tld/fetchdata` angefordert wurde und die HTTP-Antwort "301 Moved Permanently", "307 Temporary Redirect" oder "308 Permanent Redirect" mit einem `Location` von `https://anotherservice.net/getdata` ist, wird die CORS-Anfrage auf diese Weise fehlschlagen.

Um das Problem zu beheben, aktualisieren Sie Ihren Code, um die neue URL zu verwenden, die durch den Redirect gemeldet wurde, und vermeiden Sie so den Redirect.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
