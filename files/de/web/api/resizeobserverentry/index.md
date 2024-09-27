---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserverEntry`**-Interface repräsentiert das Objekt, das an die Rückruffunktion des [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)-Konstruktors übergeben wird. Es ermöglicht Ihnen den Zugriff auf die neuen Dimensionen des beobachteten [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

## Instanz-Eigenschaften

- [`ResizeObserverEntry.borderBoxSize`](/de/docs/Web/API/ResizeObserverEntry/borderBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Border-Box-Größe des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Content-Box-Größe des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- [`ResizeObserverEntry.devicePixelContentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Content-Box-Größe in Gerätepixeln des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- [`ResizeObserverEntry.contentRect`](/de/docs/Web/API/ResizeObserverEntry/contentRect) {{ReadOnlyInline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das die neue Größe des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird. Beachten Sie, dass dies jetzt eine Legacy-Eigenschaft ist, die aus Gründen der Abwärtskompatibilität in der Spezifikation beibehalten wird.
- [`ResizeObserverEntry.target`](/de/docs/Web/API/ResizeObserverEntry/target) {{ReadOnlyInline}}
  - : Ein Verweis auf das beobachtete [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Die Content-Box ist der Bereich, in dem Inhalt platziert werden kann, was bedeutet, dass es die Border-Box minus der Padding- und Rahmenbreite ist. Die Border-Box umfasst den Inhalt, das Padding und den Rahmen. Siehe [Das Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model) für eine weitere Erklärung.

## Instanz-Methoden

Keine.

## Beispiele

Der folgende Ausschnitt stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quelltext ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)).

Beachten Sie, dass der Code drei verschiedene Kompatibilitätsfälle behandelt:

- Einige alte Browser unterstützen möglicherweise `contentRect`, aber nicht `contentBoxSize`.
- Alte Versionen von Firefox unterstützen `contentBoxSize`, haben es jedoch fälschlicherweise als ein einzelnes Objekt anstelle eines Arrays implementiert.
- Moderne Browser unterstützen `contentBoxSize` als ein Array von Objekten, um ihnen zu ermöglichen, Boxgrößen für fragmentierte Elemente zu melden (zum Beispiel in einem Mehrspaltenszenario).

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
