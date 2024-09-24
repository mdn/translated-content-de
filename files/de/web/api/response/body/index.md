---
title: "Response: body-Eigenschaft"
short-title: body
slug: Web/API/Response/body
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`body`**-Eigenschaft des {{domxref("Response")}}-Interfaces ist ein {{domxref("ReadableStream")}} der Inhalt des Bodies.

## Wert

Ein {{domxref("ReadableStream")}}, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für jedes `Response`-Objekt, das mit einer null [`body`](/de/docs/Web/API/Response/Response#body)-Eigenschaft [konstruiert](/de/docs/Web/API/Response/Response) wurde, oder für jede tatsächliche [HTTP-Antwort](/de/docs/Web/HTTP/Messages#http_responses), die keinen [Body](/de/docs/Web/HTTP/Messages#body_2) hat.

Der Stream ist ein [lesbarer Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), der Zero-Copy-Lesen mit einem {{domxref("ReadableStreamBYOBReader")}} unterstützt.

> [!NOTE]
> Aktuelle Browser entsprechen nicht tatsächlich der Spezifikation, die vorschreibt, die `body`-Eigenschaft für Antworten ohne Body (zum Beispiel Antworten auf [`HEAD`](/de/docs/Web/HTTP/Methods/HEAD)-Anfragen oder [`204 No Content`](/de/docs/Web/HTTP/Status/204)-Antworten) auf `null` zu setzen.

## Beispiele

### Kopieren eines Bildes

In unserem [einfachen Stream-Pump](https://mdn.github.io/dom-examples/streams/simple-pump/)-Beispiel holen wir ein Bild,
stellen den Stream der Antwort mittels `response.body` bereit, erstellen einen Leser mit {{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}},
dann fügen wir die Chunks dieses Streams in einen zweiten, benutzerdefinierten lesbaren Stream ein – wodurch effektiv eine identische Kopie des Bildes erstellt wird.

```js
const image = document.getElementById("target");

// Holen Sie das Originalbild
fetch("./tortoise.png")
  // Rufen Sie seinen Body als ReadableStream ab
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();

    return new ReadableStream({
      start(controller) {
        return pump();

        function pump() {
          return reader.read().then(({ done, value }) => {
            // Wenn keine Daten mehr konsumiert werden müssen, schließen Sie den Stream
            if (done) {
              controller.close();
              return;
            }

            // Fügen Sie den nächsten Datenchunk in unseren Zielstream ein
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

In diesem Beispiel konstruieren wir einen {{domxref("ReadableStreamBYOBReader")}} vom Body mit {{domxref("ReadableStream.getReader()", "ReadableStream.getReader({mode: 'byob'})")}}. Wir können diesen Leser dann verwenden, um eine Zero-Copy-Übertragung der Antwortdaten zu implementieren.

```js
async function getProducts(url) {
  const response = await fetch(url);
  const reader = response.body.getReader({ mode: "byob" });
  // lesen Sie die Antwort
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
