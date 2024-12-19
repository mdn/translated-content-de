---
title: ResizeObserverSize
slug: Web/API/ResizeObserverSize
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserverSize`**-Schnittstelle der [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird von der Schnittstelle [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry) verwendet, um auf die Box-Größeneigenschaften des beobachteten Elements zuzugreifen.

> [!NOTE]
> In einem [mehrspaltigen Layout](/de/docs/Web/CSS/CSS_multicol_layout), das einen fragmentierten Kontext darstellt, ist die durch `ResizeObserverSize` zurückgegebene Größe die Größe der ersten Spalte.

## Instanz-Eigenschaften

- [`ResizeObserverSize.blockSize`](/de/docs/Web/API/ResizeObserverSize/blockSize) {{ReadOnlyInline}}
  - : Die Länge des Begrenzungsrahmens des beobachteten Elements in der Block-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- [`ResizeObserverSize.inlineSize`](/de/docs/Web/API/ResizeObserverSize/inlineSize) {{ReadOnlyInline}}
  - : Die Länge des Begrenzungsrahmens des beobachteten Elements in der Inline-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für mehr Erklärungen zu Schreibmodi sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

## Beispiele

In diesem Beispiel gibt die Eigenschaft [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) ein `ResizeObserverSize`-Objekt zurück. Dies ist ein Array, das die Größeninformationen für die Inhaltsbox des beobachteten Elements enthält.

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
