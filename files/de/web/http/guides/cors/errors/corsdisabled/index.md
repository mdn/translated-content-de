---
title: "Reason: CORS disabled"
slug: Web/HTTP/Guides/CORS/Errors/CORSDisabled
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS disabled
```

## Was ist schiefgelaufen?

Ein Anfrage, die {{Glossary("CORS", "CORS")}} verwenden muss, wurde versucht, aber CORS ist im
Browser des Benutzers deaktiviert. In diesem Fall muss der Benutzer CORS in seinem
Browser wieder aktivieren.

In Firefox ist die Einstellung, die CORS deaktiviert, `content.cors.disable`.
Wenn dieser Wert auf `true` gesetzt ist, wird CORS deaktiviert, und CORS-Anfragen
werden immer mit diesem Fehler fehlschlagen.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
