---
title: "SerialPort: close()-Methode"
short-title: close()
slug: Web/API/SerialPort/close
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.close()`**-Methode des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen wird.

## Beschreibung

`close()` schließt den seriellen Port, wenn die zuvor gesperrten [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable)- und [`SerialPort.writable`](/de/docs/Web/API/SerialPort/writable)-Mitglieder freigegeben sind, das heißt, die `releaseLock()`-Methoden für ihren jeweiligen Leser und Schreiber aufgerufen wurden.

Beim kontinuierlichen Lesen von Daten von einem seriellen Gerät mit einer Schleife bleibt der zugehörige [lesbare Stream](/de/docs/Web/API/ReadableStream) jedoch immer gesperrt, bis der [Leser](/de/docs/Web/API/ReadableStreamDefaultReader) auf einen Fehler stößt. In diesem Fall erzwingt der Aufruf von [`reader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel), dass [`reader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) sofort mit `{ value: undefined, done: true }` aufgelöst wird, sodass die Schleife [`reader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) aufrufen kann.

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

Das Schließen eines seriellen Ports ist komplizierter, wenn [Transformationsströme](/de/docs/Web/API/TransformStream) verwendet werden. Siehe [Close a serial port](https://developer.chrome.com/docs/capabilities/serial#close-port) für Anleitungen.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
