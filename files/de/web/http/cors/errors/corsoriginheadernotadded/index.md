---
title: "Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden"
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS header 'Origin' cannot be added
```

## Was ist schief gelaufen?

Der [User-Agent](/de/docs/Glossary/user_agent) konnte den erforderlichen {{HTTPHeader("Origin")}}
Header nicht zur [HTTP](/de/docs/Glossary/HTTP)-Anfrage hinzufügen. Alle CORS-Anfragen müssen einen
`Origin` Header haben.

Dies kann passieren, wenn der JavaScript-Code mit erweiterten Berechtigungen ausgeführt wird, die ihm
beispielsweise Zugriff auf Inhalte mehrerer Domains gewähren.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS Einführung](/de/docs/Web/HTTP/CORS)
