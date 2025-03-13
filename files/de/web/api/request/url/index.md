---
title: "Request: url-Eigenschaft"
short-title: url
slug: Web/API/Request/url
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`url`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält die URL der Anfrage.

## Wert

Ein String, der die URL der Anfrage angibt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern dann die URL der Anfrage in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myURL = myRequest.url; // "https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request/flowers.jpg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
