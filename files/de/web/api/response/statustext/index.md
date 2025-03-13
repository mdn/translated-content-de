---
title: "Response: statusText-Eigenschaft"
short-title: statusText
slug: Web/API/Response/statusText
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`statusText`**-Eigenschaft (schreibgeschützt) der [`Response`](/de/docs/Web/API/Response)-Schnittstelle enthält die Statusnachricht, die dem HTTP-Statuscode in [`Response.status`](/de/docs/Web/API/Response/status) entspricht.

Beispielsweise wäre dies `OK` für einen Statuscode von `200`, `Continue` für `100`, `Not Found` für `404`.

## Wert

Ein {{jsxref("String")}}, der die HTTP-Statusnachricht enthält, die der Antwort zugeordnet ist.
Der Standardwert ist "".

Sehen Sie sich [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status) für eine Liste von Codes und deren zugehörige Statusnachrichten an.
Beachten Sie, dass HTTP/2 [unterstützt keine](https://fetch.spec.whatwg.org/#concept-response-status-message) Statusmeldungen.

## Beispiele

In unserem [Fetch Response Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request)-Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor, indem wir ihm einen JPG-Pfad übergeben.
Wir holen dann diese Anfrage mithilfe von [`fetch()`](/de/docs/Web/API/Window/fetch), extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und zeigen dies in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir oben im `fetch()`-Block den `statusText`-Wert der Antwort in der Konsole protokollieren.

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

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
