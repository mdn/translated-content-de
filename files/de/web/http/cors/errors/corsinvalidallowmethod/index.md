---
title: "Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## Grund

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schiefgelaufen?

Die Antwort auf die [CORS](/de/docs/Glossary/CORS)-Anfrage, die vom Server gesendet wurde, enthält einen {{HTTPHeader("Access-Control-Allow-Methods")}}-Header, der mindestens einen ungültigen Methodennamen enthält.

Der `Access-Control-Allow-Methods`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods) er für CORS-Anfragen unterstützt. Der Wert des Headers ist eine durch Kommas getrennte Zeichenkette von HTTP-Methodennamen, wie z.B. {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("HEAD")}}. Wenn einer der angegebenen Werte vom Client [User-Agent](/de/docs/Glossary/user_agent) nicht erkannt wird, tritt dieser Fehler auf.

Dieses Problem kann höchstwahrscheinlich nur serverseitig behoben werden, indem die Serverkonfiguration so geändert wird, dass der ungültige oder unbekannte Methodenname nicht mehr mit dem `Access-Control-Allow-Methods`-Header gesendet wird. Es könnte auch sinnvoll sein zu überprüfen, ob der verwendete User-Agent oder die HTTP-Bibliothek auf dem Client aktuell ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
