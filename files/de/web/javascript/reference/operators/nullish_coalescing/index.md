---
title: Nullish coalescing-Operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Nullish coalescing (`??`)**-Operator ist ein logischer Operator, der seinen rechten Operanden zurückgibt, wenn sein linker Operand [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, und andersherum seinen linken Operanden zurückgibt.

{{InteractiveExample("JavaScript Demo: Expressions - Nullish coalescing operator")}}

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

Der Nullish coalescing-Operator kann als Spezialfall des [logischen ODER-Operators (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) betrachtet werden. Letzterer gibt den rechten Operanden zurück, wenn der linke Operand ein _beliebiger_ {{Glossary("falsy", "falsy")}} Wert ist, nicht nur `null` oder `undefined`. Mit anderen Worten: Wenn Sie `||` verwenden, um einen Standardwert für eine andere Variable `foo` anzugeben, können unerwartete Verhaltensweisen auftreten, falls Sie einige falsy Werte als nützlich betrachten (z. B. `''` oder `0`). Siehe [unten](#zuweisung_eines_standardwertes_zu_einer_variable) für weitere Beispiele.

Der Nullish coalescing-Operator hat die fünft-niedrigste [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), direkt niedriger als `||` und direkt höher als der [konjunktive (ternäre) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Es ist nicht möglich, den AND-Operator (`&&`) und den OR-Operator (`||`) direkt mit `??` zu kombinieren. In solchen Fällen wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

Stattdessen verwenden Sie Klammern, um die Priorität explizit anzugeben:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

## Beispiele

### Verwendung des Nullish coalescing-Operators

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

### Zuweisung eines Standardwertes zu einer Variable

Früher war es beim Zuweisen eines Standardwertes zu einer Variable üblich, den logischen ODER-Operator ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)) zu verwenden:

```js
let foo;

// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";
```

Aufgrund der Tatsache, dass `||` ein boolescher logischer Operator ist, wurde der linke Operand für die Auswertung in einen booleschen Wert umgewandelt, und jeder _falsy_ Wert (einschließlich `0`, `''`, `NaN`, `false`, etc.) wurde nicht zurückgegeben. Dieses Verhalten kann unerwartete Konsequenzen haben, wenn Sie `0`, `''` oder `NaN` als gültige Werte betrachten.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

Der Nullish coalescing-Operator umgeht dieses Problem, indem er nur den zweiten Operanden zurückgibt, wenn der erste entweder `null` oder `undefined` ist (aber keine anderen falsy Werte):

```js
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Short-Circuiting

Wie bei den logischen ODER- und UND-Operatoren wird der rechte Ausdruck nicht ausgewertet, wenn der linke Ausdruck weder `null` noch `undefined` ist.

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

### Beziehung zum Optional Chaining-Operator (?.)

Der Nullish coalescing-Operator behandelt `undefined` und `null` als spezifische Werte. Dies tut auch der [Optional Chaining-Operator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), der nützlich ist, um auf eine Eigenschaft eines Objekts zuzugreifen, das möglicherweise `null` oder `undefined` ist. Durch die Kombination können Sie sicher auf eine Eigenschaft eines Objekts zugreifen, das möglicherweise nullish ist, und einen Standardwert bereitstellen, falls dies der Fall ist.

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

- [Nullish coalescing-Assignment (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optional Chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Default Parameters](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
