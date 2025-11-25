---
title: "MathMLElement: style Eigenschaft"
short-title: style
slug: Web/API/MathMLElement/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`** Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement) Schnittstelle gibt den _inline_ [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines live [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekts zurück.
Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements abzurufen und zu setzen.

## Wert

Ein live [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück (von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Browser-Unterstützung.

Obwohl die `style` Eigenschaft selbst schreibgeschützt ist, im Sinne, dass Sie das `CSSStyleProperties` Objekt nicht ersetzen können, können Sie weiterhin direkt der `style` Eigenschaft zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) Eigenschaft ist. Sie können das `CSSStyleProperties` Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beschreibung

Die Werte der im Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) des Elements gesetzten Inline-Stile werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekts reflektiert.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) verfügt über Eigenschaften mit strichbenannten und entsprechenden {{Glossary("camel_case", "Camel-Case")}} Namen für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) (nicht nur die mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Kurzform-Eigenschaften der CSS des Elements werden zu ihren entsprechenden Langform-Eigenschaften expandiert.
Beispielsweise würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt werden.

Die `style` Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt ihr zuzuweisen.
Dennoch ist es möglich, einen Inline-Stil zu setzen, indem direkt eine _Zeichenkette_ der Eigenschaft zugewiesen wird.
In diesem Fall kann die Zeichenkette aus [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden.
Die Verwendung von `style` auf diese Weise überschreibt alle Inline-Stile auf dem Element vollständig.

Um spezifische Stile zu einem Element hinzuzufügen, ohne andere Stilwerte zu verändern, ist es generell vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Objekt zu setzen.
Beispielsweise können Sie `element.style.backgroundColor = "red"` schreiben.
Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder eine leere Zeichenkette gesetzt wird, z. B. `element.style.color = null`.

Die `style` Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine über das `style` Attribut gesetzte Inline-Stil-Deklaration.

## Beispiele

### Aufzählung der Stilinformationen

Dieses Beispiel zeigt, wie wir die strichbenannten Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) aufzählen können.

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

Das Ergebnis wird unten gezeigt.
Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements aufzählbare Werte sind (die Inline-Kurzform-Eigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung dynamischer Stilinformations](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.attributeStyleMap`](/de/docs/Web/API/MathMLElement/attributeStyleMap)
