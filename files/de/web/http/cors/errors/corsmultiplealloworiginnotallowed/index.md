---
title: "Grund: Mehrere CORS-Header 'Access-Control-Allow-Origin' nicht erlaubt"
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## Was ist schiefgelaufen?

Der Server hat mehr als einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header gesendet. Dies ist nicht erlaubt.

Wenn Sie Zugriff auf den Server haben, können Sie Ihre Implementierung so ändern, dass im `Access-Control-Allow-Origin`-Header eine Ursprungsadresse (origin) zurückgegeben wird. Sie können keine Liste von Ursprüngen zurücksenden, da Browser nur einen Wert akzeptieren, der entweder ein einzelner Ursprung oder null ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
