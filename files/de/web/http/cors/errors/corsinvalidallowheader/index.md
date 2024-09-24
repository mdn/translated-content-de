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

Die Antwort auf die vom Server gesendete {{Glossary("CORS")}}-Anfrage enthält einen {{HTTPHeader("Access-Control-Allow-Headers")}}-Header, der mindestens einen ungültigen Headernamen enthält.

Der `Access-Control-Allow-Headers`-Header wird vom Server als Antwort auf eine {{Glossary("preflight request")}} gesendet; er informiert den Client darüber, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) in CORS-Anfragen erlaubt sind. Wenn der Client-{{Glossary("user agent")}} unter den komma-getrennten Werten, die vom Header bereitgestellt werden, einen Headernamen findet, den er nicht erkennt, tritt dieser Fehler auf.

Dieses Problem kann höchstwahrscheinlich nur serverseitig behoben werden, indem die Serverkonfiguration so geändert wird, dass der ungültige oder unbekannte Headername nicht mehr mit dem `Access-Control-Allow-Headers`-Header gesendet wird. Es könnte auch sinnvoll sein zu überprüfen, ob der von Ihnen verwendete Benutzeragent oder die HTTP-Bibliothek auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
