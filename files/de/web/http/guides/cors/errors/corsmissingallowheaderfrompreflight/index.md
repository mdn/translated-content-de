---
title: "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Was ist schief gelaufen?

Der `Access-Control-Allow-Headers`-Header wird vom Server gesendet, um dem Client mitzuteilen, welche Header er für {{Glossary("CORS", "CORS")}}-Anfragen unterstützt. Der Wert von `Access-Control-Allow-Headers` sollte eine durch Kommas getrennte Liste von Header-Namen sein, wie `X-Custom-Information` oder andere standardisierte, aber nicht grundlegende Header-Namen (die immer erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird, einen Header im Preflight zu versenden, der nicht ausdrücklich erlaubt ist (d.h. der nicht in der vom Server gesendeten Liste `Access-Control-Allow-Headers` enthalten ist). Um dies zu beheben, muss der Server aktualisiert werden, damit er den angegebenen Header zulässt, oder die Verwendung dieses Headers muss vermieden werden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
