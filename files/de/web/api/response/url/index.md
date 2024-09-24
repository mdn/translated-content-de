---
title: "Response: url Eigenschaft"
short-title: url
slug: Web/API/Response/url
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`url`** schreibgeschützte Eigenschaft des {{domxref("Response")}}-Interfaces enthält die URL der Antwort.
Der Wert der `url`-Eigenschaft ist die endgültige URL, die nach allen Weiterleitungen erhalten wird.

## Wert

Ein String.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor, indem wir ihm einen JPG-Pfad übergeben.
Wir holen diese Anfrage dann mit {{domxref("Window/fetch", "fetch()")}}, extrahieren einen Blob aus der Antwort mit {{domxref("Response.blob")}}, erstellen daraus eine Objekt-URL mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks die Antwort-`URL` in der Konsole protokollieren.

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
