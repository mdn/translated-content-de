---
title: CSSMathMin
slug: Web/API/CSSMathMin
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSMathMin`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die CSS {{CSSXref('min','min()')}} Funktion.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathMin()`](/de/docs/Web/API/CSSMathMin/CSSMathMin) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathMin` Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathMin.values`](/de/docs/Web/API/CSSMathMin/values) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray) Objekt zurück, das ein oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekte enthält.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Die CSS {{cssxref("min", "min()")}} Funktion nimmt ein oder mehrere kommagetrennte Werte als Argumente und gibt den kleinsten von ihnen zurück.

Wenn alle Argumente absolute Werte sind, wie z.B. Pixellängen, wird `min()` zur Parsezeit in einen einzelnen Wert aufgelöst, der im CSS Typed Object Model durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) dargestellt wird.
Wenn der `min()` Ausdruck nicht zur Parsezeit in einen einzigen Wert aufgelöst werden kann (z.B. weil eines seiner Argumente eine relative Einheit wie `vw` oder `%` verwendet), wird die Funktion als ein `CSSMathMin` Objekt dargestellt, und die an `min()` (oder an den `CSSMathMin()` Konstruktor) übergebenen Argumente werden als die `values` Eigenschaft bereitgestellt.

Beachten Sie, dass `CSSMathMin` die `min()` Funktion und nicht deren aufgelösten Wert repräsentiert.
Um den Wert einer Eigenschaft zu bestimmen, die `min()` verwendet, müssen Sie deren berechneten Stil lesen (zum Beispiel mit [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathMin` Instanz aus drei Werten und liest dann deren `operator` und `values` Eigenschaften aus.

```js
const min = new CSSMathMin(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(min.constructor.name); // "CSSMathMin"
console.log(min.operator); // 'min'
console.log(min.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(min.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `min()` Darstellungen

Dieses Beispiel zeigt, wie {{cssxref("min", "min()")}} durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) oder ein `CSSMathMin` dargestellt wird, je nachdem, ob alle seine Argumente absolute Werte sind.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mit einem `min()` gesetzt, dessen Argumente alle absolute Längen sind, sodass der Browser es sofort in einen festen Wert auflösen kann.
`font-size` wird mit einem `min()` gesetzt, bei dem ein Argument die relative Einheit `vw` verwendet, sodass der Browser es erst beim Layout auflösen kann (dies wird durch ein `CSSMathMin` dargestellt).

```css
#demoBox {
  width: min(10px, 50px);
  font-size: min(1rem, 5vw);
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

Zuerst ermitteln wir die Stilregel des Demo-Box und lesen deren `width` und `font-size` Werte mit [`styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap) aus.

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

Dann loggen wir den Typ und den Wert der CSS Typed OM Darstellungen sowie die berechneten (aufgelösten) Werte.

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

`width` wird durch ein `CSSUnitValue` Objekt dargestellt, das einen Wert hat, der der aufgelösten Breite entspricht.
`font-size` wird durch ein `CSSMathMin` Objekt dargestellt, das die ursprünglichen Operanden der `min()` Funktion bereitstellt.

{{EmbedLiveSample("`min()` representations", 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
