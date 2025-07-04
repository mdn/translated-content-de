---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Ursache

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage, die vom Server gesendet wurde, enthält einen {{HTTPHeader("Access-Control-Allow-Headers")}}-Header, der mindestens einen ungültigen Headernamen enthält.

Der `Access-Control-Allow-Headers`-Header wird vom Server als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet; er informiert den Client darüber, welche [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) in CORS-Anfragen zugelassen sind. Wenn der Client-{{Glossary("user_agent", "User-Agent")}} unter den durch Kommata getrennten Werten einen Headernamen findet, den er nicht erkennt, tritt dieser Fehler auf.

Dies ist ein Problem, das höchstwahrscheinlich nur auf der Serverseite behoben werden kann, indem die Serverkonfiguration so geändert wird, dass der ungültige oder unbekannte Headername nicht mehr mit dem `Access-Control-Allow-Headers`-Header gesendet wird. Es kann auch sinnvoll sein, sicherzustellen, dass der verwendete User-Agent oder die HTTP-Bibliothek auf dem Client auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
