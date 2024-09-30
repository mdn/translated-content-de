---
title: "Response: status-Eigenschaft"
short-title: status
slug: Web/API/Response/status
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`status`** schreibgeschützte Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle enthält die [HTTP-Statuscodes](/de/docs/Web/HTTP/Status) der Antwort.

Zum Beispiel `200` bei Erfolg, `404`, wenn die Ressource nicht gefunden werden konnte.

## Wert

Eine nicht signierte kurze Zahl.
Dies ist einer der [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status).

## Beispiele

In unserem [Fetch Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors, indem wir ihm einen JPG-Pfad übergeben.
Wir holen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks den `status`-Wert der Antwort in der Konsole protokollieren.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
