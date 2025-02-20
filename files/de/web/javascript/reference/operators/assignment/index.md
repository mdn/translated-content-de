---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einem Variablen- oder Objekteigenschaftswert eine Zuweisung zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, der dem zugewiesenen Wert entspricht. Dies ermöglicht die Verkettung mehrerer Zuweisungen, um denselben Wert mehreren Variablen zuzuweisen.

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

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
  - : Ein gültiges Zuweisungsziel, einschließlich eines [Identifiers](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destructuring Assignment Pattern](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `y`
  - : Ein Ausdruck, der den Wert angibt, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict-Modus ausgelöst, wenn ein Identifier zugewiesen wird, der im Scope nicht deklariert ist.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Modus ausgelöst, wenn eine [Eigenschaft, die nicht geändert werden kann](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties) zugewiesen wird.

## Beschreibung

Der Zuweisungsoperator unterscheidet sich vollständig vom Gleichheitszeichen (`=`), das als syntaktischer Trenner an anderen Stellen verwendet wird, einschließlich:

- Initialisierungen von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen
- Standardwerte bei [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierungen von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

Alle diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass bei mehreren verknüpften Gleichheitszeichen folgendes gilt:

```js-nolint
const x = y = 5;
```

Dies entspricht:

```js
const x = (y = 5);
```

Was bedeutet, dass `y` eine vorher existierende Variable sein muss und `x` eine neu deklarierte `const`-Variable ist. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des Ausdrucks `y = 5` initialisiert, der ebenfalls `5` ist. Falls `y` keine vorher existierende Variable ist, wird im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) eine globale Variable `y` implizit erstellt, oder im strikten Modus wird ein {{jsxref("ReferenceError")}} ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wird wie der Wert auf der rechten Seite ausgewertet, sodass Sie den Wert protokollieren und einer Variablen gleichzeitig zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung an unqualifizierte Identifier

Das globale Objekt steht an der Spitze der Scope-Kette. Beim Versuch, einen Namen einem Wert zuzuordnen, wird die Scope-Kette durchsucht. Dies bedeutet, dass Eigenschaften des globalen Objekts bequem von jedem Scope aus sichtbar sind, ohne dass die Namen mit `globalThis.`, `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Das globale Objekt wird daher schließlich nach unqualifizierten Identifiers durchsucht. Sie müssen nicht `globalThis.String` eingeben; Sie können einfach den unqualifizierten `String` eingeben. Um diese Funktion konzeptionell konsistenter zu gestalten, wird bei der Zuweisung an unqualifizierte Identifiers davon ausgegangen, dass Sie möchten, dass eine Eigenschaft mit diesem Namen auf dem globalen Objekt erstellt wird (ohne `globalThis.`), sofern keine Variable mit demselben Namen in der Scope-Kette deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung an einen unqualifizierten Identifier im Strict-Modus zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften auf dem globalen Objekt zu vermeiden.

Beachten Sie, dass dies bedeutet, dass JavaScript entgegen der weit verbreiteten Falschinformation keine impliziten oder nicht deklarierten Variablen hat. JavaScript führt stattdessen das globale Objekt mit dem globalen Scope zusammen und erlaubt es, den Qualifizierer des globalen Objekts während der Eigenschaften-Erstellung wegzulassen.

### Zuweisung mit Destructuring

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht die Zuweisung von Werten an mehrere Variablen gleichzeitig.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
