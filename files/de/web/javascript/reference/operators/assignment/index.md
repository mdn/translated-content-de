---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, nämlich den zugewiesenen Wert. Dies ermöglicht es, mehrere Zuweisungen zu verketten, um einem einzigen Wert mehreren Variablen zuzuweisen.

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## Syntax

```js-nolint
x = y
```

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, einschließlich eines [Bezeichners](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Eigenschafts-Zugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destructuring-Zuweisungs-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `y`
  - : Ein Ausdruck, der den Wert angibt, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : In Strict Mode ausgelöst, wenn ein Bezeichner zugewiesen wird, der nicht im Geltungsbereich deklariert ist.
- {{jsxref("TypeError")}}
  - : In Strict Mode ausgelöst, wenn einer [nicht änderbaren Eigenschaft](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties) zugewiesen wird.

## Beschreibung

Der Zuweisungsoperator unterscheidet sich vollständig vom Gleichheitszeichen (`=`), das in anderen Kontexten als syntaktischer Trenner verwendet wird, einschließlich:

- Initialisierer von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Deklarationen
- Vorgabewerten von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierer von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

All diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass, wenn mehrere Gleichheitszeichen zusammen verknüpft sind:

```js-nolint
const x = y = 5;
```

Das entspricht:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits vorhandene Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des Ausdrucks `y = 5` initialisiert, der ebenfalls `5` ist. Wenn `y` keine bereits vorhandene Variable ist, wird in [nicht-strengem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit eine globale Variable `y` erstellt, oder es wird in Strict Mode ein {{jsxref("ReferenceError")}} ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wertet sich auf den Wert der rechten Seite aus, sodass Sie den Wert protokollieren und gleichzeitig einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung von unqualifizierten Bezeichnern

Das globale Objekt sitzt oben in der Geltungskettenhierarchie. Wenn versucht wird, einen Namen zu einem Wert aufzulösen, wird die Geltungskette durchsucht. Dies bedeutet, dass Eigenschaften des globalen Objekts bequem von jedem Geltungsbereich aus sichtbar sind, ohne dass die Namen mit `globalThis.`, `window.` oder `global.` qualifiziert werden müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Daher wird das globale Objekt letztendlich nach unqualifizierten Bezeichnern durchsucht. Sie müssen nicht `globalThis.String` eingeben; Sie können einfach den unqualifizierten `String` eingeben. Um diese Funktion konzeptionell konsistenter zu gestalten, wird angenommen, dass mit der Zuweisung unqualifizierter Bezeichner gewünscht wird, eine Eigenschaft mit diesem Namen im globalen Objekt zu erstellen (ohne `globalThis.`), wenn keine Variable mit demselben Namen in der Geltungskettenhierarchie deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung zu einem unqualifizierten Bezeichner im Strict Mode zu einem `ReferenceError`, um die versehentliche Erstellung von Eigenschaften im globalen Objekt zu vermeiden.

Es sollte beachtet werden, dass im Gegensatz zur beliebten Fehlinformation JavaScript keine impliziten oder nicht deklarierten Variablen hat. Es kombiniert einfach das globale Objekt mit dem globalen Geltungsbereich und erlaubt das Weglassen des globalen Objektqualifikators während der Erstellung von Eigenschaften.

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
