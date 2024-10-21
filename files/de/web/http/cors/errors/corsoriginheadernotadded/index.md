---
title: "Reason: CORS header 'Origin' cannot be added"
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

Der {{Glossary("user_agent", "User-Agent")}} war nicht in der Lage, den erforderlichen {{HTTPHeader("Origin")}}
Header zur {{Glossary("HTTP", "HTTP")}}-Anfrage hinzuzufügen. Alle CORS-Anfragen müssen einen `Origin`-Header haben.

Dies kann passieren, wenn der JavaScript-Code mit erweiterten Berechtigungen läuft, die ihm den Zugriff auf Inhalte mehrerer Domänen erlauben, zum Beispiel.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
