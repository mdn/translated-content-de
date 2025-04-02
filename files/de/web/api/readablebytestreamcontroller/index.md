---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableByteStreamController`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller für einen [lesbaren Bytestream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
Es ermöglicht die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit einer zugrunde liegenden Bytequelle und erlaubt effiziente Zero-Copy-Übertragungen von Daten von der zugrunde liegenden Quelle zu einem Verbraucher, wenn die interne Warteschlange des Streams leer ist.

Eine Instanz dieses Controller-Typs wird erstellt, wenn ein `underlyingSource`-Objekt mit der Eigenschaft `type="bytes"` als Argument an den [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.
Das `underlyingSource`-Objekt kann auch [`start()`](/de/docs/Web/API/ReadableStream/ReadableStream#start)- und [`pull()`](/de/docs/Web/API/ReadableStream/ReadableStream#pull)-Callback-Funktionen definieren.
Diese werden mit dem Controller als Parameter aufgerufen, um die zugrunde liegende Quelle einzurichten und bei Bedarf Daten anzufordern.

Die zugrunde liegende Quelle verwendet den Controller, um über seine [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)-Eigenschaft oder die [`enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue)-Methode Daten an den Stream zu liefern.
`byobRequest` ist ein [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objekt, das eine ausstehende Anfrage von einem Verbraucher darstellt, eine Zero-Copy-Übertragung der Daten direkt an einen Verbraucher vorzunehmen.
`byobRequest` muss verwendet werden, um Daten zu kopieren, wenn es existiert (verwenden Sie in diesem Fall nicht `enqueue()`)!
Wenn die zugrunde liegende Quelle Daten an den Stream übergeben muss und `byobRequest` `null` ist, kann die Quelle `enqueue()` aufrufen, um die Daten der internen Warteschlange des Streams hinzuzufügen.

Beachten Sie, dass `byobRequest` nur im "BYOB-Modus" erstellt wird, wenn eine Anfrage von einem Leser vorliegt und die interne Warteschlange des Streams leer ist.
Der "BYOB-Modus" wird aktiviert, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise konstruiert durch Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`).
Er wird auch aktiviert, wenn ein Standardleser verwendet wird und [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) angegeben ist.

Eine zugrunde liegende Bytequelle kann auch den Controller verwenden, um den Stream mit [`close()`](/de/docs/Web/API/ReadableByteStreamController/close) zu schließen, wenn alle Daten gesendet wurden, und Fehler aus der zugrunde liegenden Quelle mit [`error()`](/de/docs/Web/API/ReadableByteStreamController/error) zu melden.
Die [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize)-Eigenschaft des Controllers wird verwendet, um "Backpressure" anzuwenden, indem sie der zugrunde liegenden Quelle die Größe der internen Warteschlange mitteilt (kleine Werte weisen darauf hin, dass sich die Warteschlange füllt und es für die zugrunde liegende Quelle wünschenswert ist, den Zustrom zu pausieren oder zu drosseln).

Beachten Sie, dass auch wenn der Controller hauptsächlich von der zugrunde liegenden Bytequelle verwendet wird, es keinen Grund gibt, warum er nicht von anderen Teilen des Systems gespeichert und verwendet werden kann, um dem Stream Signale zu geben.

## Konstruktor

Keiner. `ReadableByteStreamController`-Instanzen werden automatisch erstellt, wenn ein `underlyingSource` mit der Eigenschaft `type="bytes"` an den [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.

## Instanzeigenschaften

- [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) {{ReadOnlyInline}}
  - : Gibt die aktuelle BYOB-Aufzugsanforderung zurück oder `null`, wenn keine ausstehende Anfrage vorliegt.
- [`ReadableByteStreamController.desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- [`ReadableByteStreamController.close()`](/de/docs/Web/API/ReadableByteStreamController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue)
  - : Stellt ein gegebenes Chunk in der zugehörigen Stream-Warteschlange bereit.
- [`ReadableByteStreamController.error()`](/de/docs/Web/API/ReadableByteStreamController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

Der Controller wird von einer zugrunde liegenden Quelle verwendet, um Daten zu übertragen oder in die Warteschlange zu stellen, um zu signalisieren, dass der Stream keine Daten mehr hat (geschlossen wurde) oder fehlerhaft ist. Er wird auch verwendet, um die zugrunde liegende Quelle von "stromaufwärts" hinsichtlich der gewünschten Datenrate zu signalisieren, indem [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) verwendet wird.

Das Beispiel in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), insbesondere [Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), zeigt die meisten dieser Fälle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und transformierenden Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
