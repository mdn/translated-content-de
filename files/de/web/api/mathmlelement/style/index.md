---
title: "MathMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des {{domxref("MathMLElement")}} gibt den _Inline_-Stil eines Elements in Form eines dynamischen {{domxref("CSSStyleDeclaration")}}-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, wobei Werte nur für die Attribute zugewiesen sind, die im Inline-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschrift-Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die ausführlichen Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein {{domxref("CSSStyleDeclaration")}}-Objekt zuzuweisen. Es ist jedoch möglich, einen Inline-Stil zu setzen, indem ein _string_ direkt der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an {{domxref("CSSStyleDeclaration.cssText")}} weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt vollständig alle Inline-Stile des Elements.

Daher ist es in der Regel vorzuziehen, einzelne Eigenschaften des {{domxref("CSSStyleDeclaration")}}-Objekts zu setzen, um einem Element spezifische Stile hinzuzufügen, ohne andere Stilwerte zu ändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> Die Namen der CSS-Eigenschaften werden in JavaScript-Bezeichner mit diesen Regeln umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt so (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und es wird in {{Glossary("camel_case", "Camel Case")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, ein reserviertes JavaScript-Schlüsselwort, wird in `cssFloat` umgewandelt.
>
> Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein dynamisches {{domxref("CSSStyleDeclaration")}}-Objekt.

## Beispiele

### Stilinformationen abrufen

Der folgende Codeausschnitt demonstriert, wie das `style`-Attribut in eine Liste von Einträgen in {{domxref("CSSStyleDeclaration")}} umgewandelt wird:

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

- [Verwendung dynamischer Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
- {{domxref("SVGElement.style")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
