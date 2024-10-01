---
title: "Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowHeader
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage, die vom Server gesendet wurde, enthält ein {{HTTPHeader("Access-Control-Allow-Headers")}}-Header, der mindestens einen ungültigen Headernamen enthält.

Der `Access-Control-Allow-Headers`-Header wird vom Server als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet; er informiert den Client darüber, welche [HTTP-Headers](/de/docs/Web/HTTP/Headers) in CORS-Anfragen zulässig sind. Wenn der {{Glossary("user_agent", "User-Agent")}} des Clients unter den durch Kommas getrennten Werten im Header einen Headernamen findet, den er nicht erkennt, tritt dieser Fehler auf.

Dies ist ein Problem, das höchstwahrscheinlich nur auf der Serverseite behoben werden kann, indem die Konfiguration des Servers so geändert wird, dass der ungültige oder unbekannte Headername nicht mehr mit dem `Access-Control-Allow-Headers`-Header gesendet wird. Es kann sich auch lohnen, zu überprüfen, ob der User-Agent oder die HTTP-Bibliothek, die auf dem Client verwendet wird, auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Headers](/de/docs/Web/HTTP/Headers)
