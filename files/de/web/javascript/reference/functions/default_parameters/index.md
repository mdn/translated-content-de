---
title: Standardparameter
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

**Standardparameter für Funktionen** ermöglichen es, benannte Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.

{{InteractiveExample("JavaScript Demo: Functions Default")}}

```js interactive-example
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```

## Syntax

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## Beschreibung

In JavaScript haben Funktionsparameter standardmäßig den Wert {{jsxref("undefined")}}. Es ist jedoch oft nützlich, einen anderen Standardwert festzulegen. Hier kommen Standardparameter ins Spiel.

Im folgenden Beispiel würde der Wert von `b`, wenn kein Wert für `b` bereitgestellt wird, `undefined` sein. Bei der Berechnung von `a * b` und dem Aufruf von `multiply` würde `NaN` zurückgegeben.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

In der Vergangenheit war die allgemeine Strategie zur Festlegung von Standardwerten das Überprüfen der Parameterwerte im Funktionskörper, um einen Wert zuzuweisen, falls sie `undefined` sind. Im folgenden Beispiel wird `b` auf `1` gesetzt, wenn `multiply` nur mit einem Argument aufgerufen wird:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Mit Standardparametern sind solche Überprüfungen im Funktionskörper nicht mehr notwendig. Sie können nun `1` als Standardwert für `b` direkt im Funktionskopf zuweisen:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Parameter werden weiterhin von links nach rechts gesetzt, wobei Standardparameter überschrieben werden, selbst wenn später definierte Parameter keine Standardwerte haben.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> Der erste Standardparameter sowie alle Parameter danach tragen nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der Funktion bei.

Die Initialisierungen von Standardparametern existieren in ihrem eigenen Scope, der ein Parent-Scope für den Scope ist, der für den Funktionskörper erstellt wird.

Das bedeutet, dass frühere Parameter in den Initialisierungen späterer Parameter referenziert werden können. Allerdings können Funktionen und Variablen, die im Funktionskörper deklariert werden, nicht von Standardwert-Parametern initialisiert werden; ein solcher Versuch führt zu einem Laufzeit-{{jsxref("ReferenceError")}}. Dies gilt auch für mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variablen im Funktionskörper.

Zum Beispiel löst die folgende Funktion einen `ReferenceError` aus, wenn sie aufgerufen wird, da der Standardwertparameter keinen Zugriff auf den Child-Scope des Funktionskörpers hat:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

Diese Funktion gibt den Wert des _Parameters_ `a` aus, da die Variable `var a` nur zum oberen Bereich des Scope des Funktionskörpers gehoben wird, nicht aber zum übergeordneten Scope der Parameterliste. Ihr Wert ist daher für `b` nicht sichtbar.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

Der Standardparameter erlaubt jede Art von Ausdruck, aber Sie können weder {{jsxref("Operators/await", "await")}} noch {{jsxref("Operators/yield", "yield")}} verwenden, da diese eine Pause bei der Auswertung des Standardausdrucks erforderlich machen würden. Der Parameter muss _synchron_ initialisiert werden.

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> Der Standardparameter wird beim Funktionsaufruf ausgewertet, nicht bei deren Definition. Die Gültigkeit der Operatoren `await` und `yield` hängt daher von der Funktion selbst ab, nicht von der umgebenden Funktion. Zum Beispiel wird `await`, wenn die aktuelle Funktion nicht `async` ist, als Bezeichner geparst und folgt den normalen [Regeln für Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), selbst wenn sich diese Funktion innerhalb einer `async` Funktion befindet.

## Beispiele

### `undefined` vs. andere falsy-Werte übergeben

Im zweiten Aufruf in diesem Beispiel, selbst wenn das erste Argument explizit auf `undefined` gesetzt wird (nicht jedoch `null` oder andere {{Glossary("falsy", "falsy")}} Werte), bleibt der Wert des `num`-Arguments der Standardwert.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test(""); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)
```

### Auswertung zur Laufzeit

Das Standardargument wird zur _Laufzeit_ ausgewertet. Anders als z. B. in Python wird bei jedem Funktionsaufruf ein neues Objekt erstellt.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
```

Dies gilt sogar für Funktionen und Variablen:

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### Frühere Parameter sind für spätere Standardparameter verfügbar

Parameter, die früher (weiter links) definiert wurden, sind für später definierte Standardparameter verfügbar:

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

Diese Funktionalität kann wie folgt nachgeahmt werden, was zeigt, wie viele Randfälle behandelt werden:

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Zerlegte Parameter mit Standardwertzuweisung

Sie können Standardwertzuweisungen zusammen mit der [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden.

Eine übliche Methode hierfür ist das Setzen eines leeren Objekts/einer leeren Liste als Standardwert für den destrukturierten Parameter; zum Beispiel: `[x = 1, y = 2] = []`. So ist es möglich, der Funktion nichts zu übergeben und dennoch diese Werte vorab zu füllen:

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Works the same for objects:
function preFilledObject({ z = 3 } = {}) {
  return z;
}

preFilledObject(); // 3
preFilledObject({}); // 3
preFilledObject({ z: 2 }); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
