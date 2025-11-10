---
title: "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Was ist schiefgelaufen?

Der `Access-Control-Allow-Headers`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche Header er für {{Glossary("CORS", "CORS")}}-Anfragen unterstützt. Der Wert von `Access-Control-Allow-Headers` sollte eine durch Kommas getrennte Liste von Header-Namen sein, wie `X-Custom-Information` oder einem der standardmäßigen, aber nicht grundlegenden Header-Namen (die immer erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird, einen Header vorzuladen, der nicht ausdrücklich erlaubt ist (das heißt, er ist nicht in der vom Server gesendeten Liste des `Access-Control-Allow-Headers`-Headers enthalten). Um dies zu beheben, muss der Server aktualisiert werden, damit er den angegebenen Header zulässt, oder Sie müssen vermeiden, diesen Header zu verwenden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
