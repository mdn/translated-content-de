---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: f3bf315cc3f26a6c96cfa6fa4898e7def28ca78a
---

{{APIRef("CSSOM")}}

Das **`CSSStyleProperties`** Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert Inline- oder berechnete Stile, die auf einem Element verfügbar sind, oder die Stile, die einer CSS-Style-Regel zugeordnet sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Mit Bindestrich benannte und im Camel-Case benannte Eigenschaften für alle vom Browser unterstützten CSS-Eigenschaften.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezielles Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieses Typs verfügt über mit Bindestrich benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich sowohl [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)- als auch Langform-Eigenschaften und diejenigen mit den Präfixen `-moz` und `-webkit`.
Diese können mit Methoden abgerufen werden, die von der [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Basisklasse geerbt wurden, wie z.B. [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) und [`setPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority).

Darüber hinaus hat jede mit Bindestrich benannte Eigenschaft eine entsprechende im {{Glossary("camel_case", "Camel Case")}} benannte Eigenschaft, bei der die Dashes entfernt und jedes nachfolgende Wort nach dem ersten kapitalisiert wird.
Dies erlaubt es Ihnen beispielsweise, auf die `margin-top` CSS-Eigenschaft mit der Syntax `style.marginTop` (wobei `style` ein `CSSStyleProperties` ist) zuzugreifen, anstatt auf die umständlichere Weise `style.getPropertyValue("margin-top")` oder `style["margin-top"]`.
Die CSS-Eigenschaft `float`, die ein reserviertes JavaScript-Schlüsselwort ist, wird durch die Eigenschaft `cssFloat` dargestellt.

Kurzschriftige CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften umgesetzt.
Zum Beispiel würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, sowie den entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Eigenschaften und Attribute ohne definierten Wert standardmäßig auf den leeren String (`""`).
Für ein Objekt, das eine Inline-Style-Deklaration repräsentiert (nicht berechnete Stile), ist dies jeder Style, der nicht im Deklarationsblock definiert ist.

`CSSStyleProperties` Objektinstanzen werden durch die folgenden APIs bereitgestellt:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Verwendet, um den _Inline-Style_ eines einzelnen Elements zu erhalten und festzulegen (z. B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Verwendet, um den (nur lesbaren) berechneten Stil eines Elements zu erhalten, der die Effekte sowohl von Inline- als auch von externen Styles umfasst.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Verwendet, um die Styles einer Style-Regel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) zu erhalten und festzulegen.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert, wie Sie lokale und berechnete Elementstile unter Verwendung von Camel-Case- und mit Bindestrich benannten Eigenschaften abrufen und festlegen können.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl an Styles, die festgelegt sind und in einem anderen verschachtelt sind, das `font-weight` auf `bold` setzt.

```html
<div style="font-weight: bold;">
  <div style="border-top: 3px solid blue; color: red;margin:5px;" id="elt">
    Div content.
    <br />
    Inner: "border-top: 3px solid blue; color: red;margin:5px;".
    <br />
    Outer: "font-weight: bold;"
  </div>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 140px;
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

Zuerst erhalten Sie den lokalen und berechneten Stil für das Element mit der ID `"elt"`.

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

Dann holen wir die `borderTop` Kurzschrift-Eigenschaft der `CSSStyleProperties` unter Verwendung der Punktnotation für sowohl lokale als auch berechnete Stile.
Die Punktnotation mit einer im Camel-Case benannten Eigenschaft zu verwenden, ist der einfachste Weg, um auf eine Eigenschaft zuzugreifen.

```js
// Get style using dot notation
const elemBorderTop = elementStyle.borderTop;
const compBorderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Wir können dieselbe Eigenschaft auch mit der [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) Methode oder der Klammernotation abrufen.

```js
// Get style using dashed-name property value
const elemBorderTop = elementStyle.getPropertyValue("border-top");
const compBorderTop = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Der folgende Code holt jede der Langform-Eigenschaften, die der Kurzschrift-Eigenschaft `border-top` entsprechen, unter Verwendung der Punktnotation für die Einfachheit.

```js
// Get shorthand properties using dot notation
const elemBorderTopWidth = elementStyle.borderTopWidth;
const compBorderTopWidth = computedStyle.borderTopWidth;
log(`"borderTopWidth" = "${elemBorderTopWidth}" / "${compBorderTopWidth}"'`);

const elemBorderTopColor = elementStyle.borderTopColor;
const compBorderTopColor = computedStyle.borderTopColor;
log(`"borderTopColor" = "${elemBorderTopColor}" / "${compBorderTopColor}"'`);

const elemBorderTopStyle = elementStyle.borderTopStyle;
const compBorderTopStyle = computedStyle.borderTopStyle;
log(`"borderTopStyle" = "${elemBorderTopStyle}" / "${compBorderTopStyle}"'`);

const elemFontWeight = elementStyle.fontWeight;
const compFontWeight = computedStyle.fontWeight;
log(`"fontWeight" = "${elemFontWeight}" / "${compFontWeight}"'`);
```

Zuletzt demonstrieren wir, wie Sie die Punktnotation verwenden können, um einen Eigenschaftswert festzulegen.
In dem folgenden Ergebnisabschnitt werden Sie feststellen, dass die untere Umrandung des Elements ein solides, grünes Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse werden unten angezeigt.
Beachten Sie, wie die Werte der entsprechenden Camel-Case (`borderTop`) und mit Bindestrich benannten (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft auch gleich, mit der Ausnahme, dass berechnete Eigenschaften für Farben `rgb()` Syntax verwenden und zusätzlich Styles beinhalten, die im übergeordneten `<div>` gesetzt sind, wie das `font-weight`.

{{EmbedLiveSample("Basic usage", "100", "250")}}

### Aufzählen von mit Bindestrich benannten Style-Eigenschaften

Dieses Beispiel demonstriert, wie Sie die mit Bindestrich benannten Eigenschaftswerte eines Elements für sowohl den Inline- als auch den berechneten Stil aufzählen können.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl an Styles, die festgelegt sind und in einem anderen, das `font-weight` setzt, verschachtelt sind.
Es gibt auch Schaltflächen, um die Inline-Styles und die berechneten Styles für das Element zu erhalten (und versteckten Code für eine Reset-Taste und das Logging).

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
</div>
<button id="inline_style" type="button">Inline Style</button>
<button id="computed_style" type="button">Computed Style</button>
```

```html hidden
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

function clearLog(text) {
  logElement.innerText = "";
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  clearLog();
});
```

#### JavaScript

Der Code definiert zuerst die Funktion, die wir verwenden werden, um die Eigenschaften unseres Elements mit der ID `elt` aufzuzählen.
Dies verwendet [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert jeder mit Bindestrich benannten Eigenschaft zu erhalten, die dem Objekt gehört, das einen numerischen Index hat.

```js
function getPopulatedProperties(elementStyles) {
  for (const prop in elementStyles) {
    if (
      // Check the property belongs to the CSSStyleProperties instance
      // Check property has a numeric index (indicates inline/dash-named style)
      Object.hasOwn(elementStyles, prop) &&
      !Number.isNaN(Number.parseInt(prop, 10))
    ) {
      log(
        `${elementStyles[prop]} = '${elementStyles.getPropertyValue(
          elementStyles[prop],
        )}'`,
      );
    }
  }
}
```

Der folgende Code überprüft und protokolliert, ob `CSSStyleProperties` definiert ist.
Falls ja, erstellen wir Schaltflächen-Ereignishandler, um die Inline- oder berechneten Styles für das Element zu erhalten und ihre Namen und Werte zu protokollieren.

```js
if (typeof window.CSSStyleProperties === "undefined") {
  log("CSSStyleProperties is not supported on this browser.");
} else {
  const element = document.querySelector("#elt");

  const inlineStyle = document.querySelector("#inline_style");
  inlineStyle.addEventListener("click", () => {
    clearLog();
    const elementStyle = element.style;
    getPopulatedProperties(elementStyle);
  });

  const computedStyle = document.querySelector("#computed_style");
  computedStyle.addEventListener("click", () => {
    clearLog();
    const compStyles = window.getComputedStyle(element);
    getPopulatedProperties(compStyles);
  });
}
```

#### Ergebnisse

Drücken Sie die Schaltflächen, um die mit Bindestrich benannten Eigenschaften-Namen und -Werte für die Inline- und berechneten Styles des Elements anzuzeigen.
Beachten Sie, dass die Inline-Styles nur die tatsächlich auf dem Element definierten Styles beinhalten: alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Styles beinhalten auch `font-weight`, das im Elternteil definiert ist, und viele andere berechnete Styles.

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
