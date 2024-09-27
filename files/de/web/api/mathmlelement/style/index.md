---
title: "MathMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) gibt den _inline_ Stil eines Elements in Form eines lebendigen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen werden, die im Inline-`style`-Attribut des Elements definiert sind.

Kurzschrift-Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden stattdessen die Langschrift-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Dennoch ist es möglich, einen Inline-Stil zu setzen, indem ein _string_ direkt der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise wird alle Inline-Stile auf dem Element vollständig überschreiben.

Daher ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt festzulegen, um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stilerklärung wird zurückgesetzt, indem sie auf `null` oder eine leere Zeichenkette gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit folgenden Regeln in JavaScript-Bezeichner umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt unverändert (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in [Camel Case](/de/docs/Glossary/camel_case) umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da es ein reserviertes JavaScript-Schlüsselwort ist, wird zu `cssFloat`.
>
> Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stilerklärung, die über das `style`-Attribut gesetzt wird.

## Wert

Ein lebendiges [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Abrufen von Stilinformationen

Der folgende Codeausschnitt zeigt, wie das `style`-Attribut in eine Liste von Einträgen in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) übersetzt wird:

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
