---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSSOM")}}

Das **`CSSStyleProperties`** Interface des [CSS Object Models (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Inline- oder berechneten Stile, die einem Element zur Verfügung stehen, oder die Stile, die mit einer CSS-Stilregel verknüpft sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Mit Bindestrich benannte und camel-case-named Eigenschaften für alle CSS-Eigenschaften, die vom Browser unterstützt werden.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieses Typs hat Bindestrich-namige Eigenschaften für **alle** [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), die vom Browser unterstützt werden, einschließlich [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) und Langform-Eigenschaften sowie solche mit `-moz` und `-webkit` Präfixen.
Diese können mittels der Methoden, die von der [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Basisklasse geerbt werden, wie [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) und [`setPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority), zugegriffen werden.

Zusätzlich hat jede mit einem Bindestrich versehene Eigenschaft eine entsprechende {{Glossary("camel_case", "camel case")}}-benannte Eigenschaft, wobei der Name durch Entfernen der Bindestriche und Großschreibung jedes nachfolgenden Wortes erzeugt wird.
Dies ermöglicht es beispielsweise, auf die CSS-Eigenschaft `margin-top` mit der Syntax `style.marginTop` (wobei `style` ein `CSSStyleProperties` ist) zuzugreifen, anstatt das umständlichere `style.getPropertyValue("margin-top")` oder `style["margin-top"]` zu verwenden.
Die CSS-Eigenschaft `float`, ein reserviertes JavaScript-Schlüsselwort, wird durch die Eigenschaft `cssFloat` dargestellt.

Kurzform-CSS-Eigenschaften des Elements werden zu ihren entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel würde ein Element mit dem Stil „`border-top: 1px solid black`“ im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie den entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Eigenschaften und Attribute ohne definierten Wert haben standardmäßig den leeren String (`""`).
Für ein Objekt, das eine Inline-Stil-Deklaration (keine berechneten Stile) darstellt, wird dies jeder Stil sein, der im Deklarationsblock nicht definiert ist.

`CSSStyleProperties`-Objektinstanzen werden über die folgenden APIs bereitgestellt:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Wird verwendet, um den _Inline-Stil_ eines einzelnen Elements zu erhalten und zu setzen (z.B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Wird verwendet, um den (schreibgeschützten) berechneten Stil eines Elements zu erhalten, der sowohl Inline- als auch externe Stile umfasst.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Wird verwendet, um die Stile einer Stilregel zu erhalten und zu setzen ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man lokale und berechnete Elementstile mit sowohl camel case- als auch Bindestrich-named Eigenschaften erhält und setzt.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl gesetzter Stile, eingebettet in einem anderen, das das `font-weight` als `bold` setzt.

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

Dann erhalten wir die `borderTop` Kurzform-Eigenschaft des `CSSStyleProperties` mit der Punktnotation für sowohl lokale als auch berechnete Stile.
Die Punktnotation mit einer camel case-Eigenschaft zu verwenden, ist der einfachste Weg, auf jede Eigenschaft zuzugreifen.

```js
// Get style using dot notation
const elem_borderTop = elementStyle.borderTop;
const comp_borderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elem_borderTop}" / "${comp_borderTop}"'`);
```

Wir können dieselbe Eigenschaft auch mit der Methode [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) oder der Klammernotation erhalten.

```js
// Get style using dashed-name property value
const elem_border_top = elementStyle.getPropertyValue("border-top");
const comp_border_top = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elem_border_top}" / "${elem_border_top}"'`);
```

Der folgende Code erhält jede der Langform-Eigenschaften, die der Kurzform-Eigenschaft `border-top` entsprechen, unter Verwendung der Punktnotation zur Einfachheit.

```js
// Get shorthand properties using dot notation
const elem_borderTopWidth = elementStyle.borderTopWidth;
const comp_borderTopWidth = computedStyle.borderTopWidth;
log(`"borderTopWidth" = "${elem_borderTopWidth}" / "${comp_borderTopWidth}"'`);

const elem_borderTopColor = elementStyle.borderTopColor;
const comp_borderTopColor = computedStyle.borderTopColor;
log(`"borderTopColor" = "${elem_borderTopColor}" / "${comp_borderTopColor}"'`);

const elem_borderTopStyle = elementStyle.borderTopStyle;
const comp_borderTopStyle = computedStyle.borderTopStyle;
log(`"borderTopStyle" = "${elem_borderTopStyle}" / "${comp_borderTopStyle}"'`);

const elem_fontWeight = elementStyle.fontWeight;
const comp_fontWeight = computedStyle.fontWeight;
log(`"fontWeight" = "${elem_fontWeight}" / "${comp_fontWeight}"'`);
```

Zum Schluss demonstrieren wir, wie Sie die Punktnotation verwenden können, um einen Eigenschaftswert zu setzen.
Im folgenden Ergebnisbereich werden Sie feststellen, dass die untere Grenze des Elements eine solide grüne Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse werden unten gezeigt.
Beachten Sie, wie die Werte der entsprechenden camel case (`borderTop`) und Bindestrich-named (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft auch gleich, mit der Ausnahme, dass berechnete Eigenschaften die `rgb()`-Syntax für Farben verwenden und zusätzlich auf dem übergeordneten `<div>` festgelegte Stile, wie etwa das `font-weight`, enthalten.

{{EmbedLiveSample("Basic usage", "100", "250")}}

### Enumerate dash-named style properties

Dieses Beispiel demonstriert, wie man die Bindestrich-named Eigenschaftswerte eines Elements für sowohl den Inline- als auch den berechneten Stil aufzählt.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl gesetzter Stile, eingebettet in einem anderen, das das `font-weight` setzt.
Es gibt auch Buttons, um die Inline-Stile und berechneten Stile für das Element zu erhalten (und versteckten Code für einen Zurücksetz-Button und Logdaten).

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

Der Code definiert zuerst die Funktion, die wir zum Aufzählen der Eigenschaften unseres Elements mit der ID `elt` verwenden werden.
Dies verwendet [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert jeder Bindestrich-named Eigenschaft zu erhalten, die dem Objekt gehört, das einen numerischen Index besitzt.

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

Der folgende Code prüft und protokolliert, ob `CSSStyleProperties` definiert ist.
Falls es existiert, erstellen wir Button-Event-Handler, um die Inline- oder berechneten Stile für das Element zu erhalten und deren Namen und Werte zu protokollieren.

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

Drücken Sie die Buttons, um die Namen und Werte der Bindestrich-named Eigenschaften für die Inline- und berechneten Stile des Elements anzuzeigen.
Beachten Sie, dass die Inline-Stile nur die tatsächlich auf dem Element definierten Stile enthalten: alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Stile enthalten auch `font-weight`, welches auf dem Elternteil definiert ist, und viele andere berechnete Stile.

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
