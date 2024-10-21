---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## Was ist schief gelaufen?

Der Server hat mehr als einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header gesendet. Dies ist nicht erlaubt.

Wenn Sie Zugriff auf den Server haben, können Sie Ihre Implementierung dahingehend ändern, dass ein Ursprung im `Access-Control-Allow-Origin`-Header zurückgesendet wird. Sie können keine Liste von Ursprüngen zurücksenden, da Browser nur einen Wert akzeptieren, der entweder ein einzelner Ursprung oder null ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [CORS aktivieren: Ich möchte meinem Server CORS-Unterstützung hinzufügen](https://enable-cors.org/server.html)
