---
title: "ResizeObserverSize: inlineSize Eigenschaft"
short-title: inlineSize
slug: Web/API/ResizeObserverSize/inlineSize
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Resize Observer API")}}

Die **`inlineSize`** schreibgeschützte Eigenschaft der [`ResizeObserverSize`](/de/docs/Web/API/ResizeObserverSize)-Schnittstelle gibt die Länge des Border-Box des beobachteten Elements in der Inline-Dimension zurück. Für Boxen mit einem horizontalen {{cssxref("writing-mode")}} ist dies die horizontale Dimension oder Breite; wenn der Schreibmodus vertikal ist, ist dies die vertikale Dimension oder Höhe.

> [!NOTE]
> Für eine ausführlichere Erklärung von Schreibmodi sowie Block- und Inline-Dimensionen lesen Sie [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

## Wert

Ein Dezimalwert, der die Inline-Größe in Pixeln darstellt.

## Beispiele

In diesem Beispiel geben wir ein Array von Größeninformationen mit [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) zurück. Die `inlineSize`-Eigenschaft gibt die Inline-Dimensionsgröße des beobachteten Elements zurück.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const elemSize = entry.contentBoxSize[0];
    console.log(elemSize.inlineSize); // a decimal
  }
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
