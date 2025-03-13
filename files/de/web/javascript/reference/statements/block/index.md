---
title: Block-Anweisung
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Eine **Block-Anweisung** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

{{InteractiveExample("JavaScript Demo: Block-Anweisung", "taller")}}

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

Die Block-Anweisung wird in anderen Sprachen oft als _Zusammengesetzte Anweisung_ bezeichnet. Sie ermöglicht es Ihnen, mehrere Anweisungen zu verwenden, wo JavaScript nur eine Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcken ist in JavaScript eine häufige Praxis, insbesondere wenn es in Verbindung mit Kontrollfluss-Anweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}} verwendet wird. Das gegenteilige Verhalten ist mit einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der keine Anweisung angegeben wird, obwohl eine erforderlich ist.

In Kombination mit block-skopierten Deklarationen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) können Blöcke verhindern, dass temporäre Variablen den globalen Namensraum verschmutzen, genau wie {{Glossary("IIFE", "IIFEs")}} es tun.

### Block-Skopierungsregeln mit var oder Funktionsdeklaration im Non-Strict-Modus

Variablen, die mit `var` deklariert oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Non-Strict-Modus erstellt werden, haben **keinen** Block-Scope. Variablen, die innerhalb eines Blocks eingeführt werden, sind auf die umgebende Funktion oder das Skript begrenzt, und die Auswirkungen ihrer Einstellung bestehen über den Block hinaus. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 aus, weil die `var x`-Anweisung innerhalb des Blocks im gleichen Scope wie die `var x`-Anweisung vor dem Block ist.

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Verwenden Sie sie nicht.

### Block-Skopierungsregeln mit let, const, class, oder Funktionsdeklaration im Strict-Modus

Im Gegensatz dazu haben Bezeichner, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklariert wurden, Block-Scope:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

Das `x = 2` ist im Scope auf den Block beschränkt, in dem es definiert wurde.

Dasselbe gilt für `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Beachten Sie, dass das block-skopierte `const c = 2` _keinen_ `SyntaxError: Identifier 'c' has already been declared` auslöst, weil es eindeutig innerhalb des Blocks deklariert werden kann.

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden an den Anfang des Blocks gehoben.

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

### Verwenden einer Block-Anweisung als Körper einer for-Schleife

Ein [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Loop akzeptiert eine einzelne Anweisung als seinen Körper.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

Wenn Sie mehr als eine Anweisung im Schleifenkörper verwenden möchten, können Sie sie in eine Block-Anweisung gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwenden einer Block-Anweisung zur Datenkapselung

`let`- und `const`-Deklarationen sind auf den umgebenden Block beschränkt. Dies ermöglicht es Ihnen, Daten aus dem globalen Scope zu verbergen, ohne sie in eine Funktion einzuschließen.

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
