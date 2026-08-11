---
title: "CSSMathProduct: CSSMathProduct() Konstruktor"
short-title: CSSMathProduct()
slug: Web/API/CSSMathProduct/CSSMathProduct
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Der **`CSSMathProduct()`** Konstruktor erstellt ein neues [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct)-Objekt, das das Produkt der übergebenen Argumente repräsentiert.

Numerische Argumente werden in [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekte mit der Einheit `"number"` umgewandelt.
Alle Argumente werden als separate Elemente in der [`values`](/de/docs/Web/API/CSSMathProduct/values)-Eigenschaft gespeichert.

## Syntax

```js-nolint
new CSSMathProduct(arg1)
new CSSMathProduct(arg1, arg2)
new CSSMathProduct(arg1, arg2, /* …, */ argN)
```

### Parameter

- `arg1`, …, `argN`
  - : Eine oder mehrere Zahlen oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekte.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Argumente übergeben werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Typen von `arg1`, …, `argN` nicht zu einem Produkt kombiniert werden können.
    Das ist selten: Das Multiplizieren von Werten unterschiedlicher Einheiten (z. B. eine Länge mit einer Zeit) ist erlaubt und erzeugt einen zusammengesetzten Typ.

## Beispiele

### Einfache Verwendung

Der folgende Code erstellt eine `CSSMathProduct`-Instanz aus zwei Werten und liest dann ihre `operator`- und `values`-Eigenschaften aus.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.operator); // 'product'
console.log(product.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Leere Argumente

Der Konstruktor löst einen `SyntaxError` aus, wenn er ohne Argumente aufgerufen wird.

```js
try {
  new CSSMathProduct();
} catch (e) {
  console.log(e instanceof DOMException); // true
  console.log(e.name); // "SyntaxError"
}
```

### Umgang mit inkompatiblen Prozentwerten

Das Multiplizieren einer Länge mit einer Zeit erzeugt einen gültigen (wenn auch ungewöhnlichen) zusammengesetzten Typ - im Gegensatz zur Addition erfordert die Multiplikation nicht, dass ihre Argumente eine gemeinsame Dimension haben.

```js
const compound = new CSSMathProduct(CSS.px(10), CSS.s(2));

console.log(compound.constructor.name); // "CSSMathProduct"
console.log(compound.toString()); // "calc(10px * 2s)"
```

Ein `TypeError` kann in einem etwas konstruierten Fall auftreten, in dem zwei oder mehr Argumente selbst zusammengesetzte Werte sind, die jeweils einen Prozentsatz mit einer unterschiedlichen Einheit mischen, und das Produkt diese nicht zu einem kompatiblen Typ auflösen kann. Im folgenden Code mischt `percentageLength` einen Prozentsatz mit einer Länge (sodass sich der Prozentsatz zu `"length"` auflöst) und `percentageAngle` mischt einen Prozentsatz mit einem Winkel (sodass sich der Prozentsatz zu `"angle"` auflöst). Das Multiplizieren dieser Werte schlägt fehl, da ihre Prozentsätze nicht zu einem gemeinsamen Typ aufgelöst werden können.

```js
const percentageLength = CSS.percent(50).add(CSS.px(10)); // percentage resolves to "length"
const percentageAngle = CSS.percent(50).add(CSS.deg(10)); // percentage resolves to "angle"

try {
  new CSSMathProduct(percentageLength, percentageAngle);
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
