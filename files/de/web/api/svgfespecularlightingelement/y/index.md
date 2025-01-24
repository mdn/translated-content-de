---
title: "SVGFESpecularLightingElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFESpecularLightingElement/y
l10n:
  sourceCommit: fdd5a169978046c3905a65b85dbf597fffca1a25
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt das {{SVGAttr("y")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, das eine Quelldarstellung mit dem Alphakanal als Bump-Map beleuchtet. Das Attribut ist ein [`\<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die der angegebenen Entfernung vom Ursprung des Filters entlang der y-Achse entspricht. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe des Filterbereichs in Benutzerkoordinatensystem-Einheiten. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feSpecularLighting = document.querySelector("feSpecularLighting");
const topPosition = feSpecularLighting.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpecularLightingElement.x`](/de/docs/Web/API/SVGFESpecularLightingElement/x)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
