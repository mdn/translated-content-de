---
title: "Grund: CORS-Vorabprüfkanal war nicht erfolgreich"
slug: Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS preflight channel did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS")}}-Anfrage erfordert eine Vorabprüfung, aber die Vorabprüfung konnte nicht durchgeführt werden. Es gibt einige Gründe, warum die Vorabprüfung fehlschlagen könnte:

- Eine Cross-Site-Anfrage wurde zuvor durchgeführt, die bereits eine Vorabprüfung durchgeführt hat, und das erneute Durchführen der Vorabprüfung ist nicht erlaubt. Stellen Sie sicher, dass Ihr Code pro Verbindung nur einmal vorab prüft.
- Die Vorabprüfungsanfrage litt unter irgendeiner Art von Netzwerkfehler, der normalerweise auftreten könnte.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
