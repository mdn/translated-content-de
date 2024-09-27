---
title: Standardparameter
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

**Standardparameter für Funktionen** ermöglichen es, benannte Parameter mit Standardwerten zu initialisieren, wenn kein Wert oder `undefined` übergeben wird.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Syntax

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## Beschreibung

In JavaScript sind Funktionsparameter standardmäßig {{jsxref("undefined")}}. Es ist jedoch oft nützlich, einen anderen Standardwert festzulegen. Hier können Standardparameter hilfreich sein.

Im folgenden Beispiel wird, falls kein Wert für `b` angegeben ist, wenn `multiply` aufgerufen wird, der Wert von `b` `undefined` sein, wenn `a * b` ausgewertet wird, und `multiply` würde `NaN` zurückgeben.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

In der Vergangenheit war die allgemeine Strategie zur Festlegung von Standardwerten das Testen von Parameterwerten im Funktionskörper und das Zuweisen eines Wertes, falls sie `undefined` sind. Im folgenden Beispiel wird `b` auf `1` gesetzt, wenn `multiply` mit nur einem Argument aufgerufen wird:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Mit Standardparametern sind Überprüfungen im Funktionskörper nicht mehr erforderlich. Sie können nun `1` als Standardwert für `b` im Funktionskopf zuweisen:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Parameter werden weiterhin von links nach rechts gesetzt, wobei Standardparameter überschrieben werden, selbst wenn es später Parameter ohne Standardeinstellungen gibt.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> Der erste Standardparameter und alle danach tragen nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der Funktion bei.

Die Initialisierer der Standardparameter leben in ihrem eigenen Scope, der ein Elternteil des für den Funktionskörper erstellten Scopes ist.

Das bedeutet, dass auf frühere Parameter in den Initialisierern späterer Parameter verwiesen werden kann. Funktionen und Variablen, die im Funktionskörper deklariert sind, können jedoch nicht von den Initialisierern der Standardwerte aus referenziert werden; der Versuch, dies zu tun, wirft einen Laufzeit-{{jsxref("ReferenceError")}}. Dies schließt auch Variablen ein, die mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) im Funktionskörper deklariert sind.

Beispielsweise wird die folgende Funktion einen `ReferenceError` werfen, wenn sie aufgerufen wird, da der Standardparameterwert keinen Zugriff auf den Kinderscope des Funktionskörpers hat:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

Diese Funktion wird den Wert des _Parameters_ `a` ausgeben, da die Variable `var a` nur an die Spitze des für den Funktionskörper erstellten Scopes gehoben wird, nicht an den für die Parameterliste erstellten Eltern-Scope, sodass ihr Wert für `b` nicht sichtbar ist.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

Der Standardparameter erlaubt jeglichen Ausdruck, aber Sie können keine {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwenden, die die Auswertung des Standardausdrucks pausieren würden. Der Parameter muss _synchron_ initialisiert werden.

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> Da der Standardparameter ausgewertet wird, wenn die Funktion aufgerufen wird, nicht wenn die Funktion definiert wird, hängt die Gültigkeit der `await`- und `yield`-Operatoren von der Funktion selbst ab, nicht von der umgebenden Funktion. Beispielsweise wird, wenn die aktuelle Funktion nicht `async` ist, `await` als Bezeichner geparst und folgt den normalen [Bezeichnersyntax-Regeln](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), selbst wenn diese Funktion in einer `async`-Funktion verschachtelt ist.

## Beispiele

### Übergeben von undefined vs. anderen falsy-Werten

Im zweiten Aufruf in diesem Beispiel, selbst wenn das erste Argument explizit auf `undefined` gesetzt ist (jedoch nicht `null` oder andere [falsy](/de/docs/Glossary/falsy)-Werte), bleibt der Wert des `num`-Arguments der Standardwert.

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

Das Standardargument wird zur _Aufrufzeit_ ausgewertet. Im Gegensatz zu Python (zum Beispiel) wird bei jedem Aufruf der Funktion ein neues Objekt erstellt.

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

### Frühere Parameter stehen späteren Standardparametern zur Verfügung

Früher (links) definierte Parameter stehen späteren Standardparametern zur Verfügung:

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

Diese Funktionalität kann so approximiert werden, was zeigt, wie viele Randfälle gehandhabt werden:

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

Sie können die Standardwertzuweisung mit der [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Syntax verwenden.

Eine übliche Methode, dies zu tun, ist das Setzen eines leeren Objekts/Arrays als Standardwert für den destrukturierten Parameter; zum Beispiel: `[x = 1, y = 2] = []`. Dies ermöglicht es, nichts an die Funktion zu übergeben und dennoch diese Werte voreingestellt zu haben:

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
