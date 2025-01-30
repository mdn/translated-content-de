---
title: "SVGFEBlendElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGFEBlendElement/x
l10n:
  sourceCommit: ebf665a2679f308eb8e4dc7330864b4661bcdb9c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`x`** des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces beschreibt die horizontale Koordinate der Position einer SVG-Filterprimitive als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

Sie spiegelt den Wert des SVG-Attributs {{SVGAttr("x")}} der {{SVGElement("feBlend")}}-Elementfilterprimitive wider. Das `<feBlend>` SVG-Filter vereint zwei Eingabebilder miteinander und nutzt dabei allgemein gebräuchliche Bildbearbeitungssoftware-{{cssxref("blend-mode", "Mischmodi")}}.

Das Attribut ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length) oder [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage). Das `<coordinate>` ist eine Länge im Benutzerskoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerskoordinatensystems entlang der x-Achse darstellt. Wenn das `x`-Attribut einen Prozentwert hat, ist der Eigenschaftswert relativ zur Breite der Filterregion in Einheiten des Benutzerskoordinatensystems. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const feBlend = document.querySelector("feBlend");
const leftPosition = feBlend.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.y`](/de/docs/Web/API/SVGFEBlendElement/y)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
