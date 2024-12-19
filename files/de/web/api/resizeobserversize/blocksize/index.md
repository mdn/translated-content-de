---
title: "ResizeObserverSize: blockSize-Eigenschaft"
short-title: blockSize
slug: Web/API/ResizeObserverSize/blockSize
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft **`blockSize`** der [`ResizeObserverSize`](/de/docs/Web/API/ResizeObserverSize)-Schnittstelle gibt die Länge des Rahmenkastens des beobachteten Elements in der Block-Dimension zurück. Bei Kästen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die vertikale Dimension oder Höhe; wenn der Schreibmodus vertikal ist, ist dies die horizontale Dimension oder Breite.

> [!NOTE]
> Eine ausführlichere Erklärung zu Schreibmodi und Block- sowie Inline-Dimensionen finden Sie im Artikel [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

## Wert

Eine Dezimalzahl, die die Blockgröße in Pixeln darstellt.

## Beispiele

In diesem Beispiel geben wir ein Array mit Größeninformationen zurück, indem wir [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) verwenden. Die Eigenschaft `blockSize` gibt die Block-Dimension des beobachteten Elements zurück.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const elemSize = entry.contentBoxSize[0];
    console.log(elemSize.blockSize); // a decimal
  }
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
