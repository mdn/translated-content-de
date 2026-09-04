---
title: "Blob: textStream() Methode"
short-title: textStream()
slug: Web/API/Blob/textStream
l10n:
  sourceCommit: 1bfa4c3f7895d734df516d2bc61240313397a63c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`textStream()`**-Methode des [`Blob`](/de/docs/Web/API/Blob)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um die Inhalte des `Blob` in UTF-8-Chunks zu lesen.

Dies bietet einen einfacheren Mechanismus zum Streamen des Inhalts als das Durchleiten eines [`Blob.stream()`](/de/docs/Web/API/Blob/stream)-Byte-Streams durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream).

> [!NOTE]
> Die `textStream()`-Methode unterscheidet sich von [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText) dadurch, dass sie immer UTF-8-Codierung verwendet, während `readAsText()` einen Parameter hat, der die Codierung festlegt.

## Syntax

```js-nolint
textStream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

### Lesen von Blob-Inhalten als Text-Stream

Dieses Beispiel zeigt, wie man Blob-Inhalte als Text-Stream liest.

Wir erstellen ein Beispiel-`Blob`, erhalten einen `ReadableStream` seines Inhalts mit `textStream()`, und lesen dann den Text über einen Reader, der mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellt wurde.

```js
const pElem = document.querySelector("p");

const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

async function streamBlobText(blob) {
  const textStream = blob.textStream();
  // instead of
  // const textStream = blob.stream().pipeThrough(new TextDecoderStream());

  const reader = textStream.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    pElem.textContent += value;
  }
}

streamBlobText(myBlob);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader)
- [`Blob.stream()`](/de/docs/Web/API/Blob/stream)
