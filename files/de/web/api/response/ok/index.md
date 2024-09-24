---
title: "Response: ok-Eigenschaft"
short-title: ok
slug: Web/API/Response/ok
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`ok`**-Eigenschaft des {{domxref("Response")}}-Interfaces enthält einen Boolean-Wert, der angibt, ob die Antwort erfolgreich war (Status im Bereich 200-299) oder nicht.

## Wert

Ein Boolean-Wert.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor und übergeben ihm einen JPG-Pfad.
Wir holen dann diese Anfrage mit {{domxref("Window/fetch", "fetch()")}}, extrahieren ein Blob aus der Antwort mit {{domxref("Response.blob")}}, erstellen eine Objekt-URL daraus mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und zeigen dieses in einem {{htmlelement("img")}} an.

> [!NOTE]
> Am Anfang des `fetch()`-Blocks protokollieren wir den `ok`-Wert der Antwort in der Konsole.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // gibt true zurück, wenn die Antwort erfolgreich war
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
