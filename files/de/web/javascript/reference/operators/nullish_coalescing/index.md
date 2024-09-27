---
title: Nullish coalescing operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Operators")}}

Der **Nullish coalescing (`??`)** Operator ist ein logischer
Operator, der seinen rechten Operand zurückgibt, wenn sein linker Operand
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, und ansonsten seinen linken
Operand zurückgibt.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Syntax

```js-nolint
leftExpr ?? rightExpr
```

## Beschreibung

Der Nullish coalescing Operator kann als Spezialfall des [logischen ODER-Operators (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) betrachtet werden. Letzterer gibt den rechten Operanden zurück, wenn der linke Operand einen beliebigen [falsy](/de/docs/Glossary/falsy) Wert hat, nicht nur `null` oder `undefined`. Mit anderen Worten, wenn Sie `||` verwenden, um einen Standardwert für eine andere Variable `foo` bereitzustellen, können unerwartete Verhalten auftreten, wenn einige falsy Werte als brauchbar angesehen werden (z.B. `''` oder `0`). Siehe [unten](#zuweisung_eines_standardwerts_zu_einer_variablen) für weitere Beispiele.

Der Nullish coalescing Operator hat die fünfthöchste [Operatorprecedence](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), direkt niedriger als `||` und direkt höher als der [bedingte (ternäre) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Es ist nicht möglich, sowohl den UND (`&&`) als auch den ODER Operator (`||`) direkt mit `??` zu kombinieren. Ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) wird in diesen Fällen ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

Stattdessen sollten Sie Klammern verwenden, um die Vorrangigheit explizit anzugeben:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

## Beispiele

### Verwendung des Nullish coalescing Operators

In diesem Beispiel stellen wir Standardwerte bereit, behalten jedoch andere Werte als `null` oder `undefined` bei.

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

Früher wurde häufig der logische ODER-Operator ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)) verwendet, um einer Variablen einen Standardwert zuzuweisen:

```js
let foo;

// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";
```

Da `||` jedoch ein boolescher logischer Operator ist, wurde der linke Operand für die Auswertung in einen booleschen Wert umgewandelt und jeder _falsy_ Wert (einschließlich `0`, `''`, `NaN`, `false`, etc.) nicht zurückgegeben. Diese Verhaltensweise kann unerwartete Konsequenzen haben, wenn `0`, `''` oder `NaN` als gültige Werte betrachtet werden.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

Der Nullish coalescing Operator umgeht dieses Problem, indem er nur den zweiten Operanden zurückgibt, wenn der erste entweder `null` oder `undefined` ist (aber keine anderen falsy-Werte):

```js
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Kurzevaluation

Wie die logischen Operatoren 'OR' und 'AND' wird der rechte Ausdruck nicht ausgewertet, wenn der linke nicht `null` oder `undefined` ist.

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

Der Nullish coalescing Operator behandelt `undefined` und `null` als spezifische Werte. Das tut auch der [optionale Verkettungsoperator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), der nützlich ist, um auf eine Eigenschaft eines Objekts zuzugreifen, das möglicherweise `null` oder `undefined` ist. In Kombination können Sie sicher auf eine Eigenschaft eines Objekts zugreifen, das möglicherweise nullish ist, und einen Standardwert bereitstellen, wenn dies der Fall ist.

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

- [Nullish coalescing assignment (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optional chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logical OR (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Default parameters](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
