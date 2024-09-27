---
title: Request header
slug: Glossary/Request_header
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Request-Header** ist ein [HTTP-Header](/de/docs/Glossary/HTTP_header), der in einer HTTP-Anfrage verwendet werden kann, um Informationen über den Anfragekontext bereitzustellen, sodass der Server die Antwort entsprechend anpassen kann. Zum Beispiel geben die {{HTTPHeader("Accept", "Accept-*")}}-Header die erlaubten und bevorzugten Formate der Antwort an. Weitere Header können verwendet werden, um Authentifizierungsdaten (z. B. {{HTTPHeader("Authorization")}}) bereitzustellen, um das Caching zu steuern oder um Informationen über den User-Agent oder Referrer zu erhalten, etc.

Nicht alle Header, die in einer Anfrage erscheinen können, werden in der Spezifikation als _Request-Header_ bezeichnet. Zum Beispiel wird der {{HTTPHeader("Content-Type")}}-Header als [Representation-Header](/de/docs/Glossary/representation_header) bezeichnet.

Darüber hinaus definiert [CORS](/de/docs/Glossary/CORS) eine Untergruppe von Request-Headern als [einfache Header](/de/docs/Glossary/CORS-safelisted_request_header), Header, die immer als autorisiert betrachtet werden und nicht explizit in Antworten auf [Preflight-Anfragen](/de/docs/Glossary/preflight_request) aufgeführt werden.

Die folgende HTTP-Nachricht zeigt einige Request-Header nach einer {{HTTPMethod("GET")}}-Anfrage:

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
- [RFC 9110, Abschnitt 6.3: Header Fields](https://httpwg.org/specs/rfc9110.html#header.fields)
