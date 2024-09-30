---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: ee1599cba00284fd6af713e61e96dae61bb10287
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, der dem zugewiesenen Wert entspricht. Dies ermöglicht es, mehrere Zuweisungen zu verketten, um einen einzelnen Wert mehreren Variablen zuzuweisen.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
```

### Parameter

- `x`
  - : Ein gültiges Ziel für eine Zuweisung, einschließlich eines [Identifiers](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destructuring-Zuweisungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `y`
  - : Ein Ausdruck, der den Wert angibt, der `x` zugewiesen wird.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einem Identifier zugewiesen wird, der im Geltungsbereich nicht deklariert ist.
- {{jsxref("TypeError")}}
  - : Wird im Strict-Modus ausgelöst, wenn einer [Eigenschaft zugewiesen wird, die nicht modifizierbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties).

## Beschreibung

Der Zuweisungsoperator ist völlig anders als das Gleichheitszeichen (`=`), das an anderen Stellen als syntaktischer Separator verwendet wird, darunter:

- Initialisierungen von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen
- Standardwerte von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierungen von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

Alle diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass Sie, wenn Sie mehrere Gleichheitszeichen zusammen verketten:

```js-nolint
const x = y = 5;
```

Dies ist gleichbedeutend mit:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits vorhandene Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des `y = 5`-Ausdrucks initialisiert, der ebenfalls `5` ist. Wenn `y` keine bereits vorhandene Variable ist, wird im [Nicht-Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit eine globale Variable `y` erstellt, oder ein {{jsxref("ReferenceError")}} wird im Strict-Modus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wird zum Wert der rechten Seite ausgewertet, sodass Sie den Wert protokollieren und gleichzeitig einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung von unqualifizierten Identifikatoren

Das globale Objekt sitzt oben in der Gültigkeitsbereichskette. Wenn versucht wird, einen Namen in einen Wert aufzulösen, wird die Gültigkeitsbereichskette durchsucht. Dies bedeutet, dass Eigenschaften des globalen Objekts bequem aus jedem Gültigkeitsbereich sichtbar sind, ohne dass die Namen mit `globalThis.`, `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Das globale Objekt wird also letztendlich nach unqualifizierten Identifikatoren durchsucht. Sie müssen nicht `globalThis.String` eingeben; Sie können einfach den unqualifizierten `String` eingeben. Um diese Funktion konzeptionell konsistenter zu gestalten, wird die Zuweisung zu unqualifizierten Identifikatoren davon ausgehen, dass Sie eine Eigenschaft mit diesem Namen im globalen Objekt erstellen möchten (mit weggelassenem `globalThis.`), wenn in der Gültigkeitsbereichskette keine Variable mit demselben Namen deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung zu einem unqualifizierten Identifikator im Strict-Modus zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften im globalen Objekt zu vermeiden.

Beachten Sie, dass die obige Implikation bedeutet, dass JavaScript im Gegensatz zu populären Fehlinformationen keine impliziten oder nicht deklarierten Variablen hat. Es kombiniert lediglich das globale Objekt mit dem globalen Gültigkeitsbereich und ermöglicht das Weglassen des globalen Objektqualifikators während der Erstellung von Eigenschaften.

### Zuweisung mit Destructuring

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht die Zuweisung an mehrere Variablen gleichzeitig.

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
