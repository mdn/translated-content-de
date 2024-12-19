---
title: "ResizeObserverEntry: `contentBoxSize` Eigenschaft"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Resize Observer API")}}

Die **`contentBoxSize`** schreibgeschützte Eigenschaft der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)-Schnittstelle gibt ein Array zurück, das die neue content box Größe des beobachteten Elements enthält, wenn der Callback ausgeführt wird.

## Wert

Ein Array, das Objekte mit der neuen content box Größe des beobachteten Elements enthält. Das Array ist notwendig, um Elemente zu unterstützen, die mehrere Fragmente haben, wie es in Mehrspalten-Szenarien vorkommt. Jedes Objekt im Array enthält zwei Eigenschaften:

- `blockSize`
  - : Die Länge der content box des beobachteten Elements in der Block-Dimension. Für Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} entspricht dies der vertikalen Dimension, also
    der Höhe; wenn der writing-mode vertikal ist, entspricht dies der horizontalen Dimension, also der Breite.
- `inlineSize`
  - : Die Länge der content box des beobachteten Elements in der Inline-Dimension. Für Boxen
    mit einem horizontalen {{cssxref("writing-mode")}} entspricht dies der horizontalen Dimension, also
    der Breite; wenn der writing-mode vertikal ist, entspricht dies der vertikalen Dimension, also der Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung der Schreibmodi und der Block- und Inline-Dimensionen lesen Sie [Different Text Directions behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

## Beispiele

Der folgende Codeausschnitt stammt aus dem [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)) Beispiel. Dieses Beispiel enthält ein grünes Kästchen, das als Prozentsatz der Viewport-Größe dimensioniert ist. Wenn die Viewport-Größe geändert wird, ändern sich die abgerundeten Ecken des Kästchens proportional zur Größe des Kästchens. Wir könnten dies einfach mit {{cssxref("border-radius")}} und einem Prozentsatz umsetzen, aber das führt schnell zu unschönen elliptischen Ecken; diese Lösung bietet Ihnen schöne quadratische Ecken, die mit der Boxgröße skalieren.

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
