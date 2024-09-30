---
title: "ReadableByteStreamController: byobRequest-Eigenschaft"
short-title: byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`byobRequest`** der Schnittstelle [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) gibt die aktuelle BYOB-Anfrage zurück oder `null`, wenn es keine ausstehenden Anfragen gibt.

Eine zugrunde liegende Byte-Quelle sollte diese Eigenschaft überprüfen und verwenden, um Daten in den Stream zu schreiben, falls sie existiert (anstatt [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) zu nutzen).
Dies führt zu einem effizienten Null-Byte-Transfer der Daten zum Verbraucher.

## Wert

Ein [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objektinstanz oder `null`.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie eine `byobRequest` verwenden, um Daten zu übertragen (falls sie existiert), oder anderweitig die Daten in die internen Warteschlangen des Streams mithilfe von [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) zu kopieren.

Der relevante Code wird unten wiedergegeben.
Falls eine `byobRequest` existiert, werden die Daten in [`controller.byobRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) gelesen und dann wird [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufgerufen, um die Menge der Daten zu signalisieren, die für den Transfer bereit sind.

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

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
