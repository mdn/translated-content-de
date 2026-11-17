---
title: Nullish-Coalescing-Operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **Nullish-Coalescing-Operator (`??`)** ist ein logischer Operator, der seinen rechten Operanden zurückgibt, wenn sein linker Operand [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist. Andernfalls gibt er seinen linken Operanden zurück.

{{InteractiveExample("JavaScript Demo: Nullish coalescing (??) operator")}}

```js interactive-example
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

## Syntax

```js-nolint
leftExpr ?? rightExpr
```

## Beschreibung

Der Nullish-Coalescing-Operator kann als Sonderfall des [logischen ODER-Operators (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) betrachtet werden. Dieser gibt den rechten Operanden zurück, wenn der linke Operand ein _beliebiger_ {{Glossary("falsy", "falsy")}}-Wert ist, nicht nur `null` oder `undefined`. Wenn Sie also `||` verwenden, um einer Variablen `foo` einen Standardwert zuzuweisen, kann es zu unerwartetem Verhalten kommen, falls Sie bestimmte falsy-Werte (z. B. `''` oder `0`) als gültig betrachten. Weitere Beispiele finden Sie [weiter unten](#einer_variablen_einen_standardwert_zuweisen).

Der Nullish-Coalescing-Operator hat die fünftniedrigste [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence): direkt unter `||` und direkt über dem [bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Die AND- (`&&`) und OR-Operatoren (`||`) können nicht direkt mit `??` kombiniert werden. In solchen Fällen wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

Verwenden Sie stattdessen Klammern, um die Rangfolge ausdrücklich festzulegen:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

## Beispiele

### Den Nullish-Coalescing-Operator verwenden

In diesem Beispiel werden Standardwerte bereitgestellt, während andere Werte als `null` oder `undefined` beibehalten werden.

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
```

### Einer Variablen einen Standardwert zuweisen

Früher wurde häufig der logische ODER-Operator ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)) verwendet, um einer Variablen einen Standardwert zuzuweisen:

```js
let foo;

// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";
```

Da `||` jedoch ein boolescher logischer Operator ist, wurde der linke Operand für die Auswertung in einen booleschen Wert umgewandelt. Jeder _falsy_-Wert (einschließlich `0`, `''`, `NaN`, `false` usw.) wurde deshalb nicht zurückgegeben. Dieses Verhalten kann unerwartete Folgen haben, wenn Sie `0`, `''` oder `NaN` als gültige Werte betrachten.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

Der Nullish-Coalescing-Operator vermeidet dieses Problem, indem er den zweiten Operanden nur dann zurückgibt, wenn der erste Operand `null` oder `undefined` ergibt (nicht jedoch bei anderen falsy-Werten):

```js
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Kurzschlussauswertung

Wie bei den logischen OR- und AND-Operatoren wird der rechte Ausdruck nicht ausgewertet, wenn der linke Operand weder `null` noch `undefined` ist.

```js
function a() {
  console.log("a was called");
  return undefined;
}
function b() {
  console.log("b was called");
  return false;
}
function c() {
  console.log("c was called");
  return "foo";
}

console.log(a() ?? c());
// Logs "a was called" then "c was called" and then "foo"
// as a() returned undefined so both expressions are evaluated

console.log(b() ?? c());
// Logs "b was called" then "false"
// as b() returned false (and not null or undefined), the right
// hand side expression was not evaluated
```

### Zusammenspiel mit dem Optional-Chaining-Operator (?.)

Der Nullish-Coalescing-Operator behandelt `undefined` und `null` als spezielle Werte. Das gilt auch für den [Optional-Chaining-Operator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), mit dem Sie auf eine Eigenschaft eines Objekts zugreifen können, das möglicherweise `null` oder `undefined` ist. Durch die Kombination beider Operatoren können Sie sicher auf eine Eigenschaft eines solchen Objekts zugreifen und einen Standardwert bereitstellen, falls die Eigenschaft `null` oder `undefined` ist.

```js
const foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nullish-Coalescing-Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optional Chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
