---
title: "ResizeObserverEntry: contentRect-Eigenschaft"
short-title: contentRect
slug: Web/API/ResizeObserverEntry/contentRect
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft `contentRect` der [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry) Schnittstelle gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die neue Größe des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird. Beachten Sie, dass dies besser unterstützt wird als [`ResizeObserverEntry.borderBoxSize`](/de/docs/Web/API/ResizeObserverEntry/borderBoxSize) oder [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize), aber es ist ein Überbleibsel einer früheren Implementierung der Resize Observer API, wird aus Gründen der Web-Kompatibilität noch in der Spezifikation berücksichtigt und könnte in zukünftigen Versionen veraltet sein.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das die neue Größe des durch die [`target`](/de/docs/Web/API/ResizeObserverEntry/target)-Eigenschaft angegebenen Elements enthält.

Wenn das `target` ein HTML-[`Element`](/de/docs/Web/API/Element) ist, ist das zurückgegebene `contentRect` der Inhaltsbereich des Elements. Wenn das `target` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist, ist das zurückgegebene `contentRect` der Begrenzungsrahmen des SVG.

## Beispiele

Das folgende Snippet stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)). Es verwendet einen einfachen Feature-Detection-Test, um zu überprüfen, ob der Browser die neuere [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize)-Eigenschaft unterstützt — falls ja, wird diese verwendet, um die benötigten Größeninformationen zu erhalten. Ist dies nicht der Fall, wird `contentRect` verwendet.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentBoxSize.inlineSize / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(
        1,
        entry.contentBoxSize.inlineSize / 600,
      )}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
