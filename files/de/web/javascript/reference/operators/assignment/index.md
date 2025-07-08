---
title: Zuweisungsoperator (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, nämlich den zugewiesenen Wert. Dies ermöglicht es, mehrere Zuweisungen zu verketten, um einen einzelnen Wert mehreren Variablen zuzuweisen.

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
  - : Ein gültiges Zuweisungsziel, einschließlich eines [Identifiers](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Property-Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destructuring-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `y`
  - : Ein Ausdruck, der den Wert spezifiziert, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict-Mode ausgelöst, wenn einem Identifier, der nicht im Geltungsbereich deklariert ist, ein Wert zugewiesen wird.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Mode ausgelöst, wenn einer [Eigenschaft, die nicht modifizierbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties), ein Wert zugewiesen wird.

## Beschreibung

Der Zuweisungsoperator unterscheidet sich völlig vom Gleichheitszeichen (`=`), das an anderen Stellen als syntaktische Trennung verwendet wird, einschließlich:

- Initialisierer von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen
- Standardwerte bei [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierer von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

All diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, daher gilt bei mehreren verketteten Gleichheitszeichen:

```js-nolint
const x = y = 5;
```

Dies ist gleichbedeutend mit:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits existierende Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des `y = 5`-Ausdrucks initialisiert, der ebenfalls `5` ist. Wenn `y` keine bereits existierende Variable ist, wird eine globale Variable `y` im [Nicht-Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit erstellt, oder ein {{jsxref("ReferenceError")}} wird im Striktmodus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu erklären, verwenden Sie:

```js
const x = 5,
  y = 5;
```

## Beispiele

### Grundlegende Zuweisung und Verkettung

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x is 10
x = y = z; // x, y and z are all 25
```

### Wert von Zuweisungsausdrücken

Der Zuweisungsausdruck selbst wird zu dem Wert auf der rechten Seite ausgewertet, sodass Sie den Wert gleichzeitig protokollieren und einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung eines nicht qualifizierten Identifiers

Das globale Objekt steht an der Spitze der Geltungsbereichskette. Beim Versuch, einen Namen in einen Wert aufzulösen, wird die Geltungsbereichskette durchsucht. Dies bedeutet, dass Eigenschaften am globalen Objekt von jedem Bereich aus bequem sichtbar sind, ohne dass die Namen mit `globalThis.` oder `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Das globale Objekt wird letztendlich nach nicht qualifizierten Identifiers durchsucht. Sie müssen nicht `globalThis.String` tippen; Sie können einfach das unqualifizierte `String` verwenden. Um diese Funktion konzeptionell konsistenter zu gestalten, geht die Zuweisung an nicht qualifizierte Identifiers davon aus, dass Sie eine Eigenschaft mit diesem Namen am globalen Objekt erstellen möchten (mit ausgelassenem `globalThis.`), wenn es keine Variable mit demselben Namen in der Geltungsbereichskette gibt.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung an einen nicht qualifizierten Identifier im Striktmodus zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften im globalen Objekt zu vermeiden.

Es ist zu beachten, dass die obige Implikation bedeutet, dass JavaScript entgegen der weit verbreiteten Fehlinformation keine impliziten oder nicht deklarierten Variablen hat. Es verwechselt lediglich das globale Objekt mit dem globalen Geltungsbereich und erlaubt es, den Qualifizierer des globalen Objekts bei der Erstellung von Eigenschaften auszulassen.

### Zuweisung mit Destructuring

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht es, mehreren Variablen gleichzeitig Werte zuzuweisen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
