---
title: "ReadableStreamBYOBRequest: respond()-Methode"
short-title: respond()
slug: Web/API/ReadableStreamBYOBRequest/respond
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respond()`**-Methode des [`ReadableStreamBYOBRequest`](/de/docs/Web/API/ReadableStreamBYOBRequest)-Interfaces wird verwendet, um dem zugehörigen [lesbaren Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) zu signalisieren, dass die angegebene Anzahl von Bytes in den [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) geschrieben wurden.

Nachdem diese Methode aufgerufen wurde, wird der [`view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) übertragen und kann nicht mehr geändert werden.

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
  - : Die Anfrage hat keinen zugeordneten [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) oder der View-Puffer ist nicht getrennt/kann nicht übertragen werden.

## Beispiele

Der untenstehende Code ist aus den Live-Beispielen in [Using readable byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) entnommen.

Die Methode wird von einer zugrunde liegenden Bytequelle aufgerufen, als Teil des Prozesses der Ausführung eines Zero-Copy-Transfers von Daten, um eine ausstehende Leseanforderung eines Verbrauchers zu erfüllen. Die zugrunde liegende Quelle schreibt zuerst Daten in den [`ReadableStreamBYOBRequest.view`](/de/docs/Web/API/ReadableStreamBYOBRequest/view) und ruft dann diese `respond()`-Methode auf, um anzuzeigen, _wie viel_ Daten in den Puffer kopiert wurden, und um das Übertragen der Daten an den Leser zu veranlassen.

Der folgende Code zeigt diesen Fall mit einer hypothetischen `readInto()`-Methode, um Daten in den View zu kopieren:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Nach dem Vorgang ist der `byobRequest.view` getrennt und die Anfrage sollte verworfen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using readable byte stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
