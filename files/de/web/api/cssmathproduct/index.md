---
title: CSSMathProduct
slug: Web/API/CSSMathProduct
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

Die **`CSSMathProduct`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert das Produkt aus zwei oder mehr [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Werten – in Fällen, in denen das Ergebnis nicht als einzelner Wert dargestellt werden kann.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathProduct()`](/de/docs/Web/API/CSSMathProduct/CSSMathProduct) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathProduct`-Objekt.

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathProduct.values`](/de/docs/Web/API/CSSMathProduct/values) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Objekt zurück, das ein oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält.

## Statische Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanzmethoden

_Erbt auch Methoden von ihrer Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Ein `CSSMathProduct` wird erzeugt, wenn eine Multiplikation oder Division nicht auf einen einzelnen Wert reduziert werden kann – dies passiert, wenn mehr als ein Operand eine Einheit trägt, zum Beispiel das Multiplizieren zweier Längen (`10px * 20px`) oder einer Länge mit einem Prozentsatz, anstatt eines Wertes mit einer einfachen Zahl.

Das Aufrufen von [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) oder [`div()`](/de/docs/Web/API/CSSNumericValue/div) auf Operanden, die nicht kombiniert werden können, gibt ein `CSSMathProduct` zurück; wenn jeder Operand eine einfache Zahl ist oder alle bis auf einen, werden sie sofort zu einem einzelnen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) aufgelöst.

[`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) gibt ein `CSSMathProduct` auf die gleiche Weise zurück – für einen {{cssxref("calc()")}}-Wert, der zu einer Multiplikation oder Division aufgelöst wird, die nicht zu einem Wert kombiniert werden kann.

`CSSMathProduct` repräsentiert den Produktausdruck selbst, nicht einen aufgelösten Wert.
Um den aufgelösten Wert zu erhalten, verwenden Sie [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathProduct`-Instanz aus zwei Werten und liest dann ihre `operator`- und `values`-Eigenschaften zurück.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.operator); // 'product'
console.log(product.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `calc()`-Darstellungen

Dieses Beispiel zeigt, wie eine {{cssxref("calc()")}}-Multiplikation durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) oder ein `CSSMathProduct` repräsentiert wird, abhängig davon, ob sie zu einem einzelnen Wert aufgelöst werden kann.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mittels eines `calc()`-Produkts aus einer Länge und einer einfachen Zahl gesetzt, sodass der Browser es sofort in einen einzelnen festen Wert auflösen kann.
`font-size` wird mit einem `calc()`-Produkt gesetzt, das eine einfache Zahl mit einer geklammerten Summe von `1rem` und `5vw` multipliziert; da die Summe selbst nicht in einen einzelnen Wert kombiniert werden kann (da sie Einheiten mischt), kann das Produkt es auch nicht, und dies wird durch ein `CSSMathProduct` repräsentiert.

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

Zuerst finden wir die Stilregel der Demo-Box und lesen ihre `width`- und `font-size`-Werte mit [`styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap) aus.

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

Dann protokollieren wir den Typ und den Wert der `CSS Typed OM`-Darstellungen, gefolgt von den berechneten (aufgelösten) Werten.

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

`width` wird durch ein `CSSUnitValue`-Objekt repräsentiert, das einen Wert hat, der der aufgelösten Breite entspricht.
`font-size` wird durch ein `CSSMathProduct`-Objekt repräsentiert, das die ursprünglichen Terme des `calc()`-Produkts ausgibt.

{{EmbedLiveSample("`calc()` Darstellungen", 300, 300)}}

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
