---
title: "Request: url-Eigenschaft"
short-title: url
slug: Web/API/Request/url
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`url`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)
Schnittstelle enthält die URL der Anfrage.

## Wert

Ein String, der die URL der Anfrage angibt.

## Beispiele

Im folgenden Code-Snippet erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie
das Skript) und speichern dann die URL der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myURL = myRequest.url; // "https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request/flowers.jpg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP Access Control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
