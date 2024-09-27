---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: ee1599cba00284fd6af713e61e96dae61bb10287
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, der dem zugewiesenen Wert entspricht. Dies ermöglicht das Verketten mehrerer Zuweisungen, um einem einzelnen Wert mehreren Variablen zuzuweisen.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, einschließlich eines [Bezeichners](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Property-Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Dekonstruktor-Zuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `y`
  - : Ein Ausdruck, der den Wert angibt, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einem nicht im Gültigkeitsbereich deklarierten Bezeichner zugewiesen wird.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einer [Eigenschaft zugewiesen wird, die nicht modifizierbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties).

## Beschreibung

Der Zuweisungsoperator ist völlig anders als das Gleichheitszeichen (`=`), das an anderen Stellen als syntaktischer Trenner verwendet wird, einschließlich:

- Initialisierungen von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen
- Standardwerte von [Dekonstruktoren](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierungen von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

All diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass, wenn Sie mehrere Gleichheitszeichen zusammen verketten:

```js-nolint
const x = y = 5;
```

Dies entspricht:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits bestehende Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des `y = 5`-Ausdrucks initialisiert, welcher ebenfalls `5` ist. Wenn `y` keine bereits bestehende Variable ist, wird eine globale Variable `y` im [Nicht-Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit erstellt, oder ein {{jsxref("ReferenceError")}} wird im Strikt-Modus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wird auf den Wert der rechten Seite ausgewertet, sodass Sie den Wert gleichzeitig protokollieren und einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung eines nicht qualifizierten Bezeichners

Das globale Objekt sitzt an der Spitze der Gültigkeitsbereichskette. Beim Versuch, einen Namen einem Wert zuzuordnen, wird die Gültigkeitsbereichskette durchsucht. Das bedeutet, dass Eigenschaften des globalen Objekts bequem von jedem Gültigkeitsbereich aus sichtbar sind, ohne dass die Namen mit `globalThis.` oder `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft besitzt (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Daher wird letztendlich das globale Objekt nach nicht qualifizierten Bezeichnern durchsucht. Sie müssen nicht `globalThis.String` eingeben; Sie können einfach das nicht qualifizierte `String` eingeben. Um diese Funktionalität konzeptionell konsistenter zu gestalten, wird die Zuweisung zu nicht qualifizierten Bezeichnern davon ausgehen, dass Sie eine Eigenschaft mit diesem Namen auf dem globalen Objekt erstellen möchten (ohne `globalThis.`), wenn im Gültigkeitsbereich keine Variable mit demselben Namen deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung an einen nicht qualifizierten Bezeichner im Strikt-Modus zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften auf dem globalen Objekt zu vermeiden.

Beachten Sie, dass die Implikation des Vorhergehenden ist, dass JavaScript entgegen weit verbreiteter Fehlinformationen keine impliziten oder nicht deklarierten Variablen hat. Es vermischt einfach das globale Objekt mit dem globalen Gültigkeitsbereich und erlaubt es, den Qualifizierer des globalen Objekts bei der Eigenschaftserstellung wegzulassen.

### Zuweisung mit Dekonstruktoren

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht die gleichzeitige Zuweisung an mehrere Variablen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Dekonstruktor-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Dekonstruktor-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
