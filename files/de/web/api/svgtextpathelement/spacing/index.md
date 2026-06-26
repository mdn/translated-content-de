---
title: "SVGTextPathElement: spacing-Eigenschaft"
short-title: spacing
slug: Web/API/SVGTextPathElement/spacing
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

{{APIRef("SVG")}}

Die **`spacing`** schreibgeschützte Eigenschaft des [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)-Interfaces repräsentiert den Abstand zwischen typografischen Zeichen, die entlang eines Pfades gerendert werden sollen.

Beachten Sie, dass die `spacing.baseVal`-Eigenschaft das {{SVGAttr("spacing")}}-Attribut des angegebenen {{SVGElement("textPath")}}-Elements als ein enumerierter Wert widerspiegelt.
Während `spacing` schreibgeschützt ist, können Sie `spacing.baseVal` verwenden, um den Wert des entsprechenden Attributs zu ändern.

In SVG 2 spiegelt `spacing.animVal` auch den nicht animierten Wert des Attributs wider.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

Die folgenden statischen Eigenschaften geben die Werte an, die von `spacing.baseVal` (und `spacing.animVal`) zurückgegeben werden können:

- [`SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN`](/de/docs/Web/API/SVGTextPathElement#textpath_spacingtype_unknown) (0)
  - : Der Typ ist keiner der vordefinierten Typen.
    Dieser Wert kann nicht gesetzt werden.
- [`SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO`](/de/docs/Web/API/SVGTextPathElement#textpath_spacingtype_auto) (1)
  - : Entspricht dem Wert [`auto`](/de/docs/Web/SVG/Reference/Attribute/spacing#auto).
- [`SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT`](/de/docs/Web/API/SVGTextPathElement#textpath_spacingtype_exact) (2)
  - : Entspricht dem Wert [`exact`](/de/docs/Web/SVG/Reference/Attribute/spacing#exact).

Beachten Sie, dass `baseVal` nicht auf `0` (`TEXTPATH_SPACINGTYPE_UNKNOWN`) oder einen anderen als die oben aufgeführten Werte gesetzt werden kann.
`animVal` ist schreibgeschützt und wird einen Fehler auslösen, wenn Sie versuchen, darauf zu schreiben.

## Beispiele

### Zugriff auf die `spacing`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" spacing="auto">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the spacing property
console.log(textPath.spacing.baseVal); // Output: 1 (TEXTPATH_SPACINGTYPE_AUTO)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method)
- [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side)
- [`SVGTextPathElement` Spacing-Typen](/de/docs/Web/API/SVGTextPathElement#static_properties)
