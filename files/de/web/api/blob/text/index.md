---
title: "Blob: text() Methode"
short-title: text()
slug: Web/API/Blob/text
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`text()`** Methode des [`Blob`](/de/docs/Web/API/Blob)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Inhalt des Blobs enthält und als UTF-8 interpretiert wird.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem String aufgelöst wird, welcher die Daten des Blobs als Textzeichenkette enthält. Die Daten werden _immer_ im UTF-8-Format angenommen.

## Anwendungshinweise

Die [`FileReader`](/de/docs/Web/API/FileReader)-Methode [`readAsText()`](/de/docs/Web/API/FileReader/readAsText) ist eine ältere Methode, die eine ähnliche Funktion ausführt. Sie funktioniert sowohl mit `Blob`- als auch mit [`File`](/de/docs/Web/API/File)-Objekten. Es gibt zwei wesentliche Unterschiede:

- `Blob.text()` gibt ein Promise zurück, während `FileReader.readAsText()` eine ereignisbasierte API ist.
- `Blob.text()` verwendet immer UTF-8 als Kodierung, während `FileReader.readAsText()` eine andere Kodierung je nach Blob-Typ und einem angegebenen Kodierungsnamen verwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Response.text()`](/de/docs/Web/API/Response/text)
- [Streams API](/de/docs/Web/API/Streams_API)
- [`FileReader.readAsText()`](/de/docs/Web/API/FileReader/readAsText)
