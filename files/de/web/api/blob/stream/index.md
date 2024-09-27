---
title: "Blob: stream() Methode"
short-title: stream()
slug: Web/API/Blob/stream
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`stream()`** Methode der [`Blob`](/de/docs/Web/API/Blob) Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der beim Lesen die im `Blob` enthaltenen Daten liefert.

## Syntax

```js-nolint
stream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der beim Lesen den Inhalt des
`Blob` zurückgibt.

## Anwendungshinweise

Mit `stream()` und dem zurückgegebenen [`ReadableStream`](/de/docs/Web/API/ReadableStream) gewinnen Sie
mehrere interessante Möglichkeiten:

- Rufen Sie [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem zurückgegebenen Stream auf,
  um ein Objekt zu erhalten, mit dem Sie die Daten aus dem Blob mit Methoden wie der Methode
  [`read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) der [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Schnittstelle lesen können.
- Rufen Sie die [`pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) Methode des zurückgegebenen Streams auf,
  um die Daten des Blobs zu einem Writable Stream zu leiten.
- Rufen Sie die [`tee()`](/de/docs/Web/API/ReadableStream/tee) Methode des zurückgegebenen Streams auf, um
  den lesbaren Stream zu **verzweigen**. Dies gibt ein Array zurück, das zwei neue
  `ReadableStream` Objekte enthält, von denen jedes den Inhalt des
  `Blob` liefert.
- Rufen Sie die [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) Methode des zurückgegebenen Streams auf, um den Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) oder ein anderes lesbares und schreibbares Paar zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.body`](/de/docs/Web/API/Response/body)
- [Streams API](/de/docs/Web/API/Streams_API)
