---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage, die vom Server gesendet wurde, enthält einen {{HTTPHeader("Access-Control-Allow-Methods")}}-Header, der mindestens einen ungültigen Methodennamen enthält.

Der `Access-Control-Allow-Methods`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods) er für CORS-Anfragen unterstützt. Der Wert des Headers ist eine durch Kommas getrennte Zeichenfolge von HTTP-Methodennamen, wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("HEAD")}}. Wenn einer der angegebenen Werte vom Client-{{Glossary("user_agent", "User-Agent")}} nicht erkannt wird, tritt dieser Fehler auf.

Dieses Problem kann höchstwahrscheinlich nur serverseitig behoben werden, indem die Serverkonfiguration so geändert wird, dass der ungültige oder unbekannte Methodenname nicht mehr mit dem `Access-Control-Allow-Methods`-Header gesendet wird. Es könnte auch sinnvoll sein, zu überprüfen, ob der User-Agent oder die HTTP-Bibliothek, die Sie auf dem Client verwenden, auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)
