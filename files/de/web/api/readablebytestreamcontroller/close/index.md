---
title: "ReadableByteStreamController: close()-Methode"
short-title: close()
slug: Web/API/ReadableByteStreamController/close
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der {{domxref("ReadableByteStreamController")}}-Schnittstelle schließt den zugehörigen Stream.

Dies könnte von der zugrunde liegenden Quelle aufgerufen werden, wenn deren Datenquelle erschöpft/abgeschlossen ist.

> [!NOTE]
> Leser können immer noch zuvor in den Stream eingereihte Blöcke lesen, aber sobald diese gelesen sind, wird der Stream geschlossen.
> Wenn jedoch eine ausstehende und teilweise beschriebene {{domxref("ReadableByteStreamController.byobRequest","byobRequest")}} vorhanden ist, wenn `close()` aufgerufen wird, wird der Stream fehlerhaft.

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
  - : Ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist, es bereits geschlossen ist oder der Stream aus einem anderen Grund nicht lesbar ist.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie wir den Stream schließen könnten, wenn keine Daten mehr vorhanden sind.

Der relevante Code wird unten wiedergegeben.
Dies erfordert, dass die hypothetische `readInto()`-Methode nur 0 Bytes zurückgibt, wenn keine Daten mehr vorhanden sind.

```js
bytesRead = socket.readInto(v.buffer, v.byteOffset, v.byteLength);
if (bytesRead === 0) {
  controller.close();
}
```

Nach dem Aufruf von close wird der Stream geschlossen und alle Verbraucher benachrichtigt.
Zum Beispiel würde bei Verwendung eines {{domxref("ReadableStreamBYOBReader")}} jede {{domxref("ReadableStreamBYOBReader.read()","read()")}}-Anfrage mit `done: true` aufgelöst und das Versprechen aus {{domxref("ReadableStreamBYOBReader.closed")}} würde ebenfalls aufgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableByteStreamController")}}
