---
title: "Document: close() Methode"
short-title: close()
slug: Web/API/Document/close
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.close()`** Methode beendet das Schreiben in ein Dokument, das mit [`Document.open()`](/de/docs/Web/API/Document/open) geöffnet wurde.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Open a document to write to it
document.open();

// Write the content of the document
document.write("<p>The one and only content.</p>");

// Close the document
document.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
