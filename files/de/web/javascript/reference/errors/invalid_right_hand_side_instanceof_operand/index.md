---
title: "TypeError: ungültiger 'instanceof' Operand 'x'"
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "ungültiger 'instanceof' Operand" tritt auf, wenn das rechte Operand des [`instanceof`-Operators](/de/docs/Web/JavaScript/Reference/Operators/instanceof) nicht mit einem Konstruktorobjekt verwendet wird, d.h. einem Objekt, das eine `prototype`-Eigenschaft enthält und aufrufbar ist.

## Nachricht

```plain
TypeError: Right-hand side of 'instanceof' is not an object (V8-based)
TypeError: invalid 'instanceof' operand "x" (Firefox)
TypeError: Right hand side of instanceof is not an object (Safari)

TypeError: Right-hand side of 'instanceof' is not callable (V8-based)
TypeError: x is not a function (Firefox)
TypeError: x is not a function. (evaluating 'x instanceof y') (Safari)

TypeError: Function has non-object prototype 'undefined' in instanceof check (V8-based)
TypeError: 'prototype' property of x is not an object (Firefox)
TypeError: instanceof called on an object with an invalid prototype property. (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Der [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) erwartet, dass die rechten Operanden ein Konstruktorobjekt sind, d.h. ein Objekt, das eine `prototype`-Eigenschaft hat und aufrufbar ist. Es kann auch ein Objekt mit einer [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode sein. Dieser Fehler kann auftreten, wenn:

- Der rechte Operand kein Objekt ist.
- Der rechte Operand nicht aufrufbar ist und keine `Symbol.hasInstance`-Methode hat.
- Der rechte Operand aufrufbar ist, aber seine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft kein Objekt ist. (Zum Beispiel haben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) keine `prototype`-Eigenschaft.)

## Beispiele

### instanceof vs. typeof

```js example-bad
"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0; // TypeError: invalid 'instanceof' operand 0

function Foo() {}
const f = Foo(); // Foo() is called and returns undefined
const x = new Foo();

x instanceof f; // TypeError: invalid 'instanceof' operand f
x instanceof x; // TypeError: x is not a function
```

Um diese Fehler zu beheben, müssen Sie entweder den [`instanceof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) durch den [`typeof`-Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) ersetzen oder sicherstellen, dass Sie den Funktionsnamen anstelle des Ergebnisses seiner Auswertung verwenden.

```js example-good
typeof "test" === "string"; // true
typeof 42 === "number"; // true

function Foo() {}
const f = Foo; // Do not call Foo.
const x = new Foo();

x instanceof f; // true
x instanceof Foo; // true
```

## Siehe auch

- [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)
