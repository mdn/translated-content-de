---
title: "Response: status-Eigenschaft"
short-title: status
slug: Web/API/Response/status
l10n:
  sourceCommit: 5005f078577007161ffab6b5ffee765f8551174c
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`status`** schreibgeschützte Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle enthält den [HTTP-Statuscode](/de/docs/Web/HTTP/Reference/Status) der Antwort.

Zum Beispiel `200` für Erfolg oder `404`, wenn die Ressource nicht gefunden werden konnte.

## Wert

Eine nicht signierte kurze Zahl.
Dies ist einer der [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status).

Ein Wert von `0` wird für eine Antwort zurückgegeben, deren [`type`](/de/docs/Web/API/Response/type) `opaque`, `opaqueredirect` oder `error` ist.

## Beispiele

In unserem [Fetch Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und übergeben ihm einen JPG-Pfad.
Wir holen dann diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch), extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen daraus eine Objekt-URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen diese in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks den `status`-Wert der Antwort in die Konsole protokollieren.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
