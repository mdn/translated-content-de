---
title: "Response: body-Eigenschaft"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`body`**-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle ist ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) des Körperinhalts.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), oder andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für jedes `Response`-Objekt, das mit einer null [`body`](/de/docs/Web/API/Response/Response#body)-Eigenschaft [konstruiert](/de/docs/Web/API/Response/Response) wurde, oder für jede tatsächliche [HTTP-Antwort](/de/docs/Web/HTTP/Messages#http_responses), die keinen [Body](/de/docs/Web/HTTP/Messages#body_2) hat.

Der Stream ist ein [lesbarer Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), der das Zero-Copy-Lesen mit einem [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) unterstützt.

> [!NOTE]
> Aktuelle Browser entsprechen nicht tatsächlich der Spezifikationsanforderung, die `body`-Eigenschaft auf `null` zu setzen für Antworten ohne Body (zum Beispiel Antworten auf [`HEAD`](/de/docs/Web/HTTP/Methods/HEAD)-Anfragen oder [`204 No Content`](/de/docs/Web/HTTP/Status/204)-Antworten).

## Beispiele

### Kopieren eines Bildes

In unserem [einfachen Stream-Pumpen](https://mdn.github.io/dom-examples/streams/simple-pump/)-Beispiel rufen wir ein Bild ab, geben den Stream der Antwort über `response.body` frei, erstellen einen Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader), und stellen dann die Chunks dieses Streams in einen zweiten, benutzerdefinierten lesbaren Stream ein - und erzeugen damit effektiv eine identische Kopie des Bildes.

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

### Erstellen eines BYOB-Readers

In diesem Beispiel konstruieren wir einen [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) aus dem Body unter Verwendung von [`ReadableStream.getReader({mode: 'byob'})`](/de/docs/Web/API/ReadableStream/getReader). Wir können diesen Leser dann nutzen, um einen Zero-Copy-Transfer der Antwortdaten zu implementieren.

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
