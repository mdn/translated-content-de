---
title: "ReadableStream: Methode `cancel()`"
short-title: cancel()
slug: Web/API/ReadableStream/cancel
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Stream abgebrochen wird.

`Cancel` wird verwendet, wenn Sie den Stream vollständig abgeschlossen haben und keine weiteren Daten daraus benötigen, selbst wenn sich noch einige Datenblöcke in der Warteschlange befinden, die gelesen werden könnten. Diese Daten gehen verloren, nachdem `cancel` aufgerufen wurde, und der Stream ist nicht mehr lesbar. Um diese Datenblöcke noch zu lesen und den Stream nicht vollständig zu entfernen, würden Sie [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) verwenden.

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein menschenlesbarer Grund für die Stornierung. Dieser wird an die zugrunde liegende Quelle übergeben, die ihn verwenden kann oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Wert `undefined` erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu stornieren versuchen, ist kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ist gesperrt.

## Beispiele

In Jake Archibalds [Abbrechen eines Fetchs](https://jsbin.com/gameboy/edit?js,console) Beispiel wird ein Stream verwendet, um die WHATWG HTML-Spezifikation stückweise abzurufen; jeder Block wird nach dem String "service workers" durchsucht. Wenn die Suchbegriffe gefunden werden, wird `cancel()` verwendet, um den Stream zu beenden – der Job ist abgeschlossen, daher wird er nicht mehr benötigt.

```js
const searchTerm = "service workers";
// Chars to show either side of the result in the match
const contextBefore = 30;
const contextAfter = 30;
const caseInsensitive = true;
const url = "https://html.spec.whatwg.org/";

console.log(`Searching '${url}' for '${searchTerm}'`);

fetch(url)
  .then((response) => {
    console.log("Received headers");

    const decoder = new TextDecoder();
    const reader = response.body.getReader();
    const toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
    const bufferSize = Math.max(toMatch.length - 1, contextBefore);

    let bytesReceived = 0;
    let buffer = "";
    let matchFoundAt = -1;

    return reader.read().then(function process(result) {
      if (result.done) {
        console.log("Failed to find match");
        return;
      }

      bytesReceived += result.value.length;
      console.log(`Received ${bytesReceived} bytes of data so far`);

      buffer += decoder.decode(result.value, { stream: true });

      // already found match & just context-gathering?
      if (matchFoundAt === -1) {
        matchFoundAt = (
          caseInsensitive ? buffer.toLowerCase() : buffer
        ).indexOf(toMatch);
      }

      if (matchFoundAt === -1) {
        buffer = buffer.slice(-bufferSize);
      } else if (
        buffer.slice(matchFoundAt + toMatch.length).length >= contextAfter
      ) {
        console.log("Here's the match:");
        console.log(
          buffer.slice(
            Math.max(0, matchFoundAt - contextBefore),
            matchFoundAt + toMatch.length + contextAfter,
          ),
        );
        console.log("Cancelling fetch");
        reader.cancel();
        return;
      } else {
        console.log("Found match, but need more context…");
      }

      // keep reading
      return reader.read().then(process);
    });
  })
  .catch((err) => {
    console.error(
      "Something went wrong. See devtools for details. Does the response lack CORS headers?",
    );
    throw err;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
