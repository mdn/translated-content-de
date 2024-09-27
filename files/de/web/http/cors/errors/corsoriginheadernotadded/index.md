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

## Was ist schiefgelaufen?

Der [User Agent](/de/docs/Glossary/user_agent) war nicht in der Lage, den erforderlichen {{HTTPHeader("Origin")}}
Header zur [HTTP](/de/docs/Glossary/HTTP)-Anfrage hinzuzufügen. Alle CORS-Anfragen müssen einen
`Origin`-Header enthalten.

Dies kann passieren, wenn der JavaScript-Code mit erweiterten Berechtigungen ausgeführt wird, die ihm Zugriff auf Inhalte von mehreren Domains ermöglichen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
