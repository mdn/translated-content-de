---
title: Nullish Coalescing-Operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 0d97f6cee768cb4ec982839f690c832fab20f346
---

Der **nullish coalescing (`??`)** Operator ist ein logischer Operator, der seinen rechten Operanden zurückgibt, wenn sein linker Operand [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, andernfalls gibt er seinen linken Operanden zurück.

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

Der nullish coalescing Operator kann als ein Sonderfall des [logischen ODER-Operators (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) angesehen werden. Letzterer gibt den rechten Operanden zurück, wenn der linke Operand irgendeinen {{Glossary("falsy", "falsy")}} Wert hat, nicht nur `null` oder `undefined`. Mit anderen Worten, wenn Sie `||` verwenden, um einem anderen Variablen `foo` einen Standardwert zuzuweisen, könnten unerwartete Verhaltensweisen auftreten, wenn Sie einige `falsy` Werte als verwendbar betrachten (z.B. `''` oder `0`). Siehe [unten](#zuweisung_eines_standardwerts_zu_einer_variablen) für weitere Beispiele.

Der nullish coalescing Operator hat die fünfthöchste [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), direkt niedriger als `||` und direkt höher als der [Bedingungsoperator (ternär)](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Es ist nicht möglich, die AND (`&&`) oder OR-Operatoren (`||`) direkt mit `??` zu kombinieren. Ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) wird in solchen Fällen ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // raises a SyntaxError
true && undefined ?? "foo"; // raises a SyntaxError
```

Stattdessen stellen Sie Klammern bereit, um die Priorität explizit anzuzeigen:

```js example-good
(null || undefined) ?? "foo"; // returns "foo"
```

## Beispiele

### Verwendung des nullish coalescing Operators

In diesem Beispiel werden wir Standardwerte bereitstellen, aber andere als `null` oder `undefined` beibehalten.

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

Früher, wenn man einem Variablen einen Standardwert zuweisen wollte, war ein häufig verwendetes Muster, den logischen ODER-Operator ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)) zu verwenden:

```js
let foo;

// foo is never assigned any value so it is still undefined
const someDummyText = foo || "Hello!";
```

Aufgrund dessen, dass `||` ein boolescher logischer Operator ist, wurde der linke Operand für die Auswertung zu einem Boolean konvertiert, und jeder _falsy_ Wert (einschließlich `0`, `''`, `NaN`, `false`, etc.) wurde nicht zurückgegeben. Dieses Verhalten kann unerwartete Konsequenzen haben, wenn Sie `0`, `''` oder `NaN` als gültige Werte betrachten.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""
```

Der nullish coalescing Operator vermeidet diesen Fallstrick, indem er nur den zweiten Operanden zurückgibt, wenn der erste entweder `null` oder `undefined` ist (aber keine anderen falschen Werte):

```js
const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### Short-Circuiting

Wie bei den logischen Operatoren 'ODER' und 'UND' wird der Ausdruck auf der rechten Seite nicht ausgewertet, wenn die linke Seite sich als weder `null` noch `undefined` erweist.

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

Der nullish coalescing Operator behandelt `undefined` und `null` als spezifische Werte. Das Gleiche gilt für den [optionalen Verkettungsoperator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), der nützlich ist, um auf eine Eigenschaft eines Objekts zuzugreifen, das `null` oder `undefined` sein könnte. Indem man sie kombiniert, kann man sicher auf eine Eigenschaft eines Objekts zugreifen, das nullish sein könnte und einen Standardwert bereitstellen, wenn es so ist.

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

- [Nullish coalescing Zuweisung (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
