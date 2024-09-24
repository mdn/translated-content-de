---
title: "Dokument: close()-Methode"
short-title: close()
slug: Web/API/Document/close
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`Document.close()`**-Methode beendet das Schreiben in ein Dokument, das mit {{domxref("Document.open()")}} geöffnet wurde.

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
// Öffnen Sie ein Dokument, um in es zu schreiben
document.open();

// Schreiben Sie den Inhalt des Dokuments
document.write("<p>The one and only content.</p>");

// Schließen Sie das Dokument
document.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
