---
title: "MathMLElement: attributeStyleMap-Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/MathMLElement/attributeStyleMap
l10n:
  sourceCommit: 4f263d8dfb90fa2253e090ee339ae14d1907fa63
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`attributeStyleMap`**-Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle gibt ein Live-Objekt vom Typ [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zurück, das eine Liste von Stileigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert sind oder über die [`style`](/de/docs/Web/API/MathMLElement/style)-Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle per Skript zugewiesen wurden.

Abkürzungseigenschaften werden erweitert. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/MathMLElement/style)-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile über das [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt, das sie zurückgibt, genauso lesen und schreiben wie über das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein Live-Objekt vom Typ [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap).

## Beispiele

Der folgende Codeausschnitt zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

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

- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
