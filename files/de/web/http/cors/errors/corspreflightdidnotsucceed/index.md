---
title: "Reason: CORS preflight channel did not succeed"
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

Die {{Glossary("CORS", "CORS")}}-Anforderung benötigt eine Vorabüberprüfung, die nicht durchgeführt werden konnte. Es gibt einige Gründe, warum die Vorabüberprüfung fehlschlagen könnte:

- Eine bereichsübergreifende Anforderung wurde zuvor durchgeführt, die bereits eine Vorabüberprüfung ausgeführt hat, und eine erneute Vorabüberprüfung ist nicht zulässig. Stellen Sie sicher, dass Ihr Code nur einmal pro Verbindung eine Vorabüberprüfung durchführt.
- Die Vorabüberprüfungsanforderung erlitt irgendeine Art von Netzwerkfehler, der normalerweise auftreten könnte.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
