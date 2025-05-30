---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Resize Observer API")}}

Das **`ResizeObserverEntry`**-Interface repräsentiert das Objekt, das an die Rückruffunktion des Konstruktors [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver) übergeben wird, wodurch Sie Zugriff auf die neuen Dimensionen des überwachten [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement) erhalten.

## Instanzeigenschaften

- [`ResizeObserverEntry.borderBoxSize`](/de/docs/Web/API/ResizeObserverEntry/borderBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe der Rahmenbox des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe der Inhaltsbox des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- [`ResizeObserverEntry.devicePixelContentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize) {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe der Inhaltsbox in {{Glossary("device_pixel", "Gerätepixeln")}} des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- [`ResizeObserverEntry.contentRect`](/de/docs/Web/API/ResizeObserverEntry/contentRect) {{ReadOnlyInline}}
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das die neue Größe des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird. Beachten Sie, dass dies jetzt eine veraltete Eigenschaft ist, die nur aus Gründen der Abwärtskompatibilität in der Spezifikation beibehalten wird.
- [`ResizeObserverEntry.target`](/de/docs/Web/API/ResizeObserverEntry/target) {{ReadOnlyInline}}
  - : Eine Referenz auf das beobachtete [`Element`](/de/docs/Web/API/Element) oder [`SVGElement`](/de/docs/Web/API/SVGElement).

> [!NOTE]
> Die Inhaltsbox ist die Box, in der Inhalte platziert werden können, das bedeutet die Rahmenbox minus der Polsterung und der Rahmenbreite. Die Rahmenbox umfasst den Inhalt, die Polsterung und den Rahmen. Siehe [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) für weitere Erklärungen.

## Instanzmethoden

Keine.

## Beispiele

Das folgende Beispiel stammt aus dem [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) Beispiel.

Beachten Sie, dass der Code drei verschiedene Kompatibilitätsfälle abdeckt:

- Einige alte Browser unterstützen möglicherweise `contentRect`, aber nicht `contentBoxSize`.
- Alte Versionen von Firefox unterstützen `contentBoxSize`, haben es aber fälschlicherweise als einzelnes Objekt statt als Array implementiert.
- Moderne Browser unterstützen `contentBoxSize` als ein Array von Objekten, um die Größen der Boxen für fragmentierte Elemente (zum Beispiel in einem Mehrspaltenszenario) melden zu können.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize = `${Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200)}rem`;
        pElem.style.fontSize = `${Math.max(1, entry.contentBoxSize[0].inlineSize / 600)}rem`;
      } else {
        // … but old versions of Firefox treat it as a single item
        h1Elem.style.fontSize = `${Math.max(1.5, entry.contentBoxSize.inlineSize / 200)}rem`;
        pElem.style.fontSize = `${Math.max(1, entry.contentBoxSize.inlineSize / 600)}rem`;
      }
    } else {
      h1Elem.style.fontSize = `${Math.max(1.5, entry.contentRect.width / 200)}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
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
