---
title: "SVGElement: attributeStyleMap-Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/SVGElement/attributeStyleMap
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`attributeStyleMap`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement)-Interfaces gibt ein dynamisches [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das eine Liste von Stil-Eigenschaften des Elements enthält, welche im `style`-Attribut des Elements definiert sind oder über das [`style`](/de/docs/Web/API/SVGElement/style)-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement)-Interfaces per Skript zugewiesen wurden.

Kurzschreibweisen werden erweitert. Wenn Sie `border-top: 1px solid black` setzen, werden die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/SVGElement/style)-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile über das zurückgegebene [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt lesen und schreiben, genau wie über das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das durch die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein dynamisches [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt.

## Beispiele

Der folgende Codeausschnitt zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

```html
<svg
  width="50"
  height="50"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle
    cx="100"
    cy="100"
    r="50"
    id="el"
    style="border-top: 1px solid blue; color: red;" />
</svg>
<div id="output"></div>
```

```css
#el {
  font-size: 16px;
}

#output {
  white-space: pre-line;
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
