---
title: CSSMathSum
slug: Web/API/CSSMathSum
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSMathSum`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert das Ergebnis, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

Ein CSSMathSum ist der Objekttyp, der zurückgegeben wird, wenn die Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) auf eine CSS-Eigenschaft angewendet wird, deren Wert mit einer [`calc()`](/de/docs/Web/CSS/calc)-Funktion erstellt wurde.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathSum()`](/de/docs/Web/API/CSSMathSum/CSSMathSum) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathSum`-Objekt.

## Instanz-Eigenschaften

- [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values)
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Objekt zurück, das ein oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält.

## Statische Methoden

_Das Interface kann auch Methoden von seinem übergeordneten Interface [`CSSMathValue`](/de/docs/Web/API/CSSMathValue) erben._

## Instanz-Methoden

_Das Interface kann auch Methoden von seinem übergeordneten Interface [`CSSMathValue`](/de/docs/Web/API/CSSMathValue) erben._

## Beispiele

Wir erstellen ein Element mit einer [`width`](/de/docs/Web/CSS/Reference/Properties/width), die mit Hilfe einer [`calc()`](/de/docs/Web/CSS/calc)-Funktion bestimmt wird, und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static) für den `operator` und die `values`, um diese Werte etwas genauer zu betrachten.

```html
<div>has width</div>
```

Wir weisen eine `width` zu

```css
div {
  width: calc(30% - 20px);
}
```

Wir fügen das JavaScript hinzu

```js
const styleMap = document.querySelector("div").computedStyleMap();

console.log(styleMap.get("width")); // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(styleMap.get("width").operator); // 'sum'
console.log(styleMap.get("width").values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(styleMap.get("width").values[0]); // CSSUnitValue {value: 30, unit: "percent"}
console.log(styleMap.get("width").values[0].value); // 30
console.log(styleMap.get("width").values[0].unit); // 'percent'
console.log(styleMap.get("width").values[1]); // CSSUnitValue {value: -20, unit: "px"}
console.log(styleMap.get("width").values[1].value); //  -20
console.log(styleMap.get("width").values[1].unit); // 'px'
```

{{EmbedLiveSample("Examples", 120, 300)}}

Die Spezifikation entwickelt sich noch weiter. In Zukunft könnten wir die letzten drei Zeilen so schreiben:

```js
console.log(styleMap.get("width").values[1]); // CSSMathNegate {value: CSSUnitValue, operator: "negate"}
console.log(styleMap.get("width").values[1].value); // CSSUnitValue {value: 20, unit: "px"}
console.log(styleMap.get("width").values[1].value.unit); // 'px'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
