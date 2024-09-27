---
title: "ReadableStreamBYOBRequest: respond()-Methode"
short-title: respond()
slug: Web/API/ReadableStreamBYOBRequest/respond
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respond()`**-Methode des [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Interfaces wird verwendet, um dem zugehörigen [lesbaren Bytestream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) mitzuteilen, dass die angegebene Anzahl von Bytes in die [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) geschrieben wurde.

Nachdem diese Methode aufgerufen wurde, wird die [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) übertragen und kann nicht mehr verändert werden.

## Syntax

```js-nolint
respond(bytesWritten)
```

### Parameter

- `bytesWritten`
  - : Die Anzahl der Bytes, die in [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) geschrieben wurden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Anfrage hat keinen zugeordneten [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) oder der View-Buffer ist nicht getrennt/kann nicht übertragen werden.

## Beispiele

Der unten stehende Code stammt aus den Live-Beispielen in [Using readable byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).

Die Methode wird von einer zugrundeliegenden Bytequelle als Teil eines Zero-Copy-Datenübertrags verwendet, um eine ausstehende Leseanforderung eines Verbrauchers zu erfüllen. Die zugrundeliegende Quelle schreibt zuerst Daten in die [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) und ruft dann diese `respond()`-Methode auf, um anzuzeigen, _wie_ viel Daten in den Puffer kopiert wurden, und um den Datenübertrag an den Leser zu veranlassen.

Der folgende Code zeigt diesen Fall unter Verwendung einer hypothetischen `readInto()`-Methode zum Kopieren von Daten in die View:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Nach der Operation wird die `byobRequest.view` getrennt und die Anfrage sollte verworfen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using readable byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
