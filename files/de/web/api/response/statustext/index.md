---
title: "Response: statusText-Eigenschaft"
short-title: statusText
slug: Web/API/Response/statusText
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`statusText`** schreibgeschützte Eigenschaft der [`Response`](/de/docs/Web/API/Response) Schnittstelle enthält die Statusmeldung, die dem HTTP-Statuscode in [`Response.status`](/de/docs/Web/API/Response/status) entspricht.

Zum Beispiel wäre dies `OK` für den Statuscode `200`, `Continue` für `100`, `Not Found` für `404`.

## Wert

Ein {{jsxref("String")}}, der die HTTP-Statusmeldung enthält, die mit der Antwort verknüpft ist. Der Standardwert ist "".

Siehe [HTTP-Statuscodes der Antworten](/de/docs/Web/HTTP/Status) für eine Liste der Codes und ihrer zugehörigen Statusmeldungen. Beachten Sie, dass HTTP/2 [keine Statusmeldungen unterstützt](https://fetch.spec.whatwg.org/#concept-response-status-message).

## Beispiele

In unserem [Fetch Response-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (siehe [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) erstellen wir ein neues [`Request`](/de/docs/Web/API/Request) Objekt mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor, dem wir einen JPG-Pfad übergeben. Wir holen diese Anforderung dann mit [`fetch()`](/de/docs/Web/API/Window/fetch), extrahieren ein Blob aus der Antwort mit [`Response.blob`](/de/docs/Web/API/Response/blob), erstellen eine Objekt-URL daraus mit [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), und zeigen dies in einem {{htmlelement("img")}} an.

Beachten Sie, dass wir zu Beginn des `fetch()`-Blocks den `statusText`-Wert der Antwort in die Konsole protokollieren.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
