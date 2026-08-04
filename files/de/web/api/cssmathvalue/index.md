---
title: CSSMathValue
slug: Web/API/CSSMathValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSMathValue`**-Interface des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist eine Basisklasse für Klassen, die komplexe numerische Werte repräsentieren.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSMathValue

Im Folgenden finden Sie eine Liste von Schnittstellen, die auf der CSSMathValue-Schnittstelle basieren.

- [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)
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

## Instanz-Methoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

Wir erstellen ein Element mit einer {{cssxref("width")}}, die mit einer {{cssxref("calc()")}}-Funktion bestimmt wird, und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static), um den `operator` auszugeben.

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

`CSSMathValue.operator` gibt `"sum"` zurück, da `styleMap.get("width").values[1].value );` `-20` ist: Es wird eine negative Zahl addiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
