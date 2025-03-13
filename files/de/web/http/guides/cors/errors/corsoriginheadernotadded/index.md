---
title: "Reason: CORS header 'Origin' cannot be added"
slug: Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS header 'Origin' cannot be added
```

## Was ist schiefgelaufen?

Der {{Glossary("user_agent", "User-Agent")}} konnte den erforderlichen {{HTTPHeader("Origin")}}
Header nicht zur {{Glossary("HTTP", "HTTP")}}-Anfrage hinzufügen. Alle CORS-Anfragen müssen einen
`Origin`-Header haben.

Dies kann passieren, wenn der JavaScript-Code mit erweiterten Berechtigungen ausgeführt wird, die ihm
Zugriff auf Inhalte mehrerer Domains ermöglichen, zum Beispiel.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
