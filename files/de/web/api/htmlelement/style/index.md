---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 476fb44932d56c0f50628a620348cd77f411b5ab
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _inline_ Stil eines Elements in Form eines Live-Objekts vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, wobei Werte nur für die Attribute zugewiesen werden, die im inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) des Elements definiert sind.

Abkürzende Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Es ist jedoch möglich, einen Inline-Stil festzulegen, indem direkt ein _String_ der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Wenn `style` auf diese Weise verwendet wird, werden alle Inline-Stilelemente des Elements vollständig überschrieben.

Daher ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt festzulegen, um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z. B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden nach diesen Regeln in JavaScript-Identifikatoren umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt so (in Kleinbuchstaben). Da `float` ein reserviertes Schlüsselwort in JavaScript ist, wurde dieser Eigenschaftsname historisch in `cssFloat` konvertiert. Alle modernen Browser unterstützen nun die direkte Verwendung von `float` in JavaScript, um auf die `float` CSS-Eigenschaft zuzugreifen, aber `cssFloat` wird in älteren Browsern verwendet und wird auch in modernen Browsern weiterhin als Alias unterstützt.
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in [camel case](/de/docs/Glossary/camel_case) umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat in der CSS-Kaskade die gleiche Priorität wie eine über das `style`-Attribut gesetzte Inline-Stil-Deklaration.

## Wert

Ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

### Stilinformationen abrufen

Der folgende Code-Schnipsel demonstriert, wie die mit der `style`-Eigenschaft des Elements erhaltenen Werte sich auf den im HTML-Attribut gesetzten Stil beziehen:

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
    !Number.isNaN(Number.parseInt(prop))
  ) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht innerhalb des `style`-Attributs des Elements selbst definiert ist. Vielmehr wird es von der Definition seines Elternteils geerbt. Beachten Sie auch, dass die im `style`-Attribut definierte Abkürzungseigenschaft {{cssxref("border-top")}} nicht direkt aufgelistet wird. Vielmehr wird sie durch die drei entsprechenden Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style)
