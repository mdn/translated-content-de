---
title: "ResizeObserverEntry: contentBoxSize Eigenschaft"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft **`contentBoxSize`** der Schnittstelle [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry) gibt ein Array zurück, das die neue Größe des Inhaltsbereichs des beobachteten Elements enthält, wenn die Callback-Funktion ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen Größe des Inhaltsbereichs des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, was in Szenarien mit mehreren Spalten auftritt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge des Inhaltsbereichs des beobachteten Elements in der Blockdimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.
- `inlineSize`
  - : Die Länge des Inhaltsbereichs des beobachteten Elements in der Inline-Dimension. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung der Schreibmodi und Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

## Beispiele

Der folgende Ausschnitt stammt aus dem Beispiel [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)). Dieses Beispiel enthält eine grüne Box, deren Größe als Prozentsatz der Ansichtsfenstergröße festgelegt ist. Wenn die Größe des Ansichtsfensters geändert wird, ändern sich die abgerundeten Ecken der Box proportional zur Größe der Box. Wir könnten dies einfach mit {{cssxref("border-radius")}} und einem Prozentsatz umsetzen, aber das führt schnell zu unschön aussehenden elliptischen Ecken; diese Lösung liefert Ihnen schöne quadratische Ecken, die mit der Boxgröße skalieren.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        entry.target.style.borderRadius = `${Math.min(
          100,
          entry.contentBoxSize[0].inlineSize / 10 +
            entry.contentBoxSize[0].blockSize / 10,
        )}px`;
      } else {
        // … but old versions of Firefox treat it as a single item
        entry.target.style.borderRadius = `${Math.min(
          100,
          entry.contentBoxSize.inlineSize / 10 +
            entry.contentBoxSize.blockSize / 10,
        )}px`;
      }
    } else {
      entry.target.style.borderRadius = `${Math.min(
        100,
        entry.contentRect.width / 10 + entry.contentRect.height / 10,
      )}px`;
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
