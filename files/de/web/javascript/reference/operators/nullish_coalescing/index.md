---
title: Nullish Koaleszenzoperator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **nullish Koaleszenzoperator (`??`)** ist ein logischer Operator, der seinen rechten Operand zurückgibt, wenn sein linker Operand [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, und andernfalls seinen linken Operand zurückgibt.

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

Der nullish Koaleszenzoperator kann als Sonderfall des [logischen ODER-Operators (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) angesehen werden. Letzterer gibt den rechten Operand zurück, wenn der linke Operand _einen_ {{Glossary("falsy", "falsy")}} Wert hat, nicht nur `null` oder `undefined`. Mit anderen Worten, wenn Sie `||` verwenden, um einem anderen Variable `foo` einen Standardwert zuzuweisen, könnten Sie unerwartete Verhaltensweisen erleben, wenn Sie einige falsy Werte als nutzbar betrachten (z.B. `''` oder `0`). Siehe [unten](#einem_variable_einen_standardwert_zuweisen) für mehr Beispiele.

Der nullish Koaleszenzoperator hat die fünfthöchste [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), direkt niedriger als `||` und direkt höher als der [bedingte (ternäre) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Es ist nicht möglich, sowohl die UND-Operatoren (`&&`) als auch die ODER-Operatoren (`||`) direkt mit `??` zu kombinieren. In solchen Fällen wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

Stattdessen geben Sie Klammern an, um die Priorität explizit zu kennzeichnen:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

## Beispiele

### Verwendung des nullish Koaleszenzoperators

In diesem Beispiel werden wir Standardwerte bereitstellen, aber andere Werte als `null` oder `undefined` behalten.

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

### Einem Variable einen Standardwert zuweisen

Früher, wenn man einem Variable einen Standardwert zuweisen wollte, war es üblich, den logischen ODER-Operator ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)) zu verwenden:

```js
let foo;

// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";
```

Da `||` jedoch ein boolescher logischer Operator ist, wurde der linke Operand für die Auswertung zu einem Booleschen Wert gezwungen und jeder _falsy_ Wert (einschließlich `0`, `''`, `NaN`, `false`, etc.) wurde nicht zurückgegeben. Dieses Verhalten kann unerwartete Folgen haben, wenn Sie `0`, `''` oder `NaN` als gültige Werte betrachten.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

Der nullish Koaleszenzoperator vermeidet diese Falle, indem er nur den zweiten Operand zurückgibt, wenn der erste entweder `null` oder `undefined` ist (aber keine anderen falsy Werte):

```js
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Kurzschlusslogik

Wie die logischen 'ODER'- und 'UND'-Operatoren wird der rechte Ausdruck nicht ausgewertet, wenn der linke Operand weder `null` noch `undefined` ist.

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

### Beziehung zum optionalen Verkettungsoperator (?.)

Der nullish Koaleszenzoperator behandelt `undefined` und `null` als spezifische Werte. Das tut auch der [optionale Verkettungsoperator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), der nützlich ist, um auf eine Eigenschaft eines Objekts zuzugreifen, das möglicherweise `null` oder `undefined` ist. Indem man sie kombiniert, kann man sicher auf eine Eigenschaft eines Objektes zugreifen, das möglicherweise nullish ist und einen Standardwert bereitstellen, falls dies der Fall ist.

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

- [Nullish-Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
