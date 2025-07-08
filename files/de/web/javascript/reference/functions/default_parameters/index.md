---
title: Standardparameter
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**Standard-Funktionsparameter** ermöglichen es, benannte Parameter mit Standardwerten zu initialisieren, falls kein Wert oder `undefined` übergeben wird.

{{InteractiveExample("JavaScript Demo: Default parameters")}}

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

In JavaScript haben Funktionsparameter standardmäßig den Wert {{jsxref("undefined")}}. Es ist jedoch oft nützlich, einen anderen Standardwert festzulegen. Hierbei helfen Standardparameter.

Im folgenden Beispiel, wenn kein Wert für `b` bereitgestellt wird, wenn `multiply` aufgerufen wird, wäre der Wert von `b` `undefined`, wenn `a * b` ausgewertet wird, und `multiply` würde `NaN` zurückgeben.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

Früher war es allgemein üblich, Standardwerte zu setzen, indem man Parameterwerte im Funktionskörper testet und ihnen einen Wert zuweist, wenn sie `undefined` sind. Im folgenden Beispiel wird `b` auf `1` gesetzt, wenn `multiply` nur mit einem Argument aufgerufen wird:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Mit Standardparametern sind Prüfungen im Funktionskörper nicht mehr notwendig. Nun kann `1` als Standardwert für `b` im Funktionskopf zugewiesen werden:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Parameter werden weiterhin von links nach rechts gesetzt und überschreiben Standardparameter selbst dann, wenn es spätere Parameter ohne Standardwerte gibt.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> Der erste Standardparameter und alle Parameter danach tragen nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der Funktion bei.

Die Initialisierer der Standardparameter befinden sich in einem eigenen Gültigkeitsbereich, der ein Elternteil des für den Funktionskörper erstellten Gültigkeitsbereichs ist.

Das bedeutet, dass frühere Parameter in den Initialisierern späterer Parameter referenziert werden können. Funktionen und Variablen, die im Funktionskörper deklariert sind, können jedoch nicht aus den Initialisierern der Standardwerte referenziert werden; ein Versuch dies zu tun führt zu einem Laufzeit-{{jsxref("ReferenceError")}}. Dies schließt auch mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variablen im Funktionskörper ein.

Zum Beispiel wird die folgende Funktion einen `ReferenceError` auslösen, wenn sie aufgerufen wird, da der Standardparameterwert keinen Zugriff auf den Kind-Gültigkeitsbereich des Funktionskörpers hat:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

Diese Funktion wird den Wert des _Parameters_ `a` ausgeben, da die Variable `var a` nur an den Anfang des für den Funktionskörper erstellten Gültigkeitsbereichs gehoben wird und ihr Wert im Elternbereich, der für die Parameterliste erstellt wird, nicht sichtbar ist.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

Der Standardparameter erlaubt jeden Ausdruck, aber es kann nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwendet werden, die die Auswertung des Standardausdrucks pausieren würden. Der Parameter muss _synchron_ initialisiert werden.

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> Da der Standardparameter ausgewertet wird, wenn die Funktion aufgerufen wird, nicht wenn die Funktion definiert wird, hängt die Gültigkeit der `await`- und `yield`-Operatoren von der Funktion selbst ab, nicht von der umgebenden Funktion. Zum Beispiel, wenn die aktuelle Funktion nicht `async` ist, wird `await` als Bezeichner geparst und folgt den normalen [Bezeichner-Syntaxregeln](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), selbst wenn diese Funktion in einer `async`-Funktion geschachtelt ist.

## Beispiele

### undefined übergeben vs. andere falsy Werte

Im zweiten Aufruf in diesem Beispiel, selbst wenn das erste Argument explizit auf `undefined` gesetzt ist (jedoch nicht `null` oder andere {{Glossary("falsy", "falsy")}} Werte), bleibt der Wert des `num`-Arguments der Standardwert.

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

### Auswertung zur Aufrufzeit

Das Standardargument wird zur _Aufrufzeit_ ausgewertet. Anders als in Python (zum Beispiel) wird jedes Mal, wenn die Funktion aufgerufen wird, ein neues Objekt erstellt.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
```

Dies gilt auch für Funktionen und Variablen:

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

Früher definierte Parameter (links) sind für spätere Standardparameter verfügbar:

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

Diese Funktionalität kann so approximiert werden, was zeigt, wie viele Randfälle behandelt werden:

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

### Destrukturierter Parameter mit Standardwertzuweisung

Sie können Standardwertzuweisungen mit der [Destrukturierungs-](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)Syntax verwenden.

Eine gängige Methode dafür ist, ein leeres Objekt/Array als Standardwert für den destrukturierten Parameter festzulegen; zum Beispiel: `[x = 1, y = 2] = []`. Dies ermöglicht es, der Funktion nichts zu übergeben und dennoch diese Werte vorausgefüllt zu haben:

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

- [Leitfaden für Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
