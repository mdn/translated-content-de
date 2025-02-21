---
title: "XMLHttpRequest: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.withCredentials`**-Eigenschaft ist ein boolescher Wert, der angibt, ob `Access-Control`-Anfragen zu anderen Websites unter Verwendung von Berechtigungen wie Cookies, Authentifizierungs-Headern oder TLS-Client-Zertifikaten durchgeführt werden sollen. Das Setzen von `withCredentials` hat keine Auswirkungen auf Anfragen aus derselben Quelle.

Zusätzlich wird dieses Flag verwendet, um anzugeben, wann Cookies in der Antwort ignoriert werden sollen. Der Standardwert ist `false`. `XMLHttpRequest`-Antworten von einer anderen Domain können keine Cookie-Werte für ihre eigene Domain festlegen, es sei denn, `withCredentials` wird auf `true` gesetzt, bevor die Anfrage gestellt wird. Die durch Setzen von `withCredentials` auf `true` erhaltenen [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) beachten dennoch die Same-Origin-Policy und können daher nicht durch das anfordernde Skript über [document.cookie](/de/docs/Web/API/Document/cookie) oder aus Antwort-Headern abgerufen werden.

> [!NOTE]
> Dies hat nie Auswirkungen auf Anfragen aus derselben Quelle.

> **Hinweis:** `XMLHttpRequest`-Antworten von einer anderen Domain _können_ keine Cookie-Werte für ihre eigene Domain festlegen, es sei denn, `withCredentials` ist auf `true` gesetzt, bevor die Anfrage gestellt wird, unabhängig von den Werten der `Access-Control-` Header.

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
