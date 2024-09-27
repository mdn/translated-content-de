---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableByteStreamController`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller für einen [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
Es ermöglicht die Kontrolle des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit einer zugrunde liegenden Byte-Quelle und ermöglicht eine effiziente Zero-Copy-Übertragung von Daten von der zugrunde liegenden Quelle zu einem Verbraucher, wenn die interne Warteschlange des Streams leer ist.

Eine Instanz dieses Controllertyps wird erstellt, wenn ein `underlyingSource`-Objekt mit der Eigenschaft `type="bytes"` als Argument an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.
Das `underlyingSource`-Objekt kann auch die Callback-Funktionen [`start()`](/de/docs/Web/API/ReadableStream/ReadableStream#start) und [`pull()`](/de/docs/Web/API/ReadableStream/ReadableStream#pull) definieren.
Diese werden mit dem Controller als Parameter aufgerufen, um die zugrunde liegende Quelle einzurichten und bei Bedarf Daten anzufordern.

Die zugrunde liegende Quelle verwendet den Controller, um Daten über seine [`byobRequest`](#readablebytestreamcontroller.byobrequest)-Eigenschaft oder die [`enqueue()`](#readablebytestreamcontroller.enqueue)-Methode an den Stream zu liefern.
[`byobRequest`](#readablebytestreamcontroller.byobrequest) ist ein [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objekt, das eine ausstehende Anforderung von einem Verbraucher darstellt, um eine Zero-Copy-Übertragung von Daten direkt zu einem Verbraucher durchzuführen.
`byobRequest` muss verwendet werden, um Daten zu kopieren, wenn es existiert (in diesem Fall `enqueue()` nicht verwenden)!
Wenn die zugrunde liegende Quelle Daten an den Stream übergeben muss und `byobRequest` `null` ist, kann die Quelle [`enqueue()`](#readablebytestreamcontroller.enqueue) aufrufen, um die Daten zur internen Warteschlange des Streams hinzuzufügen.

Beachten Sie, dass das [`byobRequest`](#readablebytestreamcontroller.byobrequest) nur im „BYOB-Modus“ erstellt wird, wenn eine Anforderung von einem Leser vorliegt und die interne Warteschlange des Streams leer ist.
Der „BYOB-Modus“ wird aktiviert, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (in der Regel erstellt durch Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`).
Es wird auch aktiviert, wenn ein Standardleser verwendet wird und [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben ist.

Eine zugrunde liegende Byte-Quelle kann den Controller auch verwenden, um den Stream zu [`close()`](#readablebytestreamcontroller.close), wenn alle Daten gesendet wurden, und Fehler von der zugrunde liegenden Quelle mit [`error()`](#readablebytestreamcontroller.error) zu melden.
Die [`desiredSize`](#readablebytestreamcontroller.desiredsize)-Eigenschaft des Controllers wird verwendet, um „Rückstau“ anzuwenden, indem sie die zugrunde liegende Quelle über die Größe der internen Warteschlange informiert (kleine Werte weisen darauf hin, dass die Warteschlange sich füllt, was der zugrunde liegenden Quelle signalisiert, dass es wünschenswert sein könnte, den Zufluss zu pausieren oder zu drosseln).

Beachten Sie, dass, obwohl der Controller hauptsächlich von der zugrunde liegenden Byte-Quelle verwendet wird, es keinen Grund gibt, ihn nicht auch von anderen Teilen des Systems zu verwenden, um den Stream zu signalisieren.

## Konstruktor

Keine. `ReadableByteStreamController`-Instanzen werden automatisch erstellt, wenn ein `underlyingSource` mit der Eigenschaft `type="bytes"` an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.

## Instanzeigenschaften

- [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) {{ReadOnlyInline}}
  - : Gibt die aktuelle BYOB-Abzugsanforderung zurück oder `null`, wenn keine ausstehende Anforderung vorliegt.
- [`ReadableByteStreamController.desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- [`ReadableByteStreamController.close()`](/de/docs/Web/API/ReadableByteStreamController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue)
  - : Stellt einen gegebenen Chunk in die zugehörige Stream-Warteschlange ein.
- [`ReadableByteStreamController.error()`](/de/docs/Web/API/ReadableByteStreamController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream einen Fehler aufweisen.

## Beispiele

Der Controller wird von einer zugrunde liegenden Quelle verwendet, um Daten zu übertragen oder in die Warteschlange zu stellen, um zu signalisieren, dass der Stream keine Daten mehr hat (geschlossen ist) oder fehlerhaft ist. Er wird auch verwendet, um die zugrunde liegende Quelle von „upstream“ über die gewünschte Datenrate, mittels [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize), zu informieren.

Das Beispiel in [Using readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), insbesondere im Abschnitt [Creating a readable socket push byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), zeigt die meisten dieser Fälle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transform-Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
