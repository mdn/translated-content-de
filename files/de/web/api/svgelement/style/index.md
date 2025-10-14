---
title: "SVGElement: style-Eigenschaft"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement) gibt das _Inline_-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines Live-Objekts von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück. Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements zu lesen und zu setzen.

## Wert

Ein Live-Objekt von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties).

> [!NOTE]
> Frühere Versionen der Spezifikation haben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurückgegeben (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browserunterstützung.

## Beschreibung

Die Werte der Inline-Stile, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements gesetzt sind, werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts widergespiegelt.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) hat mit Bindestrichen benannte Eigenschaften sowie entsprechende {{Glossary("camel_case", "Camel-Case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Properties) (nicht nur für diejenigen mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Kurzbefehle für CSS-Eigenschaften des Elements werden in ihre entsprechenden Langformen aufgeschlüsselt. Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Die `style`-Eigenschaft ist schreibgeschützt, das heißt, es ist nicht möglich, ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt ihr zuzuweisen. Dennoch ist es möglich, einen Inline-Stil zu setzen, indem man direkt einen _String_ der Eigenschaft zuweist. In diesem Fall kann der String von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile des Elements vollständig.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zu setzen. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben. Eine Stildeklaration wird durch Setzen auf `null` oder einen leeren String zurückgesetzt, z. B. `element.style.color = null`.

Die `style`-Eigenschaft hat dieselbe Priorität in der CSS-Kaskade wie eine Inline-Stildeklaration, die über das `style`-Attribut gesetzt wird.

## Beispiele

### Aufzählung von Stilinformationen

Dieses Beispiel zeigt, wie wir die mit Bindestrichen benannten Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) auflisten können.

#### HTML

```html
<svg
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
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Der folgende Code iteriert über die aufzählbaren Eigenschaften der `CSSStyleProperties` und protokolliert das Ergebnis.

```js
const element = document.querySelector("circle");
const elementStyle = element.style;

// Loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // Check the property belongs to the CSSStyleProperties instance
  // Ensure the property is a numeric index (indicating a dash-named/inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    log(
      `${
        elementStyle[prop]
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}'`,
    );
  }
}
```

#### Ergebnisse

Das Ergebnis wird unten gezeigt. Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements aufgezählte Werte sind (die Inline-Kurzform-Eigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "380")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformationsdaten](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
