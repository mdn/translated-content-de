---
title: "TypeError: ungültiges 'instanceof' Operand 'x'"
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiges 'instanceof' Operand" tritt auf, wenn die Operanden auf der rechten Seite des [`instanceof` Operators](/de/docs/Web/JavaScript/Reference/Operators/instanceof) nicht mit einem Konstruktorobjekt verwendet werden, d.h. ein Objekt, das eine `prototype` Eigenschaft hat und aufrufbar ist.

## Meldung

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

## Was schiefgelaufen ist

Der [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) erwartet,
dass die Operanden auf der rechten Seite ein Konstruktorobjekt sind,
d.h. ein Objekt, das eine `prototype` Eigenschaft hat und aufrufbar ist. Es kann auch ein Objekt mit einer [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode sein. Dieser Fehler kann auftreten, wenn:

- Der Operand auf der rechten Seite kein Objekt ist.
- Der Operand auf der rechten Seite nicht aufrufbar ist und keine `Symbol.hasInstance` Methode hat.
- Der Operand auf der rechten Seite aufrufbar ist, aber seine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft kein Objekt ist. (Zum Beispiel haben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) keine `prototype` Eigenschaft.)

## Beispiele

### instanceof vs. typeof

```js example-bad
"test" instanceof ""; // TypeError: ungültiges 'instanceof' Operand ""
42 instanceof 0; // TypeError: ungültiges 'instanceof' Operand 0

function Foo() {}
const f = Foo(); // Foo() wird aufgerufen und gibt undefined zurück
const x = new Foo();

x instanceof f; // TypeError: ungültiges 'instanceof' Operand f
x instanceof x; // TypeError: x ist keine Funktion
```

Um diese Fehler zu beheben, müssen Sie entweder den [`instanceof` Operator](/de/docs/Web/JavaScript/Reference/Operators/instanceof) durch den [`typeof` Operator](/de/docs/Web/JavaScript/Reference/Operators/typeof) ersetzen oder sicherstellen, dass Sie den Funktionsnamen verwenden, anstatt das Ergebnis seiner Auswertung.

```js example-good
typeof "test" === "string"; // true
typeof 42 === "number"; // true

function Foo() {}
const f = Foo; // Foo nicht aufrufen.
const x = new Foo();

x instanceof f; // true
x instanceof Foo; // true
```

## Siehe auch

- [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)
