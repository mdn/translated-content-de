---
title: CSSMathNegate
slug: Web/API/CSSMathNegate
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSMathNegate`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Negation eines [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathNegate()`](/de/docs/Web/API/CSSMathNegate/CSSMathNegate)
  - : Erstellt ein neues `CSSMathNegate`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem übergeordneten Interface [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathNegate.value`](/de/docs/Web/API/CSSMathNegate/value) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück.

## Statische Methoden

_Erbt außerdem Methoden von seinem übergeordneten Interface [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanzmethoden

_Erbt außerdem Methoden von seinem übergeordneten Interface [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

`CSSMathNegate` entspricht der Anwendung des unären Minusoperators auf einen numerischen Wert (`x` wird zu `-x`).

In der Regel erstellen Sie ein `CSSMathNegate` nicht direkt. Es entsteht durch den internen Negationsschritt, den [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) auf seine Argumente anwendet, bevor diese addiert werden: Wird ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct), [`CSSMathMin`](/de/docs/Web/API/CSSMathMin), [`CSSMathMax`](/de/docs/Web/API/CSSMathMax), [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp) oder [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) negiert, wird es in ein `CSSMathNegate` eingeschlossen.
Bei der Negation eines einfachen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (etwa einer Länge oder eines Prozentwerts) wird dagegen direkt das Vorzeichen seiner `value` geändert. Daher entsteht beim Subtrahieren einfacher Werte normalerweise kein `CSSMathNegate`.

Ein `CSSMathNegate` kann auch beim Lesen eines berechneten Werts auftreten: Beispielsweise kann [`get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) für eine Eigenschaft, die mit einem {{cssxref("calc", "calc()")}}-Ausdruck gesetzt wurde, der einen Wert subtrahiert, ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurückgeben, dessen Operanden ein `CSSMathNegate` enthalten.
Sie können es erkennen, indem Sie prüfen, ob die Eigenschaft [`operator`](/de/docs/Web/API/CSSMathValue/operator) den String `"negate"` enthält.

`CSSMathNegate` wird mit der CSS-Syntax von {{CSSXref("calc", "calc()")}} als `calc(-<value>)` serialisiert.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt aus einer Länge ein `CSSMathNegate`-Objekt und gibt anschließend den Namen des Konstruktors, `value` und die Serialisierung des Objekts (über [`toString()`](/de/docs/Web/API/CSSStyleValue/toString)) aus.

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.constructor.name); // "CSSMathNegate"
console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
console.log(negated.toString()); // "calc(-10px)"
```

Beachten Sie, dass eine einfache Zahl, die an `arg` übergeben wird, in ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt wird:

```js
const negatedNumber = new CSSMathNegate(4);

console.log(negatedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
console.log(negatedNumber.toString()); // "calc(-4)"
```

### Subtrahieren eines zusammengesetzten Werts

[`sub()`](/de/docs/Web/API/CSSNumericValue/sub) erzeugt ein `CSSMathNegate`, wenn der subtrahierte Wert selbst ein zusammengesetzter Wert ist, beispielsweise ein `CSSMathSum` statt eines einfachen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue).

Der folgende Code veranschaulicht dies.
`px` und `percent` können ohne Kenntnis der Größe des umschließenden Blocks nicht zu einem einzigen Wert kombiniert werden. Deshalb wird der Wert von `composite` als `CSSMathSum` dargestellt.
Wenn dieser Wert subtrahiert wird, wird der Wert von `composite` in ein `CSSMathNegate` eingeschlossen.

```js
const composite = CSS.px(10).add(CSS.percent(5)); // CSSMathSum: calc(10px + 5%)
const result = CSS.px(100).sub(composite);

console.log(result.constructor.name); // "CSSMathSum"
console.log(result.values[1].constructor.name); // "CSSMathNegate"
console.log(result.values[1].value); // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(result.toString()); // "calc(100px - (10px + 5%))"
```

### Parsen von `calc()`

Ein `CSSMathNegate` kann auch entstehen, wenn [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) einen {{cssxref("calc", "calc()")}}-Ausdruck parst, der sich nicht zu einem einzelnen Wert auflösen lässt.

Im folgenden Code parst [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) beispielsweise einen Wert für die Eigenschaft `width`, bei dem eine Länge von einem Prozentwert subtrahiert wird. Diese Werte können erst beim Layout kombiniert werden.
Das Ergebnis ist ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), dessen erster Wert im Array ein `CSSUnitValue` ist. Der zweite Wert ist ein `CSSMathNegate`-Objekt, das die Negation des zweiten an die Funktion `calc()` übergebenen Operanden darstellt.

```js
const width = CSSStyleValue.parse("width", "calc(50% - 10px)");

console.log(width.constructor.name); // "CSSMathSum"
console.log(width.values[0]); // CSSUnitValue {value: 50, unit: 'percent'}
console.log(width.values[1]); // CSSMathNegate {value: CSSUnitValue, operator: 'negate'}
console.log(width.values[1].value); // CSSUnitValue {value: 10, unit: "px"}

console.log(width.toString()); // "calc(50% - 10px)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`sub()`](/de/docs/Web/API/CSSNumericValue/sub)
- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert)
- [`CSSMathValue.operator`](/de/docs/Web/API/CSSMathValue/operator)
