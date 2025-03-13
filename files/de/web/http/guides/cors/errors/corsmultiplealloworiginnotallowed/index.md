---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## Was ist schiefgelaufen?

Der Server hat mehr als einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header gesendet. Das ist nicht erlaubt.

Wenn Sie Zugriff auf den Server haben, können Sie Ihre Implementierung ändern, um eine Herkunft im `Access-Control-Allow-Origin`-Header zurückzugeben. Sie können keine Liste von Herkünften zurücksenden, da Browser nur einen Wert akzeptieren, der entweder eine einzelne Herkunft oder null ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [Enable CORS: Ich möchte Unterstützung für CORS auf meinem Server hinzufügen](https://enable-cors.org/server.html)
