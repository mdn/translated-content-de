---
title: "ReadableStream: getReader()-Methode"
short-title: getReader()
slug: Web/API/ReadableStream/getReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`getReader()`**-Methode der {{domxref("ReadableStream")}}-Schnittstelle erstellt einen Leser und sperrt den Stream für diesen.
Solange der Stream gesperrt ist, kann kein anderer Leser erworben werden, bis dieser freigegeben wird.

## Syntax

```js-nolint
getReader()
getReader(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `mode` {{optional_inline}}

      - : Eine Eigenschaft, die den Typ des zu erstellenden Lesers angibt.
        Werte können sein:

        - `"byob"`, wodurch ein {{domxref("ReadableStreamBYOBReader")}} erstellt wird, der lesbare Byte-Streams lesen kann (Streams, die die Null-Kopierübertragung aus einer zugrunde liegenden Bytequelle an den Leser unterstützen, wenn die internen Stream-Puffer leer sind).
        - `undefined` (oder überhaupt nicht angegeben — dies ist der Standard), wodurch ein {{domxref("ReadableStreamDefaultReader")}} erstellt wird, der einzelne Chunks aus einem Stream lesen kann.

### Rückgabewert

Eine Instanz eines {{domxref("ReadableStreamDefaultReader")}} oder {{domxref("ReadableStreamBYOBReader")}}-Objekts, abhängig vom `mode`-Wert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Moduswert nicht `"byob"` oder `undefined` ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Stream, für den Sie einen Leser erstellen möchten, bereits gesperrt oder kein {{domxref("ReadableStream")}} ist.
    Dies wird auch ausgelöst, wenn ein BYOB-Reader angefordert wird und der Stream-Controller kein {{domxref("ReadableByteStreamController")}} ist (der Stream wurde nicht als zugrunde liegende Quelle mit [`type="bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) erstellt).

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mit einem {{domxref("ReadableStreamDefaultReader")}}, der mit `getReader()` erstellt wurde, gelesen.
(Sehen Sie sich unser [Einfaches zufälliges Stream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code an).
Jedes Chunk wird nacheinander gelesen und in der Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde, woraufhin wir aus der rekursiven Funktion zurückkehren und den gesamten Stream in einem anderen Teil der Benutzeroberfläche ausgeben.

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() gibt ein Promise zurück, das aufgelöst wird,
  // wenn ein Wert empfangen wurde
  reader.read().then(function processText({ done, value }) {
    // Ergebnisobjekte enthalten zwei Eigenschaften:
    // done  - True, wenn der Stream Ihnen bereits alle seine Daten gegeben hat.
    // value - einige Daten. Immer undefined, wenn done true ist.
    if (done) {
      console.log("Stream komplett");
      para.textContent = value;
      return;
    }

    // Wert für Fetch-Streams ist ein Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent = `Bisher ${charsReceived} Zeichen erhalten. Aktueller Chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Lesen Sie noch etwas mehr und rufen Sie diese Funktion erneut auf
    return reader.read().then(processText);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor
- {{domxref("ReadableStreamDefaultReader")}}
- {{domxref("ReadableStreamBYOBReader")}}
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
