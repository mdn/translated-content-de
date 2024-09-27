---
title: "ResizeObserverEntry: contentBoxSize-Eigenschaft"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`contentBoxSize`** schreibgeschützte Eigenschaft des [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Interfaces gibt ein Array zurück, das die neue Größe des Content-Box der beobachteten Elemente enthält, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Content-Box-Größe des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, wie sie in Mehrspaltenszenarien vorkommen. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge der Content-Box des beobachteten Elements in der Block-Dimension. Bei Boxen mit einem horizontalen {{cssxref("writing-mode")}}, ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Länge der Content-Box des beobachteten Elements in der Inline-Dimension. Bei Boxen mit einem horizontalen {{cssxref("writing-mode")}}, ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für weitere Erklärungen zu Schreibmodi sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Beispiele

Der folgende Ausschnitt stammt aus dem Beispiel [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)). Dieses Beispiel enthält ein grünes Quadrat, dessen Größe als Prozentsatz der Ansichtsfenstergröße definiert ist. Wenn die Größe des Ansichtsfensters geändert wird, ändern sich die abgerundeten Ecken der Box proportional zur Größe der Box. Wir könnten dies einfach mit {{cssxref("border-radius")}} und einem Prozentsatz umsetzen, aber das führt schnell zu unschön aussehenden elliptischen Ecken; diese Lösung bietet Ihnen schöne quadratische Ecken, die mit der Boxgröße skalieren.

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
