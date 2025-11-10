---
title: ReadableStreamBYOBRequest
slug: Web/API/ReadableStreamBYOBRequest
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamBYOBRequest`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen "Abfragewunsch" für Daten aus einer zugrunde liegenden Quelle, der als Zero-Copy-Transfer an einen Verbraucher übermittelt wird (wobei die internen Warteschlangen des Streams umgangen werden).

`ReadableStreamBYOBRequest`-Objekte werden im "BYOB-Modus" erstellt, wenn ein Verbraucher eine Anfrage für Daten stellt und die interne Warteschlange des Streams _leer_ ist.
(Der Stream wird die Anfrage des Verbrauchers direkt bearbeiten, wenn er bereits gepufferte Daten hat).
Eine zugrunde liegende Bytequelle kann auf aktive BYOB-Anfragen über die [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest)-Eigenschaft ihres Controllers zugreifen, die auf `null` gesetzt wird, wenn keine ausstehende Anfrage vorliegt.

Eine zugrunde liegende Quelle, die den "BYOB-Modus" unterstützt, sollte auf [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) prüfen und muss es für die Datenübertragung verwenden, wenn es vorhanden ist.
Wenn Daten von der zugrunde liegenden Quelle ankommen, während [`ReadableByteStreamController.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) `null` ist, können sie mit [`ReadableByteStreamController.enqueue()`](/de/docs/Web/API/ReadableByteStreamController/enqueue) in die Warteschlange gestellt werden.
Dies könnte passieren, wenn eine zugrunde liegende Push-Quelle neue Daten empfängt, während die internen Puffer des Streams nicht leer sind.

Eine zugrunde liegende Quelle verwendet die Anfrage, indem sie Daten in die [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) des BYOB-Antrags schreibt und dann [`respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufruft, oder indem sie [`respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufruft und eine neue Ansicht als Argument übergibt.
Beachten Sie, dass die "neue Ansicht" tatsächlich eine Ansicht über denselben Puffer wie die ursprüngliche `view` sein muss, beginnend am selben Offset.
Dies könnte verwendet werden, um einen kürzeren Puffer zurückzugeben, wenn die zugrunde liegende Quelle nicht in der Lage ist, die gesamte ursprüngliche Ansicht zu füllen.

Beachten Sie, dass ein [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) nur für zugrunde liegende Quellen erstellt wird, wenn `type="bytes"` für die Quelle im [`ReadableStream()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben ist.
Der "BYOB-Modus" wird aktiviert, wenn entweder [`autoAllocateChunkSize`](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) im [`ReadableController()`-Konstruktor](/de/docs/Web/API/ReadableStream/ReadableStream#autoallocatechunksize) angegeben ist oder wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird (in der Regel erstellt durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) mit dem Argument `{ mode: 'byob' }`).

## Konstruktor

Keiner. Eine `ReadableStreamBYOBRequest`-Instanz wird bei Bedarf automatisch durch `ReadableByteStreamController` erstellt.

## Instanzeigenschaften

- [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) {{ReadOnlyInline}}
  - : Gibt die aktuelle Ansicht zurück.
    Dies ist eine Ansicht auf einem Puffer, die zum Verbraucher übertragen wird, wenn `ReadableStreamBYOBRequest.respond()` aufgerufen wird.

## Instanzmethoden

- [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond)
  - : Signalisieren Sie dem zugehörigen lesbaren Bytestrom, dass die angegebene Anzahl von Bytes in die aktuelle [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) geschrieben wurde, was dann dazu führt, dass die ausstehende Anfrage des Verbrauchers gelöst wird.
    Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen wird und nicht mehr modifizierbar ist.
- [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView)
  - : Signalisieren Sie dem zugehörigen lesbaren Bytestrom, dass die als Argument übergebene Ansicht an den Verbraucher des lesbaren Bytestroms übertragen werden soll.
    Diese neue Ansicht muss denselben Puffer wie die ursprüngliche [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) verwenden, am selben Offset beginnen und die gleiche Länge oder kürzer sein.
    Beachten Sie, dass nach dem Aufruf dieser Methode die `view` übertragen wird und nicht mehr modifizierbar ist.

## Beispiele

Der folgende Code stammt aus dem Live-Beispiel in [Verwendung von lesbaren Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream).

Eine Push-Bytequelle mit zu übertragenden Daten sollte zuerst prüfen, ob [`controller.byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) nicht-`null` ist. Eine Pull-Bytequelle benötigte diese Überprüfung nur, wenn die automatische Chunk-Allocation nicht aktiviert war und sie mit einem Standardleser verwendet wurde.

```js
if (controller.byobRequest) {
  /* code to transfer data */
}
```

Es gibt zwei Möglichkeiten, Daten in eine `ReadableStreamBYOBRequest` zu lesen und dann zu übertragen.
Die erste ist, die Daten in die [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view)-Eigenschaft zu schreiben und dann [`ReadableStreamBYOBRequest.respond()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respond) aufzurufen, um die Menge der zu übertragenden Daten anzuzeigen.
Nach der Operation wird die `byobRequest.view` gelöst und die Anfrage sollte verworfen werden.

Der folgende Code zeigt diesen Fall unter Verwendung einer hypothetischen `readInto()`-Methode, um Daten in die Ansicht zu kopieren:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Der andere Ansatz besteht darin, [`ReadableStreamBYOBRequest.respondWithNewView()`](/de/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) aufzurufen und Ihre eigene Ansicht auf den gleichen zugrunde liegenden Sicherungsdaten zu übergeben.
Beachten Sie, dass dies nur eine andere Möglichkeit ist, den Bereich des zugrunde liegenden Puffers/Speichers anzugeben, der tatsächlich übertragen wird.
Das `respondWithNewView`-Äquivalent zu dem obigen Code wäre:

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

- [Verwendung von lesbaren Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
