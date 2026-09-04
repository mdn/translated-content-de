---
title: "Blob: stream() Methode"
short-title: stream()
slug: Web/API/Blob/stream
l10n:
  sourceCommit: 1bfa4c3f7895d734df516d2bc61240313397a63c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`stream()`** Methode des [`Blob`](/de/docs/Web/API/Blob) Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück, der beim Lesen die im `Blob` enthaltenen Daten als Rohdaten-Teile zurückgibt.

## Syntax

```js-nolint
stream()
```

### Parameter

Keine.

### Rückgabewert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der beim Lesen den Inhalt des
`Blob` zurückgibt.

## Hinweise zur Verwendung

Mit `stream()` und dem zurückgegebenen [`ReadableStream`](/de/docs/Web/API/ReadableStream) erhalten Sie
mehrere interessante Möglichkeiten:

- Rufen Sie [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem zurückgegebenen Stream auf,
  um ein Objekt zu erhalten, mit dem Sie die Daten aus dem Blob mit Methoden wie der
  [`read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) Methode der
  [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) Schnittstelle lesen können.
- Verwenden Sie die [`pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) Methode des zurückgegebenen Streams,
  um die Daten des Blobs in einen schreibbaren Stream zu leiten.
- Nutzen Sie die [`tee()`](/de/docs/Web/API/ReadableStream/tee) Methode des zurückgegebenen Streams,
  um den lesbaren Stream zu **teilen**. Dies gibt ein Array zurück, das zwei neue
  `ReadableStream` Objekte enthält, von denen jedes den Inhalt des
  `Blob` zurückgibt.
- Verwenden Sie die [`pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) Methode des zurückgegebenen Streams, um den Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) oder ein anderes Paar von lesbaren und schreibbaren Streams zu leiten.
  > [!NOTE]
  > [`Blob.textStream()`](/de/docs/Web/API/Blob/textStream) ist eine nützliche Abkürzung, die sofort einen `ReadableStream` von UTF-8 Textteilen zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.body`](/de/docs/Web/API/Response/body)
- [Streams API](/de/docs/Web/API/Streams_API)
