---
title: "Reason: CORS request external redirect not allowed"
slug: Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS request external redirect not allowed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage wurde vom Server mit einer HTTP-Weiterleitung zu einer URL mit einem anderen Ursprung als die ursprüngliche Anfrage beantwortet, was bei CORS-Anfragen nicht erlaubt ist.

Wenn zum Beispiel die Seite `https://service.tld/fetchdata` angefordert wurde und die HTTP-Antwort "301 Moved Permanently", "307 Temporary Redirect" oder "308 Permanent Redirect" mit einem `Location` von `https://anotherservice.net/getdata` ist, wird die CORS-Anfrage auf diese Weise fehlschlagen.

Um das Problem zu beheben, aktualisieren Sie Ihren Code, um die neue URL zu verwenden, wie sie durch die Weiterleitung gemeldet wird, und vermeiden Sie so die Weiterleitung.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
