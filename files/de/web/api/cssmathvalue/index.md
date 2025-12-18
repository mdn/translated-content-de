---
title: CSSMathValue
slug: Web/API/CSSMathValue
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathValue`**-Schnittstelle des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist eine Basisklasse für Klassen, die komplexe numerische Werte darstellen.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSMathValue

Im Folgenden finden Sie eine Liste von Schnittstellen, die auf der CSSMathValue-Schnittstelle basieren.

- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)

## Instanz-Eigenschaften

- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator)
  - : Gibt den Operator an, den der aktuelle Subtyp darstellt.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Instanzmethoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

Wir erstellen ein Element mit einer {{cssxref("width")}}, die mithilfe einer {{cssxref("calc()")}}-Funktion bestimmt wird, und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static), um den `operator` auszugeben.

```html
<div>has width</div>
```

Wir weisen eine `width` mit einer Berechnung zu

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
console.log(styleMap.get("width").values[1].value); // -20
```

{{EmbedLiveSample("Examples", 120, 300)}}

Der `CSSMathValue.operator` gibt `"sum"` zurück, weil `styleMap.get("width").values[1].value );` `-20` ist: Addition einer negativen Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
