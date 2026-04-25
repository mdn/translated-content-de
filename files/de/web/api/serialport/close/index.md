---
title: "SerialPort: close()-Methode"
short-title: close()
slug: Web/API/SerialPort/close
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`SerialPort.close()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Port geschlossen wird.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Beschreibung

`close()` schließt den seriellen Port, wenn die zuvor gesperrten Mitglieder [`SerialPort.readable`](/de/docs/Web/API/SerialPort/readable) und [`SerialPort.writable`](/de/docs/Web/API/SerialPort/writable) entsperrt sind, was bedeutet, dass die `releaseLock()`-Methoden für ihren jeweiligen Leser und Schreiber aufgerufen wurden.

Allerdings wird beim kontinuierlichen Lesen von Daten von einem seriellen Gerät in einer Schleife der zugehörige [lesbare Strom](/de/docs/Web/API/ReadableStream) immer gesperrt bleiben, bis der [Leser](/de/docs/Web/API/ReadableStreamDefaultReader) auf einen Fehler stößt. In diesem Fall wird das Aufrufen von [`reader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) dafür sorgen, dass [`reader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) sofort mit `{ value: undefined, done: true }` aufgelöst wird, sodass die Schleife [`reader.releaseLock()`](/de/docs/Web/API/ReadableStreamDefaultReader/releaseLock) aufrufen kann.

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

Das Schließen eines seriellen Ports ist komplizierter, wenn [Transformströme](/de/docs/Web/API/TransformStream) verwendet werden. Siehe [Schließen eines seriellen Ports](https://developer.chrome.com/docs/capabilities/serial#close-port) für eine Anleitung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
