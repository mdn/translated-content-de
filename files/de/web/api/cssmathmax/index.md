---
title: CSSMathMax
slug: Web/API/CSSMathMax
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSMathMax`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die CSS-Funktion {{CSSXref('max','max()')}}.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathMax()`](/de/docs/Web/API/CSSMathMax/CSSMathMax) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathMax`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathMax.values`](/de/docs/Web/API/CSSMathMax/values) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Objekt zurück, das eines oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

Die CSS {{cssxref("max", "max()")}}-Funktion nimmt einen oder mehrere kommagetrennte Werte als Argumente und gibt den größten von ihnen zurück.

Wenn alle Argumente absolute Werte sind, wie beispielsweise Pixel-Längen, wird `max()` zur Analysezeit in einen einzelnen Wert aufgelöst, der im CSS Typed Object Model als [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) dargestellt wird.
Wenn der `max()`-Ausdruck zur Analysezeit nicht in einen einzelnen Wert aufgelöst werden kann (z.B. weil eines seiner Argumente eine relative Einheit wie `vw` oder `%` verwendet), wird die Funktion als `CSSMathMax`-Objekt dargestellt, und die Argumente, die an `max()` (oder an den `CSSMathMax()`-Konstruktor) übergeben werden, werden als `values`-Eigenschaft angezeigt.

Beachten Sie, dass `CSSMathMax` die `max()`-Funktion repräsentiert, nicht deren aufgelösten Wert.
Um den Wert einer Eigenschaft unter Verwendung von `max()` zu bestimmen, müssen Sie ihren berechneten Stil lesen (zum Beispiel mit [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)).

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathMax`-Instanz aus drei Werten und liest dann deren `operator`- und `values`-Eigenschaften aus.

```js
const max = new CSSMathMax(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(max.constructor.name); // "CSSMathMax"
console.log(max.operator); // 'max'
console.log(max.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(max.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `max()`-Darstellungen

Dieses Beispiel zeigt, wie {{cssxref("max", "max()")}} durch einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) oder einen `CSSMathMax` dargestellt wird, abhängig davon, ob alle Argumente absolute Werte sind.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` wird mit einem `max()` festgelegt, dessen Argumente alle absolute Längen sind, sodass der Browser es sofort in einen einzelnen festen Wert auflösen kann.
`font-size` wird mit einem `max()` festgelegt, bei dem ein Argument die relative Einheit `vw` verwendet, sodass der Browser es erst beim Layout auflösen kann (dies wird durch ein `CSSMathMax` dargestellt).

```css
#demoBox {
  width: max(10px, 50px);
  font-size: max(1rem, 5vw);
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

Zuerst finden wir die Stilregel des Demokastens und lesen seine `width`- und `font-size`-Werte mit [`styleMap`](/de/docs/Web/API/CSSStyleRule/styleMap).

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

Wir protokollieren dann den Typ und Wert der Repräsentationen des CSS Typed OM, gefolgt von den berechneten (aufgelösten) Werten.

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

`width` wird durch ein `CSSUnitValue`-Objekt dargestellt, dessen Wert mit der aufgelösten Breite übereinstimmt.
`font-size` wird durch ein `CSSMathMax`-Objekt dargestellt, das die ursprünglichen Operanden der `max()`-Funktion anzeigt.

{{EmbedLiveSample("`max()` representations", 300, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
