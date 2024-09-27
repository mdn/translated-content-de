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

Die [CORS](/de/docs/Glossary/CORS)-Anfrage wurde vom Server mit einer HTTP-Weiterleitung zu einer URL beantwortet, die sich von dem Ursprung unterscheidet, von dem die ursprüngliche Anfrage ausging. Dies ist bei CORS-Anfragen nicht zulässig.

Wenn zum Beispiel die Seite `https://service.tld/fetchdata` angefordert wurde und die HTTP-Antwort "301 Moved Permanently", "307 Temporary Redirect" oder "308 Permanent Redirect" mit einem `Location` von `https://anotherservice.net/getdata` lautet, wird die CORS-Anfrage auf diese Weise fehlschlagen.

Um das Problem zu beheben, aktualisieren Sie Ihren Code, um die neue URL zu verwenden, die durch die Weiterleitung gemeldet wurde, und vermeiden Sie so die Weiterleitung.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
