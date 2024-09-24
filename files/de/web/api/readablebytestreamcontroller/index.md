---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableByteStreamController`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller für einen [lesbaren Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
Sie ermöglicht die Kontrolle des Zustands und der internen Warteschlange eines {{domxref("ReadableStream")}} mit einer zugrunde liegenden Byte-Quelle und erlaubt eine effiziente Zero-Copy-Übertragung von Daten von der zugrunde liegenden Quelle zu einem Verbraucher, wenn die interne Warteschlange des Streams leer ist.

Eine Instanz dieses Kontrollertyps wird erstellt, wenn ein `underlyingSource`-Objekt mit der Eigenschaft `type="bytes"` als Argument an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.
Das `underlyingSource`-Objekt kann auch die Callback-Funktionen [`start()`](/de/docs/Web/API/ReadableStream/ReadableStream#start) und [`pull()`](/de/docs/Web/API/ReadableStream/ReadableStream#pull) definieren.
Diese werden mit dem Controller als Parameter aufgerufen, um die zugrunde liegende Quelle einzurichten und bei Bedarf Daten anzufordern.

Die zugrunde liegende Quelle verwendet den Controller, um Daten an den Stream über seine [`byobRequest`](#readablebytestreamcontroller.byobrequest)-Eigenschaft oder seine [`enqueue()`](#readablebytestreamcontroller.enqueue)-Methode zu liefern.
[`byobRequest`](#readablebytestreamcontroller.byobrequest) ist ein {{domxref("ReadableStreamBYOBRequest")}}-Objekt, das eine ausstehende Anforderung eines Verbrauchers zur direkten Zero-Copy-Übertragung von Daten an einen Verbraucher darstellt.
`byobRequest` muss verwendet werden, um Daten zu kopieren, falls es existiert (verwenden Sie in diesem Fall nicht `enqueue()`)!
Wenn die zugrunde liegende Quelle Daten an den Stream senden muss und `byobRequest` `null` ist, kann die Quelle [`enqueue()`](#readablebytestreamcontroller.enqueue) aufrufen, um die Daten zur internen Warteschlange des Streams hinzuzufügen.

Beachten Sie, dass [`byobRequest`](#readablebytestreamcontroller.byobrequest) nur im "BYOB-Modus" erstellt wird, wenn eine Anforderung von einem Leser vorliegt und die interne Warteschlange des Streams leer ist.
Der "BYOB-Modus" wird aktiviert, wenn ein {{domxref("ReadableStreamBYOBReader")}} verwendet wird (typischerweise erstellt durch Aufruf von {{domxref("ReadableStream.getReader()")}} mit dem Argument `{ mode: 'byob' }`).
Er wird auch aktiviert, wenn ein Standardleser verwendet wird und [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben ist.

Eine zugrunde liegende Byte-Quelle kann den Controller auch verwenden, um den Stream zu [`close()`](#readablebytestreamcontroller.close), wenn alle Daten gesendet wurden und um Fehler der zugrunde liegenden Quelle mit [`error()`](#readablebytestreamcontroller.error) zu melden.
Die [`desiredSize`](#readablebytestreamcontroller.desiredsize) Eigenschaft des Controllers wird verwendet, um "Gegendruck" anzuwenden, indem die zugrunde liegende Quelle über die Größe der internen Warteschlange informiert wird (kleine Werte zeigen an, dass die Warteschlange sich füllt, was der zugrunde liegenden Quelle signalisiert, dass es wünschenswert sein könnte, den Zustrom zu pausieren oder zu drosseln).

Beachten Sie, dass der Controller, obwohl er primär von der zugrunde liegenden Byte-Quelle verwendet wird, auch von anderen Teilen des Systems gespeichert und genutzt werden kann, um dem Stream zu signalisieren.

## Konstruktor

Keiner. `ReadableByteStreamController`-Instanzen werden automatisch erstellt, wenn ein `underlyingSource` mit der Eigenschaft `type="bytes"` an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.

## Instanz-Eigenschaften

- {{domxref("ReadableByteStreamController.byobRequest")}} {{ReadOnlyInline}}
  - : Gibt die aktuelle BYOB-Anforderung oder `null` zurück, wenn keine ausstehende Anforderung besteht.
- {{domxref("ReadableByteStreamController.desiredSize")}} {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanz-Methoden

- {{domxref("ReadableByteStreamController.close()")}}
  - : Schließt den zugehörigen Stream.
- {{domxref("ReadableByteStreamController.enqueue()")}}
  - : Stellt einen gegebenen Chunk in den zugehörigen Stream in die Warteschlange.
- {{domxref("ReadableByteStreamController.error()")}}
  - : Führt dazu, dass zukünftige Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

Der Controller wird von einer zugrunde liegenden Quelle verwendet, um Daten zu übertragen oder in die Warteschlange zu stellen, um zu signalisieren, dass der Stream keine weiteren Daten hat (geschlossen wurde) oder einen Fehler aufweist. Er wird auch verwendet, um die zugrunde liegende Quelle von "upstream" bezüglich der gewünschten Datenrate zu informieren, unter Verwendung von {{domxref("ReadableByteStreamController.desiredSize","desiredSize")}}.

Das Beispiel in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), insbesondere [Erstellung eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), zeigt die meisten dieser Fälle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams-API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transformations-Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
