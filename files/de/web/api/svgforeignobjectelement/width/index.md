---
title: "SVGForeignObjectElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGForeignObjectElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Eigenschaft der Schnittstelle [`SVGForeignObjectElement`](/de/docs/Web/API/SVGForeignObjectElement) beschreibt die Breite des `<foreignObject>`-Elements. Sie spiegelt den berechneten Wert des {{SVGAttr("width")}}-Attributs auf dem {{SVGElement("foreignObject")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des `<foreignObject>`-Elements im Benutzerskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, man hat das folgende SVG:

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

Wir können auf die berechneten Werte der `width`-Attribute zugreifen:

```js
const foreignObjects = document.querySelectorAll("foreignObject");
const widthObject1 = foreignObjects[0].width;
const widthObject2 = foreignObjects[1].width;

console.dir(widthObject1.baseVal.value); // output: 100
console.dir(widthObject2.baseVal.value); // output: 20 (10% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGForeignObjectElement.height`](/de/docs/Web/API/SVGForeignObjectElement/height)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
