---
title: Nullish coalescing-Operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Operators")}}

Der **nullish coalescing (`??`)**-Operator ist ein logischer Operator, der seinen rechten Operanden zurückgibt, wenn sein linker Operand [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, und andernfalls seinen linken Operanden zurückgibt.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Syntax

```js-nolint
leftExpr ?? rightExpr
```

## Beschreibung

Der nullish coalescing-Operator kann als ein Sonderfall des [logischen OR (`||`) Operators](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) gesehen werden. Letzterer gibt den rechten Operanden zurück, wenn der linke Operand ein _beliebiger_ [falsy](/de/docs/Glossary/falsy) Wert ist, nicht nur `null` oder `undefined`. Mit anderen Worten: Wenn Sie `||` verwenden, um einem anderen Variable `foo` einen Standardwert zuzuweisen, können unerwartete Verhaltensweisen auftreten, wenn Sie einige falsy-Werte als nutzbar ansehen (z. B. `''` oder `0`). Siehe [unten](#zuweisung_eines_standardwerts_zu_einer_variablen) für mehr Beispiele.

Der nullish coalescing-Operator hat die fünftniedrigste [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), direkt niedriger als `||` und direkt höher als der [bedingte (ternäre) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Es ist nicht möglich, sowohl den AND (`&&`) als auch OR (`||`) Operator direkt mit `??` zu kombinieren. In solchen Fällen wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

Stattdessen verwenden Sie Klammern, um die Priorität explizit zu kennzeichnen:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

## Beispiele

### Verwendung des nullish coalescing-Operators

In diesem Beispiel werden wir Standardwerte bereitstellen, aber andere als `null` oder `undefined` Werte behalten.

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

### Zuweisung eines Standardwerts zu einer Variablen

Früher war ein gängiges Muster, um einer Variablen einen Standardwert zuzuweisen, die Verwendung des logischen OR-Operators ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";
```

Da `||` jedoch ein boolescher logischer Operator ist, wurde der linke Operand für die Bewertung in einen Booleschen Wert umgewandelt und jeder _falsy_ Wert (einschließlich `0`, `''`, `NaN`, `false`, etc.) wurde nicht zurückgegeben. Dieses Verhalten kann unerwartete Konsequenzen verursachen, wenn Sie `0`, `''` oder `NaN` als gültige Werte betrachten.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

Der nullish coalescing-Operator vermeidet dieses Problem, indem er nur den zweiten Operanden zurückgibt, wenn der erste entweder `null` oder `undefined` ist (aber keine anderen falsy-Werte):

```js
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Kurzschlusslogik

Wie die logischen 'OR'- und 'AND'-Operatoren wird der rechte Ausdruck nicht ausgewertet, wenn der linke Ausdruck weder `null` noch `undefined` ist.

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

Der nullish coalescing-Operator behandelt `undefined` und `null` als spezifische Werte. Dies tut auch der [optionale Verkettungsoperator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), der nützlich ist, um auf eine Eigenschaft eines Objekts zuzugreifen, das `null` oder `undefined` sein kann. Durch die Kombination dieser beiden Operatoren können Sie sicher auf eine Eigenschaft eines Objekts zugreifen, das nullish sein kann, und einen Standardwert bereitstellen, falls dies der Fall ist.

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

- [Nullish coalescing-Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logisches OR (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
