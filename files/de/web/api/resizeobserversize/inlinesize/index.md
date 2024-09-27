---
title: "ResizeObserverSize: inlineSize-Eigenschaft"
short-title: inlineSize
slug: Web/API/ResizeObserverSize/inlineSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Die **`inlineSize`** schreibgeschützte Eigenschaft des [`ResizeObserverSize`](/de/docs/Web/API/ResizeObserverSize)-Interfaces gibt die Länge des Rahmenkastens des beobachteten Elements in der Inline-Dimension zurück. Für Kästen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für weitere Erklärungen zu Schreibmodi sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Wert

Ein Dezimalwert, der die Inline-Größe in Pixel angibt.

## Beispiele

In diesem Beispiel geben wir ein Array mit Größeninformationen unter Verwendung von [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) zurück. Die `inlineSize`-Eigenschaft gibt die Inline-Dimension des beobachteten Elements zurück.

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

## Browser-Kompatibilität

{{Compat}}
