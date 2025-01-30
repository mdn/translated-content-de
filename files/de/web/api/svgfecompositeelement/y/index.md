---
title: "SVGFECompositeElement: y Eigenschaft"
short-title: "y"
slug: Web/API/SVGFECompositeElement/y
l10n:
  sourceCommit: a5395de76cd0066aed71cf351029eb6e342b73d1
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft des [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Filterprimitives als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitive-Attributs {{SVGAttr("y")}} des {{SVGElement("feComposite")}}-Elements wider. Das `<feComposite>` SVG-Filterprimitive kombiniert zwei Eingabebilder mit einer Porter-Duff-Compositing-Operation. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feComposite = document.querySelector("feComposite");
const topPosition = feComposite.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFECompositeElement.x`](/de/docs/Web/API/SVGFECompositeElement/x)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
