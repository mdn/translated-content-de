---
title: "SVGElement: Eigenschaft attributeStyleMap"
short-title: attributeStyleMap
slug: Web/API/SVGElement/attributeStyleMap
l10n:
  sourceCommit: 2eacf352ffb5d8a3233c13e4bf5949578b847759
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`attributeStyleMap`** des {{domxref("SVGElement")}}-Interfaces gibt ein live {{domxref("StylePropertyMap")}}-Objekt zurück, das eine Liste von Stileigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert sind oder über das {{domxref("SVGElement.style", "style")}}-Eigenschaft des {{domxref("SVGElement")}}-Interfaces mittels Skripting zugewiesen wurden.

Kurzschreibweise-Eigenschaften werden erweitert. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langschreibweise-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Der Hauptunterschied zwischen der {{domxref("SVGElement.style", "style")}}-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein {{domxref("CSSStyleDeclaration")}}-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein {{domxref("StylePropertyMap")}}-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile über das {{domxref("StylePropertyMap")}}-Objekt, das sie zurückgibt, lesen und schreiben, ähnlich wie über das {{domxref("CSSStyleDeclaration")}}-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein live {{domxref("StylePropertyMap")}}-Objekt.

## Beispiele

Der folgende Codeausschnitt zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

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

- {{domxref("SVGElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
