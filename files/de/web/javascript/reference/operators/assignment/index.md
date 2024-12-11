---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: 3e80e8e180ff39d8b473af2fcfd66e3400f588bc
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, der der zugewiesene Wert ist. Dies ermöglicht das Ketten mehrerer Zuweisungen, um einen einzelnen Wert an mehrere Variablen zuzuweisen.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

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
  - : Wird im Strict-Modus ausgelöst, wenn einem nicht im Scope deklarierten Identifier ein Wert zugewiesen wird.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einer [Eigenschaft, die nicht modifizierbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties) ein Wert zugewiesen wird.

## Beschreibung

Der Zuweisungsoperator ist völlig anders als das Gleichheitszeichen (`=`), das als syntaktischer Trennzeichen an anderen Stellen verwendet wird, einschließlich:

- Initialisierer von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen
- Standardwerte der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierer von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

All diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass, wenn Sie mehrere Gleichheitszeichen hintereinander verketten:

```js-nolint
const x = y = 5;
```

Dies entspricht:

```js
const x = (y = 5);
```

Was bedeutet, dass `y` eine bereits bestehende Variable sein muss, und `x` eine neu deklarierte `const` Variable ist. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des `y = 5` Ausdrucks initialisiert, der ebenfalls `5` ist. Wenn `y` keine bereits bestehende Variable ist, wird eine globale Variable `y` im [Nicht-Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit erstellt oder ein {{jsxref("ReferenceError")}} wird im Strict-Modus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wird zum Wert der rechten Seite ausgewertet, sodass Sie den Wert protokollieren und gleichzeitig einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Unqualifizierte Identifier-Zuweisung

Das globale Objekt steht an der Spitze der Scope-Kette. Bei dem Versuch, einen Namen in einen Wert aufzulösen, wird die Scope-Kette durchsucht. Dies bedeutet, dass Eigenschaften des globalen Objekts bequem von jedem Scope aus sichtbar sind, ohne dass die Namen mit `globalThis.`, `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Das globale Objekt wird schließlich nach unqualifizierten Identifikatoren durchsucht. Sie müssen nicht `globalThis.String` eingeben; Sie können einfach das unqualifizierte `String` eingeben. Um dieses Feature konzeptionell konsistenter zu gestalten, geht man bei der Zuweisung an unqualifizierte Identifikatoren davon aus, dass Sie eine Eigenschaft mit diesem Namen im globalen Objekt erstellen möchten (ohne `globalThis.`), wenn im Scope keine gleichnamige Variable deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung an einen unqualifizierten Identifier im Strict-Modus zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften im globalen Objekt zu vermeiden.

Beachten Sie, dass die obige Implikation bedeutet, dass JavaScript, entgegen weit verbreiteter Fehlinformationen, keine impliziten oder nicht deklarierten Variablen hat. Es kombiniert einfach das globale Objekt mit dem globalen Scope und ermöglicht es, das Qualifizieren des globalen Objekts bei der Eigenschaftserstellung zu unterlassen.

### Zuweisung mit Destrukturierung

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht das Zuweisen an mehrere Variablen gleichzeitig.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
