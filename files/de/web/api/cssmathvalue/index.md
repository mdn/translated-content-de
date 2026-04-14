---
title: CSSMathValue
slug: Web/API/CSSMathValue
l10n:
  sourceCommit: 8446f51f9a446af6a9ed878ff8f9515d60d28ed5
---

{{APIRef("CSS Typed Object Model API")}}

Das **`CSSMathValue`**-Interface des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist eine Basisklasse für Klassen, die komplexe numerische Werte repräsentieren.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSMathValue

Im Folgenden ist eine Liste von Schnittstellen aufgeführt, die auf der CSSMathValue-Schnittstelle basieren.

- [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)
- [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)

## Instanz-Eigenschaften

- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator)
  - : Gibt den Operator an, den der aktuelle Subtyp repräsentiert.

## Statische Methoden

_Das Interface kann auch Methoden von seinem Eltern-Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Instanz-Methoden

_Das Interface kann auch Methoden von seinem Eltern-Interface, [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), erben._

## Beispiele

Wir erstellen ein Element mit einer {{cssxref("width")}}, die mit einer {{cssxref("calc()")}}-Funktion bestimmt wird, und verwenden dann [`console.log()`](/de/docs/Web/API/console/log_static) für den `operator`.

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

Die `CSSMathValue.operator` gibt `"sum"` zurück, weil `styleMap.get("width").values[1].value );` `-20` ist: das Hinzufügen einer negativen Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
