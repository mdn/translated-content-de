---
title: "SVGForeignObjectElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGForeignObjectElement/height
l10n:
  sourceCommit: 7f9a7b32e78673dcbf7b6a93856f5717c4cf0a12
---

{{APIRef("SVG")}}

Die **`height`**-Schreibgeschützte Eigenschaft der [`SVGForeignObjectElement`](/de/docs/Web/API/SVGForeignObjectElement)-Schnittstelle beschreibt die Höhe des `<foreignObject>`-Elements. Sie spiegelt den berechneten Wert des {{SVGAttr("height")}}-Attributs auf dem {{SVGElement("foreignObject")}}-Element wider.

Der Attributwert ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des `<foreignObject>`-Elements im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, das folgende SVG:

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

Wir können auf die berechneten Werte der `height`-Attribute zugreifen:

```js
const foreignObjects = document.querySelectorAll("foreignObject");
const heightObject1 = foreignObjects[0].height;
const heightObject2 = foreignObjects[1].height;

console.dir(heightObject1.baseVal.value); // output: 50
console.dir(heightObject2.baseVal.value); // output: 20 (10% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGForeignObjectElement.width`](/de/docs/Web/API/SVGForeignObjectElement/width)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
