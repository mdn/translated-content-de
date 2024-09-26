---
title: CSSMathSum
slug: Web/API/CSSMathSum
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathSum`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert das Ergebnis, das durch den Aufruf von {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, oder {{domxref('CSSNumericValue.toSum','toSum()')}} auf {{domxref('CSSNumericValue')}} erhalten wird.

Ein CSSMathSum ist der Objekttyp, der zurückgegeben wird, wenn die Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) auf eine CSS-Eigenschaft angewendet wird, deren Wert mit einer [`calc()`](/de/docs/Web/CSS/calc) Funktion erstellt wurde.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CSSMathSum.CSSMathSum", "CSSMathSum()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathSum` Objekt.

## Instanz-Eigenschaften

- {{domxref('CSSMathSum.values')}}
  - : Gibt ein {{domxref('CSSNumericArray')}} Objekt zurück, das ein oder mehrere {{domxref('CSSNumericValue')}} Objekte enthält.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("CSSMathValue")}} erben._

## Instanz-Methoden

_Die Schnittstelle kann auch Methoden von ihrer übergeordneten Schnittstelle {{domxref("CSSMathValue")}} erben._

## Beispiele

Wir erstellen ein Element mit einer [`width`](/de/docs/Web/CSS/width), die mit einer [`calc()`](/de/docs/Web/CSS/calc) Funktion bestimmt wird, dann nutzen wir {{domxref("console/log_static", "console.log()")}}, um den `operator` und die `values` zu protokollieren und schauen uns die Werte genauer an.

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

Die Spezifikation entwickelt sich noch weiter. In Zukunft können wir die letzten drei Zeilen so schreiben:

```js
console.log(styleMap.get("width").values[1]); // CSSMathNegate {value: CSSUnitValue, operator: "negate"}
console.log(styleMap.get("width").values[1].value); // CSSUnitValue {value: 20, unit: "px"}
console.log(styleMap.get("width").values[1].value.unit); // 'px'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}