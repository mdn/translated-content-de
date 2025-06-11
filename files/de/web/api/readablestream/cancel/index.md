---
title: "ReadableStream: cancel() Methode"
short-title: cancel()
slug: Web/API/ReadableStream/cancel
l10n:
  sourceCommit: 4e6960933897e3a08b780f57e13e26bf2be820aa
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`cancel()`**-Methode des [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird.

`cancel` wird verwendet, wenn Sie den Stream vollständig fertiggestellt haben und keine weiteren Daten mehr benötigen, selbst wenn es noch auf die Verarbeitung wartende Datenblöcke gibt. Diese Daten gehen nach dem Aufruf von `cancel` verloren, und der Stream ist nicht mehr lesbar. Um diese Datenblöcke dennoch zu lesen und den Stream nicht vollständig zu verwerfen, würden Sie [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) verwenden.

## Syntax

```js-nolint
cancel()
cancel(reason)
```

### Parameter

- `reason` {{optional_inline}}
  - : Ein für Menschen lesbarer Grund für den Abbruch.
    Dieser wird an die zugrunde liegende Quelle übergeben, die ihn möglicherweise verwendet oder ignoriert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem `undefined`-Wert erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie versuchen abzubrechen, ist kein [`ReadableStream`](/de/docs/Web/API/ReadableStream) oder ist gesperrt.

## Beispiele

Im folgenden Beispiel wird ein Stream verwendet, um die WHATWG-HTML-Spezifikation stückweise abzurufen; jeder Block wird nach dem String "service workers" durchsucht. Wenn der Suchbegriff gefunden wird, wird `cancel()` verwendet, um den Stream abzubrechen – die Aufgabe ist erledigt, daher wird er nicht mehr benötigt.

```html
<pre id="output"></pre>
```

```js hidden
const output = document.getElementById("output");

function log(text) {
  output.textContent += text + "\n";
}
```

```js
const searchTerm = "service workers";
// Chars to show either side of the result in the match
const contextBefore = 30;
const contextAfter = 30;
const caseInsensitive = true;
const url = "https://html.spec.whatwg.org/";

log(`Searching '${url}' for '${searchTerm}'`);

fetch(url)
  .then((response) => {
    log("Received headers");

    const decoder = new TextDecoder();
    const reader = response.body.getReader();
    const toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
    const bufferSize = Math.max(toMatch.length - 1, contextBefore);

    let bytesReceived = 0;
    let buffer = "";
    let matchFoundAt = -1;

    return reader.read().then(function process(result) {
      if (result.done) {
        log("Failed to find match");
        return;
      }

      bytesReceived += result.value.length;
      log(`Received ${bytesReceived} bytes of data so far`);

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
        log("Here's the match:");
        log(
          buffer.slice(
            Math.max(0, matchFoundAt - contextBefore),
            matchFoundAt + toMatch.length + contextAfter,
          ),
        );
        log("Cancelling fetch");
        reader.cancel();
        return;
      } else {
        log("Found match, but need more context…");
      }

      // keep reading
      return reader.read().then(process);
    });
  })
  .catch((err) => {
    log(
      "Something went wrong. See devtools for details. Does the response lack CORS headers?",
    );
    throw err;
  });
```

{{EmbedLiveSample("examples", "", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
