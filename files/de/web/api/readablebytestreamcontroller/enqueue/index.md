---
title: "ReadableByteStreamController: enqueue() Methode"
short-title: enqueue()
slug: Web/API/ReadableByteStreamController/enqueue
l10n:
  sourceCommit: bdcf6443a4f745d6522dc98d7286a2a47b76b408
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode der [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Schnittstelle stellt ein gegebenes Datenstück in den zugehörigen lesbaren Bytestrom in die Warteschlange (das Datenstück wird in die internen Warteschlangen des Streams übertragen).

Dies sollte nur verwendet werden, um Daten in die Warteschlange zu übertragen, wenn [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) `null` ist.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Das Datenstück, das in die Warteschlange gestellt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist, oder der Stream aus einem anderen Grund nicht gelesen werden kann, oder das Datenstück kein Objekt ist, oder der interne Array-Puffer des Datenstücks nicht existiert, null oder abgetrennt ist.
    Es wird auch ausgelöst, wenn der Stream geschlossen wurde.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie `enqueue()` verwenden können, um Daten in den Stream zu kopieren, wenn kein ausstehender [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vorhanden ist.
Wenn ein `byobRequest` vorliegt, sollte dieser verwendet werden!

Der folgende Code zeigt, wie Daten mittels einer "hypothetischen" `socket.readInto()`-Methode in einen `ArrayBuffer` gelesen und dann in die Warteschlange gestellt werden (aber nur, wenn tatsächlich Daten kopiert wurden):

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
