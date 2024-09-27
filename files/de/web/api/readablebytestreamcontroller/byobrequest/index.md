---
title: "ReadableByteStreamController: byobRequest-Eigenschaft"
short-title: byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`byobRequest`**-Eigenschaft der [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Schnittstelle gibt die aktuelle BYOB-Anfrage zurück oder `null`, wenn keine ausstehenden Anfragen vorhanden sind.

Eine zugrunde liegende Byte-Quelle sollte diese Eigenschaft überprüfen und verwenden, um Daten an den Stream zu schreiben, falls sie existiert (anstatt [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) zu verwenden).
Dies führt zu einer effizienten Übertragung der Daten ohne zusätzlichen Byte-Transfer an den Verbraucher.

## Wert

Eine Instanz des [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objekts oder `null`.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Byte-Strömen > Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie eine `byobRequest` verwenden, um Daten zu übertragen (falls vorhanden), oder andernfalls die Daten in die internen Warteschlangen des Streams kopieren mithilfe von [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue).

Der relevante Code ist unten wiedergegeben.
Wenn die `byobRequest` existiert, werden Daten in [`controller.byobRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) gelesen, und dann wird [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufgerufen, um die Menge der Daten zu signalisieren, die zur Übertragung bereit sind.

```js
if (controller.byobRequest) {
  const v = controller.byobRequest.view;
  bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
  if (bytesRead === 0) {
    controller.close();
  }
  controller.byobRequest.respond(bytesRead);
} else {
  // Write to data using enqueue().
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Byte-Strömen](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
