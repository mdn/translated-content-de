---
title: ReadableByteStreamController
slug: Web/API/ReadableByteStreamController
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableByteStreamController`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller für einen [lesbaren Byte-Strom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).
Es ermöglicht die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit einer zugrundeliegenden Byte-Quelle und erlaubt eine effiziente Zero-Copy-Übertragung von Daten von der zugrundeliegenden Quelle zu einem Verbraucher, wenn die interne Warteschlange des Streams leer ist.

Eine Instanz dieses Controllertyps wird erstellt, wenn ein `underlyingSource`-Objekt mit der Eigenschaft `type="bytes"` als Argument an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.
Das `underlyingSource`-Objekt kann auch die Callback-Funktionen [`start()`](/de/docs/Web/API/ReadableStream/ReadableStream#start) und [`pull()`](/de/docs/Web/API/ReadableStream/ReadableStream#pull) definieren.
Diese werden mit dem Controller als Parameter aufgerufen, um die zugrundeliegende Quelle einzurichten und Daten anzufordern, wenn sie benötigt werden.

Die zugrundeliegende Quelle verwendet den Controller, um Daten dem Stream über seine Eigenschaft [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) oder die Methode [`enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) bereitzustellen.
`byobRequest` ist ein [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Objekt, das eine ausstehende Anforderung von einem Verbraucher darstellt, um eine Zero-Copy-Übertragung von Daten direkt zu einem Verbraucher durchzuführen.
`byobRequest` muss verwendet werden, um Daten zu kopieren, wenn es existiert (verwenden Sie in diesem Fall nicht `enqueue()`)!
Wenn die zugrundeliegende Quelle Daten an den Stream übergeben muss und `byobRequest` `null` ist, kann die Quelle `enqueue()` aufrufen, um die Daten zu den internen Warteschlangen des Streams hinzuzufügen.

Beachten Sie, dass der `byobRequest` nur im "BYOB-Modus" erstellt wird, wenn eine Anforderung von einem Leser vorliegt und die interne Warteschlange des Streams leer ist.
Der "BYOB-Modus" wird aktiviert, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise erstellt durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`).
Er wird auch aktiviert, wenn ein Standardleser verwendet wird und [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream) angegeben ist.

Eine zugrundeliegende Byte-Quelle kann den Controller auch verwenden, um den Stream zu [`close()`](/de/docs/Web/API/ReadableByteStreamController/close), wenn alle Daten gesendet wurden, und Fehler von der zugrundeliegenden Quelle mit [`error()`](/de/docs/Web/API/ReadableByteStreamController/error) zu melden.
Die Eigenschaft [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) des Controllers wird verwendet, um "Gegendruck" zu erzeugen, indem der zugrundeliegenden Quelle die Größe der internen Warteschlange mitgeteilt wird (kleine Werte zeigen an, dass die Warteschlange sich füllt, was der zugrundeliegenden Quelle signalisiert, dass es wünschenswert wäre, den Zufluss zu pausieren oder zu drosseln).

Beachten Sie, dass auch wenn der Controller primär von der zugrundeliegenden Byte-Quelle verwendet wird, es keinen Grund gibt, warum er nicht von anderen Teilen des Systems gespeichert und genutzt werden kann, um das Signal an den Stream zu senden.

## Konstruktor

Keiner. `ReadableByteStreamController`-Instanzen werden automatisch erstellt, wenn ein `underlyingSource` mit der Eigenschaft `type="bytes"` an den [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) übergeben wird.

## Instanzeigenschaften

- [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) {{ReadOnlyInline}}
  - : Gibt die aktuelle BYOB-Anforderung zurück oder `null`, wenn keine ausstehende Anforderung vorliegt.
- [`ReadableByteStreamController.desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- [`ReadableByteStreamController.close()`](/de/docs/Web/API/ReadableByteStreamController/close)
  - : Schließt den zugeordneten Stream.
- [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue)
  - : Fügt einen gegebenen Datenblock in den zugeordneten Stream ein.
- [`ReadableByteStreamController.error()`](/de/docs/Web/API/ReadableByteStreamController/error)
  - : Führt dazu, dass alle zukünftigen Interaktionen mit dem zugeordneten Stream fehlschlagen.

## Beispiele

Der Controller wird von einer zugrundeliegenden Quelle verwendet, um Daten zu übertragen oder einzureihen, um zu signalisieren, dass der Stream keine Daten mehr hat (geschlossen wurde) oder einen Fehler aufgetreten ist. Er wird auch verwendet, um der zugrundeliegenden Quelle von "oberhalb im Stream" die gewünschte Datenrate mit [`desiredSize`](/de/docs/Web/API/ReadableByteStreamController/desiredSize) zu signalisieren.

Das Beispiel in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams), insbesondere [Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream), zeigt die meisten dieser Fälle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
