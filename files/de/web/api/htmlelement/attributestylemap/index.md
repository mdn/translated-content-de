---
title: "HTMLElement: attributeStyleMap-Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/HTMLElement/attributeStyleMap
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`attributeStyleMap`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt ein lebendiges [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das eine Liste von Stil-Eigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert sind oder über die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces per Skript zugewiesen wurden.

Kurzhand-Eigenschaften werden erweitert. Wenn Sie `border-top: 1px solid black` setzen, werden die Langhandeigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen festgelegt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile durch das [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt, das sie zurückgibt, lesen und schreiben, genau wie durch das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein lebendiges [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt.

## Beispiele

Der folgende Codeausschnitt zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

```html
<div id="el" style="border-top: 1px solid blue; color: red;">
  An example element
</div>
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

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
