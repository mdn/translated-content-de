---
title: "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schief gelaufen?

Die Antwort auf die vom Server gesendete {{Glossary("CORS", "CORS")}}-Anfrage enthält einen {{HTTPHeader("Access-Control-Allow-Methods")}}-Header, der mindestens einen ungültigen Methodennamen enthält.

Der `Access-Control-Allow-Methods`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods) er für CORS-Anfragen unterstützt. Der Wert des Headers ist eine durch Kommas getrennte Zeichenkette von HTTP-Methodennamen, wie {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("HEAD")}}. Wenn einer der angegebenen Werte vom Client
{{Glossary("user_agent", "Benutzeragent")}} nicht erkannt wird, tritt dieser Fehler auf.

Dies ist ein Problem, das höchstwahrscheinlich nur serverseitig behoben werden kann, indem die Serverkonfiguration so geändert wird, dass der ungültige oder unbekannte Methodenname nicht mehr mit dem `Access-Control-Allow-Methods`-Header gesendet wird. Es könnte auch sinnvoll sein zu überprüfen, ob der von Ihnen auf dem Client verwendete Benutzeragent oder die HTTP-Bibliothek auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
