---
title: Block-Anweisung
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Block-Anweisung** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

{{InteractiveExample("JavaScript Demo: Block statement", "taller")}}

```js interactive-example
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1
```

## Syntax

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : Anweisungen und Deklarationen, die innerhalb der Block-Anweisung gruppiert sind.

## Beschreibung

Die Block-Anweisung wird in anderen Sprachen oft als _zusammengesetzte Anweisung_ bezeichnet. Sie ermöglicht die Verwendung mehrerer Anweisungen, wo JavaScript nur eine Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcke ist eine gängige Praxis in JavaScript, insbesondere im Zusammenhang mit Kontrollflussanweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}}. Das entgegengesetzte Verhalten ist mit einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der Sie keine Anweisung angeben, obwohl eine erforderlich ist.

In Kombination mit blockbezogenen Deklarationen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) können Blöcke verhindern, dass temporäre Variablen den globalen Namensraum verschmutzen, ähnlich wie {{Glossary("IIFE", "IIFEs")}}.

### Block-Scope-Regeln mit var oder Funktionsdeklaration im Nicht-Strikt-Modus

Variablen, die mit `var` deklariert oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Nicht-Strikt-Modus erstellt wurden, haben **keinen** Block-Scope. Variablen, die innerhalb eines Blocks eingeführt werden, sind in der Funktion oder im Skript, das den Block enthält, lokal, und die Auswirkungen ihrer Einstellung bestehen über den Block hinaus. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 aus, da die `var x`-Anweisung innerhalb des Blocks im selben Scope wie die `var x`-Anweisung vor dem Block ist.

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Verwenden Sie sie nicht.

### Block-Scope-Regeln mit let, const, class oder Funktionsdeklaration im Strikt-Modus

Im Gegensatz dazu haben Bezeichner, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklariert wurden, einen Block-Scope:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

Das `x = 2` ist im Scope auf den Block beschränkt, in dem es definiert wurde.

Gleiches gilt für `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Beachten Sie, dass das block-gebundene `const c = 2` **keinen** `SyntaxError: Identifier 'c' has already been declared` auslöst, da es innerhalb des Blocks eindeutig deklariert werden kann.

Im [Striktmodus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden an den Anfang des Blocks hochgezogen.

```js
"use strict";

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined
```

## Beispiele

### Verwendung einer Block-Anweisung als Körper einer for-Schleife

Eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife akzeptiert eine einzelne Anweisung als ihren Körper.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

Wenn Sie mehr als eine Anweisung im Schleifenkörper verwenden möchten, können Sie sie in einer Block-Anweisung gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwendung einer Block-Anweisung zur Datenkapselung

`let`- und `const`-Deklarationen sind auf den umschließenden Block beschränkt. Dies ermöglicht es, Daten vor dem globalen Scope zu verbergen, ohne sie in eine Funktion zu verpacken.

```js
let sector;
{
  // These variables are scoped to this block and are not
  // accessible after the block
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle * radius,
  };
}
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
