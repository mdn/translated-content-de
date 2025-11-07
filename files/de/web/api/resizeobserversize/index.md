---
title: ResizeObserverSize
slug: Web/API/ResizeObserverSize
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserverSize`**-Schnittstelle der [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird von der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle verwendet, um auf die Box-Size-Eigenschaften des beobachteten Elements zuzugreifen.

> [!NOTE]
> In einem [mehrspaltigen Layout](/de/docs/Web/CSS/Guides/Multicol_layout), welches ein fragmentierter Kontext ist, wird die von `ResizeObserverSize` zurückgegebene Größe die der ersten Spalte sein.

## Instanz-Eigenschaften

- [`ResizeObserverSize.blockSize`](/de/docs/Web/API/ResizeObserverSize/blockSize) {{ReadOnlyInline}}
  - : Die Länge der Border-Box des beobachteten Elements in der Block-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Writing-Mode vertikal ist, ist dies die horizontale Dimension oder Breite.
- [`ResizeObserverSize.inlineSize`](/de/docs/Web/API/ResizeObserverSize/inlineSize) {{ReadOnlyInline}}
  - : Die Länge der Border-Box des beobachteten Elements in der Inline-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Writing-Mode vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine weitere Erklärung von Writing-Modes sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

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
