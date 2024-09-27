---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamBYOBRequest`** Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert eine „Pull-Request“ für Daten von einer zugrundeliegenden Quelle, die als Zero-Copy-Transfer zu einem Verbraucher erfolgen wird (unter Umgehung der internen Warteschlangen des Streams).

`ReadableStreamBYOBRequest`-Objekte werden im „BYOB-Modus“ erstellt, wenn ein Verbraucher eine Anfrage nach Daten stellt und die interne Warteschlange des Streams _leer_ ist.
(Der Stream löst die Anfrage des Verbrauchers direkt aus, wenn er bereits gepufferte Daten hat).
Eine zugrundeliegende Bytequelle kann auf aktive BYOB-Anfragen über die [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) Eigenschaft des Controllers zugreifen, die auf `null` gesetzt wird, wenn keine ausstehende Anfrage vorliegt.

Eine zugrundeliegende Quelle, die den „BYOB-Modus“ unterstützt, sollte auf [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) prüfen und muss ihn zur Datenübertragung verwenden, falls vorhanden.
Wenn Daten von der zugrundeliegenden Quelle ankommen, während [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) `null` ist, können sie mit [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) in die Warteschlange eingereiht werden.
Dies könnte passieren, wenn eine zugrundeliegende Push-Quelle neue Daten erhält, während die internen Puffer des Streams nicht leer sind.

Eine zugrundeliegende Quelle verwendet die Anfrage, indem sie Daten in die [`view`](#readablestreambyobrequest.view) der BYOB-Anfrage schreibt und dann [`respond()`](#readablestreambyobrequest.respond) aufruft oder indem sie [`respondWithNewView()`](#readablestreambyobrequest.respondwithnewview) aufruft und eine neue Ansicht als Argument übergibt.
Beachten Sie, dass die „neue Ansicht“ tatsächlich eine Ansicht über denselben Puffer wie die ursprüngliche `view` sein muss, beginnend am selben Offset.
Dies könnte verwendet werden, um einen kürzeren Puffer zurückzugeben, wenn die zugrundeliegende Quelle nicht in der Lage ist, die gesamte ursprüngliche Ansicht zu füllen.

Beachten Sie, dass ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) nur für zugrundeliegende Quellen erstellt wird, wenn `type="bytes"` für die Quelle im [`ReadableStream()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben wird.
Der „BYOB-Modus“ wird aktiviert, wenn entweder [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()` Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben ist oder wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }` konstruiert).

## Konstruktor

Keiner. `ReadableStreamBYOBRequest`-Instanz wird bei Bedarf automatisch durch `ReadableByteStreamController` erstellt.

## Instanzeigenschaften

- [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) {{ReadOnlyInline}}
  - : Gibt die aktuelle Ansicht zurück.
    Dies ist eine Ansicht auf einen Puffer, der an den Verbraucher übertragen wird, wenn `ReadableStreamBYOBRequest.respond()` aufgerufen wird.

## Instanzmethoden

- [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond)
  - : Signalisiert dem zugehörigen lesbaren Byte-Stream, dass die angegebene Anzahl von Bytes in die aktuelle [`view`](#readablestreambyobrequest.view) geschrieben wurde, was dann dazu führt, dass die ausstehende Anfrage des Verbrauchers gelöst wird.
    Beachten Sie, dass die `view` nach dem Aufrufen dieser Methode übertragen wird und nicht mehr modifizierbar ist.
- [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
  - : Signalisiert zum assoziierten lesbaren Byte-Stream, dass die als Argument übergebene Ansicht an den Verbraucher des lesbaren Byte-Streams übertragen werden soll.
    Diese neue Ansicht muss denselben Puffer wie die ursprüngliche [`view`](#readablestreambyobrequest.view) verwenden, am selben Offset beginnen und dieselbe oder kürzere Länge haben.
    Beachten Sie, dass die `view` nach dem Aufrufen dieser Methode übertragen wird und nicht mehr modifizierbar ist.

## Beispiele

Der folgende Code stammt aus dem Live-Beispiel in [Using readable byte streams > Creating a readable socket push byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream).

Eine Push-zugrundeliegende Bytequelle mit zu übertragenden Daten sollte zuerst überprüfen, dass [`controller.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) nicht `null` ist.
Eine Pull-zugrundeliegende Bytequelle würde diese Überprüfung nur benötigen, wenn die automatische Chunk-Zuweisung nicht aktiviert ist und sie mit einem Standardleser verwendet wird.

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

Es gibt zwei Möglichkeiten, Daten in eine `ReadableStreamBYOBRequest` einzulesen und dann zu übertragen.
Die erste besteht darin, die Daten in die [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) Eigenschaft zu schreiben und dann [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufzurufen, um die Menge der zu übertragenden Daten anzugeben.
Nach der Operation ist das `byobRequest.view` entkoppelt und die Anfrage sollte verworfen werden.

Der untenstehende Code zeigt diesen Fall mit einer hypothetischen `readInto()`-Methode, um Daten in die Ansicht zu kopieren:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Der andere Ansatz besteht darin, [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufzurufen und dabei Ihre eigene Ansicht auf die gleiche zugrundeliegende Datengrundlage zu übergeben.
Beachten Sie, dass dies eine andere Möglichkeit ist, den Bereich des zugrundeliegenden Puffers/Speichers anzugeben, der tatsächlich übertragen wird.
Die `respondWithNewView`-Entsprechung des obigen Codes wäre:

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

- [Using readable byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
