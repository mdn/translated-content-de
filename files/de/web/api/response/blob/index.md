---
title: "Response: blob()-Methode"
short-title: blob()
slug: Web/API/Response/blob
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`blob()`**-Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle nimmt
einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig. Sie gibt ein Promise zurück, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

> [!NOTE]
> Wenn die [`Response`](/de/docs/Web/API/Response) einen
> [`Response.type`](/de/docs/Web/API/Response/type) von `"opaque"` hat, wird der resultierende [`Blob`](/de/docs/Web/API/Blob)
> eine [`Blob.size`](/de/docs/Web/API/Blob/size) von `0` und einen [`Blob.type`](/de/docs/Web/API/Blob/type) von
> leerem String `""` haben, was ihn _unbrauchbar_ für Methoden wie
> [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) macht.

### Rückgabewert

Ein Promise, das mit einem [`Blob`](/de/docs/Web/API/Blob) aufgelöst wird.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Anforderungskörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).

## Beispiele

In unserem [Fetch-Anfrage-Beispiel](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (führen Sie die [Fetch-Anfrage live aus](https://mdn.github.io/dom-examples/fetch/fetch-request/)), erstellen wir
eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden sie, um ein JPG zu holen. Wenn das Fetch erfolgreich ist, lesen wir ein [`Blob`](/de/docs/Web/API/Blob)
aus der Antwort mit `blob()`, platzieren es in einer Objekt-URL mithilfe von
[`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und setzen diese URL als Quelle eines {{htmlelement("img")}}-Elements, um das Bild anzuzeigen.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
