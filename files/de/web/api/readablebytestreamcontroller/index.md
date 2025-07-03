---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: 7d37e07f04c40ecbfd424d6fce0766ef3d2f7db4
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableByteStreamController`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) stellt einen Controller für einen [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) dar.
Es ermöglicht die Kontrolle des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit einer zugrunde liegenden Bytequelle und ermöglicht einen effizienten Zero-Copy-Datentransfer von der zugrunde liegenden Quelle zu einem Verbraucher, wenn die interne Warteschlange des Streams leer ist.

Eine Instanz dieses Controller-Typs wird erstellt, wenn ein `underlyingSource`-Objekt mit der Eigenschaft `type="bytes"` als Argument an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.
Das `underlyingSource`-Objekt kann auch die Callback-Funktionen [`start()`](/de/docs/Web/API/ReadableStream/ReadableStream#start) und [`pull()`](/de/docs/Web/API/ReadableStream/ReadableStream#pull) definieren.
Diese werden mit dem Controller als Parameter aufgerufen, um die zugrunde liegende Quelle einzurichten und bei Bedarf Daten anzufordern.

Die zugrunde liegende Quelle verwendet den Controller, um Daten über dessen [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)-Eigenschaft oder die Methode [`enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) an den Stream zu übermitteln.
`byobRequest` ist ein [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objekt, das eine ausstehende Anfrage von einem Verbraucher darstellt, um einen Zero-Copy-Datentransfer direkt an einen Verbraucher durchzuführen.
`byobRequest` muss verwendet werden, um Daten zu kopieren, falls es existiert (verwenden Sie in diesem Fall nicht `enqueue()`)!
Wenn die zugrunde liegende Quelle Daten an den Stream übergeben muss und `byobRequest` `null` ist, kann die Quelle `enqueue()` aufrufen, um die Daten zur internen Warteschlange des Streams hinzuzufügen.

Beachten Sie, dass `byobRequest` nur im "BYOB-Modus" erstellt wird, wenn eine Anfrage von einem Leser vorliegt und die interne Warteschlange des Streams leer ist.
Der "BYOB-Modus" wird aktiviert, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise konstruiert durch den Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`).
Er wird auch aktiviert, wenn ein Standardleser verwendet wird und [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) angegeben ist.

Eine zugrunde liegende Bytequelle kann auch den Controller verwenden, um den Stream mittels [`close()`](/de/docs/Web/API/ReadableByteStreamController/close) zu schließen, wenn alle Daten gesendet wurden, und um Fehler von der zugrunde liegenden Quelle mit [`error()`](/de/docs/Web/API/ReadableByteStreamController/error) zu melden.
Die [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize)-Eigenschaft des Controllers wird verwendet, um "Backpressure" anzuwenden, indem sie die zugrunde liegende Quelle über die Größe der internen Warteschlange informiert (kleine Werte deuten darauf hin, dass die Warteschlange sich füllt, was der zugrunde liegenden Quelle das Pausieren oder Drosseln des Zuflusses nahelegt).

Beachten Sie, dass der Controller zwar hauptsächlich von der zugrunde liegenden Bytequelle verwendet wird, aber es keinen Grund gibt, warum er nicht von anderen Teilen des Systems verwendet werden könnte, um dem Stream Signale zu geben.

## Konstruktor

Keiner. `ReadableByteStreamController`-Instanzen werden automatisch erstellt, wenn ein `underlyingSource` mit der Eigenschaft `type="bytes"` an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.

## Instanz-Eigenschaften

- [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) {{ReadOnlyInline}}
  - : Gibt die aktuelle BYOB-Abfrage zurück oder `null`, wenn keine ausstehende Anfrage vorliegt.
- [`ReadableByteStreamController.desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanz-Methoden

- [`ReadableByteStreamController.close()`](/de/docs/Web/API/ReadableByteStreamController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue)
  - : Fügt einen gegebenen Chunk in die zugehörige Warteschlange des Streams ein.
- [`ReadableByteStreamController.error()`](/de/docs/Web/API/ReadableByteStreamController/error)
  - : Führt dazu, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlerhaft sind.

## Beispiele

Der Controller wird von einer zugrunde liegenden Quelle verwendet, um Daten zu übertragen oder in die Warteschlange einzufügen, um zu signalisieren, dass der Stream keine Daten mehr hat (geschlossen ist) oder fehlerhaft ist. Er wird auch verwendet, um der zugrunde liegenden Quelle von "upstream" die gewünschte Datenrate mitzuteilen, indem [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) verwendet wird.

Das Beispiel in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), insbesondere [Erstellung eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), zeigt die meisten dieser Fälle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
