---
title: "ReadableStreamDefaultReader: cancel()-Methode"
short-title: cancel()
slug: Web/API/ReadableStreamDefaultReader/cancel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`**-Methode der
{{domxref("ReadableStreamDefaultReader")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses an dem Stream durch einen Verbraucher.

Cancel wird verwendet, wenn Sie mit dem Stream vollständig fertig sind und keine weiteren Daten daraus benötigen, selbst wenn Datenblöcke in die Warteschlange gestellt sind, die darauf warten, gelesen zu werden. Diese Daten gehen verloren, nachdem der Cancel-Befehl aufgerufen wurde, und der Stream ist nicht mehr lesbar. Um diese Datenblöcke dennoch zu lesen und den Stream nicht vollständig loszuwerden, würden Sie {{domxref("ReadableStreamDefaultController.close()")}} verwenden.

> [!NOTE]
> Ist der Reader aktiv, verhält sich die
> `cancel()`-Methode genauso wie die des zugehörigen Streams
> ({{domxref("ReadableStream.cancel()")}}).

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein menschenlesbarer Grund für die Stornierung. Dieser Wert kann verwendet werden oder auch nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem im `reason`-Parameter angegebenen Wert erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Das Quellobjekt ist kein `ReadableStreamDefaultReader` oder der Stream hat keinen Besitzer.

## Beispiele

Im folgenden einfachen Beispiel wird ein zuvor erstellter benutzerdefinierter `ReadableStream` mithilfe eines {{domxref("ReadableStreamDefaultReader")}} gelesen, der mit `getReader()` erstellt wurde. (dieser Code basiert auf unserem [Einfachen Zufallsstream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/)). Jeder Block wird nacheinander gelesen und an die Benutzeroberfläche ausgegeben, bis der Stream vollständig gelesen wurde, woraufhin wir aus der rekursiven Funktion zurückkehren und den gesamten Stream an einem anderen Teil der Benutzeroberfläche ausgeben.

Wenn der Stream abgeschlossen ist (`if (done)`), führen wir `reader.cancel()` aus, um den Stream abzubrechen und zu signalisieren, dass wir ihn nicht mehr benötigen.

```js
function fetchStream() {
  const reader = stream.getReader();
  let charsReceived = 0;

  // read() gibt ein Versprechen zurück, das aufgelöst wird,
  // wenn ein Wert empfangen wurde
  reader.read().then(function processText({ done, value }) {
    // Ergebnisobjekte enthalten zwei Eigenschaften:
    // done  - true, wenn der Stream bereits alle seine Daten geliefert hat.
    // value - einige Daten. Immer undefiniert, wenn done wahr ist.
    if (done) {
      console.log("Stream complete");
      reader.cancel();
      para.textContent = result;
      return;
    }

    // Der Wert für Abrufstreams ist ein Uint8Array
    charsReceived += value.length;
    const chunk = value;
    let listItem = document.createElement("li");
    listItem.textContent = `Received ${charsReceived} characters so far. Current chunk = ${chunk}`;
    list2.appendChild(listItem);

    result += chunk;

    // Lesen Sie noch etwas mehr und rufen Sie diese Funktion erneut auf
    return reader.read().then(processText);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
