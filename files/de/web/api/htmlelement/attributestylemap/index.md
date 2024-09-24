---
title: "HTMLElement: attributeStyleMap-Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/HTMLElement/attributeStyleMap
l10n:
  sourceCommit: 2eacf352ffb5d8a3233c13e4bf5949578b847759
---

{{APIRef("CSSOM")}}

Die **`attributeStyleMap`**-Eigenschaft im Nur-Lesen-Modus des {{domxref("HTMLElement")}}-Interfaces gibt ein Live-{{domxref("StylePropertyMap")}}-Objekt zurück, das eine Liste von Stileigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert sind oder über die {{domxref("HTMLElement.style", "style")}}-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces per Skript zugewiesen wurden.

Kurzschrift-Eigenschaften werden expandiert. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Der Hauptunterschied zwischen der {{domxref("HTMLElement.style", "style")}}-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein {{domxref("CSSStyleDeclaration")}}-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein {{domxref("StylePropertyMap")}}-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, könnten Sie Inline-Stile über das zurückgegebene {{domxref("StylePropertyMap")}}-Objekt lesen und schreiben, genau wie über das {{domxref("CSSStyleDeclaration")}}-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein Live-{{domxref("StylePropertyMap")}}-Objekt.

## Beispiele

Der folgende Codeausschnitt zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

```html
<div style="white-space: pre-line;">
  <div id="el" style="border-top: 1px solid blue; color: red;">
    An example element
  </div>
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

- {{domxref("HTMLElement.style")}}
- {{domxref("SVGElement.attributeStyleMap")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
