---
title: "ResizeObserverEntry: Eigenschaft devicePixelContentBoxSize"
short-title: devicePixelContentBoxSize
slug: Web/API/ResizeObserverEntry/devicePixelContentBoxSize
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Resize Observer API")}}

Die **`devicePixelContentBoxSize`** schreibgeschützte Eigenschaft der
[`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle gibt ein Array zurück, das die Größe in Geräte-Pixeln des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des beobachteten Elements in Geräte-Pixeln enthält. Das Array ist erforderlich, um Elemente zu unterstützen, die mehrere Fragmente haben, was in Mehrspalten-Szenarien vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Größe des Content-Box in Geräte-Pixeln der Blockdimension des beobachteten Elements. Für Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension, oder
    Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension, oder Breite.
- `inlineSize`
  - : Die Größe der Content-Box in Geräte-Pixeln der Inline-Richtung des beobachteten Elements. Für Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension, oder
    Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension, oder Höhe.

> [!NOTE]
> Für weitere Informationen über Schreibmodi und Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Pixel-perfect rendering with devicePixelContentBox](https://web.dev/articles/device-pixel-content-box). Da die Rückruffunktion eines [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
nach dem Layout, aber vor dem Paint aufgerufen wird,
bietet sich die Gelegenheit, die genaue Größe in physischen Pixeln zu protokollieren, um eine Eins-zu-eins-Zuordnung der Canvas-Pixel zu physischen Pixeln sicherzustellen.

```js
const observer = new ResizeObserver((entries) => {
  const entry = entries.find((entry) => entry.target === canvas);
  canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
  canvas.height = entry.devicePixelContentBoxSize[0].blockSize;

  /* … render to canvas … */
});
observer.observe(canvas, { box: "device-pixel-content-box" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
