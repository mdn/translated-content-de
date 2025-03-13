---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage, die vom Server gesendet wurde, enthält einen {{HTTPHeader("Access-Control-Allow-Headers")}}-Header, der mindestens einen ungültigen Header-Namen beinhaltet.

Der `Access-Control-Allow-Headers`-Header wird vom Server als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet; er informiert den Client darüber, welche [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) in CORS-Anfragen erlaubt sind. Wenn der {{Glossary("user_agent", "User-Agent")}} des Clients unter den durch Kommas getrennten Werten, die vom Header bereitgestellt werden, einen Header-Namen findet, den er nicht erkennt, tritt dieser Fehler auf.

Dieses Problem kann höchstwahrscheinlich nur auf der Serverseite behoben werden, indem die Serverkonfiguration so geändert wird, dass der ungültige oder unbekannte Header-Name nicht mehr mit dem `Access-Control-Allow-Headers`-Header gesendet wird. Es könnte auch sinnvoll sein zu überprüfen, ob der User-Agent oder die HTTP-Bibliothek, die Sie auf dem Client verwenden, auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
