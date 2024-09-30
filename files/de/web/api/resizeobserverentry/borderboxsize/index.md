---
title: "ResizeObserverEntry: Eigenschaft borderBoxSize"
short-title: borderBoxSize
slug: Web/API/ResizeObserverEntry/borderBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`borderBoxSize`**-Eigenschaft der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle gibt ein Array zurück, das die neue Größe der `border box` des beobachteten Elements enthält, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe der `border box` des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente aufweisen, wie dies in Szenarien mit mehreren Spalten vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge der `border box` des beobachteten Elements in der Block-Dimension. Für Boxen mit horizontalem {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der `writing-mode` vertikal ist, entspricht dies der horizontalen Dimension oder Breite.
- `inlineSize`
  - : Die Länge der `border box` des beobachteten Elements in der Inline-Dimension. Für Boxen mit horizontalem {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der `writing-mode` vertikal ist, entspricht dies der vertikalen Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung der Schreibmodi sowie der Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize?.length > 0) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize,
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height,
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
