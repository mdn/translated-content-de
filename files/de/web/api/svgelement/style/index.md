---
title: "SVGElement: style-Eigenschaft"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des {{domxref("SVGElement")}} gibt den _Inline_-Stil eines Elements in Form eines Live-{{domxref("CSSStyleDeclaration")}}-Objekts zurück, das eine Liste aller Stil-Eigenschaften für dieses Element enthält, mit Werten, die nur für die Attribute zugewiesen sind, die im Inline-Attribut [`style`](/de/docs/Web/HTML/Global_attributes/style) des Elements definiert sind.

Abkürzende Eigenschaften werden erweitert. Wenn Sie `style="border-top: 1px solid black"` setzen, werden anstelle dessen die Langform-Eigenschaften ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}) gesetzt.

Diese Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein {{domxref("CSSStyleDeclaration")}}-Objekt zuzuweisen. Trotzdem ist es möglich, einen Inline-Stil zu setzen, indem ein _String_ direkt der `style`-Eigenschaft zugewiesen wird. In diesem Fall wird der String an {{domxref("CSSStyleDeclaration.cssText")}} weitergeleitet. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile auf dem Element vollständig.

Daher ist es allgemein vorzuziehen, einzelne Eigenschaften auf dem {{domxref("CSSStyleDeclaration")}}-Objekt zu setzen, um einem Element spezifische Stile hinzuzufügen, ohne andere Stilwerte zu ändern. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.

Eine Stildeklaration wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `elt.style.color = null`.

> [!NOTE]
> CSS-Eigenschaftsnamen werden mit diesen Regeln in JavaScript-Bezeichner umgewandelt:
>
> - Wenn die Eigenschaft aus einem Wort besteht, bleibt sie wie sie ist: `height` bleibt unverändert (in Kleinbuchstaben).
> - Wenn die Eigenschaft aus mehreren Wörtern besteht, die durch Bindestriche getrennt sind, werden die Bindestriche entfernt und sie wird in {{Glossary("camel_case", "Camel Case")}} umgewandelt: `background-attachment` wird zu `backgroundAttachment`.
> - Die Eigenschaft `float`, da es ein reserviertes JavaScript-Schlüsselwort ist, wird zu `cssFloat` umgewandelt.
>
> Die `style`-Eigenschaft hat in der CSS-Kaskade dieselbe Priorität wie eine über das `style`-Attribut gesetzte Inline-Stildeklaration.

## Wert

Ein Live-{{domxref("CSSStyleDeclaration")}}-Objekt.

## Beispiele

### Stilinformationen abrufen

Der folgende Codeausschnitt demonstriert, wie das `style`-Attribut in eine Liste von Einträgen in {{domxref("CSSStyleDeclaration")}} übersetzt wird:

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

// Wir durchlaufen alle Stile des Elements mit `for...in`
for (const prop in elementStyle) {
  // Wir überprüfen, ob die Eigenschaft zur CSSStyleDeclaration-Instanz gehört
  // Wir stellen auch sicher, dass die Eigenschaft ein numerischer Index ist (was einen Inline-Stil anzeigt)
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stil-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
- {{domxref("MathMLElement.style")}}
- {{domxref("SVGElement.attributeStyleMap")}}
