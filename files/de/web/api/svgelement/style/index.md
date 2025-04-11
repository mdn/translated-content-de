---
title: "SVGElement: style-Eigenschaft"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement) gibt den _inline_ Stil eines Elements in Form eines dynamischen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen sind, die im Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweisen werden aufgeschlüsselt. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langformen der Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, das heißt, es ist nicht möglich, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Dennoch ist es möglich, einen Inline-Stil zu setzen, indem Sie direkt einen _string_ der `style`-Eigenschaft zuweisen. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt alle inline Stile des Elements vollständig.

Daher ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zu setzen, um einem Element spezifische Stile hinzuzufügen, ohne andere Stilwerte zu ändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden in JavaScript-Identifier mit diesen Regeln umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt unverändert (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "camel case")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da sie ein reserviertes JavaScript-Schlüsselwort ist, wird in `cssFloat` umgewandelt.
>
> Die `style`-Eigenschaft hat in der CSS-Kaskade die gleiche Priorität wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein dynamisches [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stilinformationen abrufen

Der folgende Codeausschnitt zeigt, wie das `style`-Attribut in eine Liste von Einträgen in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) übersetzt wird:

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
    !Number.isNaN(Number.parseInt(prop))
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

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
