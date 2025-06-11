---
title: "MathMLElement: attributeStyleMap Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/MathMLElement/attributeStyleMap
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`attributeStyleMap`** Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interfaces gibt ein lebendiges [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Objekt zurück, das eine Liste von Stil-Eigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert oder über die [`style`](/de/docs/Web/API/MathMLElement/style) Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interfaces per Skript zugewiesen wurden.

Kurzschreibweisen werden aufgeschlüsselt. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) gesetzt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/MathMLElement/style) Eigenschaft und der `attributeStyleMap` Eigenschaft besteht darin, dass die `style` Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt zurückgibt, während die `attributeStyleMap` Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht schreibbar ist, können Sie Inline-Stile über das zurückgegebene [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Objekt lesen und schreiben, genau wie über das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt, das über die `style` Eigenschaft zurückgegeben wird.

## Wert

Ein lebendiges [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Objekt.

## Beispiele

Der folgende Code-Schnipsel zeigt die Beziehung zwischen dem `style` Attribut und der `attributeStyleMap` Eigenschaft:

```html
<math>
  <mrow>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi id="el" style="border-top: 1px solid blue; color: red;">x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
</math>
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

- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
