---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserverEntry`** Interface repräsentiert das Objekt, das an die Callback-Funktion des [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver) Konstruktors übergeben wird. Es ermöglicht Ihnen den Zugriff auf die neuen Dimensionen des beobachteten [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

## Instanzeigenschaften

- [`ResizeObserverEntry.borderBoxSize`](/de/docs/Web/API/ResizeObserverEntry/borderBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe des Border-Box des beobachteten Elements enthält, wenn der Callback ausgeführt wird.
- [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe des Content-Box des beobachteten Elements enthält, wenn der Callback ausgeführt wird.
- [`ResizeObserverEntry.devicePixelContentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe des Content-Box in {{Glossary("device_pixel", "Gerätepixeln")}} des beobachteten Elements enthält, wenn der Callback ausgeführt wird.
- [`ResizeObserverEntry.contentRect`](/de/docs/Web/API/ResizeObserverEntry/contentRect) {{ReadOnlyInline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das die neue Größe des beobachteten Elements enthält, wenn der Callback ausgeführt wird. Beachten Sie, dass dies jetzt eine veraltete Eigenschaft ist, die im Standard nur aus Gründen der Rückwärtskompatibilität beibehalten wird.
- [`ResizeObserverEntry.target`](/de/docs/Web/API/ResizeObserverEntry/target) {{ReadOnlyInline}}
  - : Eine Referenz zu dem beobachteten [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Die Content-Box ist der Bereich, in dem Inhalt platziert werden kann, das bedeutet die Border-Box minus die Polster- und Rahmenbreite. Die Border-Box umfasst den Inhalt, das Padding und den Rahmen. Weitere Erklärungen finden Sie im [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model).

## Instanzmethoden

Keine.

## Beispiele

Das folgende Snippet stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)).

Beachten Sie, dass der Code drei verschiedene Kompatibilitätsfälle abdeckt:

- Einige alte Browser können `contentRect` unterstützen, aber nicht `contentBoxSize`.
- Alte Versionen von Firefox unterstützen `contentBoxSize`, haben es jedoch fälschlicherweise als einzelnes Objekt anstelle eines Arrays implementiert.
- Moderne Browser unterstützen `contentBoxSize` als ein Array von Objekten, um ihnen zu ermöglichen, Boxgrößen für fragmentierte Elemente (zum Beispiel in einem Mehrspaltenszenario) zu melden.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
        // ...but old versions of Firefox treat it as a single item
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize.inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize.inlineSize / 600) + "rem";
      }
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
