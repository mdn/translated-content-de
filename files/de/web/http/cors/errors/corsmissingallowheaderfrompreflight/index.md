---
title: "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

## Grund

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Was ist schiefgelaufen?

Der `Access-Control-Allow-Headers`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche Header er für {{Glossary("CORS", "CORS")}}-Anfragen unterstützt. Der Wert von `Access-Control-Allow-Headers` sollte eine durch Kommas getrennte Liste von Header-Namen sein, wie `X-Custom-Information` oder jeder der standardmäßigen, aber nicht grundlegenden Header-Namen (die immer erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird, einen Header vorzubereiten, der nicht ausdrücklich erlaubt ist (d. h., er ist nicht in der Liste enthalten, die durch den vom Server gesendeten `Access-Control-Allow-Headers`-Header angegeben ist). Um dies zu beheben, muss der Server aktualisiert werden, sodass er den angegebenen Header erlaubt, oder Sie müssen die Verwendung dieses Headers vermeiden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
