---
title: "Antwort: url-Eigenschaft"
short-title: url
slug: Web/API/Response/url
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`url`**-Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces ist eine schreibgeschützte Eigenschaft, die die URL der Antwort enthält.
Der Wert der `url`-Eigenschaft wird die endgültige URL sein, die nach etwaigen Weiterleitungen erhalten wird.

## Wert

Ein String.

## Beispiele

In unserem [Fetch-Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, indem wir ihm einen JPG-Pfad übergeben.
Wir holen diese Anfrage dann mit [`fetch()`](/de/docs/Web/API/Window/fetch), extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen daraus eine Objekt-URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen alles in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir zu Beginn des `fetch()`-Blocks die Antwort-`URL` in der Konsole protokollieren.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.url =", response.url); // response.url = https://mdn.github.io/dom-examples/fetch/fetch-response/flowers.jpg
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
