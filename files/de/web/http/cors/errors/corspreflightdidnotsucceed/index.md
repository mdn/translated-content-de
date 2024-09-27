---
title: "Grund: CORS-Vorab-Anfrage war nicht erfolgreich"
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

Die [CORS](/de/docs/Glossary/CORS)-Anfrage erfordert eine Vorab-Anfrage, die Vorab-Anfrage konnte jedoch nicht ausgeführt werden. Es gibt einige Gründe, warum die Vorab-Anfrage fehlschlagen könnte:

- Eine zuvor bereits durchgeführte Website-übergreifende Anfrage hat bereits eine Vorab-Anfrage abgeschlossen, und die Vorab-Anfrage nochmal durchzuführen ist nicht erlaubt. Stellen Sie sicher, dass Ihr Code nur einmal pro Verbindung eine Vorab-Anfrage ausführt.
- Die Vorab-Anfrage erlitt einen beliebigen Netzwerkfehler, der normalerweise auftreten könnte.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
