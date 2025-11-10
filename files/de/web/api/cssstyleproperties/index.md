---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSStyleProperties`**-Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert Inline- oder berechnete Styles, die auf einem Element verfügbar sind, oder die mit einer CSS-Style-Regel verbundenen Styles.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Mit Bindestrich benannte und in Camelcase benannte Eigenschaften für alle vom Browser unterstützten CSS-Eigenschaften.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieses Typs hat mit Bindestrich benannte Eigenschaften für **alle** vom Browser unterstützen [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), einschließlich [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) und Langform-Eigenschaften, sowie solche mit `-moz` und `-webkit` Präfixen.
Diese können mit den von der Basisklasse [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) geerbten Methoden wie [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) und [`setPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) zugegriffen werden.

Darüber hinaus hat jede mit Bindestrich benannte Eigenschaft eine entsprechende in {{Glossary("camel_case", "camel case")}} benannte Eigenschaft, wobei der Name durch Entfernen der Bindestriche und Kapitalisierung jedes Wortes nach dem ersten generiert wird.
Dies ermöglicht es Ihnen beispielsweise, auf die CSS-Eigenschaft `margin-top` mit der Syntax `style.marginTop` zuzugreifen (wobei `style` ein `CSSStyleProperties` ist), anstatt auf die umständlichere Methode `style.getPropertyValue("margin-top")` oder `style["margin-top"]`.
Die CSS-Eigenschaft `float`, ein reserviertes JavaScript-Schlüsselwort, wird durch die `cssFloat`-Eigenschaft dargestellt.

Shorthand-CSS-Eigenschaften des Elements werden in ihre entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel würde ein Element mit dem Style `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, sowie {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt werden.

Eigenschaften und Attribute ohne definierten Wert haben standardmäßig den leeren String (`""`).
Für ein Objekt, das eine Inline-Style-Deklaration repräsentiert (nicht berechnete Styles), wird dies bei jedem Style der Fall sein, der nicht im Deklarationsblock definiert ist.

`CSSStyleProperties`-Objektinstanzen werden über die folgenden APIs bereitgestellt:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Wird verwendet, um den _inline style_ eines einzelnen Elements zu erhalten oder zu setzen (z.B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Wird verwendet, um den (nur lesbaren) berechneten Style eines Elements zu erhalten, der sowohl Inline- als auch externe Styles umfasst.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Wird verwendet, um die Styles einer Style-Regel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) zu erhalten oder zu setzen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie lokale und berechnete Element-Styles sowohl mit Camelcase als auch mit Bindestrich benannten Eigenschaften abgerufen und gesetzt werden.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl von gesetzten Styles, die in einem anderen verschachtelt sind, das das `font-weight` als `bold` setzt.

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

Zuerst die lokalen und berechneten Styles für das Element mit der ID `"elt"` abrufen.

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

Dann holen wir die `borderTop` Shorthand-Eigenschaft der `CSSStyleProperties` mithilfe der Punktnotation sowohl für lokale als auch berechnete Styles.
Die Verwendung der Punktnotation mit einer Camelcase-Eigenschaft ist der einfachste Weg, um auf eine beliebige Eigenschaft zuzugreifen.

```js
// Get style using dot notation
const elemBorderTop = elementStyle.borderTop;
const compBorderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Wir können dieselbe Eigenschaft auch mithilfe der [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)-Methode oder der Klammernotation erhalten.

```js
// Get style using dashed-name property value
const elemBorderTop = elementStyle.getPropertyValue("border-top");
const compBorderTop = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Der folgende Code holt jede der Langform-Eigenschaften, die der Shorthand-Eigenschaft `border-top` entsprechen, indem die Punktnotation für die Einfachheit verwendet wird.

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

Schließlich zeigen wir, wie Sie die Punktnotation verwenden können, um einen Eigenschaftswert zu setzen.
In der folgenden Ergebnissektion werden Sie feststellen, dass der untere Rand des Elements eine solide grüne Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse sind unten gezeigt.
Beachten Sie, wie die Werte von den entsprechenden Camelcase- (`borderTop`) und Bindestrich-named (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft auch gleich, außer dass berechnete Eigenschaften die `rgb()`-Syntax für Farben verwenden und zusätzlich Styles enthalten, die auf dem übergeordneten `<div>` gesetzt sind, wie z.B. das `font-weight`.

{{EmbedLiveSample("Basic usage", "100", "250")}}

### Enumerierung der mit Bindestrich benannten Style-Eigenschaften

Dieses Beispiel zeigt, wie die Werte der mit Bindestrich benannten Eigenschaften eines Elements sowohl für den Inline- als auch den berechneten Style aufgezählt werden.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl von gesetzten Styles, verschachtelt in einem anderen, das das `font-weight` setzt.
Es gibt auch Schaltflächen, um die Inline-Styles und berechneten Styles für das Element abzurufen (und versteckter Code für eine Zurücksetzen-Schaltfläche und Protokollierung).

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
Diese verwendet [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert jeder mit Bindestrich benannten Eigenschaft zu erhalten, die von dem Objekt besessen wird, das einen numerischen Index hat.

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
Wenn es vorhanden ist, erstellen wir Ereignishandler für die Schaltflächen, um die Inline- oder berechneten Styles für das Element zu erhalten und ihre Namen und Werte zu protokollieren.

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

Drücken Sie die Schaltflächen, um die Namen und Werte der mit Bindestrich benannten Eigenschaften für die Inline- und berechneten Styles des Elements anzuzeigen.
Beachten Sie, dass die Inline-Styles nur die auf dem tatsächlichen Element definierten Styles enthalten: alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Styles enthalten auch `font-weight`, das auf dem übergeordneten Element definiert ist, sowie viele andere berechnete Styles.

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
