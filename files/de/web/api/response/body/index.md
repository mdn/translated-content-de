---
title: "Response: body-Eigenschaft"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`body`**-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle ist ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) der Körperinhalte.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für jedes `Response`-Objekt, das mit einer null [`body`](/de/docs/Web/API/Response/Response#body)-Eigenschaft [konstruiert](/de/docs/Web/API/Response/Response) wurde, oder für jede tatsächliche [HTTP-Antwort](/de/docs/Web/HTTP/Guides/Messages#http_responses), die keinen [body](/de/docs/Web/HTTP/Guides/Messages#response_body) hat.

Der Stream ist ein [lesbarer Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), der Zero-Copy-Reading unter Verwendung eines [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) unterstützt.

> [!NOTE]
> Aktuelle Browser erfüllen tatsächlich nicht die Spezifikationsanforderung, die `body`-Eigenschaft auf `null` zu setzen für Antworten ohne Körper (zum Beispiel Antworten auf [`HEAD`](/de/docs/Web/HTTP/Reference/Methods/HEAD)-Anfragen oder [`204 No Content`](/de/docs/Web/HTTP/Reference/Status/204)-Antworten).

## Beispiele

### Kopieren eines Bildes

In unserem Beispiel [einfacher Strompump](https://mdn.github.io/dom-examples/streams/simple-pump/) holen wir ein Bild ab,
stellen den Stream der Antwort mit `response.body` zur Verfügung, erstellen einen Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader),
und stellen dann die Chunks dieses Streams in einen zweiten, benutzerdefinierten lesbaren Stream ein — effektiv eine identische Kopie des Bildes erstellend.

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

In diesem Beispiel konstruieren wir einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) aus dem Körper unter Verwendung von [`ReadableStream.getReader({mode: 'byob'})`](/de/docs/Web/API/ReadableStream/getReader). Wir können diesen Leser dann nutzen, um die Antwortdaten ohne Kopie zu übertragen.

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
