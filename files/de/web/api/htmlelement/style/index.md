---
title: "HTMLElement: style-Eigenschaft"
short-title: style
slug: Web/API/HTMLElement/style
l10n:
  sourceCommit: aa95ccc2ee32f99c8fe2d7f370121a0fd4c6aaf4
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`style`** der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) gibt den _Inline-Style_ eines Elements in Form eines Live-Objekts vom Typ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) zurück. Mit diesem Objekt können Sie die Inline-Styles eines Elements auslesen und ändern.

## Wert

Ein Live-Objekt vom Typ [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties).

> [!NOTE]
> Frühere Versionen der Spezifikation gaben ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, von dem [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) abgeleitet ist.
> Informationen zur Browser-Unterstützung finden Sie in der Tabelle zur [Browser-Kompatibilität](#browser-kompatibilität).

Obwohl die Eigenschaft `style` selbst schreibgeschützt ist – Sie können das `CSSStyleProperties`-Objekt also nicht ersetzen –, können Sie `style` direkt einen Wert zuweisen. Dies entspricht einer Zuweisung an die Eigenschaft [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText) des Objekts. Sie können das `CSSStyleProperties`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beschreibung

Die Werte der Inline-Styles im Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) des Elements spiegeln sich in den entsprechenden Eigenschaften des zurückgegebenen [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts wider.

> [!NOTE]
> [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) enthält Eigenschaften mit Bindestrichschreibweise und entsprechende Eigenschaften in {{Glossary("camel_case", "Camel-Case-Schreibweise")}} für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), nicht nur für solche mit Inline-Styles.
> Eigenschaften ohne entsprechenden Inline-Style haben den Wert `""`.

CSS-Kurzschreibweisen des Elements werden in ihre entsprechenden Langschreibweisen aufgelöst. Beispielsweise wird ein Element mit dem Style `"border-top: 1px solid black"` im zurückgegebenen Objekt durch die Eigenschaften {{cssxref("border-top")}} und `borderTop` sowie durch die entsprechenden Langschreibweisen {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle` sowie {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert.

Um einem Element bestimmte Styles hinzuzufügen, ohne andere Style-Werte zu verändern, sollten Sie in der Regel einzelne Eigenschaften des [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Objekts setzen. Beispielsweise können Sie `element.style.backgroundColor = "red"` schreiben. Eine Style-Deklaration wird zurückgesetzt, indem Sie ihr `null` oder eine leere Zeichenfolge zuweisen, beispielsweise `element.style.color = null`.

Die Eigenschaft `style` hat in der CSS-Kaskade dieselbe Priorität wie eine Inline-Style-Deklaration, die über das Attribut `style` gesetzt wurde.

## Beispiele

### Grundlegende Verwendung

Dieses Codebeispiel zeigt, wie Sie die Inline-Styles eines Elements auslesen. Dabei werden die Style-Eigenschaften in Bindestrichschreibweise jeweils mit [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) und die Eigenschaften in Camel-Case-Schreibweise mit dem Punktoperator ausgelesen.

#### HTML

Zunächst definieren wir ein {{htmlelement("div")}}-Element und ein darin verschachteltes Element mit unterschiedlichen Inline-Styles. Dabei verwenden wir sowohl Kurz- als auch Langschreibweisen.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 200px;
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

Der folgende Code greift auf das innere Element zu, liest seinen Style aus und protokolliert die CSS-Style-Eigenschaften in Bindestrich- und Camel-Case-Schreibweise.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Longhand styles
log(`"border-top" = '${elementStyle.getPropertyValue("border-top")}'`);
log(`"borderTop" = '${elementStyle.borderTop}'`);

// Expanded longhand styles
log(
  `"border-top-width" = '${elementStyle.getPropertyValue("border-top-width")}'`,
);
log(`"borderTopWidth" = '${elementStyle.borderTopWidth}'`);

log(
  `"border-top-style" = '${elementStyle.getPropertyValue("border-top-style")}'`,
);
log(`"borderTopStyle" = '${elementStyle.borderTopStyle}'`);

log(
  `"border-top-color" = '${elementStyle.getPropertyValue("border-top-color")}'`,
);
log(`"borderTopColor" = '${elementStyle.borderTopColor}'`);

// Original shorthand style
log(`"color" = '${elementStyle.getPropertyValue("color")}'`);
log(`"color" = '${elementStyle.color}'`);

// Defined on parent
log(`"font-weight" = '${elementStyle.getPropertyValue("font-weight")}'`);
log(`"fontWeight" = '${elementStyle.fontWeight}'`);
```

#### Ergebnisse

Das Ergebnis ist unten dargestellt. In jedem Fall stimmen die Styles überein, unabhängig davon, ob sie über die Eigenschaften in Bindestrich- oder Camel-Case-Schreibweise ausgelesen wurden. Außerdem ist die Eigenschaft {{cssxref("border-top")}} vorhanden, die dem `style`-Attribut des Elements entspricht. Für jeden ihrer Bestandteile ist eine Eigenschaft in Langschreibweise definiert ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}} und {{cssxref("border-top-width")}}).

{{EmbedLiveSample("Basic usage", "100", "280")}}

Beachten Sie, dass `font-weight` auf `CSSStyleProperties` definiert ist, ebenso wie alle anderen CSS-Eigenschaften, auch wenn wir diese nicht protokolliert haben. Für das verschachtelte Element ist `font-weight` jedoch kein Inline-Style. Daher ist sein Wert die leere Zeichenfolge (`""`).

### Style-Informationen aufzählen

Dieses Beispiel zeigt, wie Sie die Eigenschaften von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) in Bindestrichschreibweise aufzählen können.

#### HTML

Zunächst definieren wir ein {{htmlelement("div")}}-Element und ein darin verschachteltes Element mit unterschiedlichen Inline-Styles. Dabei verwenden wir sowohl Kurz- als auch Langschreibweisen. Dies ist dasselbe HTML wie im vorherigen Beispiel.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 100px;
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

Der folgende Code durchläuft die aufzählbaren Eigenschaften von `CSSStyleProperties` und protokolliert das Ergebnis.

```js
const element = document.getElementById("elt");
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
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}`,
    );
  }
}
```

#### Ergebnisse

Das Ergebnis ist unten dargestellt. Beachten Sie, dass nur die CSS-Eigenschaften des Elements in Langschreibweise aufgezählt werden, nicht jedoch die Inline-Eigenschaft in Kurzschreibweise.

{{EmbedLiveSample("Enumerating style information", "100", "180")}}

### Rahmen-Style aktualisieren

```html
<div id="box"></div>

<button id="btn1">Make border 20px-wide</button>
<button id="btn2">Make border 5px-wide</button>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("Updating border style", "", "200")}}

### Styles bearbeiten

In diesem Beispiel wird über das Style-Objekt eines HTML-Absatzelements und dessen CSS-Style-Eigenschaften auf einige grundlegende Style-Eigenschaften zugegriffen. Diese Eigenschaften können über das DOM ausgelesen und gesetzt werden. Hier bearbeiten Sie die einzelnen Styles direkt. Sie können auch [`styleSheets`](/de/docs/Web/API/Document/styleSheets) und deren Regeln verwenden, um Styles für ganze Dokumente zu ändern.

```html
<p id="pid">Some text</p>
<p><button type="button">Change text</button></p>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("Manipulating styles", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Dynamische Style-Informationen verwenden](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [`SVGElement.style`](/de/docs/Web/API/SVGElement/style)
- [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style)
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap)
- HTML-Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)
