---
title: "HTMLObjectElement: getSVGDocument() Methode"
short-title: getSVGDocument()
slug: Web/API/HTMLObjectElement/getSVGDocument
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("HTML DOM")}}

Die **`getSVGDocument()`** Methode des [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement) Interfaces gibt das [`Document`](/de/docs/Web/API/Document) Objekt des eingebetteten SVG zurück.

## Syntax

```js-nolint
getSVGDocument()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

## Beispiele

```js
const svg = document.getElementById("el").getSVGDocument();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLIFrameElement.getSVGDocument`](/de/docs/Web/API/HTMLIFrameElement/getSVGDocument)
- [`HTMLEmbedElement.getSVGDocument`](/de/docs/Web/API/HTMLEmbedElement/getSVGDocument)
