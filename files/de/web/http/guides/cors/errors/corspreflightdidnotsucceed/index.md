---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Grund

```plain
Reason: CORS preflight channel did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage erfordert eine Vorabprüfung, die jedoch nicht durchgeführt werden konnte. Es gibt einige Gründe, warum die Vorabprüfung fehlschlagen könnte:

- Es wurde bereits zuvor eine Cross-Site-Anfrage durchgeführt, die bereits eine Vorabprüfung vorgenommen hat, und das erneute Durchführen der Vorabprüfung ist nicht gestattet. Stellen Sie sicher, dass Ihr Code die Vorabprüfung nur einmal pro Verbindung durchführt.
- Die Vorabprüfungsanfrage erlitt irgendeine Art von Netzwerkfehler, der gewöhnlich auftreten könnte.

Wenn der Server nicht unter Ihrer Kontrolle ist, lesen Sie [Client-seitige Überlegungen](/de/docs/Web/HTTP/Guides/CORS/Errors#client-side_considerations) für alternative Ansätze.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
