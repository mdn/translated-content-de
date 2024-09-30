---
title: "ReadableByteStreamController: enqueue() Methode"
short-title: enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`** Methode des [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) Interface stellt ein bestimmtes Chunk in den zugehörigen lesbaren Bytestrom ein (das Chunk wird in die internen Warteschlangen des Streams kopiert).

Dies sollte nur verwendet werden, um Daten in die Warteschlange zu übertragen, wenn [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) `null` ist.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Das Chunk, das in die Warteschlange gestellt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist, der Stream aus einem anderen Grund nicht lesbar ist, das Chunk kein Objekt ist oder dessen internes Array-Buffer nicht existiert, null ist oder getrennt wurde.
    Wird auch ausgelöst, wenn der Stream geschlossen wurde.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie `enqueue()` verwenden können, um Daten in den Stream zu kopieren, wenn keine ausstehende [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) besteht.
Falls es eine `byobRequest` gibt, sollte diese verwendet werden!

Der untenstehende Code zeigt, wie Daten mit einer "hypothetischen" `socket.readInto()` Methode in ein `ArrayBuffer` eingelesen und dann in die Warteschlange gestellt werden (aber nur, wenn tatsächlich Daten kopiert wurden):

```js
const buffer = new ArrayBuffer(DEFAULT_CHUNK_SIZE);
bytesRead = socket.readInto(buffer, 0, DEFAULT_CHUNK_SIZE);
if (bytesRead === 0) {
  controller.close();
} else {
  controller.enqueue(new Uint8Array(buffer, 0, bytesRead));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
