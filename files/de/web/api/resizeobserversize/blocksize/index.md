---
title: "ResizeObserverSize: blockSize-Eigenschaft"
short-title: blockSize
slug: Web/API/ResizeObserverSize/blockSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Die **`blockSize`**-Eigenschaft der schreibgeschützten {{domxref("ResizeObserverSize")}}-Schnittstelle gibt die Länge der Rahmenbox des beobachteten Elements in der Blockrichtung zurück. Bei Boxen mit horizontalem {{cssxref("writing-mode")}} ist dies die vertikale Dimension, oder Höhe; wenn der Schreibmodus vertikal ist, handelt es sich um die horizontale Dimension, oder Breite.

> [!NOTE]
> Für weitere Erklärungen zu Schreibmodi und Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Wert

Ein Dezimalwert, der die Blockgröße in Pixeln darstellt.

## Beispiele

In diesem Beispiel geben wir ein Array von Größeninformationen mit {{domxref("ResizeObserverEntry.contentBoxSize")}} zurück. Die `blockSize`-Eigenschaft gibt die Größe der Blockdimension des beobachteten Elements zurück.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const elemSize = entry.contentBoxSize[0];
    console.log(elemSize.blockSize); // a decimal
  }
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
