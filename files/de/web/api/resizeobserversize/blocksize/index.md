---
title: "ResizeObserverSize: blockSize-Eigenschaft"
short-title: blockSize
slug: Web/API/ResizeObserverSize/blockSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte **`blockSize`**-Eigenschaft der [`ResizeObserverSize`](/de/docs/Web/API/ResizeObserverSize)-Schnittstelle gibt die Länge des Rahmenfeldes des beobachteten Elements in der Blockdimension zurück. Für Felder mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.

> [!NOTE]
> Weitere Erklärungen zu Schreibmodi und Block- sowie Inline-Dimensionen finden Sie unter [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Wert

Ein Dezimalwert, der die Blockgröße in Pixeln darstellt.

## Beispiele

In diesem Beispiel geben wir ein Array von Größeninformationen mit [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) zurück. Die `blockSize`-Eigenschaft gibt die Blockdimensionalgröße des beobachteten Elements zurück.

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
