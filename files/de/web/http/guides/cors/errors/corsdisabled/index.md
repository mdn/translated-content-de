---
title: "Reason: CORS disabled"
slug: Web/HTTP/Guides/CORS/Errors/CORSDisabled
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS disabled
```

## Was ist schief gelaufen?

Ein Antrag, der die Verwendung von {{Glossary("CORS", "CORS")}} erfordert, wurde versucht, aber CORS ist im Browser des Benutzers deaktiviert. In diesem Fall muss der Benutzer CORS in seinem Browser wieder aktivieren.

In Firefox ist die Präferenz, die CORS deaktiviert, `content.cors.disable`.
Wenn dieser auf `true` gesetzt ist, wird CORS deaktiviert, und daher werden CORS-Anfragen immer mit diesem Fehler fehlschlagen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/Guides/CORS)
