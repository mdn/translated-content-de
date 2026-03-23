---
title: "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Grund

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Was ist schiefgelaufen?

Der `Access-Control-Allow-Headers`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche Header er für {{Glossary("CORS", "CORS")}}-Anfragen unterstützt. Der Wert von `Access-Control-Allow-Headers` sollte eine durch Kommas getrennte Liste von Headernamen sein, wie z. B. `X-Custom-Information` oder andere Standard- aber nicht-basische Headernamen (die immer erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird, einen Header im Vorflug zu verwenden, der nicht ausdrücklich erlaubt ist (d.h. er ist nicht in der vom Server gesendeten Liste angegeben, die der `Access-Control-Allow-Headers`-Header enthält). Um dies zu beheben, muss der Server so aktualisiert werden, dass er den angegebenen Header zulässt, oder Sie müssen die Verwendung dieses Headers vermeiden.

Wenn Sie keinen Zugriff auf die Serverkonfiguration haben, siehe [Überlegungen auf Clientseite](/de/docs/Web/HTTP/Guides/CORS/Errors#client-side_considerations) für alternative Ansätze.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
