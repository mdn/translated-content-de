---
title: "Reason: CORS preflight channel did not succeed"
slug: Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS preflight channel did not succeed
```

## Was ist schiefgelaufen?

Die {{Glossary("CORS", "CORS")}}-Anfrage erfordert ein Preflight, das jedoch nicht durchgeführt werden konnte. Es gibt einige Gründe, warum das Preflighting fehlschlagen könnte:

- Eine Cross-Site-Anfrage wurde bereits durchgeführt, die ein Preflight durchgeführt hat, und das erneute Durchführen des Preflights ist nicht erlaubt. Stellen Sie sicher, dass Ihr Code nur einmal pro Verbindung ein Preflight durchführt.
- Die Preflight-Anfrage hat einen Netzwerkfehler erlitten, der normalerweise auftreten könnte.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
