---
title: "Response: statusText-Eigenschaft"
short-title: statusText
slug: Web/API/Response/statusText
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`statusText`**-Eigenschaft des {{domxref("Response")}}-Interfaces enthält die Statusnachricht, die dem HTTP-Statuscode in {{domxref("Response.status")}} entspricht.

Zum Beispiel wäre dies `OK` für einen Statuscode `200`, `Continue` für `100`, `Not Found` für `404`.

## Wert

Ein {{jsxref("String")}}, der die HTTP-Statusnachricht enthält, die mit der Antwort assoziiert ist.
Der Standardwert ist "".

Sehen Sie sich [HTTP-Statuscodes](/de/docs/Web/HTTP/Status) für eine Liste von Codes und ihren zugehörigen Statusnachrichten an.
Beachten Sie, dass HTTP/2 [unterstützt keine](https://fetch.spec.whatwg.org/#concept-response-status-message) Statusnachrichten.

## Beispiele

In unserem [Fetch Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues {{domxref("Request")}}-Objekt mit dem {{domxref("Request.Request","Request()")}}-Konstruktor, indem wir ihm einen JPG-Pfad übergeben.
Wir holen diese Anfrage dann mit {{domxref("Window/fetch", "fetch()")}}, extrahieren ein Blob aus der Antwort mit {{domxref("Response.blob")}}, erstellen daraus eine Objekt-URL mit {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und zeigen es in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir am Anfang des `fetch()`-Blocks den Wert `statusText` der Antwort in die Konsole protokollieren.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.statusText =", response.statusText); // response.statusText = "OK"
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

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
