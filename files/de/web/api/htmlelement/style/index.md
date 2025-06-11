---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _inline_ Stil eines Elements in Form eines Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stileigenschaften für dieses Element enthält, wobei nur für die Attribute Werte zugewiesen sind, die im inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements definiert sind.

Abkürzungseigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Diese Eigenschaft ist schreibgeschützt, das bedeutet, es ist nicht möglich, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Es ist jedoch möglich, einen inline Stil festzulegen, indem direkt ein _String_ der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise wird alle inline Stile des Elements vollständig überschreiben.

Daher ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt festzulegen, um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu verändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird durch Setzen auf `null` oder einen leeren String zurückgesetzt, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden gemäß diesen Regeln in JavaScript-Bezeichner umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt wie sie ist (in Kleinbuchstaben). Da `float` ein reserviertes Schlüsselwort in JavaScript ist, wurde dieser Eigenschaftsname historisch in `cssFloat` umgewandelt. Alle modernen Browser unterstützen nun die direkte Verwendung von `float` in JavaScript, um auf die `float` CSS-Eigenschaft zuzugreifen. Jedoch wird `cssFloat` in älteren Browsern verwendet und als Alias in modernen Browsern weiterhin unterstützt.
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "CamelCase")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat in der CSS-Kaskade die gleiche Priorität wie eine inline Stil-Deklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Abrufen von Stilinformationsdaten

Der folgende Code-Schnipsel zeigt, wie sich die mit der `style`-Eigenschaft des Elements erhaltenen Werte auf den im HTML-Attribut festgelegten Stil beziehen:

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="out"></pre>
</div>
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

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht im `style`-Attribut des Elements selbst definiert ist. Vielmehr wird es von der Definition des übergeordneten Elements geerbt. Beachten Sie auch, dass die Kurzform-Eigenschaft {{cssxref("border-top")}}, die im `style`-Attribut definiert ist, nicht direkt aufgeführt wird. Vielmehr wird sie durch die drei entsprechenden Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
