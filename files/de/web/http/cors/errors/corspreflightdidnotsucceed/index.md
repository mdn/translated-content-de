---
title: "Grund: CORS-Vorab-Anforderungskanal war nicht erfolgreich"
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

Die [CORS](/de/docs/Glossary/CORS)-Anfrage erfordert eine Vorab-Anforderung, diese konnte jedoch nicht durchgeführt werden. Es gibt mehrere Gründe, warum eine Vorab-Anforderung fehlschlagen könnte:

- Eine Querverbindungsanfrage wurde bereits durchgeführt, die schon eine Vorab-Anforderung gemacht hat, und eine erneute Vorab-Anforderung ist nicht erlaubt. Stellen Sie sicher, dass Ihr Code nur einmal pro Verbindung eine Vorab-Anforderung durchführt.
- Die Vorab-Anforderung hat irgendeinen Netzwerkausfall erlitten, der normalerweise auftreten könnte.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
