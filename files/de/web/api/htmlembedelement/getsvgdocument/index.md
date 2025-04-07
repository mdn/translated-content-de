---
title: "HTMLEmbedElement: getSVGDocument() Methode"
short-title: getSVGDocument()
slug: Web/API/HTMLEmbedElement/getSVGDocument
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("HTML DOM")}}

Die **`getSVGDocument()`**-Methode des [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Interfaces gibt das [`Document`](/de/docs/Web/API/Document)-Objekt des eingebetteten SVG zurück.

## Syntax

```js-nolint
getSVGDocument()
```

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
- [`HTMLObjectElement.getSVGDocument`](/de/docs/Web/API/HTMLObjectElement/getSVGDocument)
