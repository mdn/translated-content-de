---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _Inline_-Stil eines Elements in Form eines lebendigen [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück. Dieses Objekt enthält eine Liste aller Stileigenschaften für das Element, wobei nur Werte für die Attribute zugewiesen sind, die im Inline-`[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)`-Attribut des Elements definiert sind.

Kurzschreibweisen werden expandiert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langschreibweisen ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt darauf zuzuweisen. Dennoch ist es möglich, einen Inline-Stil zu setzen, indem direkt ein _String_ der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile auf dem Element vollständig.

Um bestimmte Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es daher in der Regel vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt festzulegen. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stilerklärung wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit diesen Regeln in JavaScript-Bezeichner umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt (in Kleinbuchstaben). Da `float` ein reserviertes Schlüsselwort in JavaScript ist, wurde dieser Eigenschaftsname historisch in `cssFloat` umgewandelt. Alle modernen Browser unterstützen jetzt die direkte Verwendung von `float` in JavaScript, um auf die `float`-CSS-Eigenschaft zuzugreifen, aber `cssFloat` wird in älteren Browsern verwendet und wird als Alias in modernen Browsern weiterhin unterstützt.
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "camel case")}} konvertiert: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Cascade wie eine über das `style`-Attribut gesetzte Inline-Stilerklärung.

## Wert

Ein lebendiges [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stilinformationen abrufen

Das folgende Codebeispiel zeigt, wie sich die mit der `style`-Eigenschaft des Elements erhaltenen Werte auf den im HTML-Attribut gesetzten Stil beziehen:

```html
<!doctype html>
<html lang="en-US">
  <body style="font-weight:bold">
    <div style="border-top: 1px solid blue; color:red" id="elt">
      An example div
    </div>
    <pre id="out"></pre>
  </body>
</html>
```

```js
const element = document.getElementById("elt");
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

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht im `style`-Attribut des Elements selbst definiert ist. Es wird stattdessen von der Definition des übergeordneten Elements vererbt. Beachten Sie auch, dass die im `style`-Attribut definierte Kurzschreibweise der {{cssxref("border-top")}}-Eigenschaft nicht direkt aufgeführt ist. Stattdessen wird sie durch die drei entsprechenden Langschreibweisen ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-`style`-Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
