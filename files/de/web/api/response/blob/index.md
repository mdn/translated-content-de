---
title: "Response: blob() Methode"
short-title: blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`blob()`** Methode der [`Response`](/de/docs/Web/API/Response) Schnittstelle nimmt
einen [`Response`](/de/docs/Web/API/Response) Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück, das
mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

> [!NOTE]
> Wenn [`Response`](/de/docs/Web/API/Response) einen
> [`Response.type`](/de/docs/Web/API/Response/type) von `"opaque"` hat, wird das resultierende [`Blob`](/de/docs/Web/API/Blob)
> eine [`Blob.size`](/de/docs/Web/API/Blob/size) von `0` haben und einen [`Blob.type`](/de/docs/Web/API/Blob/type) von
> einem leeren String `""`, was es für Methoden wie
> [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) _nutzlos_ macht.

### Rückgabewert

Ein Promise, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wirft eine der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).

## Beispiele

In unserem [fetch request Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (führen Sie [fetch request live aus](https://mdn.github.io/dom-examples/fetch/fetch-request/)), erstellen wir
eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor,
und verwenden diese, um ein JPG abzurufen. Wenn der Abruf erfolgreich ist, lesen wir ein [`Blob`](/de/docs/Web/API/Blob)
aus der Antwort mit `blob()`, setzen es in eine Objekt-URL mit
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), und setzen diese URL als Quelle eines
{{htmlelement("img")}} Elements, um das Bild anzuzeigen.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => response.blob())
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
