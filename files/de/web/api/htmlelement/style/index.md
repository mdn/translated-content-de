---
title: "HTMLElement: style Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: 476fb44932d56c0f50628a620348cd77f411b5ab
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _Inline_-Stil eines Elements in Form eines Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen sind, die im Inline-[`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweisen werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langschreibweisen ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Trotzdem ist es möglich, einen Inline-Stil zu setzen, indem Sie eine _Zeichenkette_ direkt der `style`-Eigenschaft zuweisen. In diesem Fall wird die Zeichenkette an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Wird `style` auf diese Weise verwendet, werden alle Inline-Stile auf dem Element vollständig überschrieben.

Daher ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zu setzen, um bestimmten Stil zu einem Element hinzuzufügen, ohne andere Stilwerte zu verändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder eine leere Zeichenkette gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden nach diesen Regeln in JavaScript-Identifikatoren konvertiert:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt unverändert (in Kleinbuchstaben). Da `float` ein reserviertes Schlüsselwort in JavaScript ist, wurde dieser Eigenschaftsname historisch in `cssFloat` umgewandelt. Alle modernen Browser unterstützen nun die direkte Verwendung von `float` in JavaScript, um auf die `float`-CSS-Eigenschaft zuzugreifen, aber `cssFloat` wird in älteren Browsern verwendet und wird als Alias in modernen Browsern weiterhin unterstützt.
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in [Camel Case](/de/docs/Glossary/camel_case) umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat in der CSS-Kaskade die gleiche Priorität wie eine über das `style`-Attribut gesetzte Inline-Stil-Deklaration.

## Wert

Ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stilinformationen abrufen

Der folgende Codeausschnitt zeigt, wie sich die mit der `style`-Eigenschaft des Elements erhaltenen Werte auf den im HTML-Attribut gesetzten Stil beziehen:

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

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht innerhalb des `style`-Attributs des Elements selbst definiert ist. Stattdessen wird es von der Definition seines Elternelements geerbt. Beachten Sie auch, dass die im `style`-Attribut definierte Kurzschreibweise {{cssxref("border-top")}} nicht direkt aufgeführt ist. Stattdessen wird sie durch die drei entsprechenden Langschreibweisen ersetzt ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut
