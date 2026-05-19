---
title: "SerialPort: close() Methode"
short-title: close()
slug: Web/API/SerialPort/close
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`** Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Beschreibung

`close()` schließt den seriellen Port, wenn die zuvor gesperrten [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable)- und [`SerialPort.writable`](/de/docs/Web/API/SerialPort/writable)-Mitglieder entsperrt sind, das heißt, die `releaseLock()`-Methoden für ihren jeweiligen Leser und Schreiber wurden aufgerufen.

Wenn jedoch kontinuierlich Daten von einem seriellen Gerät in einer Schleife gelesen werden, bleibt der zugehörige [lesbare Stream](/de/docs/Web/API/ReadableStream) immer gesperrt, bis der [Leser](/de/docs/Web/API/ReadableStreamDefaultReader) einen Fehler erkennt. In diesem Fall bewirkt ein Aufruf von [`reader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel), dass [`reader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) sofort mit `{ value: undefined, done: true }` aufgelöst wird, was der Schleife erlaubt, [`reader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) aufzurufen.

Das Schließen eines seriellen Ports ist komplizierter, wenn [Transform-Streams](/de/docs/Web/API/TransformStream) verwendet werden. Siehe [Schließen eines seriellen Ports](https://developer.chrome.com/docs/capabilities/serial#close-port) für Anleitungen.

## Beispiele

### Schließen eines Ports nach dem Lesen, sobald der Stream beendet ist

Das folgende Beispiel zeigt, wie ein Port geschlossen wird, nachdem kontinuierlich Daten davon gelesen wurden, sobald der Stream beendet ist. Ein `keepReading`-Flag steuert, wann mit dem Lesen aufgehört werden soll. Ein Klick auf einen Button setzt `keepReading` auf `false` und annulliert den Leser, was verursacht, dass `reader.read()` sofort aufgelöst wird, sodass die Schleife die Sperre freigeben kann und `close()` aufgerufen werden kann.

```js
// Without transform streams.

let keepReading = true;
let reader;

async function readUntilClosed() {
  while (port.readable && keepReading) {
    reader = port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // reader.cancel() has been called.
          break;
        }
        // value is a Uint8Array.
        console.log(value);
      }
    } catch (error) {
      // Handle error...
    } finally {
      // Allow the serial port to be closed later.
      reader.releaseLock();
    }
  }

  await port.close();
}

const closedPromise = readUntilClosed();

document.querySelector("button").addEventListener("click", async () => {
  // User clicked a button to close the serial port.
  keepReading = false;
  // Force reader.read() to resolve immediately and subsequently
  // call reader.releaseLock() in the loop example above.
  reader.cancel();
  await closedPromise;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
