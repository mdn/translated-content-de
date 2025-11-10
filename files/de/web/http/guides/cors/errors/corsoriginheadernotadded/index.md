---
title: "Reason: CORS header 'Origin' cannot be added"
slug: Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS header 'Origin' cannot be added
```

## Was ist schiefgelaufen?

Der {{Glossary("user_agent", "User Agent")}} konnte den erforderlichen {{HTTPHeader("Origin")}}-Header nicht zur {{Glossary("HTTP", "HTTP")}}-Anfrage hinzufügen. Alle CORS-Anfragen müssen einen `Origin`-Header haben.

Dies kann passieren, wenn der JavaScript-Code mit erweiterten Berechtigungen ausgeführt wird, die ihm den Zugriff auf Inhalte mehrerer Domains ermöglichen, zum Beispiel.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
