---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("CSSOM")}}

Die Schnittstelle **`CSSStyleProperties`** des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert Inline- oder berechnete Styles, die auf ein Element angewendet werden, oder die Styles, die einer CSS-Stilregel zugeordnet sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Mit Bindestrich-namens- und CamelCase-namens Eigenschaften für alle vom Browser unterstützten CSS-Eigenschaften.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.

## Instanz-Methoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieses Typs hat Eigenschaften mit Bindestrich-Namen für **alle** vom Browser unterstützten [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich sowohl [Kurznotationen](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) als auch Langnotationen sowie jene mit den Präfixen `-moz` und `-webkit`.
Diese können mit Methoden abgerufen werden, die von der Basisklasse [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) geerbt werden, wie [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) und [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty).

Zusätzlich hat jede Eigenschaft mit Bindestrich-Namen auch eine entsprechende Eigenschaft mit {{Glossary("camel_case", "Camel Case")}}-Namen, wobei der Name durch das Entfernen der Bindestriche und das Großschreiben jedes nachfolgenden Wortes ab dem ersten erzeugt wird.
Dadurch können Sie beispielsweise auf die CSS-Eigenschaft `margin-top` mit der Syntax `style.marginTop` zugreifen (wobei `style` eine `CSSStyleProperties` ist), anstatt die umständlicheren `style.getPropertyValue("margin-top")` oder `style["margin-top"]` zu verwenden.
Die CSS-Eigenschaft `float`, die ein reserviertes JavaScript-Schlüsselwort ist, wird durch die Eigenschaft `cssFloat` dargestellt.

Kurznotationen der CSS-Eigenschaften des Elements werden zu ihren entsprechenden Langform-Eigenschaften expandiert.
Ein Element mit dem Style `"border-top: 1px solid black"` würde beispielsweise im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert werden.

Eigenschaften und Attribute ohne definierten Wert haben standardmäßig den leeren String (`""`).
Für ein Objekt, das eine Inline-Stil-Deklaration darstellt (nicht berechnete Stile), wird dies jeder Stil sein, der nicht im Deklarationsblock definiert ist.

`CSSStyleProperties`-Objektinstanzen werden mit den folgenden APIs bereitgestellt:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Wird verwendet, um den _Inline-Stil_ eines einzelnen Elements zu bekommen und zu setzen (z.B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Wird verwendet, um den (schreibgeschützten) berechneten Stil eines Elements zu erhalten, der die Effekte sowohl von Inline- als auch von externen Stilen enthält.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Wird verwendet, um die Stile einer Stilregel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) zu bekommen und zu setzen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert, wie man lokale und berechnete Stile eines Elements sowohl mit CamelCase- als auch mit Bindestrich-namens Eigenschaften abruft und setzt.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl festgelegter Styles, eingebettet in ein anderes, das `font-weight` auf `bold` setzt.

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

Zuerst wird der lokale und berechnete Stil für das Element mit der ID `"elt"` abgerufen.

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

Dann holen wir die `borderTop`-Kurznotationseigenschaft der `CSSStyleProperties` mit der Punktnotation für lokale und berechnete Stile.
Die Punktnotation mit einer CamelCase-Eigenschaft zu verwenden, ist der einfachste Weg, um auf jede Eigenschaft zuzugreifen.

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

Der folgende Code erhält jede der Langform-Eigenschaften, die der Kurznotationseigenschaft `border-top` entsprechen, unter Verwendung der Punktnotation zur Vereinfachung.

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
Im folgenden Ergebnisabschnitt werden Sie feststellen, dass der untere Rand des Elements eine durchgehende grüne Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse sind unten aufgeführt.
Beachten Sie, wie die Werte der entsprechenden CamelCase- (`borderTop`) und Bindestrich-namens- (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft auch gleich, außer dass berechnete Eigenschaften die `rgb()`-Syntax für Farben verwenden und zusätzlich Stile beinhalten, die im übergeordneten `<div>` festgelegt sind, wie das `font-weight`.

{{EmbedLiveSample("Basic usage", "100", "250")}}

### Aufzählen von Eigenschaften mit Bindestrich-Namen

Dieses Beispiel zeigt, wie die Bindestrich-namens Eigenschaften eines Elements sowohl für den Inline- als auch für den berechneten Stil aufgelistet werden.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl festgelegter Styles, eingebettet in ein anderes, das das `font-weight` setzt.
Es gibt auch Schaltflächen, um die Inline-Stile und berechneten Stile für das Element zu erhalten (und versteckten Code für einen Zurücksetzen-Button und das Logging).

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
Dies verwendet [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert jeder Bindestrich-namens Eigenschaft zu erhalten, die dem Objekt gehört, das einen numerischen Index hat.

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
Wenn es existiert, erstellen wir Schaltflächen-Ereignishandler, um die Inline- oder berechneten Stile für das Element zu holen und deren Namen und Werte zu protokollieren.

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

Drücken Sie die Schaltflächen, um die Bindestrich-namens Eigenschaftsnamen und -werte für die Inline- und berechneten Stile des Elements anzuzeigen.
Beachten Sie, dass die Inline-Stile nur die auf dem tatsächlichen Element definierten Stile enthalten: alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Stile enthalten auch `font-weight`, das im übergeordneten Element definiert ist, sowie viele andere berechnete Stile.

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
