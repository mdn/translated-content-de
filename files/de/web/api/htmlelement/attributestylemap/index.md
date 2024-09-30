---
title: "HTMLElement: attributeStyleMap-Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/HTMLElement/attributeStyleMap
l10n:
  sourceCommit: 2eacf352ffb5d8a3233c13e4bf5949578b847759
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`attributeStyleMap`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt ein aktives [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das eine Liste von Stileigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert sind oder über die [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle per Skript zugewiesen wurden.

Kurzschreibweisen werden erweitert. Wenn Sie `border-top: 1px solid black` festlegen, werden die Langschreibweisen-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurückgibt, während die `attributeStyleMap`-Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie über das von ihr zurückgegebene [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt Inline-Stile lesen und schreiben, genau wie über das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein aktives [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt.

## Beispiele

Der folgende Code-Schnipsel zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

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

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
