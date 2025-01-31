---
title: "SVGFETurbulenceElement: Eigenschaft y"
short-title: "y"
slug: Web/API/SVGFETurbulenceElement/y
l10n:
  sourceCommit: ec48a043c5dbedef746b2d85f780f73cef59f332
---

{{APIRef("SVG")}}

Die **`y`**-Schreibgeschützte Eigenschaft des [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Interfaces beschreibt die vertikale Koordinate der Position einer SVG-Filter-Primitiv als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das Attribut {{SVGAttr("y")}} des {{SVGElement("feTurbulence")}}-Elements wider, das die Synthese künstlicher Texturen ermöglicht. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzerkoordinatensystem-Einheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feTurbulence = document.querySelector("feTurbulence");
const topPosition = feTurbulence.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETurbulenceElement.x`](/de/docs/Web/API/SVGFETurbulenceElement/x)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
