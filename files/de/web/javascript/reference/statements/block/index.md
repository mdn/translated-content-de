---
title: Block Statement
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 8d538e9521d52d96f590b72101b4b50b0b259c4b
---

{{jsSidebar("Statements")}}

Eine **Blockanweisung** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntax

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : Anweisungen und Deklarationen, die innerhalb der Blockanweisung gruppiert sind.

## Beschreibung

Die Blockanweisung wird in anderen Sprachen oft als _zusammengesetzte Anweisung_ bezeichnet. Sie ermöglicht es Ihnen, mehrere Anweisungen zu verwenden, wo JavaScript nur eine Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcken ist eine gängige Praxis in JavaScript, insbesondere in Verbindung mit Kontrollflussanweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}}. Das gegenteilige Verhalten ist mit einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der Sie keine Anweisung angeben, obwohl eine erforderlich ist.

Zusätzlich können in Kombination mit block-skopierten Deklarationen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) Blöcke verhindern, dass temporäre Variablen den globalen Namensraum verschmutzen, ähnlich wie [IIFEs](/de/docs/Glossary/IIFE) es tun.

### Block-Schaltungsregeln mit var oder Funktionsdeklaration im Nicht-Strikt-Modus

Variablen, die mit `var` deklariert oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Nicht-Strikt-Modus erstellt werden, haben **keinen** Blockbereich. Variablen, die innerhalb eines Blocks eingeführt werden, sind auf die enthaltende Funktion oder das Skript beschränkt, und die Auswirkungen ihrer Setzung bestehen über den Block hinaus. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 zurück, da die `var x` Anweisung innerhalb des Blocks im selben Bereich wie die `var x` Anweisung vor dem Block ist.

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Verwenden Sie sie nicht.

### Block-Schaltungsregeln mit let, const, class oder Funktionsdeklaration im Strikt-Modus

Im Gegensatz dazu haben Bezeichner, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklariert werden, einen Blockbereich:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

Das `x = 2` ist im Bereich auf den Block beschränkt, in dem es definiert wurde.

Das Gleiche gilt für `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Beachten Sie, dass das block-skopierte `const c = 2` _keinen_ `SyntaxError: Identifier 'c' has already been declared` auslöst, weil es innerhalb des Blocks eindeutig deklariert werden kann.

Im [Strikt-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden an den Anfang des Blocks gehoben.

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

### Verwenden einer Blockanweisung als Schleifenkörper für eine for-Schleife

Eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife akzeptiert eine einzelne Anweisung als ihren Körper.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

Wenn Sie mehr als eine Anweisung in den Schleifenkörper aufnehmen möchten, können Sie diese zu einer Blockanweisung gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwenden einer Blockanweisung zur Datenkapselung

`let`- und `const`-Deklarationen sind auf den enthaltenden Block beschränkt. Dies ermöglicht es Ihnen, Daten vor dem globalen Bereich zu verbergen, ohne sie in eine Funktion einzuwrapen.

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
