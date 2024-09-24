---
title: "ResizeObserverEntry: contentBoxSize-Eigenschaft"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`contentBoxSize`** schreibgeschützte Eigenschaft der Schnittstelle {{domxref("ResizeObserverEntry")}} gibt ein Array zurück, das die neue Größe des Inhaltsbereichs des beobachteten Elements enthält, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des Inhaltsbereichs des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, was in Mehrspaltenszenarien vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge des Inhaltsbereichs des beobachteten Elements in der Blockdimension. Für Boxen mit einer horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn die Schreibweise vertikal ist, handelt es sich um die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Länge des Inhaltsbereichs des beobachteten Elements in der Inline-Dimension. Für Boxen mit einer horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn die Schreibweise vertikal ist, handelt es sich um die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung von Schreibmodi sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

Das folgende Snippet stammt aus dem [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)) Beispiel. Dieses Beispiel enthält ein grünes Kästchen, das als Prozentsatz der Viewport-Größe dimensioniert ist. Wenn sich die Viewport-Größe ändert, ändern sich die abgerundeten Ecken des Kästchens proportional zur Größe des Kästchens. Wir könnten dies einfach durch die Verwendung von {{cssxref("border-radius")}} mit einem Prozentsatz umsetzen, aber das führt schnell zu hässlich aussehenden elliptischen Ecken; diese Lösung liefert Ihnen schöne quadratische Ecken, die mit der Größe des Kästchens skalieren.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // Der Standard macht contentBoxSize zu einem Array...
      if (entry.contentBoxSize[0]) {
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize[0].inlineSize / 10 +
              entry.contentBoxSize[0].blockSize / 10,
          ) + "px";
      } else {
        // ...aber ältere Versionen von Firefox behandeln es als einzelnes Element
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize.inlineSize / 10 +
              entry.contentBoxSize.blockSize / 10,
          ) + "px";
      }
    } else {
      entry.target.style.borderRadius =
        Math.min(
          100,
          entry.contentRect.width / 10 + entry.contentRect.height / 10,
        ) + "px";
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
