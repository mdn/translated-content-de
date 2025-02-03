---
title: "HTMLIframeElement: getSVGDocument()-Methode"
short-title: getSVGDocument()
slug: Web/API/HTMLIframeElement/getSVGDocument
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("HTML DOM")}}

Die **`getSVGDocument()`**-Methode des [`HTMLIframeElement`](/de/docs/Web/API/HTMLIframeElement)-Interfaces gibt das [`Document`](/de/docs/Web/API/Document)-Objekt des eingebetteten SVG zurück.

## Syntax

```js-nolint
getSVGDocument()
```

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document).

## Beispiele

```js
const svgDoc = document.getElementById("el").getSVGDocument();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLEmbedElement.getSVGDocument`](/de/docs/Web/API/HTMLEmbedElement/getSVGDocument)
- [`HTMLObjectElement.getSVGDocument`](/de/docs/Web/API/HTMLObjectElement/getSVGDocument)
