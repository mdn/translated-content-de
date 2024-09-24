---
title: "ResizeObserverEntry: contentRect-Eigenschaft"
short-title: contentRect
slug: Web/API/ResizeObserverEntry/contentRect
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Resize Observer API")}}

Die schreibgeschützte Eigenschaft `contentRect` des {{domxref("ResizeObserverEntry")}} Interfaces gibt ein {{domxref('DOMRectReadOnly')}} Objekt zurück, das die neue Größe des beobachteten Elements enthält, wenn der Callback ausgeführt wird. Beachten Sie, dass dies besser unterstützt wird als {{domxref("ResizeObserverEntry.borderBoxSize")}} oder {{domxref("ResizeObserverEntry.contentBoxSize")}}, aber es stammt von einer früheren Implementierung der Resize Observer API und ist aus Web-Kompatibilitätsgründen immer noch in der Spezifikation enthalten und könnte in zukünftigen Versionen veraltet sein.

## Wert

Ein {{domxref('DOMRectReadOnly')}} Objekt, das die neue Größe des durch die {{domxref("ResizeObserverEntry.target", "target")}} Eigenschaft angegebenen Elements enthält.

Wenn das `target` ein HTML {{domxref("Element")}} ist, ist das zurückgegebene `contentRect` die Inhaltsbox des Elements. Wenn das `target` ein {{domxref("SVGElement")}} ist, ist das zurückgegebene `contentRect` der Begrenzungsrahmen des SVG.

## Beispiele

Das folgende Snippet stammt aus dem [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)) Beispiel. Dies verwendet einen einfachen Feature-Erkennungstest, um zu sehen, ob der Browser die neuere {{domxref("ResizeObserverEntry.contentBoxSize")}} Eigenschaft unterstützt — falls ja, nutzt er diese, um die benötigten Größeninformationen zu erhalten. Falls nicht, verwendet er `contentRect`.

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
