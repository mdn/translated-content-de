---
title: "ReadableByteStreamController: close() Methode"
short-title: close()
slug: Web/API/ReadableByteStreamController/close
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`** Methode des [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController) Interfaces schließt den zugehörigen Stream.

Dies könnte vom zugrunde liegenden Quelle aufgerufen werden, wenn seine Datenquelle erschöpft/abgeschlossen ist.

> [!NOTE]
> Leser können weiterhin alle zuvor in den Stream eingereihten Chunks lesen, aber sobald diese gelesen sind, wird der Stream geschlossen.
> Wenn jedoch eine ausstehende und teilweise geschriebene [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) existiert, wenn `close()` aufgerufen wird, wird der Stream fehlerhaft.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist, es bereits geschlossen ist, oder der Stream aus einem anderen Grund nicht lesbar ist.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Byte-Streams > Erstellen eines lesbaren Push-Byte-Streams für Sockets](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie wir den Stream schließen könnten, wenn keine Daten mehr vorhanden sind.

Der relevante Code ist unten wiedergegeben.
Dies basiert darauf, dass die hypothetische Methode `readInto()` nur 0 Bytes zurückgibt, wenn keine Daten mehr vorhanden sind.

```js
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
if (bytesRead === 0) {
  controller.close();
}
```

Nach dem Aufruf von close wird der Stream geschlossen und alle Verbraucher werden benachrichtigt.
Zum Beispiel, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird, würden alle [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) Anfragen mit `done: true` aufgelöst, und das Versprechen von [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) würde ebenfalls erfüllt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
