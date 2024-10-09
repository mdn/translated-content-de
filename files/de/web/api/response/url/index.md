---
title: "Response: url-Eigenschaft"
short-title: url
slug: Web/API/Response/url
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`url`**-Schreibgeschützt-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle enthält die URL der Antwort.
Der Wert der `url`-Eigenschaft ist die endgültige URL, die nach allen Umleitungen erhalten wurde.

## Wert

Ein String.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem Konstruktor [`Request()`](/de/docs/Web/API/Request/Request), wobei wir ihm einen JPG-Pfad übergeben.
Wir holen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) eine Objekt-URL daraus und zeigen dieses in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks die `URL` der Antwort in die Konsole loggen.

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
