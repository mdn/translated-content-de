---
title: "ResizeObserverEntry: contentBoxSize-Eigenschaft"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte **`contentBoxSize`**-Eigenschaft der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle gibt ein Array zurück, das die neue Größe des Inhaltsbereichs des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des Inhaltsbereichs des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, die in mehrspaltigen Szenarien auftreten. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge des Inhaltsbereichs des beobachteten Elements in der Blockdimension. Bei Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder
    Höhe; wenn das Writing-Mode vertikal ist, ist dies die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Länge des Inhaltsbereichs des beobachteten Elements in der Inline-Dimension. Bei Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder
    Breite; wenn das Writing-Mode vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für weitere Erklärungen zu Schreibmodi und Block- und Inline-Dimensionen, lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

Der folgende Ausschnitt stammt aus dem Beispiel [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
([Quelltext ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)). Dieses Beispiel enthält ein grünes Kästchen, dessen Größe prozentual zur
Viewport-Größe eingestellt ist. Wenn die Viewport-Größe geändert wird, ändern sich die abgerundeten Ecken des Kästchens proportional zur Größe des Kästchens. Wir könnten dies einfach mit
{{cssxref("border-radius")}} und einem Prozentsatz umsetzen, aber das führt schnell zu unschön aussehenden ellipsenförmigen Ecken; diese Lösung bietet schöne quadratische Ecken, die mit der Größe des Kästchens skalieren.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize[0].inlineSize / 10 +
              entry.contentBoxSize[0].blockSize / 10,
          ) + "px";
      } else {
        // ...but old versions of Firefox treat it as a single item
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
