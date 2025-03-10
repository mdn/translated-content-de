---
title: Zuweisung (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Operators")}}

Der **Zuweisungsoperator (`=`)** wird verwendet, um einer Variablen oder einer Eigenschaft einen Wert zuzuweisen. Der Zuweisungsausdruck selbst hat einen Wert, der der zugewiesene Wert ist. Dies ermöglicht, dass mehrere Zuweisungen verkettet werden können, um einen einzelnen Wert mehreren Variablen zuzuweisen.

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
  - : Ein gültiges Zuweisungsziel, einschließlich eines [Identifiers](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder eines [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Es kann auch ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `y`
  - : Ein Ausdruck, der den Wert angibt, der `x` zugewiesen werden soll.

### Rückgabewert

Der Wert von `y`.

### Ausnahmen

- {{jsxref("ReferenceError")}}
  - : Wird im Strict Mode ausgelöst, wenn versucht wird, einem Identifier, der im Gültigkeitsbereich nicht deklariert ist, einen Wert zuzuweisen.
- {{jsxref("TypeError")}}
  - : Wird im Strict Mode ausgelöst, wenn versucht wird, einer [Eigenschaft, die nicht veränderbar ist](/de/docs/Web/JavaScript/Reference/Strict_mode#failing_to_assign_to_object_properties), einen Wert zuzuweisen.

## Beschreibung

Der Zuweisungsoperator ist völlig anders als das Gleichheitszeichen (`=`), das an anderen Stellen als syntaktischer Trenner verwendet wird, einschließlich:

- Initialisierer von [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-, [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)- und [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Deklarationen
- Standardwerte bei [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#default_value)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Initialisierer von [Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

Alle diese Stellen akzeptieren einen Zuweisungsausdruck auf der rechten Seite des `=`, sodass, wenn Sie mehrere Gleichheitszeichen zusammen verkettet haben:

```js-nolint
const x = y = 5;
```

Dies ist gleichbedeutend mit:

```js
const x = (y = 5);
```

Das bedeutet, `y` muss eine bereits existierende Variable sein, und `x` ist eine neu deklarierte `const`-Variable. `y` wird der Wert `5` zugewiesen, und `x` wird mit dem Wert des Ausdrucks `y = 5` initialisiert, welcher ebenfalls `5` ist. Wenn `y` keine bereits existierende Variable ist, wird in [nicht-striktem Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) implizit eine globale Variable `y` erstellt, oder ein {{jsxref("ReferenceError")}} wird im strikten Modus ausgelöst. Um zwei Variablen innerhalb derselben Deklaration zu deklarieren, verwenden Sie:

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

Der Zuweisungsausdruck selbst wertet sich zu dem Wert der rechten Seite aus, sodass Sie den Wert protokollieren und gleichzeitig einer Variablen zuweisen können.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Zuweisung von nicht qualifizierten Identifikatoren

Das globale Objekt befindet sich an der Spitze der Gültigkeitsbereichskette. Beim Versuch, einen Namen zu einem Wert aufzulösen, wird die Gültigkeitsbereichskette durchsucht. Dies bedeutet, dass Eigenschaften des globalen Objekts bequem aus jedem Gültigkeitsbereich sichtbar sind, ohne die Namen mit `globalThis.`, `window.` oder `global.` qualifizieren zu müssen.

Da das globale Objekt eine `String`-Eigenschaft hat (`Object.hasOwn(globalThis, "String")`), können Sie den folgenden Code verwenden:

```js
function foo() {
  String("s"); // The function `String` is globally available
}
```

Das globale Objekt wird also letztendlich nach nicht qualifizierten Identifikatoren durchsucht. Sie müssen `globalThis.String` nicht eingeben; Sie können einfach das nicht qualifizierte `String` eingeben. Um diese Funktion konzeptionell konsistenter zu gestalten, nimmt die Zuweisung zu nicht qualifizierten Identifikatoren an, dass Sie eine Eigenschaft mit diesem Namen auf dem globalen Objekt erstellen möchten (mit `globalThis.` weggelassen), wenn keine Variable mit demselben Namen in der Gültigkeitsbereichskette deklariert ist.

```js
foo = "f"; // In non-strict mode, assumes you want to create a property named `foo` on the global object
Object.hasOwn(globalThis, "foo"); // true
```

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) führt die Zuweisung zu einem nicht qualifizierten Identifikator im strikten Modus zu einem `ReferenceError`, um das versehentliche Erstellen von Eigenschaften auf dem globalen Objekt zu vermeiden.

Beachten Sie, dass dies bedeutet, dass JavaScript im Gegensatz zu populären Falschinformationen keine impliziten oder nicht deklarierten Variablen hat. Es verbindet nur das globale Objekt mit dem globalen Gültigkeitsbereich und erlaubt das Weglassen des globalen Objekts bei der Erstellung von Eigenschaften.

### Zuweisung mit Destrukturierung

Die linke Seite kann auch ein Zuweisungsmuster sein. Dies ermöglicht, mehreren Variablen gleichzeitig Werte zuzuweisen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)
