---
title: "Response: headers-Eigenschaft"
short-title: headers
slug: Web/API/Response/headers
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`headers`** schreibgeschützte Eigenschaft der {{domxref("Response")}}-Schnittstelle enthält das {{domxref("Headers")}}-Objekt, das mit der Antwort verknüpft ist.

## Wert

Ein {{domxref("Headers")}}-Objekt.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor und übergeben ihm einen JPG-Pfad.
Wir holen dann diese Anfrage mit {{domxref("Window/fetch", "fetch()")}} ab, extrahieren ein Blob aus der Antwort mit {{domxref("Response.blob")}},
erstellen daraus eine Objekt-URL mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir zu Beginn des `fetch()`-Blocks die Antwort-Header in die Konsole protokollieren.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.headers =", response.headers);
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