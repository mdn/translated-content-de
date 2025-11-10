---
title: "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
slug: Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## Was ist schiefgelaufen?

Der Server hat mehr als einen {{HTTPHeader("Access-Control-Allow-Origin")}}-Header gesendet. Dies ist nicht erlaubt.

Wenn Sie Zugriff auf den Server haben, können Sie Ihre Implementierung dahingehend ändern, dass Sie im `Access-Control-Allow-Origin`-Header einen Ursprung zurückgeben. Sie können keine Liste von Ursprüngen zurückgeben, da Browser nur einen Wert akzeptieren, der entweder ein einzelner Ursprung oder null ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
