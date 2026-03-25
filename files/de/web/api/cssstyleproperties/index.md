---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: 703f1c68d3f3428ad2e5e442bfbae0eb88bcc201
---

{{APIRef("CSSOM")}}

Die **`CSSStyleProperties`** Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert Inline- oder berechnete Stile, die auf ein Element angewendet werden, oder die mit einer CSS-Stilregel verknüpften Stile.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer Elternklasse, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Mit Strichen benannte und im Kamelhöckerstil benannte Eigenschaften für alle von dem Browser unterstützten CSS-Eigenschaften.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.

## Instanz-Methoden

_Diese Schnittstelle erbt die Methoden ihrer Elternklasse, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieses Typs hat durch Striche benannte Eigenschaften für **alle** [CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties), die vom Browser unterstützt werden, einschließlich sowohl [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)- als auch Langform-Eigenschaften, sowie solche mit `-moz` und `-webkit` Präfixen.
Diese können durch Methoden, die von der Basis-Klasse [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) geerbt werden, zugegriffen werden, wie z.B. [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) und [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty).

Darüber hinaus hat jede durch Striche benannte Eigenschaft eine entsprechende im {{Glossary("camel_case", "Kamelhöckerstil")}} benannte Eigenschaft, wobei der Name durch Entfernen der Striche und Großschreibung jedes Wortes nach dem ersten generiert wird.
Das erlaubt es Ihnen zum Beispiel, auf die `margin-top` CSS-Eigenschaft mit der Syntax `style.marginTop` (wobei `style` ein `CSSStyleProperties` ist) zuzugreifen, anstelle des umständlicheren `style.getPropertyValue("margin-top")` oder `style["margin-top"]`.
Die CSS-Eigenschaft `float`, die ein reserviertes JavaScript-Schlüsselwort ist, wird durch die `cssFloat`-Eigenschaft repräsentiert.

Kurzform-CSS-Eigenschaften des Elements werden auf ihre entsprechenden Langform-Eigenschaften erweitert.
Beispielsweise würde ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop`, sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` repräsentiert.

Eigenschaften und Attribute ohne definierten Wert haben standardmäßig den leeren String (`""`).
Für ein Objekt, das eine Inline-Stildeklaration repräsentiert (keine berechneten Stile), wird dies jeden Stil betreffen, der nicht im Deklarationsblock definiert ist.

`CSSStyleProperties` Objektinstanzen werden durch die folgenden APIs exponiert:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Wird verwendet, um den _Inline-Stil_ eines einzelnen Elements zu erhalten und zu setzen (z.B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Wird verwendet, um den (schreibgeschützten) berechneten Stil eines Elements zu erhalten, der die Effekte sowohl von Inline- als auch von externen Stilen beinhaltet.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Wird verwendet, um die Stile einer Stilregel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) zu erhalten und zu setzen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man lokale und berechnete Stile von Elementen sowohl mit im Kamelhöckerstil als auch mit durch Striche benannten Eigenschaften erhält und setzt.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl an gesetzten Stilen, eingebettet in ein weiteres, das `font-weight` als `bold` setzt.

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

Zuerst die lokalen und berechneten Stile für das Element mit der ID `"elt"` abrufen.

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

Dann erhalten wir die `borderTop` Kurzeigenschaft der `CSSStyleProperties` unter Verwendung der Punktnotation für sowohl lokale als auch berechnete Stile.
Die Verwendung der Punktnotation mit einer Kamelhöckerstileigenschaft ist der einfachste Weg, um auf eine Eigenschaft zuzugreifen.

```js
// Get style using dot notation
const elemBorderTop = elementStyle.borderTop;
const compBorderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Wir können auch dieselbe Eigenschaft mit der Methode [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) oder durch Klammernotation (Bracket Notation) abrufen.

```js
// Get style using dashed-name property value
const elemBorderTop = elementStyle.getPropertyValue("border-top");
const compBorderTop = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elemBorderTop}" / "${compBorderTop}"'`);
```

Der folgende Code ruft jede der Langform-Eigenschaften ab, die der Kurzform-Eigenschaft `border-top` entsprechen, und verwendet dabei aus Gründen der Einfachheit die Punktnotation.

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

Zuletzt demonstrieren wir, wie Sie die Punktnotation verwenden können, um einen Eigenschaftswert zu setzen.
In dem folgenden Ergebnisteil werden Sie feststellen, dass die untere Grenze des Elements eine solide grüne Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse sind unten gezeigt.
Beachten Sie, wie die Werte der entsprechenden Kamelhöckerstil- (`borderTop`) und durch Striche benannten (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft ebenfalls gleich, außer dass berechnete Eigenschaften `rgb()`-Syntax für Farben verwenden und zusätzlich Stile einschließen, die auf dem übergeordneten `<div>` gesetzt sind, wie `font-weight`.

{{EmbedLiveSample("Grundlegende Verwendung", "100", "250")}}

### Auflisten von durch Striche benannten Stileigenschaften

Dieses Beispiel zeigt, wie man die durch Striche benannten Eigenschaftswerte eines Elements für sowohl den Inline- als auch den berechneten Stil auflistet.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl gesetzter Stile, eingebettet in ein weiteres, das das `font-weight` setzt.
Es gibt auch Schaltflächen, um die Inline-Stile und berechneten Stile des Elements abzurufen (und versteckten Code für eine Zurücksetzen-Schaltfläche und Protokollierung).

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

Der Code definiert zuerst die Funktion, die wir verwenden, um die Eigenschaften unseres Elements mit der ID `elt` aufzuzählen.
Dies verwendet [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) um den Wert jeder durch Striche benannten Eigenschaft zu erhalten, die dem Objekt gehört, das einen numerischen Index hat.

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
Wenn es existiert, erstellen wir Schaltflächen-Ereignis-Handler, um die Inline- oder berechneten Stilelemente für das Element abzurufen und deren Namen und Werte zu protokollieren.

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

Drücken Sie die Schaltflächen, um die durch Striche benannten Eigenschaftsnamen und -werte für die Inline- und berechneten Stile des Elements anzuzeigen.
Beachten Sie, dass die Inline-Stile nur die auf dem tatsächlichen Element definierten Stile beinhalten: Alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Stile beinhalten auch `font-weight`, das auf dem übergeordneten Element definiert ist, sowie viele andere berechnete Stile.

{{EmbedLiveSample("Auflisten von durch Striche benannten Stileigenschaften", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
