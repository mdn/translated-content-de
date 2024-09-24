---
title: Nullish-Koaleszenz-Operator (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jsSidebar("Operators")}}

Der **Nullish-Koaleszenz-Operator (`??`)** ist ein logischer
Operator, der seinen rechten Operand zurückgibt, wenn sein linker Operand
[`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder {{jsxref("undefined")}} ist, und andernfalls seinen linken
Operand zurückgibt.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Syntax

```js-nolint
leftExpr ?? rightExpr
```

## Beschreibung

Der Nullish-Koaleszenz-Operator kann als ein Spezialfall des [logischen ODER-Operators (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR) betrachtet werden. Letzterer gibt den rechten Operand zurück, wenn der linke Operand ein beliebiger {{Glossary("falsy")}} Wert ist, nicht nur `null` oder `undefined`. Mit anderen Worten, wenn Sie `||` verwenden, um einem anderen Variablen `foo` einen Standardwert zuzuweisen, können unerwartete Verhaltensweisen auftreten, wenn Sie einige falsy Werte als brauchbar erachten (z. B. `''` oder `0`). Für weitere Beispiele siehe [unten](#zuweisung_eines_standardwertes_zu_einer_variablen).

Der Nullish-Koaleszenz-Operator hat die fünftniedrigste [Operator-Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), direkt niedriger als `||` und direkt höher als der [Bedingungs- (Ternär-) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Es ist nicht möglich, sowohl den UND- (`&&`) als auch den ODER-Operator (`||`) direkt mit `??` zu kombinieren. In solchen Fällen wird ein [Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) ausgelöst.

```js-nolint example-bad
null || undefined ?? "foo"; // löst einen SyntaxError aus
true && undefined ?? "foo"; // löst einen SyntaxError aus
```

Stattdessen sollten Sie Klammern setzen, um die Präzedenz explizit anzugeben:

```js example-good
(null || undefined) ?? "foo"; // gibt "foo" zurück
```

## Beispiele

### Verwendung des Nullish-Koaleszenz-Operators

In diesem Beispiel werden wir Standardwerte bereitstellen, aber Werte außer `null` oder `undefined` beibehalten.

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (da der leere String nicht null oder undefined ist)
console.log(valC); // 42
```

### Zuweisung eines Standardwertes zu einer Variablen

Früher war es üblich, den logischen ODER-Operator ([`||`](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)) zu verwenden, um einen Standardwert zu einer Variablen zuzuweisen:

```js
let foo;

// foo wird nie ein Wert zugewiesen, daher ist es immer noch undefined
const someDummyText = foo || "Hello!";
```

Da `||` jedoch ein boolescher logischer Operator ist, wurde der linke Operand für die Bewertung zu einem Booleschen umgewandelt, und jeder _falsy_ Wert (einschließlich `0`, `''`, `NaN`, `false`, etc.) wurde nicht zurückgegeben. Dieses Verhalten kann unerwartete Konsequenzen verursachen, wenn Sie `0`, `''` oder `NaN` als gültige Werte betrachten.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 und nicht 0
console.log(message); // "hi!" und nicht ""
```

Der Nullish-Koaleszenz-Operator vermeidet dieses Problem, indem er nur den zweiten Operand zurückgibt, wenn der erste entweder `null` oder `undefined` ist (aber keine anderen falsy Werte):

```js
const myText = ""; // Ein leerer String (der ebenfalls ein falsy Wert ist)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (da myText weder undefined noch null ist)
```

### Short-Circuit

Ähnlich wie die 'ODER'- und 'UND'-logischen Operatoren wird der rechte Ausdruck nicht ausgewertet, wenn sich der linke als weder `null` noch `undefined` erweist.

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
// Protokolliert "a was called" dann "c was called" und dann "foo"
// da a() undefined zurückgab, werden beide Ausdrücke ausgewertet

console.log(b() ?? c());
// Protokolliert "b was called" dann "false"
// da b() false (und nicht null oder undefined) zurückgab, wurde der
// rechte Ausdruck nicht ausgewertet
```

### Beziehung mit dem optionalen Verkettungsoperator (?.)

Der Nullish-Koaleszenz-Operator behandelt `undefined` und `null` als spezifische Werte. Dasselbe gilt für den [optionalen Verkettungsoperator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), der nützlich ist, um auf eine Eigenschaft eines Objekts zuzugreifen, das möglicherweise `null` oder `undefined` ist. Durch die Kombination können Sie sicher auf eine Eigenschaft eines Objekts zugreifen, das nullish sein kann, und einen Standardwert bereitstellen, falls dies der Fall ist.

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

- [Nullish-Zuweisungsoperator (`??=`)](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Optionales Verkettungsoperator (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Logisches ODER (`||`)](/de/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
