---
title: Default parameters
slug: Web/JavaScript/Reference/Functions/Default_parameters
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

**Standard-Parameter von Funktionen** erlauben es, benannte Parameter mit Standardwerten zu initialisieren, falls kein Wert oder `undefined` übergeben wird.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Syntax

```js-nolint
function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {
  // …
}
```

## Beschreibung

In JavaScript sind Funktionsparameter standardmäßig auf {{jsxref("undefined")}} gesetzt. Es ist jedoch oft nützlich, einen anderen Standardwert zu definieren. Hier können Standard-Parameter helfen.

Im folgenden Beispiel, falls kein Wert für `b` bereitgestellt wird, wenn `multiply` aufgerufen wird, wäre der Wert von `b` `undefined` bei der Bewertung von `a * b` und `multiply` würde `NaN` zurückgeben.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

In der Vergangenheit bestand die allgemeine Strategie zur Festlegung von Standardwerten darin, Parameterwerte im Funktionskörper zu überprüfen und einen Wert zuzuweisen, falls sie `undefined` sind. Im folgenden Beispiel wird `b` auf `1` gesetzt, wenn `multiply` mit nur einem Argument aufgerufen wird:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Mit Standard-Parametern sind solche Überprüfungen im Funktionskörper nicht mehr notwendig. Jetzt können Sie `1` als Standardwert für `b` im Funktionskopf zuweisen:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

Parameter werden immer noch von links nach rechts gesetzt und überschreiben Standard-Parameter, auch wenn es spätere Parameter ohne Standardwerte gibt.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

> [!NOTE]
> Der erste Standard-Parameter und alle Parameter danach tragen nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) der Funktion bei.

Die Initialisierungen der Standard-Parameter leben in ihrem eigenen Scope, der über dem Scope liegt, der für den Funktionskörper erstellt wird.

Das bedeutet, dass frühere Parameter in den Initialisierungen späterer Parameter referenziert werden können. Funktionen und Variablen, die im Funktionskörper deklariert sind, können jedoch von den Initialisierungen der Standard-Parameter nicht referenziert werden. Ein Versuch dies zu tun, führt zu einem Laufzeit-{{jsxref("ReferenceError")}}. Dies schließt auch mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variablen im Funktionskörper ein.

Zum Beispiel wird die folgende Funktion beim Aufruf einen `ReferenceError` werfen, da der Standard-Parameterwert keinen Zugriff auf den Kind-Scope des Funktionskörpers hat:

```js example-bad
function f(a = go()) {
  function go() {
    return ":P";
  }
}

f(); // ReferenceError: go is not defined
```

Diese Funktion wird den Wert des _Parameters_ `a` ausgeben, da die Variable `var a` nur an die Spitze des Scopes gehostet wird, der für den Funktionskörper erstellt wird, nicht jedoch den übergeordneten Scope, der für die Parameterliste erstellt wird, sodass ihr Wert für `b` nicht sichtbar ist.

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b();
}

f(); // undefined
f(5); // 5
```

Standard-Parameter erlauben jeden Ausdruck, aber Sie können nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwenden, die die Auswertung des Standardausdrucks pausieren würden. Der Parameter muss _synchron_ initialisiert werden.

```js example-bad
async function f(a = await Promise.resolve(1)) {
  return a;
}
```

> [!NOTE]
> Da der Standard-Parameter ausgewertet wird, wenn die Funktion aufgerufen wird und nicht, wenn die Funktion definiert wird, hängt die Gültigkeit der `await`- und `yield`-Operatoren von der Funktion selbst ab, nicht von ihrer umgebenden Funktion. Zum Beispiel wird `await` als Bezeichner geparst und folgt den normalen [Bezeichnersyntaxregeln](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), selbst wenn diese Funktion in einer `async` Funktion genestet ist.

## Beispiele

### Übergabe von undefined vs. anderen falsy Werten

Im zweiten Aufruf in diesem Beispiel, selbst wenn das erste Argument explizit auf `undefined` gesetzt wird (jedoch nicht `null` oder andere [falsy](/de/docs/Glossary/falsy) Werte), bleibt der Wert des `num`-Arguments der Standardwert.

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

Das Standard-Argument wird zur _Aufrufzeit_ ausgewertet. Anders als bei Python (zum Beispiel) wird jedes Mal, wenn die Funktion aufgerufen wird, ein neues Objekt erstellt.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], not [1, 2]
```

Das gilt auch für Funktionen und Variablen:

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

### Frühere Parameter sind für spätere Standard-Parameter verfügbar

Frühere (linksstehende) Parameter sind für spätere Standard-Parameter verfügbar:

```js
function greet(name, greeting, message = `${greeting} ${name}`) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

Diese Funktionalität kann so näherungsweise nachgebildet werden, was veranschaulicht, wie viele Randfälle behandelt werden:

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

### Destrukturierter Parameter mit Zuweisung des Standardwerts

Sie können die Zuweisung eines Standardwerts mit der [destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)-Syntax verwenden.

Eine übliche Methode, dies zu tun, ist es, ein leeres Objekt/Array als Standardwert für den destrukturierten Parameter zu setzen; zum Beispiel: `[x = 1, y = 2] = []`. Dadurch ist es möglich, nichts an die Funktion zu übergeben und dennoch diese Werte vorab zu füllen:

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
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Nullish coalescing operator (`??`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
