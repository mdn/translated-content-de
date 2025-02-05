---
title: "SVGFECompositeElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGFECompositeElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt die vertikale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des Filterprimitive-Attributs {{SVGAttr("y")}} des {{SVGElement("feComposite")}}-Elements wider. Die `<feComposite>`-SVG-Filterprimitive kombiniert zwei Eingabebilder mithilfe einer Porter-Duff-Kompositionsoperation. Das Attribut ist entweder ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Die `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Filters entlang der y-Achse darstellt. Wenn das `y`-Attribut einen Prozentwert hat, bezieht sich der Eigenschaftswert relativ auf die Höhe der Filterregion in Einheiten des Benutzerkoordinatensystems. Der Standardwert ist `0`.

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
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
