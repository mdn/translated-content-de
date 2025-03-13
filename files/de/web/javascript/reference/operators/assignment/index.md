---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, nämlich den zugewiesenen Wert. Dies ermöglicht das Verketten mehrerer Zuweisungen, um mehreren Variablen einen einzigen Wert zuzuweisen.

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
  - : Ein gültiges Ziel für die Zuweisung, einschließlich eines [Bezeichners](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Eigenschafts-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `y`
  - : Ein Ausdruck, der den Wert angibt, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einem nicht im Geltungsbereich deklarierten Bezeichner ein Wert zugewiesen wird.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einer [Eigenschaft, die nicht modifizierbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties), ein Wert zugewiesen wird.

## Beschreibung

Der Zuweisungsoperator ist völlig anders als das Gleichheitszeichen (`=`), das als syntaktische Trennzeichen an anderen Stellen verwendet wird, einschließlich:

- Initialisierer von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen
- Standardwerte von [Destrukturierungen](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierer von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

All diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass wenn mehrere Gleichheitszeichen miteinander verkettet sind:

```js-nolint
const x = y = 5;
```

Dies entspricht:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits existierende Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des Ausdrucks `y = 5` initialisiert, welcher ebenfalls `5` ist. Wenn `y` keine bereits existierende Variable ist, wird eine globale Variable `y` im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit erstellt, oder ein {{jsxref("ReferenceError")}} wird im strikten Modus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wird auf den Wert der rechten Seite ausgewertet, sodass Sie den Wert gleichzeitig protokollieren und einer Variable zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung eines nicht qualifizierten Bezeichners

Das globale Objekt sitzt an der Spitze der Geltungsketten. Beim Versuch, einen Namen einem Wert zuzuordnen, wird die Geltungskette durchsucht. Das bedeutet, dass Eigenschaften am globalen Objekt von jedem Geltungsbereich aus bequem sichtbar sind, ohne dass die Namen mit `globalThis.` oder `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

So wird letztendlich das globale Objekt auf nicht qualifizierte Bezeichner durchsucht. Sie müssen nicht `globalThis.String` schreiben; Sie können einfach den nicht qualifizierten `String` verwenden. Um dieses Feature konzeptionell kohärenter zu machen, wird bei der Zuweisung zu nicht qualifizierten Bezeichnern angenommen, dass Sie eine Eigenschaft mit diesem Namen am globalen Objekt erstellen möchten (wobei `globalThis.` weggelassen wird), wenn im Geltungsbereich keine Variable mit demselben Namen deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung zu einem nicht qualifizierten Bezeichner im strikten Modus zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften am globalen Objekt zu vermeiden.

Beachten Sie, dass die obige Implikation bedeutet, dass JavaScript, entgegen der populären Fehlinformation, keine impliziten oder nicht deklarierten Variablen hat. Es verbindet einfach das globale Objekt mit dem globalen Geltungsbereich und ermöglicht das Weglassen des globalen Objektqualifizierers während der Erstellung von Eigenschaften.

### Zuweisung mit Destrukturierung

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht die gleichzeitige Zuweisung zu mehreren Variablen.

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
