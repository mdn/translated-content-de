---
title: "SVGElement: Eigenschaft attributeStyleMap"
short-title: attributeStyleMap
slug: Web/API/SVGElement/attributeStyleMap
l10n:
  sourceCommit: 2eacf352ffb5d8a3233c13e4bf5949578b847759
---

{{APIRef("CSSOM")}}

Die **`attributeStyleMap`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement) Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein aktuelles [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt. Dieses enthält eine Liste von Stil-Eigenschaften des Elements, die im Inline-`style`-Attribut des Elements definiert sind oder über die [`style`](/de/docs/Web/API/SVGElement/style)-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement) Schnittstelle per Skript zugewiesen wurden.

Kurzschrift-Eigenschaften werden aufgeschlüsselt. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langschrift-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/SVGElement/style)-Eigenschaft und der `attributeStyleMap`-Eigenschaft ist, dass die `style`-Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile sowohl über das zurückgegebene [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt lesen und schreiben als auch über das über die `style`-Eigenschaft zurückgegebene [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Wert

Ein aktuelles [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt.

## Beispiele

Der folgende Code zeigt das Verhältnis zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

```html
<div style="white-space: pre-line;">
  <svg
    width="50"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    style="white-space: pre-line;">
    <circle
      cx="100"
      cy="100"
      r="50"
      id="el"
      style="border-top: 1px solid blue; color: red;" />
  </svg>
  <div id="output"></div>
</div>
```

```css
#el {
  font-size: 16px;
}
```

```js
const element = document.getElementById("el");
const output = document.getElementById("output");

for (const property of element.attributeStyleMap) {
  output.textContent += `${property[0]} = ${property[1][0].toString()}\n`;
}
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
