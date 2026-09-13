---
title: "Blob: textStream()-Methode"
short-title: textStream()
slug: Web/API/Blob/textStream
l10n:
  sourceCommit: ad1fac9d8dd0c9ab8f560e98c5c923559617ba54
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`textStream()`**-Methode der Schnittstelle [`Blob`](/de/docs/Web/API/Blob) gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der verwendet werden kann, um den Inhalt des `Blob` in UTF-8-Chunks zu lesen.

Dies bietet einen einfacheren Mechanismus zum Streamen des Inhalts, als einen Byte-Stream von [`Blob.stream()`](/de/docs/Web/API/Blob/stream) durch einen [`TextDecoderStream`](/de/docs/Web/API/TextDecoderStream) zu leiten.

> [!NOTE]
> Die Methode `textStream()` unterscheidet sich von [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText) dadurch, dass sie immer die UTF-8-Kodierung verwendet, während `readAsText()` einen Parameter besitzt, der die Kodierung festlegt.

## Syntax

```js-nolint
textStream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

### Blob-Inhalt als Text-Stream lesen

Dieses Beispiel zeigt, wie Blob-Inhalt als Text-Stream gelesen wird.

Wir erstellen einen Beispiel-`Blob`, rufen mithilfe von `textStream()` einen `ReadableStream` seines Inhalts ab und lesen dann den Text über einen Reader, der mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) erstellt wurde.

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
