---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("CSSOM")}}

Das **`CSSStyleProperties`**-Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert inline oder berechnete Stile, die für ein Element verfügbar sind, oder die mit einer CSS-Stilregel verbundenen Stile.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Elternklasse, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Bindestrich-benannte und camelCase-benannte Eigenschaften für alle vom Browser unterstützten CSS-Eigenschaften.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}}-CSS-Eigenschaft.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seiner Elternklasse, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieser Art hat bindestrich-benannte Eigenschaften für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich [Kurzschreibweisen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) und Langschreibweisen sowie solchen mit `-moz` und `-webkit` Präfixen.
Diese können mit Methoden aufgerufen werden, die von der Basisklasse [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) geerbt werden, wie z.B. [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) und [`setPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority).

Darüber hinaus hat jede Bindestrich-benannte Eigenschaft eine entsprechende {{Glossary("camel_case", "camelCase")}}-benannte Eigenschaft, wobei der Name entsteht, indem die Bindestriche entfernt und jedes Wort nach dem ersten großgeschrieben wird.
Dies ermöglicht Ihnen beispielsweise den Zugriff auf die `margin-top`-CSS-Eigenschaft mit der Syntax `style.marginTop` (wobei `style` ein `CSSStyleProperties` ist), anstelle der umständlicheren `style.getPropertyValue("margin-top")` oder `style["margin-top"]`.
Die CSS-Eigenschaft `float`, ein reserviertes JavaScript-Schlüsselwort, wird durch die Eigenschaft `cssFloat` repräsentiert.

Kurzschreibweise-CSS-Eigenschaften des Elements werden zu ihren entsprechenden Langform-Eigenschaften erweitert.
Ein Element mit dem Stil `"border-top: 1px solid black"` würde beispielsweise im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, und den entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt werden.

Eigenschaften und Attribute ohne definierten Wert werden standardmäßig auf den leeren String (`""`) gesetzt.
Für ein Objekt, das eine Inline-Stilerklärung (nicht berechnete Stile) darstellt, gilt dies für jeden Stil, der im Deklarationsblock nicht definiert ist.

`CSSStyleProperties`-Objektinstanzen werden über folgende APIs bereitgestellt:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style) und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Wird verwendet, um den _Inline-Stil_ eines einzelnen Elements zu erhalten und zu setzen (z. B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Wird verwendet, um den (nur lesbaren) berechneten Stil eines Elements zu erhalten, der sowohl Inline- als auch externe Stile umfasst.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Wird verwendet, um die Stile einer Stilregel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) zu erhalten und zu setzen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie lokale und berechnete Elementstile sowohl mit camelCase- als auch mit Bindestrich-benannten Eigenschaften abgerufen und gesetzt werden.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Reihe von festgelegten Stilen, eingebettet in ein weiteres, das `font-weight` als `bold` setzt.

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

Zuerst holen wir den lokalen und berechneten Stil für das Element mit der ID `"elt"`.

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

Dann holen wir die Kurzschreibweiseigenschaft `borderTop` der `CSSStyleProperties` mit der Punktnotation sowohl für lokale als auch berechnete Stile.
Die Verwendung der Punktnotation mit einer camelCase-Eigenschaft ist der einfachste Weg, auf jede Eigenschaft zuzugreifen.

```js
// Get style using dot notation
const elemBorderTop = elementStyle.borderTop;
const compBorderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Wir können dieselbe Eigenschaft auch mit der Methode [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) oder der Klammernotation abrufen.

```js
// Get style using dashed-name property value
const elemBorderTop = elementStyle.getPropertyValue("border-top");
const compBorderTop = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Der folgende Code holt jede der Langform-Eigenschaften, die der Kurzschreibweiseigenschaft `border-top` entsprechen, und verwendet dabei der Einfachheit halber die Punktnotation.

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

Abschließend demonstrieren wir, wie Sie die Punktnotation verwenden können, um einen Eigenschaftswert zu setzen.
In der folgenden Ergebnissektion werden Sie feststellen, dass die untere Grenze des Elements eine solide grüne Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse werden unten gezeigt.
Beachten Sie, wie die Werte aus den entsprechenden camelCase- (`borderTop`) und Bindestrich-benannten (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft auch gleich, außer dass berechnete Eigenschaften die `rgb()`-Syntax für Farben verwenden und zusätzlich Stile umfassen, die auf dem übergeordneten `<div>`-Element gesetzt sind, wie beispielsweise das `font-weight`.

{{EmbedLiveSample("Basic usage", "100", "250")}}

### Aufzählung der Bindestrich-benannten Stileigenschaften

Dieses Beispiel zeigt, wie die Werte der Bindestrich-benannten Eigenschaften eines Elements sowohl für den Inline- als auch den berechneten Stil aufgezählt werden können.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Reihe von festgelegten Stilen, eingebettet in ein weiteres, das das `font-weight` setzt.
Es gibt auch Schaltflächen, um die Inline-Stile und berechneten Stile für das Element zu erhalten (und versteckter Code für eine Reset-Schaltfläche und das Protokollieren).

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

Der Code definiert zunächst die Funktion, die wir verwenden werden, um die Eigenschaften unseres Elements mit der ID `elt` aufzulisten.
Dies verwendet [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert jeder Bindestrich-benannten Eigenschaft zu erhalten, die dem Objekt gehört, das einen numerischen Index hat.

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
Wenn es existiert, erstellen wir Button-Event-Handler, um die Inline- oder berechneten Stile für das Element zu erhalten und deren Namen und Werte zu protokollieren.

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

Drücken Sie die Schaltflächen, um die Bindestrich-benannten Eigenschaftsnamen und -werte für die Inline- und berechneten Stile des Elements anzuzeigen.
Beachten Sie, dass die Inline-Stile nur die auf dem tatsächlichen Element definierten Stile umfassen: Alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Stile umfassen auch `font-weight`, das auf dem übergeordneten Element definiert ist, sowie viele andere berechnete Stile.

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
