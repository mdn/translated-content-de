---
title: "ResizeObserverEntry: devicePixelContentBoxSize-Eigenschaft"
short-title: devicePixelContentBoxSize
slug: Web/API/ResizeObserverEntry/devicePixelContentBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`devicePixelContentBoxSize`** schreibgeschützte Eigenschaft der
{{domxref("ResizeObserverEntry")}}-Schnittstelle liefert ein Array, das die Größe in Gerätepixeln des beobachteten Elements zurückgibt, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des beobachteten Elements in Gerätepixeln enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, was in Mehrspaltenszenarien vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Größe des Content-Box, in Gerätepixeln, der Block-Dimension des beobachteten Elements. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Größe des Content-Box, in Gerätepixeln, der Inline-Richtung des beobachteten Elements. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für mehr Informationen über Schreibmodi und Block- sowie Inline-Dimensionen, lesen Sie [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Pixel-perfect rendering with devicePixelContentBox](https://web.dev/articles/device-pixel-content-box). Da die Callback-Funktion eines {{domxref("ResizeObserver")}}
nach dem Layout, aber vor dem Rendern aufgerufen wird, bietet sich die Möglichkeit, die exakte Größe in physischen Pixeln zu protokollieren, um eine Eins-zu-eins-Zuordnung der Canvas-Pixel zu physischen Pixeln sicherzustellen.

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
