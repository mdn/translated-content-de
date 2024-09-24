---
title: "ReadableByteStreamController: Eigenschaft byobRequest"
short-title: byobRequest
slug: Web/API/ReadableByteStreamController/byobRequest
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`byobRequest`** des {{domxref("ReadableByteStreamController")}}-Interfaces gibt die aktuelle BYOB-Anforderung zurück oder `null`, wenn keine ausstehenden Anforderungen vorhanden sind.

Eine zugrunde liegende Byte-Quelle sollte diese Eigenschaft überprüfen und verwenden, um Daten in den Stream zu schreiben, wenn sie existiert (anstatt {{domxref("ReadableByteStreamController.enqueue()")}} zu verwenden).
Dies führt zu einer effizienten Null-Byte-Übertragung der Daten an den Verbraucher.

## Wert

Eine Instanz des {{domxref("ReadableStreamBYOBRequest")}}-Objekts oder `null`.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Byte-Streams > Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie eine `byobRequest` verwenden, um Daten zu übertragen (falls vorhanden) oder andernfalls die Daten in die internen Warteschlangen des Streams kopieren, indem Sie {{domxref("ReadableByteStreamController.enqueue()")}} verwenden.

Der relevante Code wird unten wiedergegeben.
Falls die `byobRequest` existiert, werden Daten in {{domxref("ReadableStreamBYOBRequest.view","controller.byobRequest.view")}} eingelesen, und dann wird {{domxref("ReadableStreamBYOBRequest.respond()")}} aufgerufen, um die Menge an Daten zu signalisieren, die bereit ist zur Übertragung.

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

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
