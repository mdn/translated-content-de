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

Die Antwort auf die vom Server gesendete {{Glossary("CORS")}}-Anfrage enthält einen {{HTTPHeader("Access-Control-Allow-Methods")}}-Header, der mindestens einen ungültigen Methodennamen beinhaltet.

Der `Access-Control-Allow-Methods`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods) er für CORS-Anfragen unterstützt. Der Wert des Headers ist eine durch Kommas getrennte Zeichenkette von HTTP-Methodennamen, wie zum Beispiel {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("HEAD")}}. Wenn einer der angegebenen Werte vom Client-{{Glossary("user agent")}} nicht erkannt wird, tritt dieser Fehler auf.

Dies ist ein Problem, das höchstwahrscheinlich nur auf der Serverseite behoben werden kann, indem die Konfiguration des Servers dahingehend geändert wird, dass der ungültige oder unbekannte Methodename nicht mehr mit dem `Access-Control-Allow-Methods`-Header gesendet wird. Es könnte sich auch lohnen, zu überprüfen, ob der Benutzeragent oder die HTTP-Bibliothek, die Sie auf dem Client verwenden, auf dem neuesten Stand ist.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
