---
title: "Response: url Eigenschaft"
short-title: url
slug: Web/API/Response/url
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`url`** Eigenschaft der [`Response`](/de/docs/Web/API/Response) Schnittstelle ist eine schreibgeschützte Eigenschaft, die die URL der Antwort enthält. Der Wert der `url`-Eigenschaft wird die endgültige URL sein, die nach allen Weiterleitungen erhalten wurde.

## Wert

Ein String.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request) Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor und übergeben ihm einen JPG-Pfad. Anschließend holen wir diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()` Blocks die Antwort-`URL` in die Konsole protokollieren.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
