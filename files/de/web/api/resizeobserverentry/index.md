---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserverEntry`** Interface repräsentiert das Objekt, das an die Callback-Funktion des Konstruktors [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver) übergeben wird. Es ermöglicht Ihnen, auf die neuen Dimensionen des beobachteten [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement) zuzugreifen.

## Instanz-Eigenschaften

- [`ResizeObserverEntry.borderBoxSize`](/de/docs/Web/API/ResizeObserverEntry/borderBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe des Randrahmens des beobachteten Elements enthält, wenn der Callback ausgeführt wird.
- [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe des Inhaltsrahmens des beobachteten Elements enthält, wenn der Callback ausgeführt wird.
- [`ResizeObserverEntry.devicePixelContentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe des Inhaltsrahmens in {{Glossary("device_pixel", "Gerätepixeln")}} des beobachteten Elements enthält, wenn der Callback ausgeführt wird.
- [`ResizeObserverEntry.contentRect`](/de/docs/Web/API/ResizeObserverEntry/contentRect) {{ReadOnlyInline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) Objekt, das die neue Größe des beobachteten Elements enthält, wenn der Callback ausgeführt wird. Beachten Sie, dass dies nun eine veraltete Eigenschaft ist, die aus Gründen der Rückwärtskompatibilität in der Spezifikation beibehalten wird.
- [`ResizeObserverEntry.target`](/de/docs/Web/API/ResizeObserverEntry/target) {{ReadOnlyInline}}
  - : Ein Verweis auf das beobachtete [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Der Inhaltsrahmen ist der Bereich, in dem Inhalte platziert werden können, d.h. der Randrahmen abzüglich der Polsterung und der Randbreite. Der Randrahmen umfasst den Inhalt, die Polsterung und den Rand. Siehe [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) für eine weitere Erklärung.

## Instanz-Methoden

Keine.

## Beispiele

Der folgende Codeausschnitt stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quellcode](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)).

Beachten Sie, dass der Code drei unterschiedliche Kompatibilitätsfälle abdeckt:

- Einige ältere Browser könnten `contentRect` unterstützen, aber nicht `contentBoxSize`.
- Alte Versionen von Firefox unterstützen `contentBoxSize`, haben es aber fälschlicherweise als einzelnes Objekt und nicht als Array implementiert.
- Moderne Browser unterstützen `contentBoxSize` als ein Array von Objekten, um die Meldung von Boxgrößen für fragmentierte Elemente zu ermöglichen (zum Beispiel in einem Mehrspaltenszenario).

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
        // … but old versions of Firefox treat it as a single item
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
