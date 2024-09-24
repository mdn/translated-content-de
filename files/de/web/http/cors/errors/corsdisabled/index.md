---
title: "Grund: CORS deaktiviert"
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

Es wurde eine Anfrage versucht, die {{Glossary("CORS")}} verwenden muss, aber CORS ist im Browser des Nutzers deaktiviert. In diesem Fall muss der Nutzer CORS in seinem Browser wieder einschalten.

In Firefox ist die Einstellung, die CORS deaktiviert, `content.cors.disable`. Wenn diese auf `true` gesetzt ist, wird CORS deaktiviert, sodass in diesem Fall CORS-Anfragen immer mit diesem Fehler fehlschlagen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
