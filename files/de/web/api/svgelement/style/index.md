---
title: "SVGElement: style-Eigenschaft"
short-title: style
slug: Web/API/SVGElement/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle gibt den _Inline_-[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) eines Elements in Form eines aktiven [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts zurück.
Dieses Objekt kann verwendet werden, um die Inline-Stile eines Elements zu erhalten und festzulegen.

## Wert

Ein aktives [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt.

> [!NOTE]
> Frühere Versionen der Spezifikation haben eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurückgegeben (von der [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist).
> Siehe die Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität) für Informationen zur Unterstützung durch Browser.

Obwohl die `style`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSStyleProperties`-Objekt nicht ersetzen können, können Sie dennoch direkt der `style`-Eigenschaft zuweisen, was dem Zuweisen zur [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleProperties`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) modifizieren.

## Beschreibung

Die Werte der Inline-Stile, die im [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut des Elements festgelegt sind, werden durch entsprechende Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts widergespiegelt.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) verfügt über dash-benannte und entsprechende {{Glossary("camel_case", "camel-case")}} benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties) (nicht nur jene mit Inline-Stilen).
> Eigenschaften, die keinen entsprechenden Inline-Stil haben, sind auf `""` gesetzt.

Shorthand-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, und die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert werden.

Die `style`-Eigenschaft ist schreibgeschützt, was bedeutet, dass es nicht möglich ist, ihr ein [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt zuzuweisen.
Nichtsdestotrotz ist es möglich, einen Inline-Stil zu setzen, indem direkt eine _Zeichenkette_ zugewiesen wird.
In diesem Fall kann die Zeichenkette aus [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) gelesen werden.
Die Verwendung von `style` auf diese Weise wird alle Inline-Stile auf dem Element vollständig überschreiben.

Um einem Element spezifische Stile hinzuzufügen, ohne andere Stilwerte zu verändern, ist es im Allgemeinen vorzuziehen, einzelne Eigenschaften auf dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekt festzulegen.
Zum Beispiel können Sie `element.style.backgroundColor = "red"` schreiben.
Eine Stil-Deklaration wird zurückgesetzt, indem sie auf `null` oder eine leere Zeichenkette gesetzt wird, z.B. `element.style.color = null`.

Die `style`-Eigenschaft hat die gleiche Priorität in der CSS-Kaskade wie eine Inline-Stil-Deklaration, die über das `style`-Attribut gesetzt wurde.

## Beispiele

### Auflisten von Stilinformationen

Dieses Beispiel demonstriert, wie wir die dash-benannten Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) aufzählen können.

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

Der folgende Code iteriert die aufzählbaren Eigenschaften der `CSSStyleProperties` und gibt das Ergebnis aus.

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

Das Ergebnis wird unten gezeigt.
Beachten Sie, dass nur die Langform-CSS-Eigenschaften des Elements als Werte aufgezählt werden (die Inline-Kurzform-Eigenschaft wird nicht aufgezählt).

{{EmbedLiveSample("Enumerating style information", "100", "380")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von dynamischen Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`SVGElement.attributeStyleMap`](/de/docs/Web/API/SVGElement/attributeStyleMap)
