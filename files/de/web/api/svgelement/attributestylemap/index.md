---
title: "SVGElement: attributeStyleMap-Eigenschaft"
short-title: attributeStyleMap
slug: Web/API/SVGElement/attributeStyleMap
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`attributeStyleMap`** der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle gibt ein aktives [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurück, das eine Liste von Stileigenschaften des Elements enthält, die im Inline-`style`-Attribut des Elements definiert sind oder über das [`style`](/de/docs/Web/API/SVGElement/style)-Eigentum der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle mittels Skript zugewiesen werden.

Kurzschreibweiseigenschaften werden erweitert. Wenn Sie `border-top: 1px solid black` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) festgelegt.

Der Hauptunterschied zwischen der [`style`](/de/docs/Web/API/SVGElement/style)-Eigenschaft und der `attributeStyleMap`-Eigenschaft besteht darin, dass die `style`-Eigenschaft ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zurückgeben wird, während die `attributeStyleMap`-Eigenschaft ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt zurückgibt.

Obwohl die Eigenschaft selbst nicht beschreibbar ist, können Sie Inline-Stile durch das [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt, das sie zurückgibt, lesen und schreiben, ähnlich wie durch das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das über die `style`-Eigenschaft zurückgegeben wird.

## Wert

Ein aktives [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Objekt.

## Beispiele

Der folgende Codeausschnitt zeigt die Beziehung zwischen dem `style`-Attribut und der `attributeStyleMap`-Eigenschaft:

```html
<svg
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
