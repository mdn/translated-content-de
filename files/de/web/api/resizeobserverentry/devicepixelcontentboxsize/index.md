---
title: "ResizeObserverEntry: devicePixelContentBoxSize-Eigenschaft"
short-title: devicePixelContentBoxSize
slug: Web/API/ResizeObserverEntry/devicePixelContentBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft **`devicePixelContentBoxSize`** der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle gibt ein Array zurück, das die Größe in Gerätepixeln des beobachteten Elements enthält, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des beobachteten Elements in Gerätepixeln enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, was in Mehrspalten-Szenarien vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Größe des content-box in Gerätepixeln der Blockdimension des beobachteten Elements. Bei Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder
    Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Größe des content-box in Gerätepixeln der Inline-Dimension des beobachteten Elements. Bei Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder
    Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für weitere Informationen über Schreibweisen und Block- sowie Inline-Dimensionen, lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Pixelgenaues Rendering mit devicePixelContentBox](https://web.dev/articles/device-pixel-content-box). Da die Callback-Funktion eines [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
nach dem Layout, aber vor dem Zeichnen aufgerufen wird,
bietet dies die Möglichkeit, die exakte Größe in physischen Pixeln zu protokollieren, um eine Eins-zu-Eins-Abbildung von Canvas-Pixeln auf physische Pixel sicherzustellen.

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
