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

Die Antwort auf die [CORS](/de/docs/Glossary/CORS)-Anfrage, die vom Server gesendet wurde, enthält einen {{HTTPHeader("Access-Control-Allow-Headers")}}-Header, der mindestens einen ungültigen Header-Namen enthält.

Der `Access-Control-Allow-Headers`-Header wird vom Server als Antwort auf eine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) gesendet; er informiert den Client darüber, welche [HTTP-Headers](/de/docs/Web/HTTP/Headers) in CORS-Anfragen erlaubt sind. Wenn der Client-[User-Agent](/de/docs/Glossary/user_agent) unter den durch Kommata getrennten Werten im Header einen Header-Namen findet, den er nicht erkennt, tritt dieser Fehler auf.

Dies ist ein Problem, das höchstwahrscheinlich nur serverseitig behoben werden kann, indem die Konfiguration des Servers so geändert wird, dass der ungültige oder unbekannte Header-Name nicht mehr mit dem `Access-Control-Allow-Headers`-Header gesendet wird. Es könnte auch sinnvoll sein zu prüfen, ob der von Ihnen auf der Client-Seite verwendete User-Agent oder die HTTP-Bibliothek auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung zu CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Headers](/de/docs/Web/HTTP/Headers)
