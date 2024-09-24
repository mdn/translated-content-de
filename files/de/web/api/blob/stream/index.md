---
title: "Blob: stream()-Methode"
short-title: stream()
slug: Web/API/Blob/stream
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`stream()`**-Methode des {{domxref("Blob")}}-Interfaces gibt einen {{domxref("ReadableStream")}} zurück, der beim Lesen die im `Blob` enthaltenen Daten zurückgibt.

## Syntax

```js-nolint
stream()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("ReadableStream")}}, der beim Lesen den Inhalt des
`Blob` zurückgibt.

## Nutzungshinweise

Mit `stream()` und dem zurückgegebenen {{domxref("ReadableStream")}} erhalten Sie mehrere interessante Möglichkeiten:

- Rufen Sie {{domxref("ReadableStream.getReader", "getReader()")}} auf dem zurückgegebenen Stream auf, um ein Objekt zum Lesen der Daten aus dem Blob mit Methoden wie der {{domxref("ReadableStreamDefaultReader")}}-Schnittstelle und der Methode {{domxref("ReadableStreamDefaultReader.read", "read()")}} zu erhalten.
- Verwenden Sie die {{domxref("ReadableStream.pipeTo", "pipeTo()")}}-Methode des zurückgegebenen Streams, um die Daten des Blobs an einen beschreibbaren Strom zu übergeben.
- Nutzen Sie die {{domxref("ReadableStream.tee", "tee()")}}-Methode des zurückgegebenen Streams, um den lesbaren Stream aufzuteilen. Dies gibt ein Array mit zwei neuen `ReadableStream`-Objekten zurück, von denen jedes den Inhalt des `Blob` zurückgibt.
- Verwenden Sie die {{domxref("ReadableStream.pipeThrough", "pipeThrough()")}}-Methode des zurückgegebenen Streams, um den Strom durch einen {{domxref("TransformStream")}} oder ein beliebiges anderes lesbares und schreibbares Paar zu leiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Response.body")}}
- [Streams API](/de/docs/Web/API/Streams_API)
