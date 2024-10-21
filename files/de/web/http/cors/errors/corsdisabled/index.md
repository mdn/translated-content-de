---
title: "Reason: CORS disabled"
slug: Web/HTTP/CORS/Errors/CORSDisabled
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS disabled
```

## Was ist schiefgelaufen?

Ein Anfrageversuch, der {{Glossary("CORS", "CORS")}} verwenden muss, wurde unternommen, aber CORS ist im Browser des Benutzers deaktiviert. In diesem Fall muss der Benutzer CORS in seinem Browser wieder aktivieren.

In Firefox ist die Einstellung, die CORS deaktiviert, `content.cors.disable`.
Wenn dieser Wert auf `true` gesetzt ist, wird CORS deaktiviert. Wann immer dies der Fall ist, schlagen CORS-Anfragen immer mit diesem Fehler fehl.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS Einführung](/de/docs/Web/HTTP/CORS)
