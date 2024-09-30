---
title: ResizeObserverSize
slug: Web/API/ResizeObserverSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserverSize`**-Schnittstelle der [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird von der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle verwendet, um auf die Boxgrößeneigenschaften des beobachteten Elements zuzugreifen.

> [!NOTE]
> Im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), einem Fragmentkontext, entspricht die von `ResizeObserverSize` zurückgegebene Größe der Größe der ersten Spalte.

## Instanz-Eigenschaften

- [`ResizeObserverSize.blockSize`](/de/docs/Web/API/ResizeObserverSize/blockSize) {{ReadOnlyInline}}
  - : Die Länge der Border-Box des beobachteten Elements in der Blockdimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- [`ResizeObserverSize.inlineSize`](/de/docs/Web/API/ResizeObserverSize/inlineSize) {{ReadOnlyInline}}
  - : Die Länge der Border-Box des beobachteten Elements in der Inline-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung der Schreibmodi sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

In diesem Beispiel gibt die [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize)-Eigenschaft ein `ResizeObserverSize`-Objekt zurück. Dies ist ein Array, das die Größeninformationen für die Content-Box des beobachteten Elements enthält.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    console.log(entry.contentBoxSize[0]); // a ResizeObserverSize
  }
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
