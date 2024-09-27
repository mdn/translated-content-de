---
title: ResizeObserverSize
slug: Web/API/ResizeObserverSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserverSize`**-Schnittstelle der [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird von der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle verwendet, um auf die Box-Größeneigenschaften des beobachteten Elements zuzugreifen.

> [!NOTE]
> In einem [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), das ein fragmentierter Kontext ist, wird die Größe, die von `ResizeObserverSize` zurückgegeben wird, die Größe der ersten Spalte sein.

## Instanz-Eigenschaften

- [`ResizeObserverSize.blockSize`](/de/docs/Web/API/ResizeObserverSize/blockSize) {{ReadOnlyInline}}
  - : Die Länge des Randrahmens des beobachteten Elements in der Block-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- [`ResizeObserverSize.inlineSize`](/de/docs/Web/API/ResizeObserverSize/inlineSize) {{ReadOnlyInline}}
  - : Die Länge des Randrahmens des beobachteten Elements in der Inline-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für mehr Erklärungen zu Schreibweisen und Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

In diesem Beispiel gibt die [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize)-Eigenschaft ein `ResizeObserverSize`-Objekt zurück. Dies ist ein Array, das die Größeninformationen für das Inhaltsfeld des beobachteten Elements enthält.

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
