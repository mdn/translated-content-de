---
title: "ReadableByteStreamController: Methode error()"
short-title: error()
slug: Web/API/ReadableByteStreamController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`**-Methode der [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Schnittstelle verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream mit dem angegebenen Grund fehlschlagen.

Diese Methode wird häufig von einer zugrunde liegenden Quelle aufgerufen, um einen Fehler aus der Schnittstelle zu melden, von der sie ihre Daten bezieht (z. B. ein Lese- oder Socketfehler). Sie kann auch von anderen Stellen aus aufgerufen werden, um einen Streamfehler auszulösen, beispielsweise wenn ein anderer Teil des Systems, auf den der Stream angewiesen ist, ausfällt.

## Syntax

```js-nolint
error(errorObject)
```

### Parameter

- `errorObject`
  - : Jedes Objekt, mit dem zukünftige Interaktionen fehlschlagen sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist oder der Stream aus einem anderen Grund nicht lesbar ist.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Bytestreams > Erstellen eines lesbaren Socket-Push-Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie `error()` verwenden könnten, um einen Streamfehler manuell auszulösen, wenn ein anderer Teil des Systems, auf das es angewiesen ist, ausfällt.

Speziell ruft die zugrunde liegende `start()`-Methode `readRepeatedly()` auf, um alle Einrichtungsoperationen auszuführen und eine Anfrage nach Daten zu stellen. Dies gibt ein Promise zurück. Wenn beim Lesen der Daten Fehler auftreten, werden diese durch die verkettete `catch()`-Funktion abgefangen. In `catch()` rufen wir dann `error()` am Controller auf und übergeben den Grund der zugrunde liegenden Quelle.

```js
function start(controller) {
  readRepeatedly().catch((e) => controller.error(e));
}

function readRepeatedly() {
  return socket.select2().then(() => {
    // …
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
