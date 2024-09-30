---
title: "Response: body-Eigenschaft"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`body`**-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle ist ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) des Inhalts des Bodys.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), oder andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für jedes `Response` Objekt, das mit einer null [`body`](/de/docs/Web/API/Response/Response#body)-Eigenschaft [konstruiert](/de/docs/Web/API/Response/Response) wurde, oder für jede tatsächliche [HTTP-Antwort](/de/docs/Web/HTTP/Messages#http_responses), die keinen [Body](/de/docs/Web/HTTP/Messages#body_2) hat.

Der Stream ist ein [lesbarer Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), der das Zero-Copy-Lesen mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) unterstützt.

> [!NOTE]
> Aktuelle Browser entsprechen tatsächlich nicht der Spezifikationsanforderung, die `body`-Eigenschaft auf `null` für Antworten ohne Body zu setzen (zum Beispiel Antworten auf [`HEAD`](/de/docs/Web/HTTP/Methods/HEAD)-Anfragen oder [`204 No Content`](/de/docs/Web/HTTP/Status/204)-Antworten).

## Beispiele

### Kopieren eines Bildes

In unserem [einfachen Stream-Pump](https://mdn.github.io/dom-examples/streams/simple-pump/)-Beispiel rufen wir ein Bild ab, stellen den Stream der Antwort mittels `response.body` bereit, erstellen einen Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), und fügen die Chunks dieses Streams in einen zweiten, benutzerdefinierten lesbaren Stream ein – was effektiv eine identische Kopie des Bildes erstellt.

```js
const image = document.getElementById("target");

// Fetch the original image
fetch("./tortoise.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();

    return new ReadableStream({
      start(controller) {
        return pump();

        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close();
              return;
            }

            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      },
    });
  })
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((url) => console.log((image.src = url)))
  .catch((err) => console.error(err));
```

### Erstellen eines BYOB-Lesers

In diesem Beispiel konstruieren wir einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) aus dem Body mittels [`ReadableStream.getReader({mode: 'byob'})`](/de/docs/Web/API/ReadableStream/getReader). Wir können dann diesen Leser verwenden, um eine Zero-Copy-Übertragung der Antwortdaten zu implementieren.

```js
async function getProducts(url) {
  const response = await fetch(url);
  const reader = response.body.getReader({ mode: "byob" });
  // read the response
}

getProducts(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
