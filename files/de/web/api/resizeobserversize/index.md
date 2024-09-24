---
title: ResizeObserverSize
slug: Web/API/ResizeObserverSize
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserverSize`**-Interface der [Resize Observer API](/de/docs/Web/API/Resize_Observer_API) wird von dem {{domxref("ResizeObserverEntry")}}-Interface verwendet, um auf die Box-Größeneigenschaften des beobachteten Elements zuzugreifen.

> [!NOTE]
> Im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), das ein fragmentierter Kontext ist, gibt die von `ResizeObserverSize` zurückgegebene Größe die Größe der ersten Spalte an.

## Instanz-Eigenschaften

- {{domxref("ResizeObserverSize.blockSize")}} {{ReadOnlyInline}}
  - : Die Länge des Border-Box des beobachteten Elements in der Block-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- {{domxref("ResizeObserverSize.inlineSize")}} {{ReadOnlyInline}}
  - : Die Länge des Border-Box des beobachteten Elements in der Inline-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung der Schreibmodi sowie der Block- und Inline-Dimensionen lesen Sie bitte [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

In diesem Beispiel gibt die Eigenschaft {{domxref("ResizeObserverEntry.contentBoxSize")}} ein `ResizeObserverSize`-Objekt zurück. Dies ist ein Array, das die Größeninformationen für die Content-Box des beobachteten Elements enthält.

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
