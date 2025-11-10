---
title: "Response: headers-Eigenschaft"
short-title: headers
slug: Web/API/Response/headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`headers`** schreibgeschützte Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces enthält das [`Headers`](/de/docs/Web/API/Headers)-Objekt, das mit der Antwort verknüpft ist.

## Wert

Ein [`Headers`](/de/docs/Web/API/Headers)-Objekt.

## Beispiele

In unserem [Beispiel für die Fetch Response](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und übergeben ihm einen JPG-Pfad.
Wir holen diese Anfrage dann mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob),
erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks die Antwort-Header in die Konsole protokollieren.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
