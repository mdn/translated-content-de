---
title: "SVGViewElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGViewElement/viewBox
l10n:
  sourceCommit: b9fa5e524fb55a33f5b859aa49be8f834d99abaf
---

{{APIRef("SVG")}}

Die **`viewBox`**-Eigenschaft der [`SVGViewElement`](/de/docs/Web/API/SVGViewElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("viewBox")}}-Attribut des angegebenen {{SVGElement("view")}}-Elements widerspiegelt. Sie repräsentiert die `x`-, `y`-, `width`- und `height`-Werte, die den Bereich definieren, der für das `view`-Element's `viewBox` verwendet werden soll.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt.

## Beispiel

Angenommen, wir haben folgendes SVG, können wir die `viewBox`-Eigenschaft verwenden, um die Abmessungen des `viewBox` für ein `view`-Element abzurufen:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <view id="view1" viewBox="0 0 50 50"></view>
  <circle cx="100" cy="100" r="80" fill="blue" />
</svg>
```

Wir können auf das `viewBox`-Attribut zugreifen:

```js
const view = document.querySelector("view");

console.log(view.viewBox.baseVal); // output: DOMRect {x: 0, y: 0, width: 50, height: 50}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("viewBox")}}
