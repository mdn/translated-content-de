---
title: CSSMathNegate
slug: Web/API/CSSMathNegate
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSMathNegate`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die Negation eines [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathNegate()`](/de/docs/Web/API/CSSMathNegate/CSSMathNegate)
  - : Erstellt ein neues `CSSMathNegate`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathNegate.value`](/de/docs/Web/API/CSSMathNegate/value) {{ReadOnlyInline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück.

## Statische Methoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanz-Methoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beschreibung

`CSSMathNegate` entspricht der Anwendung des unären Minus auf einen numerischen Wert (`x` wird zu `-x`).

In der Regel werden Sie `CSSMathNegate` nicht direkt konstruieren.
Es wird durch den internen Negationsschritt erzeugt, den [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) auf seine Argumente anwendet, bevor sie addiert werden: Das Negieren eines [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct), [`CSSMathMin`](/de/docs/Web/API/CSSMathMin), [`CSSMathMax`](/de/docs/Web/API/CSSMathMax), [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp) oder [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) umhüllt es in einem `CSSMathNegate`.
Das Negieren eines einfachen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) (einer Länge, eines Prozentsatzes usw.) kehrt stattdessen direkt das Vorzeichen seines `value` um, sodass das Subtrahieren einfacher Werte normalerweise kein `CSSMathNegate` erzeugt.

Ein `CSSMathNegate` kann auch erscheinen, wenn ein berechneter Wert gelesen wird: Zum Beispiel gibt [`get()`](/de/docs/Web/API/StylePropertyMapReadOnly/get) auf einer Eigenschaft, die mit einem {{cssxref("calc", "calc()")}}-Ausdruck gesetzt wurde, der einen Wert subtrahiert, einen [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) zurück, dessen Operanden ein `CSSMathNegate` enthalten können.
Sie können es identifizieren, indem Sie die [`operator`](/de/docs/Web/API/CSSMathValue/operator)-Eigenschaft auf die Zeichenkette `"negate"` überprüfen.

`CSSMathNegate` serialisiert sich unter Verwendung der CSS {{CSSXref("calc", "calc()")}}-Syntax als `calc(-<value>)`.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathNegate`-Objekt aus einer Länge, und protokolliert dann den Namen des Konstruktors, `value` und die Serialisierung des Objekts (aus [`toString()`](/de/docs/Web/API/CSSStyleValue/toString)).

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.constructor.name); // "CSSMathNegate"
console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
console.log(negated.toString()); // "calc(-10px)"
```

Beachten Sie, dass, wenn eine einfache Zahl an `arg` übergeben wird, `value` zu einem [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` korrigiert wird:

```js
const negatedNumber = new CSSMathNegate(4);

console.log(negatedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
console.log(negatedNumber.toString()); // "calc(-4)"
```

### Subtrahieren eines zusammengesetzten Wertes

[`sub()`](/de/docs/Web/API/CSSNumericValue/sub) erzeugt ein `CSSMathNegate`, wenn der subtrahierte Wert selbst ein zusammengesetzter Wert ist, wie z. B. ein `CSSMathSum` (anstatt eines einfachen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)).

Dies wird durch den folgenden Code demonstriert. Die `px` und `percent` können ohne Kenntnis der Größe des umgebenden Blocks nicht in einen einzigen Wert kombiniert werden, daher wird der Wert von `composite` als `CSSMathSum` dargestellt.
Wenn dieser Wert subtrahiert wird, wird der Wert von `composite` in einem `CSSMathNegate` umhüllt.

```js
const composite = CSS.px(10).add(CSS.percent(5)); // CSSMathSum: calc(10px + 5%)
const result = CSS.px(100).sub(composite);

console.log(result.constructor.name); // "CSSMathSum"
console.log(result.values[1].constructor.name); // "CSSMathNegate"
console.log(result.values[1].value); // CSSMathSum {values: CSSNumericArray, operator: "sum"}
console.log(result.toString()); // "calc(100px - (10px + 5%))"
```

### Parsen von `calc()`

Ein `CSSMathNegate` kann auch erstellt werden, wenn [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) verwendet wird, um einen {{cssxref("calc", "calc()")}}-Ausdruck zu parsen, der nicht zu einem einzelnen Wert aufgelöst werden kann.

Zum Beispiel wird im folgenden Code [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static) verwendet, um einen Wert für die `width`-Eigenschaft zu parsen, der eine Länge von einem Prozentsatz subtrahiert (die erst beim Layout kombiniert werden können).
Das Ergebnis ist ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), bei dem der erste Wert im Array ein `CSSUnitValue` ist und der zweite Wert ein `CSSMathNegate`-Objekt, das die Negation des zweiten an die `calc()`-Funktion übergebenen Operanden darstellt.

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
