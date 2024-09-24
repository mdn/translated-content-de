---
title: "ResizeObserverSize: inlineSize-Eigenschaft"
short-title: inlineSize
slug: Web/API/ResizeObserverSize/inlineSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Die **`inlineSize`**-Schreibgeschützte Eigenschaft der {{domxref("ResizeObserverSize")}} Schnittstelle gibt die Länge der Rahmenbox des beobachteten Elements in der Inline-Dimension zurück. Bei Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension, also die Breite; wenn der Schreibmodus vertikal ist, handelt es sich um die vertikale Dimension, also die Höhe.

> [!NOTE]
> Für weitere Erklärungen zu Schreibmodi und Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Wert

Ein Dezimalwert, der die Inline-Größe in Pixeln darstellt.

## Beispiele

In diesem Beispiel geben wir ein Array mit Größeninformationen mit {{domxref("ResizeObserverEntry.contentBoxSize")}} zurück. Die `inlineSize`-Eigenschaft gibt die Inline-Dimension des beobachteten Elements zurück.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const elemSize = entry.contentBoxSize[0];
    console.log(elemSize.inlineSize); // a decimal
  }
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
