---
title: "XMLHttpRequest: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.withCredentials`**-Eigenschaft ist ein boolescher Wert, der angibt, ob `Access-Control`-Anfragen über mehrere Sites hinweg unter Verwendung von Anmeldeinformationen wie Cookies, Authentifizierungs-Headern oder TLS-Client-Zertifikaten ausgeführt werden sollen. Das Setzen von `withCredentials` hat keine Auswirkung auf Anfragen innerhalb derselben Herkunft.

Darüber hinaus wird dieses Flag auch verwendet, um anzugeben, wann Cookies in der Antwort ignoriert werden sollen. Der Standardwert ist `false`. `XMLHttpRequest`-Antworten von einer anderen Domain können keine Cookie-Werte für ihre eigene Domain festlegen, es sei denn, `withCredentials` wird vor dem Senden der Anfrage auf `true` gesetzt. Die [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies), die durch Setzen von `withCredentials` auf `true` erhalten werden, beachten weiterhin dieselbe Herkunftsrichtlinie und können daher nicht durch das anfordernde Skript über [document.cookie](/de/docs/Web/API/Document/cookie) oder aus Antwort-Headern zugegriffen werden.

> [!NOTE]
> Dies hat niemals Auswirkungen auf Anfragen innerhalb derselben Herkunft.

> **Hinweis:** `XMLHttpRequest`-Antworten von einer anderen Domain _können_ keine Cookie-Werte für ihre eigene Domain festlegen, es sei denn, `withCredentials` wird vor dem Senden der Anfrage auf `true` gesetzt, unabhängig von den `Access-Control`-Header-Werten.

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
