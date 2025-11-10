---
title: "SVGForeignObjectElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGForeignObjectElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Schreibgeschützte Eigenschaft des [`SVGForeignObjectElement`](/de/docs/Web/API/SVGForeignObjectElement)-Interfaces beschreibt die x-Achsen-Koordinate des `<foreignObject>`-Elements. Sie spiegelt den berechneten Wert des {{SVGAttr("x")}}-Attributs auf dem {{SVGElement("foreignObject")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des `<foreignObject>`-Elements im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, wir haben folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <foreignObject id="object1" x="50" y="75" width="100" height="50">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>This is a foreign object.</p>
      </div>
    </foreignObject>
    <foreignObject id="object2" x="25%" y="50%" width="10%" height="10%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>This is another foreign object.</p>
      </div>
    </foreignObject>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="lightblue" />
  <rect x="0" y="100" width="200" height="100" fill="lightgreen" />
</svg>
```

Wir können auf die berechneten Werte der `x`-Attribute zugreifen:

```js
const foreignObjects = document.querySelectorAll("foreignObject");
const xObject1 = foreignObjects[0].x;
const xObject2 = foreignObjects[1].x;

console.dir(xObject1.baseVal.value); // output: 50
console.dir(xObject2.baseVal.value); // output: 50 (25% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGForeignObjectElement.y`](/de/docs/Web/API/SVGForeignObjectElement/y)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
