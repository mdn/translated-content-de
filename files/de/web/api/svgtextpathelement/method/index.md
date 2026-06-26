---
title: "SVGTextPathElement: Method-Property"
short-title: method
slug: Web/API/SVGTextPathElement/method
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

{{APIRef("SVG")}}

Die **`method`**-Eigenschaft der Schnittstelle [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement) ist eine schreibgeschützte Eigenschaft, die die Methode angibt, mit der Text entlang des Pfads gerendert werden soll.

Beachten Sie, dass die Eigenschaft `method.baseVal` das {{SVGAttr("method")}}-Attribut des angegebenen {{SVGElement("textPath")}}-Elements als einen aufgezählten Wert widerspiegelt. Während `method` schreibgeschützt ist, können Sie `method.baseVal` verwenden, um den Wert des entsprechenden Attributs zu ändern.

In SVG 2 spiegelt `side.method` auch den nicht animierten Wert des Attributs wider.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

Die folgenden statischen Eigenschaften geben die Werte an, die von `method.baseVal` (und `method.animVal`) zurückgegeben werden können:

- [`SVGTextPathElement.TEXTPATH_METHODTYPE_UNKNOWN`](/de/docs/Web/API/SVGTextPathElement#textpath_methodtype_unknown) (0)
  - : Der Typ ist keiner der vordefinierten Typen.
- [`SVGTextPathElement.TEXTPATH_METHODTYPE_ALIGN`](/de/docs/Web/API/SVGTextPathElement#textpath_methodtype_align) (1)
  - : Entspricht dem Wert [`align`](/de/docs/Web/SVG/Reference/Attribute/method#align).
- [`SVGTextPathElement.TEXTPATH_METHODTYPE_STRETCH`](/de/docs/Web/API/SVGTextPathElement#textpath_methodtype_stretch) (2)
  - : Entspricht dem Wert [`stretch`](/de/docs/Web/SVG/Reference/Attribute/method#stretch).

Beachten Sie, dass `baseVal` nicht auf `0` (`TEXTPATH_METHODTYPE_UNKNOWN`) oder einen anderen Wert als die oben genannten gesetzt werden kann. `animVal` ist schreibgeschützt und löst einen Fehler aus, wenn Sie versuchen, darauf zu schreiben.

## Beispiele

### Zugriff auf die `method`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" method="align">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the method property
console.log(textPath.method.baseVal); // Output: 1 (TEXTPATH_METHODTYPE_ALIGN)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing)
- [`SVGTextPathElement` Method-Types](/de/docs/Web/API/SVGTextPathElement#static_properties)
