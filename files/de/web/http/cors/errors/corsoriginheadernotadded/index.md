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

Der {{Glossary("user agent")}} konnte den erforderlichen {{HTTPHeader("Origin")}}-Header nicht zur {{Glossary("HTTP")}}-Anfrage hinzufügen. Alle CORS-Anfragen müssen einen `Origin`-Header haben.

Dies kann passieren, wenn der JavaScript-Code mit erweiterten Berechtigungen ausgeführt wird, die ihm den Zugriff auf Inhalte mehrerer Domänen erlauben, zum Beispiel.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
