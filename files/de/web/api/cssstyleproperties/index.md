---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{APIRef("CSSOM")}}

Das **`CSSStyleProperties`**-Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Inline- oder berechneten Stile, die auf ein Element angewendet werden, oder die Stile, die mit einer CSS-Stilregel verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

- Benannte Eigenschaften
  - : Mit Bindestrich benannte und CamelCase-genannte Eigenschaften für alle vom Browser unterstützten CSS-Eigenschaften.
- [`CSSStyleProperties.cssFloat`](/de/docs/Web/API/CSSStyleProperties/cssFloat)
  - : Spezieller Alias für die {{CSSxRef("float")}} CSS-Eigenschaft.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beschreibung

Ein Objekt dieses Typs verfügt über mit Bindestrich benannte Eigenschaften für **alle** [CSS-Eigenschaften](/de/docs/Web/CSS/Properties), die vom Browser unterstützt werden, einschließlich sowohl [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) als auch Langform-Eigenschaften, sowie Eigenschaften mit `-moz` und `-webkit` Präfixen.
Diese können mithilfe der von der Basis-Klasse [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) geerbten Methoden, wie [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority) und [`setPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority), zugegriffen werden.

Zusätzlich hat jede Eigenschaft mit Bindestrich auch eine entsprechende {{Glossary("camel_case", "CamelCase")}}-benannte Eigenschaft, bei der die Bindestriche entfernt und jedes Wort nach dem ersten großgeschrieben wird.
Das ermöglicht Ihnen beispielsweise, auf die CSS-Eigenschaft `margin-top` mit der Syntax `style.marginTop` zuzugreifen (wobei `style` ein `CSSStyleProperties` ist), anstatt die umständlichere Syntax `style.getPropertyValue("margin-top")` oder `style["margin-top"]` zu verwenden.
Die CSS-Eigenschaft `float`, die ein reserviertes JavaScript-Schlüsselwort ist, wird durch die Eigenschaft `cssFloat` dargestellt.

Shorthand CSS-Eigenschaften des Elements werden auf ihre entsprechenden Langform-Eigenschaften erweitert.
Zum Beispiel wird ein Element mit dem Stil `"border-top: 1px solid black"` im zurückgegebenen Objekt durch Eigenschaften mit den Namen {{cssxref("border-top")}} und `borderTop` sowie die entsprechenden Langform-Eigenschaften {{cssxref("border-top-color")}} und `borderTopColor`, {{cssxref("border-top-style")}} und `borderTopStyle`, und {{cssxref("border-top-width")}} und `borderTopWidth` dargestellt.

Eigenschaften und Attribute ohne definierten Wert haben standardmäßig den leeren String (`""`).
Bei einem Objekt, das eine Inline-Stil-Deklaration darstellt (keine berechneten Stile), wird dies bei jedem Stil der Fall sein, der nicht im Deklarationsblock definiert ist.

`CSSStyleProperties`-Objektinstanzen werden über die folgenden APIs bereitgestellt:

- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style), [`SVGElement.style`](/de/docs/Web/API/SVGElement/style), und [`MathMLElement.style`](/de/docs/Web/API/MathMLElement/style): Genutzt, um den _Inline-Stil_ eines einzigen Elements zu erhalten und zu setzen (z.B. `<div style="…">`).
- [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle): Genutzt, um den (nur lesbaren) berechneten Stil eines Elements zu erhalten, der sowohl den Effekt von Inline- als auch externen Stilen enthält.
- [`CSSStyleRule.style`](/de/docs/Web/API/CSSStyleRule/style): Genutzt, um die Stile einer Stilmusterregel ([`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule)) zu erhalten und zu setzen.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert, wie man lokale und berechnete Elementstile mit sowohl CamelCase als auch mit Bindestrich benannten Eigenschaften erhält und setzt.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl von festgelegten Stilen, eingebettet in ein weiteres, das das `font-weight` als `bold` setzt.

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

Erstens holen wir den lokalen und den berechneten Stil für das Element mit der ID `"elt"`.

```js
const element = document.querySelector("#elt");
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element);
```

Dann bekommen wir die `borderTop`-Shorthand-Eigenschaft der `CSSStyleProperties` mithilfe der Punktnotation für sowohl lokale als auch berechnete Stile.
Die Nutzung der Punktnotation mit einer CamelCase-Eigenschaft ist der einfachste Weg, auf jede Eigenschaft zuzugreifen.

```js
// Get style using dot notation
const elem_borderTop = elementStyle.borderTop;
const comp_borderTop = computedStyle.borderTop;

log('Format: Style = "Element" / "Computed"');
log(`"borderTop" = "${elem_borderTop}" / "${comp_borderTop}"'`);
```

Wir können dieselbe Eigenschaft auch mithilfe der [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyPriority)-Methode oder der Klammerschreibweise erhalten.

```js
// Get style using dashed-name property value
const elem_border_top = elementStyle.getPropertyValue("border-top");
const comp_border_top = computedStyle.getPropertyValue("border-top");
log(`"border-top" = "${elem_border_top}" / "${elem_border_top}"'`);
```

Der folgende Code erhält jede der Langform-Eigenschaften, die der Shorthand-Eigenschaft `border-top` entsprechen, indem er die Punktnotation der Einfachheit halber nutzt.

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

Zuletzt demonstrieren wir, wie Sie die Punktnotation verwenden können, um einen Eigenschaftswert zu setzen.
In dem folgenden Ergebnisbereich werden Sie feststellen, dass der untere Rand des Elements eine solide grüne Linie ist.

```js
// Set the bottom border style using dot notation
elementStyle.borderBottom = "5px solid green";
```

#### Ergebnisse

Die Ergebnisse werden unten angezeigt.
Beachten Sie, dass die Werte der entsprechenden CamelCase- (`borderTop`) und mit Bindestrich benannten (`border-top`) Eigenschaften gleich sind.
Die lokalen und berechneten Werte für die Langform-Eigenschaften sind oft ebenfalls gleich, außer dass berechnete Eigenschaften die `rgb()`-Syntax für Farben verwenden und zusätzlich Stile enthalten, die auf dem übergeordneten `<div>` gesetzt sind, wie z.B. das `font-weight`.

{{EmbedLiveSample("Basic usage", "100", "250")}}

### Enumeriere mit Bindestrich benannte Stileigenschaften

Dieses Beispiel demonstriert, wie man die mit Bindestrich benannten Eigenschaftswerte eines Elements auflistet, sowohl für den Inline- als auch für den berechneten Stil.

#### HTML

Das HTML definiert ein {{htmlelement("div")}} mit einer Anzahl von festgelegten Stilen, eingebettet in ein weiteres, das das `font-weight` setzt.
Es gibt auch Schaltflächen, um die Inline-Stile und die berechneten Stile für das Element zu erhalten (und versteckten Code für eine Zurücksetzschaltfläche und Logging).

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

Der Code definiert zuerst die Funktion, die wir verwenden werden, um die Eigenschaften unseres Elements mit der `elt`-ID aufzulisten.
Dies nutzt [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue), um den Wert jeder mit Bindestrich benannten Eigenschaft abzurufen, die dem Objekt gehört und einen numerischen Index hat.

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
Falls es existiert, erstellen wir Schaltflächen-Ereignis-Handler, um die Inline- oder berechneten Stile für das Element zu erhalten und deren Namen und Werte zu protokollieren.

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

Drücken Sie die Schaltflächen, um die mit Bindestrich benannten Eigenschaftsnamen und Werte für die Inline- und berechneten Stile des Elements anzuzeigen.
Beachten Sie, dass die Inline-Stile nur die auf dem tatsächlichen Element definierten Stile enthalten: alle anderen Eigenschaften haben den Wert `""` und werden nicht angezeigt.
Die berechneten Stile enthalten auch `font-weight`, das auf dem übergeordneten Element definiert ist, und viele weitere berechnete Stile.

{{EmbedLiveSample("Enumerate dash-named style properties", "100", "400")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
