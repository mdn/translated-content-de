---
title: Standardparameter
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

**Standardparameter** in Funktionen ermöglichen es, benannte Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Syntax

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## Beschreibung

In JavaScript haben Funktionsparameter standardmäßig den Wert {{jsxref("undefined")}}. Es ist jedoch oft nützlich, einen anderen Standardwert zu setzen. Genau hier können Standardparameter helfen.

Im folgenden Beispiel würde, wenn kein Wert für `b` übergeben wird, `b` den Wert `undefined` haben, wenn `a * b` ausgewertet wird, und `multiply` würde `NaN` zurückgeben.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

In der Vergangenheit bestand die generelle Strategie zur Festlegung von Standardwerten darin, die Parameterwerte im Funktionskörper zu überprüfen und einen Wert zuzuweisen, wenn sie `undefined` sind. Im folgenden Beispiel wird `b` auf `1` gesetzt, wenn `multiply` nur mit einem Argument aufgerufen wird:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Mit Standardparametern sind Überprüfungen im Funktionskörper nicht mehr notwendig. Jetzt können Sie `1` als Standardwert für `b` im Funktionskopf zuweisen:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Parameter werden weiterhin von links nach rechts gesetzt, und Standardparameter werden überschrieben, selbst wenn es spätere Parameter ohne Standardwerte gibt.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> Der erste Standardparameter und alle nachfolgenden Parameter tragen nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der Funktion bei.

Die Initialisierungen von Standardparametern befinden sich in ihrem eigenen Gültigkeitsbereich, der ein übergeordneter Gültigkeitsbereich des für den Funktionskörper erstellten Bereichs ist.

Das bedeutet, dass auf frühere Parameter in den Initialisierern späterer Parameter verwiesen werden kann. Funktionen und Variablen, die im Funktionskörper deklariert sind, können jedoch nicht von Standardwert-Parameter-Initialisierern aus referenziert werden; der Versuch, dies zu tun, führt zu einem Laufzeit-{{jsxref("ReferenceError")}}. Dies gilt auch für mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variablen im Funktionskörper.

Zum Beispiel wirft die folgende Funktion einen `ReferenceError`, wenn sie aufgerufen wird, da der Standardparameterwert keinen Zugriff auf den Kindbereich des Funktionskörpers hat:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

Diese Funktion druckt den Wert des _Parameters_ `a`, da die Variable `var a` nur an die Spitze des für den Funktionskörper erstellten Bereichs verschoben wird, nicht an den übergeordneten Bereich, der für die Parameterliste erstellt wurde, sodass ihr Wert für `b` nicht sichtbar ist.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

Der Standardparameter erlaubt jeden Ausdruck, aber Sie können nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwenden, die die Auswertung des Standardausdrucks unterbrechen würden. Der Parameter muss _synchron_ initialisiert werden.

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> Da der Standardparameter ausgewertet wird, wenn die Funktion aufgerufen wird und nicht, wenn sie definiert wird, hängt die Gültigkeit der `await`- und `yield`-Operatoren von der Funktion selbst ab und nicht von ihrer umgebenden Funktion. Zum Beispiel, wenn die aktuelle Funktion nicht `async` ist, wird `await` als Bezeichner geparst und folgt den normalen [Regeln für Bezeichnersyntax](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), selbst wenn diese Funktion in einer `async`-Funktion verschachtelt ist.

## Beispiele

### Übergeben von undefined vs. anderen Falsywerten

Im zweiten Aufruf in diesem Beispiel wird der Wert des Parameters `num` trotz der expliziten Zuweisung von `undefined` (aber nicht `null` oder anderen {{Glossary("falsy")}}-Werten) immer noch auf den Standardwert gesetzt.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num wird auf 1 gesetzt)
test(undefined); // 'number' (num wird ebenfalls auf 1 gesetzt)

// Testen mit anderen Falsywerten:
test(""); // 'string' (num wird auf '')
test(null); // 'object' (num wird auf null gesetzt)
```

### Auswertung zur Aufrufzeit

Das Standardargument wird zur _Aufrufzeit_ ausgewertet. Anders als bei Python (zum Beispiel) wird jedes Mal, wenn die Funktion aufgerufen wird, ein neues Objekt erstellt.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], nicht [1, 2]
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

### Frühere Parameter stehen für spätere Standardparameter zur Verfügung

Früher definierte Parameter (links) stehen späteren Standardparametern zur Verfügung:

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

### Destrukturierter Parameter mit Zuweisung eines Standardwerts

Sie können die Zuweisung eines Standardwerts mit der [Destrukturierungssyntax](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden.

Eine übliche Methode hierfür ist es, ein leeres Objekt/Array als Standardwert für den destrukturierten Parameter zu setzen; zum Beispiel: `[x = 1, y = 2] = []`. Dies ermöglicht es, nichts an die Funktion zu übergeben und dennoch diese Werte vorausgefüllt zu haben:

```js
function preFilledArray([x = 1, y = 2] = []) {
  return x + y;
}

preFilledArray(); // 3
preFilledArray([]); // 3
preFilledArray([2]); // 4
preFilledArray([2, 3]); // 5

// Funktioniert genauso für Objekte:
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

- [Führer zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish Coalescing Operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
