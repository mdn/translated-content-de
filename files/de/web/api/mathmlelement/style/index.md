---
title: "MathMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) gibt den _inline_ Stil eines Elements in Form eines Live [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen sind, die im inline [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweisen werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, das bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt ihr zuzuweisen. Nichtsdestotrotz ist es möglich, einen inline Stil zu setzen, indem man einen _String_ direkt der `style`-Eigenschaft zuweist. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise wird alle inline Stile auf dem Element vollständig überschreiben.

Es ist daher im Allgemeinen vorzuziehen, spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, indem man einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt setzt. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z. B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit diesen Regeln in JavaScript-Bezeichner konvertiert:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie wie sie ist: `height` bleibt unverändert (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "camelCase")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da sie ein reserviertes JavaScript-Schlüsselwort ist, wird in `cssFloat` umgewandelt.
>
> Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine inline Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein Live [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Abrufen von Stil-Informationen

Der folgende Codeausschnitt demonstriert, wie das `style`-Attribut in eine Liste von Einträgen in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) übersetzt wird:

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

- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
