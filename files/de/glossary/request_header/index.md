---
title: Anforderungsheader
slug: Glossary/Request_header
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Anforderungsheader** ist ein {{glossary("HTTP header")}}, der in einer HTTP-Anfrage verwendet werden kann, um Informationen über den Anforderungskontext bereitzustellen, damit der Server die Antwort entsprechend anpassen kann. Zum Beispiel geben die {{HTTPHeader("Accept", "Accept-*")}}-Header die erlaubten und bevorzugten Formate der Antwort an. Andere Header können verwendet werden, um Authentifizierungsdaten bereitzustellen (z.B. {{HTTPHeader("Authorization")}}), das Caching zu steuern oder Informationen über den User Agent oder den Referrer zu erhalten, usw.

Nicht alle Header, die in einer Anfrage erscheinen können, werden von der Spezifikation als _Anforderungsheader_ bezeichnet. Zum Beispiel wird der {{HTTPHeader("Content-Type")}}-Header als ein {{glossary("representation header")}} bezeichnet.

Darüber hinaus definiert {{Glossary("CORS")}} eine Teilmenge von Anforderungsheadern als {{glossary('CORS-safelisted request header', 'simple headers')}}, Anforderungsheader, die immer als autorisiert angesehen werden und in Antworten auf {{glossary("preflight request", "preflight")}}-Anfragen nicht explizit aufgeführt sind.

Die folgende HTTP-Nachricht zeigt einige Anforderungsheader nach einer {{HTTPMethod("GET")}}-Anfrage:

```http
GET /home.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/testpage.html
Connection: keep-alive
Upgrade-Insecure-Requests: 1
If-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT
If-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"
Cache-Control: max-age=0
```

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- [RFC 9110, Abschnitt 6.3: Header-Felder](https://httpwg.org/specs/rfc9110.html#header.fields)
