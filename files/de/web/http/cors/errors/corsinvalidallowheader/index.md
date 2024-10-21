---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
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

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage, die vom Server gesendet wurde, enthält einen {{HTTPHeader("Access-Control-Allow-Headers")}}-Header, der mindestens einen ungültigen Header-Namen enthält.

Der `Access-Control-Allow-Headers`-Header wird vom Server als Antwort auf eine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet; er gibt dem Client an, welche [HTTP-Header](/de/docs/Web/HTTP/Headers) in CORS-Anfragen zulässig sind. Wenn der Client {{Glossary("user_agent", "User-Agent")}} unter den durch Kommas abgegrenzten Werten, die der Header bereitstellt, einen Header-Namen findet, den er nicht erkennt, tritt dieser Fehler auf.

Dies ist ein Problem, das höchstwahrscheinlich nur serverseitig durch Änderung der Konfiguration des Servers behoben werden kann, sodass der ungültige oder unbekannte Header-Name nicht mehr mit dem `Access-Control-Allow-Headers`-Header gesendet wird. Es kann auch sinnvoll sein zu überprüfen, ob der auf dem Client verwendete User-Agent oder die HTTP-Bibliothek auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
