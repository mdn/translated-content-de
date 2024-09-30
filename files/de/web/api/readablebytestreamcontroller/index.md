---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableByteStreamController`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller für einen [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams). Sie ermöglicht die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit einer zugrunde liegenden Byte-Quelle und erlaubt eine effiziente Zero-Copy-Übertragung von Daten von der zugrunde liegenden Quelle zu einem Verbraucher, wenn die interne Warteschlange des Streams leer ist.

Eine Instanz dieses Controller-Typs wird erstellt, wenn ein `underlyingSource`-Objekt mit der Eigenschaft `type="bytes"` als Argument an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird. Das `underlyingSource`-Objekt kann auch die Callback-Funktionen [`start()`](/de/docs/Web/API/ReadableStream/ReadableStream#start) und [`pull()`](/de/docs/Web/API/ReadableStream/ReadableStream#pull) definieren. Diese werden mit dem Controller als Parameter aufgerufen, um die zugrunde liegende Quelle einzurichten und Daten anzufordern, wenn sie benötigt werden.

Die zugrunde liegende Quelle verwendet den Controller, um Daten über seine [`byobRequest`](#readablebytestreamcontroller.byobrequest)-Eigenschaft oder die [`enqueue()`](#readablebytestreamcontroller.enqueue)-Methode an den Stream zu liefern. [`byobRequest`](#readablebytestreamcontroller.byobrequest) ist ein [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objekt, das eine ausstehende Anforderung eines Verbrauchers repräsentiert, eine Zero-Copy-Übertragung von Daten direkt an einen Verbraucher vorzunehmen. `byobRequest` muss verwendet werden, um Daten zu kopieren, falls es existiert (verwenden Sie in diesem Fall nicht `enqueue()`). Wenn die zugrunde liegende Quelle Daten an den Stream senden muss und `byobRequest` `null` ist, kann die Quelle [`enqueue()`](#readablebytestreamcontroller.enqueue) aufrufen, um die Daten in die internen Warteschlangen des Streams einzufügen.

Beachten Sie, dass die [`byobRequest`](#readablebytestreamcontroller.byobrequest) nur im "BYOB-Modus" erstellt wird, wenn eine Anforderung eines Lesers vorliegt und die interne Warteschlange des Streams leer ist. Der "BYOB-Modus" ist aktiviert, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise erzeugt durch Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`). Es wird auch aktiviert, wenn ein Standardleser verwendet wird und [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben wird.

Eine zugrunde liegende Byte-Quelle kann den Controller auch verwenden, um den Stream zu [`close()`](#readablebytestreamcontroller.close), wenn alle Daten gesendet wurden, und Fehler von der zugrunde liegenden Quelle mit [`error()`](#readablebytestreamcontroller.error) zu melden. Die [`desiredSize`](#readablebytestreamcontroller.desiredsize)-Eigenschaft des Controllers wird verwendet, um "Backpressure" anzuwenden, indem sie der zugrunde liegenden Quelle die Größe der internen Warteschlange mitteilt (kleine Werte deuten darauf hin, dass die Warteschlange sich füllt und es für die zugrunde liegende Quelle wünschenswert sein könnte, das Zufluss-Tempo zu pausieren oder zu drosseln).

Beachten Sie, dass, obwohl der Controller hauptsächlich von der zugrunde liegenden Byte-Quelle verwendet wird, kein Grund besteht, dass er nicht auch von anderen Teilen des Systems genutzt werden kann, um dem Stream Signale zu senden.

## Konstruktor

Keine. `ReadableByteStreamController`-Instanzen werden automatisch erstellt, wenn ein `underlyingSource` mit der Eigenschaft `type="bytes"` an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.

## Instanz-Eigenschaften

- [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) {{ReadOnlyInline}}
  - : Gibt die aktuelle BYOB-Abzugsanforderung zurück oder `null`, falls keine ausstehende Anforderung besteht.
- [`ReadableByteStreamController.desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanz-Methoden

- [`ReadableByteStreamController.close()`](/de/docs/Web/API/ReadableByteStreamController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue)
  - : Stellt einen gegebenen Datenblock in die zugehörige Stream-Warteschlange.
- [`ReadableByteStreamController.error()`](/de/docs/Web/API/ReadableByteStreamController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream einen Fehler auslösen.

## Beispiele

Der Controller wird von einer zugrunde liegenden Quelle verwendet, um Daten zu übertragen oder einzureihen, um zu signalisieren, dass der Stream keine Daten mehr hat (geschlossen wurde) oder dass ein Fehler aufgetreten ist. Er wird auch verwendet, um die zugrunde liegende Quelle von "stromaufwärts" über die gewünschte Datenrate zu informieren, unter Verwendung von [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize).

Das Beispiel in [Using readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), insbesondere [Creating a readable socket push byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), zeigt die meisten dieser Fälle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API concepts](/de/docs/Web/API/Streams_API)
- [Using readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lebbaren, beschreibbaren und Transformationsstreams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
