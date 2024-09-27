---
title: "Grund: fehlendes Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' aus dem CORS-Preflight-Kanal"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}

## Grund

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Was ist schief gelaufen?

Der `Access-Control-Allow-Headers`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche Header er für [CORS](/de/docs/Glossary/CORS)-Anfragen unterstützt. Der Wert von `Access-Control-Allow-Headers` sollte eine durch Kommas getrennte Liste von Headernamen sein, wie z.B. `X-Custom-Information` oder einer der standardmäßigen, aber nicht grundlegenden Headernamen (die stets erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird, einen Header im Preflight zu testen, der nicht ausdrücklich erlaubt ist (das heißt, er ist nicht in der vom Server gesendeten Liste enthalten, die durch den `Access-Control-Allow-Headers`-Header angegeben wird). Um dies zu beheben, muss der Server so aktualisiert werden, dass er den angegebenen Header zulässt, oder Sie müssen die Verwendung dieses Headers vermeiden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
