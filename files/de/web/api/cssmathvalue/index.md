---
title: CSSMathValue
slug: Web/API/CSSMathValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSMathValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) ist eine Basisklasse für Klassen, die komplexe numerische Werte darstellen.

{{InheritanceDiagram}}

## Schnittstellen basierend auf CSSMathValue

Nachfolgend ist eine Liste von Schnittstellen basierend auf der CSSMathValue-Schnittstelle.

- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}

## Instanzeigenschaften

- {{domxref('CSSMathValue.operator')}}
  - : Gibt den Operator an, den der aktuelle Subtyp darstellt.

## Statische Methoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle erben, {{domxref("CSSNumericValue")}}._

## Instanzmethoden

_Die Schnittstelle kann auch Methoden von ihrer Elternschnittstelle erben, {{domxref("CSSNumericValue")}}._

## Beispiele

Wir erstellen ein Element mit einer [`width`](/de/docs/Web/CSS/width), die durch eine [`calc()`](/de/docs/Web/CSS/calc)-Funktion bestimmt wird, und {{domxref("console/log_static", "console.log()")}} dann den `operator`.

```html
<div>hat Breite</div>
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

Der `CSSMathValue.operator` gibt '`sum`' zurück, weil `styleMap.get('width').values[1].value );` `-20` ist: Hinzufügen einer negativen Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
