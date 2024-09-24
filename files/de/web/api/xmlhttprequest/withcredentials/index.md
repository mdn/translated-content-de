---
title: "XMLHttpRequest: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.withCredentials`**-Eigenschaft ist ein boolescher Wert, der angibt, ob `Access-Control`-Anfragen über verschiedene Seiten hinweg unter Verwendung von Anmeldedaten wie Cookies, Authentifizierungsheadern oder TLS-Client-Zertifikaten durchgeführt werden sollen. Das Setzen von `withCredentials` hat keine Auswirkungen auf Anfragen innerhalb desselben Ursprungs.

Darüber hinaus wird dieses Flag auch verwendet, um anzugeben, wann Cookies in der Antwort ignoriert werden sollen. Der Standardwert ist `false`. `XMLHttpRequest`-Antworten von einer anderen Domäne können keine Cookie-Werte für ihre eigene Domäne festlegen, es sei denn, `withCredentials` wird auf `true` gesetzt, bevor die Anfrage gestellt wird. Die durch das Setzen von `withCredentials` auf `true` erhaltenen [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) halten trotzdem die Same-Origin-Policy ein und können daher nicht vom anfordernden Skript über [document.cookie](/de/docs/Web/API/Document/cookie) oder aus Antwort-Headern abgerufen werden.

> [!NOTE]
> Dies hat nie Einfluss auf Anfragen innerhalb desselben Ursprungs.

> **Hinweis:** `XMLHttpRequest`-Antworten von einer anderen Domäne _können_ keine Cookie-Werte für ihre eigene Domäne festlegen, es sei denn, `withCredentials` wird auf `true` gesetzt, bevor die Anfrage gestellt wird, unabhängig von den Werten der `Access-Control-` Header.

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
