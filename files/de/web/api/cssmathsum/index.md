---
title: CSSMathSum
slug: Web/API/CSSMathSum
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSMathSum`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert das Ergebnis, das durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

Ein CSSMathSum ist der Objekttyp, der zurückgegeben wird, wenn die Methode [`StylePropertyMapReadOnly.get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) auf eine CSS-Eigenschaft angewendet wird, deren Wert mit einer {{cssxref("calc()")}}-Funktion erstellt wurde.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathSum()`](/de/docs/Web/API/CSSMathSum/CSSMathSum) {{Experimental_Inline}}
  - : Erstellt ein neues `CSSMathSum`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathSum.values`](/de/docs/Web/API/CSSMathSum/values)
  - : Gibt ein [`CSSNumericArray`](/de/docs/Web/API/CSSNumericArray)-Objekt zurück, das ein oder mehrere [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte enthält.

## Statische Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beispiele

Wir erstellen ein Element mit einer {{cssxref("width")}}, die unter Verwendung einer {{cssxref("calc()")}}-Funktion bestimmt wird, dann nutzen wir [`console.log()`](/de/docs/Web/API/console/log_static) für den `operator` und die `values`, und untersuchen die Werte etwas näher.

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

Die Spezifikation entwickelt sich noch. In der Zukunft könnten wir die letzten drei Zeilen folgendermaßen schreiben:

```js
console.log(styleMap.get("width").values[1]); // CSSMathNegate {value: CSSUnitValue, operator: "negate"}
console.log(styleMap.get("width").values[1].value); // CSSUnitValue {value: 20, unit: "px"}
console.log(styleMap.get("width").values[1].value.unit); // 'px'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
