---
title: "MathMLElement: Eigenschaft attributeStyleMap"
short-title: attributeStyleMap
slug: Web/API/MathMLElement/attributeStyleMap
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{APIRef("CSSOM")}}

Die **`attributeStyleMap`**-Eigenschaft der {{domxref("MathMLElement")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein dynamisches {{domxref("StylePropertyMap")}}-Objekt zurückgibt. Dieses Objekt enthält eine Liste von Stil-Eigenschaften des Elements, die im Inline-`style`-Attribut des Elements definiert oder über die {{domxref("MathMLElement.style", "style")}}-Eigenschaft der {{domxref("MathMLElement")}}-Schnittstelle per Skript zugewiesen wurden.

Kurzschreibweise-Eigenschaften werden erweitert. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langschreibweise-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Der Hauptunterschied zwischen der {{domxref("MathMLElement.style", "style")}}-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein {{domxref("CSSStyleDeclaration")}}-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein {{domxref("StylePropertyMap")}}-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile über das {{domxref("StylePropertyMap")}}-Objekt, das sie zurückgibt, lesen und schreiben, genauso wie über das {{domxref("CSSStyleDeclaration")}}-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein dynamisches {{domxref("StylePropertyMap")}}-Objekt.

## Beispiele

Im folgenden Codebeispiel wird die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft gezeigt:

```html
<div style="white-space: pre-line;">
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

- {{domxref("MathMLElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- {{domxref("SVGElement.attributeStyleMap")}}
