---
title: "ResizeObserverEntry: contentRect-Eigenschaft"
short-title: contentRect
slug: Web/API/ResizeObserverEntry/contentRect
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft `contentRect` der Schnittstelle [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry) gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die neue Größe des beobachteten Elements enthält, wenn der Callback ausgeführt wird. Beachten Sie, dass dies besser unterstützt wird als [`ResizeObserverEntry.borderBoxSize`](/de/docs/Web/API/ResizeObserverEntry/borderBoxSize) oder [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize), aber es stammt aus einer früheren Implementierung der Resize Observer API, ist weiterhin in der Spezifikation für Web-Kompatibilitätsgründe enthalten und kann in zukünftigen Versionen veraltet sein.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt, das die neue Größe des Elements enthält, das durch die [`target`](/de/docs/Web/API/ResizeObserverEntry/target)-Eigenschaft angegeben wird.

Wenn das `target` ein HTML-[`Element`](/de/docs/Web/API/Element) ist, ist das zurückgegebene `contentRect` die Inhaltsbox des Elements. Wenn das `target` ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist, ist das zurückgegebene `contentRect` die Bounding-Box des SVGs.

## Beispiele

Der folgende Ausschnitt stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)). Dies verwendet einen einfachen Funktionsnachweis-Test, um zu sehen, ob der Browser die neuere [`ResizeObserverEntry.contentBoxSize`](/de/docs/Web/API/ResizeObserverEntry/contentBoxSize)-Eigenschaft unterstützt — falls dies der Fall ist, wird diese verwendet, um die benötigten Größeninformationen zu erhalten. Andernfalls wird `contentRect` verwendet.

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
