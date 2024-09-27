---
title: "Response: body-Eigenschaft"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die **`body`** Leseeigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle ist ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) des Inhalts des Bodys.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für jedes `Response`-Objekt, das mit einer null-[`body`](/de/docs/Web/API/Response/Response#body)-Eigenschaft [konstruiert](/de/docs/Web/API/Response/Response) wurde, oder für jede tatsächliche [HTTP-Antwort](/de/docs/Web/HTTP/Messages#http_responses), die keinen [body](/de/docs/Web/HTTP/Messages#body_2) hat.

Der Stream ist ein [lesbarer Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), der das Zero-Copy-Lesen mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) unterstützt.

> [!NOTE]
> Aktuelle Browser erfüllen nicht tatsächlich die Anforderung der Spezifikation, die `body`-Eigenschaft auf `null` zu setzen für Antworten ohne Body (z. B. Antworten auf [`HEAD`](/de/docs/Web/HTTP/Methods/HEAD)-Anfragen oder [`204 No Content`](/de/docs/Web/HTTP/Status/204)-Antworten).

## Beispiele

### Ein Bild kopieren

In unserem [einfachen Stream-Pump](https://mdn.github.io/dom-examples/streams/simple-pump/)-Beispiel holen wir ein Bild, stellen den Stream der Antwort mit `response.body` bereit, erstellen einen Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) und fügen dann die Chunks dieses Streams in einen zweiten, benutzerdefinierten lesbaren Stream ein – wodurch effektiv eine identische Kopie des Bildes erstellt wird.

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

In diesem Beispiel konstruieren wir einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) aus dem Body mithilfe von [`ReadableStream.getReader({mode: 'byob'})`](/de/docs/Web/API/ReadableStream/getReader). Wir können diesen Leser dann verwenden, um eine Zero-Copy-Übertragung der Antwortdaten zu implementieren.

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
