---
title: CSSMathProduct
slug: Web/API/CSSMathProduct
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

Die Schnittstelle **`CSSMathProduct`** der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) stellt das Produkt von zwei oder mehr [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Werten dar, wenn sich das Ergebnis nicht als einzelner Wert darstellen lässt.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathProduct()`](/de/docs/Web/API/CSSMathProduct/CSSMathProduct) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathProduct`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathProduct.values`](/de/docs/Web/API/CSSMathProduct/values) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Objekt zurück, das ein oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält.

## Statische Methoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Ein `CSSMathProduct` entsteht immer dann, wenn sich eine Multiplikation oder Division nicht zu einem einzelnen Wert auflösen lässt.
Das ist der Fall, wenn einer der Werte selbst eine Berechnung statt eines einzelnen Werts mit Einheit ist – beispielsweise beim Multiplizieren oder Dividieren einer Summe wie `1px + 2%`.
Bei einer Multiplikation ist das auch der Fall, wenn mehr als ein Wert eine Einheit hat, etwa bei `10px * 20px` oder einer Länge multipliziert mit einem Prozentwert. Bei einer Division ist es immer dann der Fall, wenn ein Divisor eine Einheit hat, etwa bei `10px / 2px` oder `10 / 2px`.

[`mul()`](/de/docs/Web/API/CSSNumericValue/mul) gibt nur dann einen einzelnen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück, wenn jeder Wert ein `CSSUnitValue` ist und entweder alle Werte oder alle bis auf einen reine Zahlen sind.
[`div()`](/de/docs/Web/API/CSSNumericValue/div) funktioniert genauso, mit dem Unterschied, dass jeder Divisor eine reine Zahl sein muss.
Andernfalls geben beide Methoden ein `CSSMathProduct` zurück.

[`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) gibt auf dieselbe Weise ein `CSSMathProduct` zurück – bei einem {{cssxref("calc()")}}-Wert, der auf eine Multiplikation oder Division hinausläuft, die sich nicht zu einem einzelnen Wert zusammenfassen lässt.

`CSSMathProduct` stellt den Produktausdruck selbst dar, nicht einen aufgelösten Wert.
Um den aufgelösten Wert zu erhalten, verwenden Sie [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt aus zwei Werten eine `CSSMathProduct`-Instanz und liest anschließend ihre Eigenschaften `operator` und `values` aus.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.operator); // 'product'
console.log(product.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Darstellungen von `calc()`

Dieses Beispiel zeigt, wie eine Multiplikation mit {{cssxref("calc()")}} je nachdem, ob sie sich zu einem einzelnen Wert auflösen lässt, durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) oder ein `CSSMathProduct` dargestellt wird.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mit einem `calc()`-Produkt aus einer Länge und einer reinen Zahl festgelegt. Daher kann der Browser es unmittelbar zu einem einzelnen festen Wert auflösen.
`font-size` wird mit einem `calc()`-Produkt festgelegt, das eine reine Zahl mit einer eingeklammerten Summe aus `1rem` und `5vw` multipliziert. Da sich die Summe selbst nicht zu einem einzelnen Wert zusammenfassen lässt (sie enthält unterschiedliche Einheiten), gilt das auch für das Produkt. Es wird daher durch ein `CSSMathProduct` dargestellt.

```css
#demoBox {
  width: calc(10px * 2);
  font-size: calc(2 * (1rem + 5vw));
}
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
  logElement.innerText += `${text}\n`;
}
```

Zuerst ermitteln wir die Stilregel der Demo-Box und lesen mithilfe von [`styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap) ihre Werte für `width` und `font-size` aus.

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

Anschließend geben wir Typ und Wert der Darstellungen im CSS Typed OM aus, gefolgt von den berechneten (aufgelösten) Werten.

```js
log("width");
log(` type: ${width.constructor.name}`);
log(` value: ${width}`);
log(` resolved: ${getComputedStyle(demoBox).width}`);

log("\nfont-size");
log(` type: ${fontSize.constructor.name}`);
log(` values: [${[...fontSize.values].join(", ")}]`);
log(` resolved: ${getComputedStyle(demoBox).fontSize}`);
```

#### Ergebnis

`width` wird durch ein `CSSUnitValue`-Objekt dargestellt, dessen Wert der aufgelösten Breite entspricht.
`font-size` wird durch ein `CSSMathProduct`-Objekt dargestellt, das die ursprünglichen Terme des `calc()`-Produkts zugänglich macht.

{{EmbedLiveSample("`calc()` representations", 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`mul()`](/de/docs/Web/API/CSSNumericValue/mul)
- [`div()`](/de/docs/Web/API/CSSNumericValue/div)
- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
