---
title: "Grund: Fehlender Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' vom CORS-Vorflugkanal"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: c2274293475b0a5b4febf85a49c1f91bf43ebac7
---

{{HTTPSidebar}}

## Grund

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Was ist schiefgelaufen?

Der `Access-Control-Allow-Headers`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche Header er für {{Glossary("CORS")}}-Anfragen unterstützt. Der Wert von `Access-Control-Allow-Headers` sollte eine durch Kommas getrennte Liste von Headernamen sein, wie beispielsweise "`X-Custom-Information`" oder einer der standardmäßigen, aber nicht grundlegenden Headernamen (die immer erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird, einen Header im Vorflug zu verwenden, der nicht ausdrücklich erlaubt ist (das heißt, er ist nicht in der Liste enthalten, die vom `Access-Control-Allow-Headers`-Header des Servers angegeben wird). Um dies zu beheben, muss der Server so aktualisiert werden, dass er den angegebenen Header erlaubt, oder Sie müssen vermeiden, diesen Header zu verwenden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
