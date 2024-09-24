---
title: "Response: status-Eigenschaft"
short-title: status
slug: Web/API/Response/status
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`status`**-Schreibgeschützte Eigenschaft der {{domxref("Response")}}-Schnittstelle enthält die [HTTP-Statuscodes](/de/docs/Web/HTTP/Status) der Antwort.

Zum Beispiel `200` für Erfolg, `404`, wenn die Ressource nicht gefunden werden konnte.

## Wert

Eine vorzeichenlose kurze Zahl. Dies ist einer der [HTTP-Response-Statuscodes](/de/docs/Web/HTTP/Status).

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor und übergeben ihm einen JPG-Pfad.
Anschließend rufen wir diese Anfrage mit {{domxref("Window/fetch", "fetch()")}} ab, extrahieren ein Blob aus der Antwort mit {{domxref("Response.blob")}}, erstellen eine Objekt-URL daraus mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks den Wert `status` der Antwort in die Konsole protokollieren.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.status =", response.status); // response.status = 200
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
