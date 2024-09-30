---
title: "TypeError: kann den 'in'-Operator nicht verwenden, um nach 'x' in 'y' zu suchen"
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "right-hand side of 'in' should be an object" tritt auf, wenn der
[`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in)
verwendet wurde, um in Zeichenfolgen, Zahlen oder anderen primitiven Typen zu suchen. Er kann nur
verwendet werden, um zu prüfen, ob eine Eigenschaft in einem Objekt vorhanden ist.

## Meldung

```plain
TypeError: Cannot use 'in' operator to search for 'x' in 'y' (V8-based & Firefox)
TypeError: right-hand side of 'in' should be an object, got null (Firefox)
TypeError: "y" is not an Object. (evaluating '"x" in "y"') (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) kann nur verwendet werden,
um zu prüfen, ob eine Eigenschaft in einem Objekt vorhanden ist.
Man kann nicht in Zeichenfolgen, Zahlen oder anderen primitiven Typen suchen.

## Beispiele

### Suche in Zeichenfolgen

Im Gegensatz zu anderen Programmiersprachen (z.B. Python) können Sie nicht in Zeichenfolgen mit dem
[`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) suchen.

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

Stattdessen müssen Sie {{jsxref("String.prototype.includes()")}} verwenden, zum Beispiel.

```js example-good
"Hello World".includes("Hello");
// true
```

### Der Operant darf nicht null oder undefined sein

Stellen Sie sicher, dass das Objekt, das Sie überprüfen, nicht tatsächlich [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder
{{jsxref("undefined")}} ist.

```js example-bad
const foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo' (Chrome)
// TypeError: right-hand side of 'in' should be an object, got null (Firefox)
```

Der `in`-Operator erwartet immer ein Objekt.

```js example-good
const foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Suche in Arrays

Seien Sie vorsichtig, wenn Sie den `in`-Operator verwenden, um in {{jsxref("Array")}}
Objekten zu suchen. Der `in`-Operator überprüft die Indexnummer, nicht den Wert an diesem
Index.

```js
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## Siehe auch

- [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)
