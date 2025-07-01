---
title: "SVGElement: style-Eigenschaft"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement) gibt den _inline_ Stil eines Elements in Form eines Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen sind, die im inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweisen werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Dennoch ist es möglich, einen Inline-Stil festzulegen, indem man direkt einen _String_ der `style`-Eigenschaft zuweist. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile des Elements vollständig.

Daher ist es im Allgemeinen vorzuziehen, spezifische Stile einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, indem man einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt festlegt. Beispielsweise können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit diesen Regeln in JavaScript-Identifikatoren umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt wie sie ist (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "camel case")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da sie ein reserviertes JavaScript-Schlüsselwort ist, wird zu `cssFloat`.
>
> Die `style`-Eigenschaft hat dieselbe Priorität in der CSS-Kaskade wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stil-Informationen erhalten

Der folgende Code-Schnipsel demonstriert, wie das `style`-Attribut in eine Liste von Einträgen in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) übersetzt wird:

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
    id="circle"
    style="fill: red; stroke: black; stroke-width: 2px;" />
</svg>
<pre id="out"></pre>
```

```js
const element = document.querySelector("circle");
const out = document.getElementById("out");
const elementStyle = element.style;

// We loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // We check if the property belongs to the CSSStyleDeclaration instance
  // We also ensure that the property is a numeric index (indicating an inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
