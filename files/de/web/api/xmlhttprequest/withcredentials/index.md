---
title: "XMLHttpRequest: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.withCredentials`**-Eigenschaft ist ein boolescher Wert, der angibt, ob `Access-Control`-Anfragen zwischen verschiedenen Websites unter Verwendung von Anmeldeinformationen wie Cookies, Authentifizierungsheadern oder TLS-Client-Zertifikaten durchgeführt werden sollen. Das Setzen von `withCredentials` hat keine Auswirkung auf Anfragen aus derselben Herkunft.

Zusätzlich wird diese Kennzeichnung auch verwendet, um anzugeben, wann Cookies in der Antwort ignoriert werden sollen. Der Standardwert ist `false`. `XMLHttpRequest`-Antworten von einer anderen Domain können keine Cookie-Werte für ihre eigene Domain setzen, es sei denn, `withCredentials` wird vor dem Senden der Anfrage auf `true` gesetzt. Die [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die durch Setzen von `withCredentials` auf `true` erhalten werden, respektieren dennoch die Same-Origin-Policy und können daher nicht vom anfragenden Skript über [document.cookie](/de/docs/Web/API/Document/cookie) oder aus den Antwort-Headern zugegriffen werden.

> [!NOTE]
> Dies hat niemals Auswirkungen auf Anfragen aus derselben Herkunft.

> [!NOTE]
> `XMLHttpRequest`-Antworten von einer anderen Domain können _nicht_ Cookie-Werte für ihre eigene Domain setzen, es sei denn, `withCredentials` wird vor der Anforderung auf `true` gesetzt, unabhängig von den `Access-Control-` Header-Werten.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
