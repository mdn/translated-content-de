---
title: "Response: ok-Eigenschaft"
short-title: ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`ok`** schreibgeschützte Eigenschaft des [`Response`](/de/docs/Web/API/Response)-Interfaces enthält einen Boolean, der angibt, ob die Antwort erfolgreich war (Status im Bereich 200-299) oder nicht.

## Wert

Ein boolescher Wert.

## Beispiele

In unserem [Fetch-Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mithilfe des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors, indem wir ihm einen JPG-Pfad übergeben.
Wir führen dann diese Anforderung mit [`fetch()`](/de/docs/Web/API/Window/fetch) aus, extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen dies in einem {{htmlelement("img")}} an.

> [!NOTE]
> Zu Beginn des `fetch()`-Blocks protokollieren wir den `ok`-Wert der Antwort in die Konsole.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // returns true if the response returned successfully
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
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
