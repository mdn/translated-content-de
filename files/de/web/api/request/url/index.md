---
title: "Request: url-Eigenschaft"
short-title: url
slug: Web/API/Request/url
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`url`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request) Interfaces ist schreibgeschützt und enthält die URL der Anfrage.

## Wert

Ein String, der die URL der Anfrage angibt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript), und speichern dann die URL der Anfrage in einer Variablen:

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
