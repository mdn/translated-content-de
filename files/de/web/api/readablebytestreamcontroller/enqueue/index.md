---
title: "ReadableByteStreamController: Methode enqueue()"
short-title: enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode der {{domxref("ReadableByteStreamController")}}-Schnittstelle reiht einen gegebenen Chunk in den zugehörigen lesbaren Bytestrom ein (der Chunk wird in die internen Warteschlangen des Streams kopiert).

Diese Methode sollte nur verwendet werden, um Daten in die Warteschlange zu übertragen, wenn {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} `null` ist.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Der Chunk, der eingereiht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist, der Stream aus einem anderen Grund nicht gelesen werden kann, der Chunk kein Objekt ist oder der interne Array-Puffer des Chunks nicht vorhanden, null oder getrennt ist.
    Wird auch ausgelöst, wenn der Stream geschlossen wurde.

## Beispiele

Das Beispiel in [Verwendung lesbarer Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie `enqueue()` verwenden können, um Daten in den Stream zu kopieren, wenn kein ausstehendes {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} besteht.
Wenn ein `byobRequest` vorhanden ist, sollte dieser verwendet werden!

Der folgende Code zeigt, wie Daten in einen `ArrayBuffer` gelesen werden, indem eine "hypothetische" `socket.readInto()`-Methode verwendet wird, und dann eingereiht werden (aber nur, wenn tatsächlich Daten kopiert wurden):

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

- [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
