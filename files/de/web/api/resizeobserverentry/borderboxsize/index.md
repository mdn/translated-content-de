---
title: "ResizeObserverEntry: borderBoxSize-Eigenschaft"
short-title: borderBoxSize
slug: Web/API/ResizeObserverEntry/borderBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte **`borderBoxSize`**-Eigenschaft der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle gibt ein Array zurück, das die neue Größe des Border-Box des beobachteten Elements enthält, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des Border-Box des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, was in Mehrspalten-Szenarien vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge des Border-Box des beobachteten Elements in der Blockdimension. Für Kästen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Länge des Border-Box des beobachteten Elements in der Inline-Dimension. Für Kästen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung der Schreibmodi und Block- und Inline-Dimensionen lesen Sie [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

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
