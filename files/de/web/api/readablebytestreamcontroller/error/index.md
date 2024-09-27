---
title: "ReadableByteStreamController: error() Methode"
short-title: error()
slug: Web/API/ReadableByteStreamController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`** Methode der [`ReadableByteStreamController`](/de/docs/Web/API/ReadableByteStreamController)-Schnittstelle bewirkt, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream mit dem angegebenen Grund fehlschlagen.

Diese Methode wird häufig von einer zugrunde liegenden Quelle aufgerufen, um einen Fehler von der Schnittstelle, von der sie ihre Daten bezieht (z.B. ein Datei- oder Socket-Fehler), sichtbar zu machen. Sie kann auch von anderen Stellen aufgerufen werden, um einen Stream-Fehler auszulösen, z.B. wenn ein anderer Teil des Systems, auf den der Stream angewiesen ist, ausfällt.

## Syntax

```js-nolint
error(errorObject)
```

### Parameter

- `errorObject`
  - : Ein beliebiges Objekt, mit dem zukünftige Interaktionen fehlschlagen sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableByteStreamController` ist oder der Stream aus einem anderen Grund nicht lesbar ist.

## Beispiele

Das Beispiel in [Verwendung von lesbaren Byte-Streams > Erstellen eines lesbaren Socket-Push-Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#creating_a_readable_socket_push_byte_stream) zeigt, wie Sie `error()` verwenden könnten, um einen Stream-Fehler manuell auszulösen, falls ein anderer Teil des Systems, auf das es sich stützt, fehlschlägt.

Insbesondere ruft die `start()`-Methode der zugrunde liegenden Quelle `readRepeatedly()` auf, um alle Einrichtungsoperationen durchzuführen und eine Datenanforderung zu stellen. Dies gibt ein Versprechen zurück. Wenn beim Lesen der Daten Fehler auftreten, werden diese von der verketteten `catch()`-Funktion abgefangen. In `catch()` rufen wir dann `error()` beim Controller auf und übergeben den Grund von der zugrunde liegenden Quelle.

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

- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
