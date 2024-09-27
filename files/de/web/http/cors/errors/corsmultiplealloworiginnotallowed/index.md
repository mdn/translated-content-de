---
title: "Grund: Mehrere CORS-Header 'Access-Control-Allow-Origin' sind nicht erlaubt"
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

Mehr als ein {{HTTPHeader("Access-Control-Allow-Origin")}}-Header wurde vom Server gesendet. Dies ist nicht erlaubt.

Wenn Sie Zugriff auf den Server haben, können Sie Ihre Implementierung so ändern, dass sie eine Origin im `Access-Control-Allow-Origin`-Header zurücksendet. Sie können keine Liste von Origins zurücksenden, da Browser nur einen Wert akzeptieren, der entweder eine einzelne Origin oder null ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
