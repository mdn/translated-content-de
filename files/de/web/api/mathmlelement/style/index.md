---
title: "MathMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) gibt den _inline_ Stil eines Elements in Form eines dynamischen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück. Dieses Objekt enthält eine Liste aller Stil-Eigenschaften für dieses Element mit Werten, die nur für die Attribute zugewiesen sind, die im inline [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweise-Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt daran zuzuweisen. Es ist jedoch möglich, einen inline Stil zu setzen, indem Sie direkt einen _String_ an die `style`-Eigenschaft zuweisen. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise wird alle inline Stile des Elements vollständig überschreiben.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu verändern, ist es daher in der Regel vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zu setzen. Sie können beispielsweise schreiben `element.style.backgroundColor = "red"`.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden in JavaScript-Identifikatoren mit diesen Regeln umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt unverändert (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "camel case")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da es sich um ein reserviertes JavaScript-Schlüsselwort handelt, wird in `cssFloat` umgewandelt.
>
> Die `style`-Eigenschaft hat denselben Vorrang in der CSS-Kaskade wie eine inline Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein dynamisches [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stilinformationen abrufen

Der folgende Code-Schnipsel demonstriert, wie das `style`-Attribut in eine Liste von Einträgen in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) übersetzt wird:

```html
<math>
  <mrow>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi class="parameter" style="color: red; border-bottom: 1px solid">x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
</math>
<pre id="out"></pre>
```

```js
const element = document.querySelector(".parameter");
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
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
