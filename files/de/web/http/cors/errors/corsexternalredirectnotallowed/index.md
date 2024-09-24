---
title: "Grund: CORS-Anfrage externer Redirect nicht erlaubt"
slug: Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS request external redirect not allowed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS")}}-Anfrage wurde vom Server mit einem HTTP-Redirect zu einer URL mit einem anderen Ursprung als die ursprüngliche Anfrage beantwortet, was bei CORS-Anfragen nicht erlaubt ist.

Wenn beispielsweise die Seite `https://service.tld/fetchdata` angefordert wurde und die HTTP-Antwort "301 Moved Permanently", "307 Temporary Redirect" oder "308 Permanent Redirect" mit einem `Location` von `https://anotherservice.net/getdata` lautet, wird die CORS-Anfrage auf diese Weise fehlschlagen.

Um das Problem zu beheben, aktualisieren Sie Ihren Code, um die neue URL zu verwenden, wie sie durch den Redirect angegeben wird und vermeiden damit den Redirect.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
