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

## Was ist schief gelaufen?

Ein Request, der [CORS](/de/docs/Glossary/CORS) verwenden muss, wurde versucht, aber CORS ist im Browser des Benutzers deaktiviert. Wenn dies passiert, muss der Benutzer CORS in seinem Browser wieder aktivieren.

In Firefox ist die Einstellung, die CORS deaktiviert, `content.cors.disable`. Wenn diese auf `true` gesetzt ist, wird CORS deaktiviert, sodass in diesem Fall CORS-Anfragen stets mit diesem Fehler fehlschlagen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
