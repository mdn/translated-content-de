---
title: "HTMLElement: style property"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _Inline_-Stil eines Elements in Form eines Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen sind, die im Inline-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements definiert sind.

Kurzschreibweisen werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden die Langschreibweisen ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) stattdessen gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ihr ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zuzuweisen. Dennoch ist es möglich, einen Inline-Stil festzulegen, indem Sie der `style`-Eigenschaft direkt einen _String_ zuweisen. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile des Elements vollständig.

Daher ist es allgemein vorzuziehen, spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, indem man einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt setzt. Beispielsweise können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stildeklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z. B. `elt.style.color = null`.

> [!NOTE]
> CSS-Property-Namen werden nach diesen Regeln in JavaScript-Bezeichner konvertiert:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie wie sie ist: `height` bleibt wie sie ist (in Kleinbuchstaben). Da `float` ein reserviertes Schlüsselwort in JavaScript ist, wurde dieser Eigenschaftsname historisch in `cssFloat` umgewandelt. Alle modernen Browser unterstützen inzwischen die direkte Verwendung von `float` in JavaScript, um auf die `float` CSS-Eigenschaft zuzugreifen. Dennoch wird `cssFloat` in älteren Browsern verwendet und wird in modernen Browsern weiterhin als Alias unterstützt.
> - Wenn die Eigenschaft aus mehreren durch Bindestriche getrennten Wörtern besteht, werden die Bindestriche entfernt und sie wird in das {{Glossary("camel_case", "Camel Case")}} konvertiert: `background-attachment` wird zu `backgroundAttachment`.
>
> Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine über das `style`-Attribut gesetzte Inline-Stildeklaration.

## Wert

Ein Live-[`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

## Beispiele

### Stilinformationen abrufen

Der folgende Codeabschnitt demonstriert, wie die Werte, die über die `style`-Eigenschaft des Elements erhalten werden, sich auf den im HTML-Attribut festgelegten Stil beziehen:

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

Beachten Sie, dass `font-weight` nicht als Wert für `elementStyle` aufgeführt ist, da es nicht im `style`-Attribut des Elements selbst definiert ist. Vielmehr wird es von der Definition des übergeordneten Elements geerbt. Beachten Sie auch, dass die Kurzform-Eigenschaft {{cssxref("border-top")}}, die im `style`-Attribut definiert ist, nicht direkt aufgeführt ist. Stattdessen wird sie durch die drei entsprechenden Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut
