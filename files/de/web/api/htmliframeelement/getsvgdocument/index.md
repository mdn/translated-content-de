---
title: "HTMLIFrameElement: getSVGDocument()-Methode"
short-title: getSVGDocument()
slug: Web/API/HTMLIFrameElement/getSVGDocument
l10n:
  sourceCommit: fe10a1a162b45a32be7792f8dc79f565b0fe7f74
---

{{APIRef("HTML DOM")}}

Die **`getSVGDocument()`**-Methode des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces gibt das [`Document`](/de/docs/Web/API/Document)-Objekt des eingebetteten SVG zurück.

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
