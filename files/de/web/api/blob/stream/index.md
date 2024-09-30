---
title: "Blob: stream()-Methode"
short-title: stream()
slug: Web/API/Blob/stream
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`stream()`**-Methode des [`Blob`](/de/docs/Web/API/Blob)-Interfaces gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der beim Lesen die im `Blob` enthaltenen Daten liefert.

## Syntax

```js-nolint
stream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der beim Lesen den Inhalt des `Blob` zurückgibt.

## Verwendungshinweise

Mit `stream()` und dem zurückgegebenen [`ReadableStream`](/de/docs/Web/API/ReadableStream) erhalten Sie mehrere interessante Möglichkeiten:

- Rufen Sie [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf, um ein Objekt zu erhalten, mit dem Sie die Daten aus dem Blob mit Methoden wie der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)-Schnittstelle und der Methode [`read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) lesen können.
- Verwenden Sie die Methode [`pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) des zurückgegebenen Streams, um die Daten des Blobs an einen beschreibbaren Stream zu übertragen.
- Nutzen Sie die Methode [`tee()`](/de/docs/Web/API/ReadableStream/tee) des zurückgegebenen Streams, um den lesbaren Stream zu duplizieren. Dies gibt ein Array zurück, das zwei neue `ReadableStream`-Objekte enthält, von denen jedes den Inhalt des `Blob` liefert.
- Wenden Sie die Methode [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) des zurückgegebenen Streams an, um den Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) oder ein anderes les- und schreibbares Paar zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.body`](/de/docs/Web/API/Response/body)
- [Streams API](/de/docs/Web/API/Streams_API)
