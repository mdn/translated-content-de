---
title: "SVGElement: style-Eigenschaft"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement) gibt den _Inline_-Stil eines Elements in Form eines Live-Objekts vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, das eine Liste aller Stileigenschaften für dieses Element enthält, wobei Werte nur für die Attribute zugewiesen werden, die im Inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) des Elements definiert sind.

Kurzform-Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden stattdessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, und {{cssxref("border-top-width")}}) gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt ihr zuzuweisen. Dennoch ist es möglich, einen Inline-Stil durch direkte Zuweisung eines _Strings_ zur `style`-Eigenschaft zu setzen. In diesem Fall wird der String an [`CSSStyleDeclaration.cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile auf dem Element vollständig.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es daher generell vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt zu setzen. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B., `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden nach diesen Regeln in JavaScript-Bezeichner konvertiert:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie unverändert: `height` bleibt unverändert (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in [CamelCase](/de/docs/Glossary/camel_case) umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da sie ein reserviertes JavaScript-Schlüsselwort ist, wird in `cssFloat` umgewandelt.
>
> Die `style`-Eigenschaft hat dieselbe Priorität in der CSS-Kaskade wie eine Inline-Stildeklaration, die über das `style`-Attribut gesetzt wird.

## Wert

Ein Live-Objekt vom Typ [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

### Stilinformationen abrufen

Der folgende Codeausschnitt demonstriert, wie das `style`-Attribut in eine Liste von Einträgen in [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) übersetzt wird:

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

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
