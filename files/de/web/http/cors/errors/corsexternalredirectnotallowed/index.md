---
title: "Grund: CORS-Anforderung externer Redirect nicht erlaubt"
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

Die [CORS](/de/docs/Glossary/CORS)-Anforderung wurde vom Server mit einem HTTP-Redirect beantwortet, der auf eine URL mit einem anderen Ursprung als der ursprünglichen Anfrage verweist, was bei CORS-Anforderungen nicht zulässig ist.

Zum Beispiel, wenn die Seite `https://service.tld/fetchdata` angefordert wurde, und die HTTP-Antwort lautet "301 Moved Permanently", "307 Temporary Redirect" oder "308 Permanent Redirect" mit einem `Location` von `https://anotherservice.net/getdata`, wird die CORS-Anforderung auf diese Weise fehlschlagen.

Um das Problem zu beheben, aktualisieren Sie Ihren Code, um die neue URL zu verwenden, wie sie durch den Redirect berichtet wird, und vermeiden Sie dadurch den Redirect.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
