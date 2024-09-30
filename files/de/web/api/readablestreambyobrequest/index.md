---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStreamBYOBRequest`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert eine "Pull-Anforderung" für Daten aus einer zugrunde liegenden Quelle, die als Zero-Copy-Übertragung an einen Verbraucher erfolgen wird (ohne die internen Warteschlangen des Streams zu durchlaufen).

`ReadableStreamBYOBRequest`-Objekte werden im "BYOB-Modus" erstellt, wenn ein Verbraucher Daten anfordert und die interne Warteschlange des Streams _leer_ ist.
(Der Stream wird die Anforderung des Verbrauchers direkt auflösen, wenn bereits gepufferte Daten vorhanden sind).
Eine zugrunde liegende Byte-Quelle kann auf aktive BYOB-Anforderungen über die `byobRequest`-Eigenschaft ihres Controllers [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) zugreifen, die auf `null` gesetzt wird, wenn keine ausstehende Anforderung vorliegt.

Eine zugrunde liegende Quelle, die den "BYOB-Modus" unterstützt, sollte auf [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) überprüfen und muss diese verwenden, um Daten zu übertragen, wenn sie vorhanden ist.
Wenn Daten von der zugrunde liegenden Quelle eintreffen, während [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) `null` ist, können sie mithilfe von [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) in die Warteschlange gestellt werden.
Dies kann passieren, wenn eine zugrunde liegende Push-Quelle neue Daten erhält, während die internen Puffer des Streams nicht leer sind.

Eine zugrunde liegende Quelle verwendet die Anforderung, indem sie Daten in die [`view`](#readablestreambyobrequest.view) des BYOB-Anforderung schreibt und dann [`respond()`](#readablestreambyobrequest.respond) aufruft oder indem sie [`respondWithNewView()`](#readablestreambyobrequest.respondwithnewview) aufruft und eine neue Ansicht als Argument übergibt.
Beachten Sie, dass die "neue Ansicht" tatsächlich eine Ansicht über den _gleichen_ Puffer wie die ursprüngliche `view` sein muss, beginnend beim gleichen Offset.
Dies kann verwendet werden, um einen kürzeren Puffer zurückzugeben, wenn die zugrunde liegende Quelle nicht in der Lage ist, die gesamte ursprüngliche Ansicht zu füllen.

Beachten Sie, dass ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) nur für zugrunde liegende Quellen erstellt wird, wenn `type="bytes"` für die Quelle im [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben wird.
Der "BYOB-Modus" wird aktiviert, wenn entweder [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben wird oder wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise durch den Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }` konstruiert).

## Konstruktor

Keiner. `ReadableStreamBYOBRequest`-Instanzen werden bei Bedarf automatisch von `ReadableByteStreamController` erstellt.

## Instanz-Eigenschaften

- [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) {{ReadOnlyInline}}
  - : Gibt die aktuelle Ansicht zurück.
    Dies ist eine Ansicht auf einen Puffer, der an den Verbraucher übertragen wird, wenn `ReadableStreamBYOBRequest.respond()` aufgerufen wird.

## Instanz-Methoden

- [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond)
  - : Signalisiert, dass der zugehörige lesbare Bytestream die angegebene Anzahl von Bytes in die aktuelle [`view`](#readablestreambyobrequest.view) geschrieben hat, was dann dazu führt, dass die ausstehende Anforderung des Verbrauchers aufgelöst wird.
    Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen und nicht mehr geändert werden kann.
- [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
  - : Signalisiert dem zugehörigen lesbaren Bytestream, dass die als Argument übergebene Ansicht an den Verbraucher des lesbaren Bytestreams übertragen werden soll.
    Diese neue Ansicht muss den gleichen Puffer wie die ursprüngliche [`view`](#readablestreambyobrequest.view) verwenden, am gleichen Offset beginnen und die gleiche Länge oder kürzer sein.
    Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen und nicht mehr geändert werden kann.

## Beispiele

Der folgende Code stammt aus dem Live-Beispiel unter [Verwendung lesbarer Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream).

Eine pushende zugrunde liegende Byte-Quelle mit zu übertragenden Daten sollte zuerst überprüfen, dass [`controller.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) nicht `null` ist. Eine
Eine pullende zugrunde liegende Byte-Quelle würde diese Überprüfung nur benötigen, wenn die automatische Speicherblockzuteilung nicht aktiviert ist und sie mit einem Standardleser verwendet wurde.

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

Es gibt zwei Möglichkeiten, Daten in eine `ReadableStreamBYOBRequest` zu lesen und dann zu übertragen.
Die erste ist, die Daten in die [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft zu schreiben und dann [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufzurufen, um die zu übertragende Datenmenge anzugeben.
Nach der Operation wird `byobRequest.view` getrennt, und die Anforderung sollte verworfen werden.

Der untenstehende Code zeigt diesen Fall unter Verwendung einer hypothetischen `readInto()`-Methode, um Daten in die Ansicht zu kopieren:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Der andere Ansatz besteht darin, [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufzurufen, dabei eine eigene Ansicht auf dieselben zugrunde liegenden Daten zu übergeben.
Beachten Sie, dass dies nur eine andere Möglichkeit ist, den Bereich des tatsächlich übertragenen zugrunde liegenden Puffers/Speichers anzugeben.
Die `respondWithNewView`-Entsprechung zu dem obigen Code wäre:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
const newView = new Uint8Array(v.buffer, v.byteOffset, bytesRead);
controller.byobRequest.respondWithNewView(newView);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung lesbarer Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
