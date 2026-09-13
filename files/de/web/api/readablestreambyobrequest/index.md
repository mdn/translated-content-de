---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamBYOBRequest`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert eine "Abrufanforderung" für Daten aus einer zugrundeliegenden Quelle, die als Zero-Copy-Transfer an einen Verbraucher erfolgen soll (unter Umgehung der internen Warteschlangen des Streams).

`ReadableStreamBYOBRequest`-Objekte werden im "BYOB-Modus" erstellt, wenn ein Verbraucher eine Anforderung für Daten stellt und die interne Warteschlange des Streams _leer_ ist. (Der Stream wird die Anforderung des Verbrauchers direkt beheben, wenn bereits gepufferte Daten vorhanden sind). Eine zugrundeliegende Byte-Quelle kann aktive BYOB-Anforderungen über die [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)-Eigenschaft ihres Controllers abrufen, die auf `null` gesetzt wird, wenn keine ausstehende Anforderung vorliegt.

Eine zugrundeliegende Quelle, die den "BYOB-Modus" unterstützt, sollte auf [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) prüfen und muss diese verwenden, wenn sie vorhanden ist, um Daten zu übertragen. Wenn Daten aus der zugrundeliegenden Quelle ankommen, während [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) `null` ist, können sie mithilfe von [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) in die Warteschlange gestellt werden. Dies könnte passieren, wenn eine zugrundeliegende Push-Quelle neue Daten erhält, während die internen Puffers des Streams nicht leer sind.

Eine zugrundeliegende Quelle verwendet die Anforderung, indem sie Daten in die [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) der BYOB-Anforderung schreibt und dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) oder [`respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufruft und eine neue Ansicht als Argument übergibt. Beachten Sie, dass die "neue Ansicht" tatsächlich eine Ansicht über den _gleichen_ Puffer wie die ursprüngliche `view` sein muss, die am gleichen Offset beginnt. Dies könnte verwendet werden, um einen kürzeren Puffer zurückzugeben, wenn die zugrundeliegende Quelle nicht in der Lage ist, die gesamte ursprüngliche Ansicht zu füllen.

Beachten Sie, dass ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) für zugrundeliegende Quellen nur dann erstellt wird, wenn `type="bytes"` für die Quelle im [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben ist. Der "BYOB-Modus" wird aktiviert, wenn entweder [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben ist oder wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (typischerweise erstellt durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`).

## Konstruktor

Keiner. `ReadableStreamBYOBRequest`-Instanzen werden automatisch von `ReadableByteStreamController` erstellt, wenn nötig.

## Instanzeigenschaften

- [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) {{ReadOnlyInline}}
  - : Gibt die aktuelle Ansicht zurück.
    Dies ist eine Ansicht auf einen Puffer, der an den Verbraucher übertragen wird, wenn `ReadableStreamBYOBRequest.respond()` aufgerufen wird.

## Instanzmethoden

- [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond)
  - : Signalisiert dem zugehörigen lesbaren Byte-Stream, dass die angegebene Anzahl von Bytes in die aktuelle [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) geschrieben wurde, was dann dazu führt, dass die ausstehende Anforderung des Verbrauchers gelöst wird. Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen wird und nicht mehr modifizierbar ist.
- [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
  - : Signalisiert dem zugehörigen lesbaren Byte-Stream, dass die als Argument übergebene Ansicht an den Verbraucher des lesbaren Byte-Streams übertragen werden soll. Diese neue Ansicht muss denselben Puffer wie die ursprüngliche [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) verwenden, am gleichen Offset beginnen und die gleiche Länge oder kürzer sein. Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen wird und nicht mehr modifizierbar ist.

## Beispiele

Der folgende Code ist aus dem Live-Beispiel in [Verwendung von lesbaren Byteströmen > Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) entnommen.

Eine drückende zugrundeliegende Byte-Quelle mit zu übertragenden Daten sollte zuerst überprüfen, dass [`controller.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) nicht `null` ist.
Eine ziehende zugrundeliegende Byte-Quelle würde diese Prüfung nur benötigen, wenn die automatische Chunk-Allokation nicht aktiviert war und mit einem Standardleser verwendet wurde.

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

Es gibt zwei Möglichkeiten, Daten in eine `ReadableStreamBYOBRequest` einzulesen und dann zu übertragen. Die erste besteht darin, die Daten in die [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft zu schreiben und dann [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufzurufen, um die zu übertragende Datenmenge anzuzeigen. Nach der Operation wird die `byobRequest.view` getrennt und die Anforderung sollte verworfen werden.

Der folgende Code zeigt diesen Fall mit einer hypothetischen `readInto()`-Methode, um Daten in die Ansicht zu kopieren:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Der andere Ansatz besteht darin, [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufzurufen und Ihre eigene Ansicht auf denselben zugrunde liegenden Daten zu übergeben. Beachten Sie, dass dies nur eine andere Möglichkeit ist, den Bereich des zugrunde liegenden Puffers/Speichers anzugeben, der tatsächlich übertragen wird. Das `respondWithNewView`-Äquivalent zu dem obigen Code wäre:

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

- [Verwendung von lesbaren Byteströmen](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
