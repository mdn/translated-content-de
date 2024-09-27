---
title: "Response: ok-Eigenschaft"
short-title: ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Fetch API")}}

Die **`ok`** schreibgeschützte Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle enthält einen Boolean, der angibt, ob die Antwort erfolgreich war (Status im Bereich 200-299) oder nicht.

## Wert

Ein boolescher Wert.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mittels des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors und übergeben ihm einen Pfad zu einer JPG-Datei. Anschließend rufen wir diese Anfrage mit [`fetch()`](/de/docs/Web/API/Window/fetch) ab, extrahieren ein Blob aus der Antwort mittels [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen daraus eine Objekt-URL mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen diese in einem {{htmlelement("img")}} an.

> [!NOTE]
> Am Anfang des `fetch()`-Blocks protokollieren wir den `ok`-Wert der Antwort in der Konsole.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
