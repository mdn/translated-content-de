---
title: "XMLHttpRequest: withCredentials-Eigenschaft"
short-title: withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die **`XMLHttpRequest.withCredentials`**-Eigenschaft ist ein boolescher Wert, der angibt, ob `Access-Control`-Anfragen über Domänen hinweg mit Anmeldedaten wie Cookies, Authentifizierungs-Headern oder TLS-Client-Zertifikaten durchgeführt werden sollen. Das Setzen von `withCredentials` hat keine Auswirkung auf Anfragen von derselben Herkunft.

Zusätzlich wird dieses Flag auch verwendet, um anzugeben, wann Cookies in der Antwort ignoriert werden sollen. Der Standardwert ist `false`. `XMLHttpRequest`-Antworten von einer anderen Domäne können keine Cookie-Werte für ihre eigene Domäne setzen, es sei denn, `withCredentials` wird vor dem Stellen der Anfrage auf `true` gesetzt. Die [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies), die durch Setzen von `withCredentials` auf `true` erhalten werden, respektieren weiterhin die Same-Origin-Policy und können daher nicht vom anfragenden Skript über [document.cookie](/de/docs/Web/API/Document/cookie) oder aus Antwort-Headern abgerufen werden.

> [!NOTE]
> Dies hat niemals Auswirkungen auf Anfragen von derselben Herkunft.

> [!NOTE] > `XMLHttpRequest`-Antworten von einer anderen Domäne _können_ keine Cookie-Werte für ihre eigene Domäne setzen, es sei denn, `withCredentials` wird vor dem Stellen der Anfrage auf `true` gesetzt, unabhängig von den Werten der `Access-Control-`-Header.

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
