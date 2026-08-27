---
title: "ReadableByteStreamController: close()-Methode"
short-title: close()
slug: Web/API/ReadableByteStreamController/close
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Schnittstelle schließt den zugehörigen Stream.

Dies könnte von der zugrunde liegenden Quelle aufgerufen werden, wenn ihre Datenquelle erschöpft/abgeschlossen ist.

> [!NOTE]
> Leser können immer noch alle zuvor eingereihten Chunks aus dem Stream lesen, aber sobald diese gelesen sind, wird der Stream geschlossen.
> Wenn jedoch eine ausstehende und teilweise geschriebene [`byobRequest`](/de/docs/Web/API/ReadableByteStreamController/byobRequest) vorhanden ist, wenn `close()` aufgerufen wird, wird der Stream einen Fehler aufweisen.

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
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist, es bereits geschlossen ist oder der Stream aus einem anderen Grund nicht lesbar ist.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Byte-Streams > Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie wir den Stream möglicherweise schließen, wenn keine Daten mehr vorhanden sind.

Der relevante Code ist unten wiedergegeben.
Dies hängt davon ab, dass die hypothetische `readInto()`-Methode 0 Bytes zurückgibt, nur wenn keine Daten mehr vorhanden sind.

```js
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
if (bytesRead === 0) {
  controller.close();
}
```

Nach dem Aufruf von `close` wird der Stream geschlossen und alle Verbraucher werden benachrichtigt.
Zum Beispiel würde, wenn ein [`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader) verwendet wird, jede [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)-Anfrage mit `done: true` aufgelöst und das Versprechen von [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) würde ebenfalls aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)
