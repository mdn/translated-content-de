---
title: "SVGViewElement: preserveAspectRatio-Eigenschaft"
short-title: preserveAspectRatio
slug: Web/API/SVGViewElement/preserveAspectRatio
l10n:
  sourceCommit: b9fa5e524fb55a33f5b859aa49be8f834d99abaf
---

{{APIRef("SVG")}}

Die **`preserveAspectRatio`**-Eigenschaft der [`SVGViewElement`](/de/docs/Web/API/SVGViewElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("preserveAspectRatio")}}-Attribut des gegebenen {{SVGElement("view")}}-Elements widerspiegelt. Sie definiert, wie der Inhalt innerhalb des `view` skaliert werden soll, um in das Ansichtsfenster zu passen, während sein Seitenverhältnis beibehalten wird.

## Wert

Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt.

## Beispiel

Angenommen, wir haben das folgende SVG. Wir können die `preserveAspectRatio`-Eigenschaft verwenden, um das Skalierungsverhalten für ein `view`-Element abzurufen:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <view id="view1" preserveAspectRatio="xMidYMid meet"></view>
  <circle cx="100" cy="100" r="80" fill="blue" />
</svg>
```

Wir können auf das `preserveAspectRatio`-Attribut zugreifen:

```js
const view = document.querySelector("view");

console.log(view.preserveAspectRatio.baseVal); // output: SVGPreserveAspectRatio {align: 1, meetOrSlice: 1}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("preserveAspectRatio")}}
