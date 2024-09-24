---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStreamBYOBRequest`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert eine "Abrufanforderung" für Daten von einer zugrundeliegenden Quelle, die als Zero-Copy-Transfer an einen Verbraucher übergeben wird (unter Umgehung der internen Warteschlangen des Streams).

`ReadableStreamBYOBRequest`-Objekte werden im "BYOB-Modus" erstellt, wenn ein Verbraucher eine Anfrage für Daten stellt und die interne Warteschlange des Streams _leer_ ist.
(Der Stream wird die Anfrage des Verbrauchers direkt lösen, wenn er bereits gepufferte Daten hat).
Eine zugrundeliegende Byte-Quelle kann auf aktive BYOB-Anfragen über die {{domxref("ReadableByteStreamController.byobRequest")}}-Eigenschaft ihres Controllers zugreifen, die auf `null` gesetzt wird, wenn keine ausstehende Anfrage vorhanden ist.

Eine zugrundeliegende Quelle, die den "BYOB-Modus" unterstützt, sollte auf {{domxref("ReadableByteStreamController.byobRequest")}} prüfen und muss diese für die Übertragung von Daten verwenden, falls vorhanden.
Wenn Daten von der zugrundeliegenden Quelle eintreffen, wenn {{domxref("ReadableByteStreamController.byobRequest")}} `null` ist, können sie mit {{domxref("ReadableByteStreamController.enqueue()")}} in die Warteschlange gestellt werden.
Dies könnte passieren, wenn eine zugrundeliegende Push-Quelle neue Daten empfängt, wenn die internen Puffer des Streams nicht leer sind.

Eine zugrundeliegende Quelle nutzt die Anforderung, indem sie Daten in den [`view`](#readablestreambyobrequest.view) der BYOB-Anfrage schreibt und dann [`respond()`](#readablestreambyobrequest.respond) aufruft, oder indem sie [`respondWithNewView()`](#readablestreambyobrequest.respondwithnewview) aufruft und eine neue Ansicht als Argument übergibt.
Beachten Sie, dass die "neue Ansicht" tatsächlich eine Ansicht über denselben Puffer wie die ursprüngliche `view` sein muss, beginnend ab dem gleichen Offset.
Dies könnte verwendet werden, um einen kürzeren Puffer zurückzugeben, wenn die zugrundeliegende Quelle nicht in der Lage ist, die gesamte ursprüngliche Ansicht zu füllen.

Beachten Sie, dass ein {{domxref("ReadableByteStreamController")}} nur für zugrundeliegende Quellen erstellt wird, wenn `type="bytes"` für die Quelle im [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben ist.
Der "BYOB-Modus" wird aktiviert, wenn entweder [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben ist oder wenn ein {{domxref("ReadableStreamBYOBReader")}} verwendet wird (typischerweise erstellt durch Aufruf von {{domxref("ReadableStream.getReader()")}} mit dem Argument `{ mode: 'byob' }`).

## Konstruktor

Keiner. Eine `ReadableStreamBYOBRequest`-Instanz wird bei Bedarf automatisch durch den `ReadableByteStreamController` erstellt.

## Instanzeigenschaften

- {{domxref("ReadableStreamBYOBRequest.view")}} {{ReadOnlyInline}}
  - : Gibt die aktuelle Ansicht zurück.
    Dies ist eine Ansicht auf einen Puffer, der an den Verbraucher übertragen wird, wenn `ReadableStreamBYOBRequest.respond()` aufgerufen wird.

## Instanzmethoden

- {{domxref("ReadableStreamBYOBRequest.respond()")}}
  - : Signaliert dem zugehörigen lesbaren Byte-Stream, dass die angegebene Anzahl von Bytes in die aktuelle [`view`](#readablestreambyobrequest.view) geschrieben wurde, was dann dazu führt, dass die ausstehende Anfrage des Verbrauchers gelöst wird.
    Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen und nicht mehr änderbar ist.
- {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}}
  - : Signaliert dem zugehörigen lesbaren Byte-Stream, dass die als Argument übergebene Ansicht an den Verbraucher des lesbaren Byte-Streams übertragen werden soll.
    Diese neue Ansicht muss denselben Puffer wie die ursprüngliche [`view`](#readablestreambyobrequest.view) verwenden, am gleichen Offset beginnen und gleich lang oder kürzer sein.
    Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen und nicht mehr änderbar ist.

## Beispiele

Der folgende Code stammt aus dem Live-Beispiel unter [Verwendung von lesbaren Byte-Streams > Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream).

Eine zugrundeliegende Push-Byte-Quelle mit zu übertragenden Daten sollte zuerst prüfen, dass {{domxref("ReadableByteStreamController.byobRequest","controller.byobRequest")}} nicht-`null` ist.
Eine zugrundeliegende Pull-Byte-Quelle müsste diese Prüfung nur durchführen, wenn die automatische Chunk-Zuweisung nicht aktiviert war und sie mit einem Standardleser verwendet wurde.

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

Es gibt zwei Möglichkeiten, Daten in eine `ReadableStreamBYOBRequest` zu lesen und dann zu übertragen.
Die erste besteht darin, die Daten in die {{domxref("ReadableStreamBYOBRequest.view")}}-Eigenschaft zu schreiben und dann {{domxref("ReadableStreamBYOBRequest.respond()")}} aufzurufen, um die Menge der zu übertragenden Daten anzugeben.
Nach der Operation wird die `byobRequest.view` getrennt und die Anforderung sollte verworfen werden.

Der folgende Code zeigt diesen Fall mit einer hypothetischen `readInto()`-Methode zum Kopieren von Daten in die Ansicht:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Der andere Ansatz besteht darin, {{domxref("ReadableStreamBYOBRequest.respondWithNewView()")}} aufzurufen und Ihre eigene Ansicht auf die gleiche zugrundeliegende Datenübertragung zu übergeben.
Beachten Sie, dass dies einfach eine andere Möglichkeit ist, den Bereich des zugrundeliegenden Puffers/Speichers, der tatsächlich übertragen wird, anzugeben.
Der `respondWithNewView`-Äquivalent zum obigen Code wäre:

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

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
