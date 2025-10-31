---
title: "MathMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) gibt den _inline_-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines lebendigen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zurück. Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements zu lesen und zu setzen.

## Wert

Ein lebendiges [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation lieferten eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Sehen Sie sich die [Browser-Kompatibilität](#browser-kompatibilität)-Tabelle für Informationen zur Unterstützung durch Browser an.

## Beschreibung

Die Werte der im `style`-Attribut des Elements gesetzten Inline-Stile werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts reflektiert.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) verfügt über Eigenschaften mit Bindestrichnamen und entsprechenden {{Glossary("camel_case", "camelCase")}} Namen für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) (nicht nur für die mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Kurzhand-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften aufgeschlüsselt.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, sowie die korrespondierenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert werden.

Die `style`-Eigenschaft ist schreibgeschützt, das bedeutet, dass es nicht möglich ist, ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt ihr zuzuweisen. Es ist jedoch möglich, einen Inline-Stil zu setzen, indem man direkt einen _String_ der Eigenschaft zuweist. In diesem Fall kann der String von [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden. Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile des Elements vollständig.

Um einem Element spezifische Stile hinzuzufügen, ohne andere Stilwerte zu verändern, ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zu setzen. Zum Beispiel, Sie können `element.style.backgroundColor = "red"` schreiben. Eine Stildefinition wird zurückgesetzt, indem sie auf `null` oder einen leeren String gesetzt wird, z.B. `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine über das `style`-Attribut gesetzte Inline-Stildeklaration.

## Beispiele

### Aufzählen von Stilinformationen

Dieses Beispiel zeigt, wie wir die Bindestricheigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) aufzählen können.

#### HTML

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
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der folgende Code durchläuft die aufzählbaren Eigenschaften der `CSSStyleProperties` und protokolliert das Ergebnis.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const element = document.querySelector(".parameter");
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

Das Ergebnis wird unten angezeigt. Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements aufzählbare Werte sind (die Inline-Kurzform-Eigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
