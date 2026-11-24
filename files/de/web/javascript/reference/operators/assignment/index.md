---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Zuweisungsoperator (`=`)** weist einer Variablen oder einer Eigenschaft einen Wert zu. Der Zuweisungsausdruck selbst hat ebenfalls einen Wert: den zugewiesenen Wert. Dadurch lassen sich mehrere Zuweisungen verketten, um mehreren Variablen denselben Wert zuzuweisen.

{{InteractiveExample("JavaScript Demo: Assignment (=) operator")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## Syntax

```js-nolint
x = y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung), der den Wert angibt, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict Mode ausgelöst, wenn einem Bezeichner ein Wert zugewiesen wird, der im Gültigkeitsbereich nicht deklariert ist.
- {{jsxref("TypeError")}}
  - : Wird im Strict Mode ausgelöst, wenn einer [nicht veränderbaren Eigenschaft](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties) ein Wert zugewiesen wird.

## Beschreibung

Der Zuweisungsoperator unterscheidet sich grundlegend vom Gleichheitszeichen (`=`), das an anderen Stellen als syntaktisches Trennzeichen verwendet wird, darunter:

- Initialisierungen bei Deklarationen mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- Standardwerte bei der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierungen von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

An all diesen Stellen kann rechts vom `=` ein Zuweisungsausdruck stehen. Wenn Sie also mehrere Gleichheitszeichen verketten:

```js-nolint
const x = y = 5;
```

entspricht dies:

```js
const x = (y = 5);
```

Das bedeutet, dass `y` eine bereits vorhandene Variable sein muss, während `x` eine neu deklarierte `const`-Variable ist. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des Ausdrucks `y = 5` initialisiert, der ebenfalls `5` ist. Falls `y` noch nicht als Variable existiert, wird im [Nicht-Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit eine globale Variable `y` erstellt; im Strict Mode wird dagegen eine {{jsxref("ReferenceError")}} ausgelöst. Um zwei Variablen in derselben Deklaration zu deklarieren, verwenden Sie:

```js
const x = 5,
  y = 5;
```

## Beispiele

### Einfache Zuweisung und Verkettung

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
```

### Wert von Zuweisungsausdrücken

Ein Zuweisungsausdruck ergibt selbst den Wert seiner rechten Seite. Daher können Sie den Wert protokollieren und gleichzeitig einer Variablen zuweisen.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung an einen unqualifizierten Bezeichner

Das globale Objekt steht an der Spitze der Gültigkeitsbereichskette. Wenn ein Name zu einem Wert aufgelöst werden soll, wird diese Kette durchsucht. Dadurch sind Eigenschaften des globalen Objekts bequem aus jedem Gültigkeitsbereich zugänglich, ohne dass Sie den Namen mit `globalThis.`, `window.` oder `global.` qualifizieren müssen.

Da das globale Objekt eine `String`-Eigenschaft besitzt (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Das globale Objekt wird also bei der Suche nach unqualifizierten Bezeichnern letztlich ebenfalls berücksichtigt. Sie müssen nicht `globalThis.String` schreiben; der unqualifizierte Bezeichner `String` genügt. Damit dieses Verhalten konzeptionell einheitlicher ist, wird bei einer Zuweisung an einen unqualifizierten Bezeichner angenommen, dass Sie eine Eigenschaft dieses Namens auf dem globalen Objekt erstellen möchten (ohne `globalThis.` anzugeben), sofern in der Gültigkeitsbereichskette keine gleichnamige Variable deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung an einen nicht deklarierten Bezeichner zu einer `ReferenceError`. So wird verhindert, dass versehentlich Eigenschaften auf dem globalen Objekt erstellt werden.

Daraus folgt, dass JavaScript entgegen einem verbreiteten Irrtum keine impliziten oder nicht deklarierten Variablen kennt. JavaScript behandelt lediglich das globale Objekt und den globalen Gültigkeitsbereich als Einheit und erlaubt es, beim Erstellen von Eigenschaften die Qualifizierung mit dem globalen Objekt wegzulassen.

### Zuweisung mit Destrukturierung

Auf der linken Seite kann auch ein Zuweisungsmuster stehen. Damit lassen sich mehreren Variablen gleichzeitig Werte zuweisen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
