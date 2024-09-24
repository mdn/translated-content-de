---
title: "Blob: text() Methode"
short-title: text()
slug: Web/API/Blob/text
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`text()`**-Methode der {{domxref("Blob")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem String aufgelöst wird, der den Inhalt des Blobs enthält, interpretiert als UTF-8.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem String aufgelöst wird, der die Daten des Blobs als Textstring enthält. Die Daten werden _immer_ im UTF-8-Format angenommen.

## Anwendungsnotizen

Die {{domxref("FileReader")}}-Methode {{domxref("FileReader.readAsText", "readAsText()")}} ist eine ältere Methode, die eine ähnliche Funktion ausführt. Sie funktioniert sowohl mit `Blob`- als auch mit {{domxref("File")}}-Objekten. Es gibt zwei wesentliche Unterschiede:

- `Blob.text()` gibt ein Promise zurück, während `FileReader.readAsText()` eine ereignisbasierte API ist.
- `Blob.text()` verwendet immer UTF-8 als Kodierung, während `FileReader.readAsText()` je nach Typ des Blobs und einem angegebenen Kodierungsnamen eine andere Kodierung verwenden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Response.text()")}}
- [Streams API](/de/docs/Web/API/Streams_API)
- {{domxref("FileReader.readAsText()")}}
