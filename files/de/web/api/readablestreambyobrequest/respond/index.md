---
title: "ReadableStreamBYOBRequest: respond()-Methode"
short-title: respond()
slug: Web/API/ReadableStreamBYOBRequest/respond
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`respond()`**-Methode der {{domxref("ReadableStreamBYOBRequest")}}-Schnittstelle wird verwendet, um dem zugehörigen [lesbaren Bytestream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) mitzuteilen, dass die angegebene Anzahl von Bytes in die {{domxref("ReadableStreamBYOBRequest.view")}} geschrieben wurden.

Nachdem diese Methode aufgerufen wurde, wird der {{domxref("ReadableStreamBYOBRequest/view","view")}} übertragen und kann nicht mehr verändert werden.

## Syntax

```js-nolint
respond(bytesWritten)
```

### Parameter

- `bytesWritten`
  - : Die Anzahl der Bytes, die in die {{domxref("ReadableStreamBYOBRequest.view")}} geschrieben wurden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die Anforderung hat keinen zugeordneten {{domxref("ReadableByteStreamController")}} oder der View-Puffer ist nicht abgetrennt/kann nicht übertragen werden.

## Beispiele

Der untenstehende Code stammt aus den Live-Beispielen in [Verwendung eines lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).

Die Methode wird von einer zugrunde liegenden Bytequelle aufgerufen, um eine Zero-Copy-Übertragung von Daten zu ermöglichen, um eine ausstehende Leseanforderung eines Verbrauchers zu erfüllen.
Die zugrunde liegende Quelle schreibt zuerst Daten in die {{domxref("ReadableStreamBYOBRequest.view")}} und ruft dann diese `respond()`-Methode auf, um anzuzeigen, _wie viel_ Daten in den Puffer kopiert wurden und die Daten zum Leser zu übertragen.

Der folgende Code zeigt diesen Fall mit einer hypothetischen `readInto()`-Methode, um Daten in die View zu kopieren:

```js
const v = controller.byobRequest.view;
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
controller.byobRequest.respond(bytesRead);
```

Nach der Operation ist die `byobRequest.view` abgetrennt und die Anforderung sollte verworfen werden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung eines lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
