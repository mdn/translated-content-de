---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS preflight channel did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage erfordert eine Vorabbefragung, die jedoch nicht durchgeführt werden konnte. Es gibt ein paar Gründe, warum die Vorabbefragung fehlschlagen könnte:

- Eine Cross-Site-Anfrage wurde zuvor ausgeführt, die bereits eine Vorabbefragung durchgeführt hat, und es ist nicht erlaubt, die Vorabbefragung erneut auszuführen. Stellen Sie sicher, dass Ihr Code nur einmal pro Verbindung die Vorabbefragung durchführt.
- Bei der Vorabbefragung trat ein Netzwerkfehler auf, der gewöhnlicherweise auftreten könnte.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
