---
title: "SVGFECompositeElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFECompositeElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement) Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Filter-Primitivs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filter-Primitivattributs {{SVGAttr("y")}} des {{SVGElement("feComposite")}}-Elements wider. Das SVG-Filter-Primitiv `<feComposite>` kombiniert zwei Eingabebilder mittels einer Porter-Duff-Kompositionsoperation. Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut ein Prozentwert ist, bezieht sich der Eigenschaftswert relativ zur Höhe der Filterregion in Benutzerkoordinatensystemeinheiten. Der Standardwert ist `0`.

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
