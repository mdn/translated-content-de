---
title: "MathMLElement: Style-Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`MathMLElement`](/de/docs/Web/API/MathMLElement) gibt den _inline_ [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines lebendigen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zurück. Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements abzurufen und zu setzen.

## Wert

Ein lebendiges [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browserunterstützung.

## Beschreibung

Die Werte der im `style`-Attribut des Elements gesetzten Inline-Stile spiegeln sich in den entsprechenden Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts wider.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) hat Bindestrich-benannte und entsprechende {{Glossary("camel_case", "Camel-Case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Properties) (nicht nur diejenigen mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Abkürzende CSS-Eigenschaften des Elements werden auf ihre entsprechenden Langformen erweitert. Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle` und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Die `style`-Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zuzuweisen. Es ist jedoch möglich, einen Inline-Stil zu setzen, indem direkt ein _String_ der Eigenschaft zugewiesen wird. In diesem Fall kann der String über [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden. Die Verwendung von `style` auf diese Weise wird alle Inline-Stile auf dem Element vollständig überschreiben.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu ändern, ist es in der Regel vorzuziehen, individuelle Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zu setzen. Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben. Eine Stil-Deklaration wird zurückgesetzt, indem man sie auf `null` oder einen leeren String setzt, z.B., `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine über das `style`-Attribut gesetzte Inline-Stil-Deklaration.

## Beispiele

### Aufzählen von Stilinformationen

Dieses Beispiel zeigt, wie wir die Bindestrich-benannten Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) auflisten können.

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

Der folgende Code iteriert die aufzählbaren Eigenschaften der `CSSStyleProperties` und protokolliert das Ergebnis.

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

Das Ergebnis wird unten gezeigt. Beachten Sie, dass nur die lange Schreibweise der CSS-Eigenschaften des Elements aufgezählt wird (die Inline-Abkürzungseigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
