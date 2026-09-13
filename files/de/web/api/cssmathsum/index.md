---
title: CSSMathSum
slug: Web/API/CSSMathSum
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

Die **`CSSMathSum`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Summe von zwei oder mehr [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Werten, in Fällen, in denen das Ergebnis nicht als einzelner Wert dargestellt werden kann.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathSum()`](/de/docs/Web/API/CSSMathSum/CSSMathSum) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathSum`-Objekt.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Objekt zurück, das ein oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Ein `CSSMathSum` wird erzeugt, wenn eine Addition oder Subtraktion nicht auf einen einzelnen Wert reduziert werden kann — zum Beispiel, wenn die Operanden unterschiedliche Einheiten verwenden, wie eine Länge und ein Prozentsatz.

Das Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add) oder [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) auf Operanden, die nicht kombiniert werden können, liefert ein `CSSMathSum`; wenn jeder Operand dieselbe Einheit hat, lösen sie sich sofort in einen einzelnen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) auf.
[`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) hingegen gibt immer ein `CSSMathSum` zurück, selbst wenn seine Terme in einen einzelnen Wert kombiniert werden könnten.

[`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) gibt ein `CSSMathSum` auf die gleiche Weise zurück — für einen {{cssxref("calc()")}}-Wert, der auf eine Addition oder Subtraktion aufgelöst wird, die nicht zu einem Wert kombiniert werden kann.

`CSSMathSum` repräsentiert den Ausdruck der Summe selbst, nicht einen aufgelösten Wert.
Um den aufgelösten Wert zu erhalten, verwenden Sie [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathSum`-Instanz aus drei Werten und liest dann seine `operator`- und `values`-Eigenschaften aus.

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(sum.constructor.name); // "CSSMathSum"
console.log(sum.operator); // 'sum'

console.log(sum.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(sum.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `calc()`-Darstellungen

Dieses Beispiel zeigt, wie eine {{cssxref("calc()")}}-Addition durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) oder ein `CSSMathSum` dargestellt wird, je nachdem, ob seine Terme eine Einheit teilen.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mit einer `calc()`-Summe gesetzt, deren Terme beide `px`-Längen sind, sodass der Browser diese sofort in einen einzelnen festen Wert auflösen kann.
`font-size` wird mit einer `calc()`-Summe gesetzt, die `rem` und `vw` mischt, sodass der Browser die Terme erst beim Layout kombinieren kann (dies wird durch ein `CSSMathSum` dargestellt).

```css
#demoBox {
  width: calc(10px + 5px);
  font-size: calc(1rem + 5vw);
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

Zuerst suchen wir die Stilregel des Demo-Box und lesen ihre `width`- und `font-size`-Werte mithilfe von [`styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap).

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

Wir protokollieren dann den Typ und den Wert der CSS Typed OM-Darstellungen, gefolgt von den berechneten (aufgelösten) Werten.

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

`width` wird durch ein `CSSUnitValue`-Objekt repräsentiert, das einen Wert hat, der mit der aufgelösten Breite übereinstimmt.
`font-size` wird durch ein `CSSMathSum`-Objekt repräsentiert, das die ursprünglichen Terme der `calc()`-Summe darstellt.

{{EmbedLiveSample("`calc()` representations", 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`add()`](/de/docs/Web/API/CSSNumericValue/add)
- [`sub()`](/de/docs/Web/API/CSSNumericValue/sub)
- [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum)
- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
