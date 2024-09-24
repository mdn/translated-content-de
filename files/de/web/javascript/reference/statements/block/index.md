---
title: Block-Anweisung
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 8d538e9521d52d96f590b72101b4b50b0b259c4b
---

{{jsSidebar("Statements")}}

Eine **Block-Anweisung** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern ("curly braces") begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntax

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : Anweisungen und Deklarationen, die innerhalb der Block-Anweisung gruppiert sind.

## Beschreibung

Die Block-Anweisung wird in anderen Sprachen oft als _Compound Statement_ bezeichnet. Sie ermöglicht es Ihnen, mehrere Anweisungen zu verwenden, wo JavaScript nur eine Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcken ist eine übliche Praxis in JavaScript, insbesondere in Verbindung mit Kontrollflussanweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}}. Das gegenteilige Verhalten ist mit einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der Sie keine Anweisung angeben, obwohl eine erforderlich ist.

Zusätzlich können in Kombination mit block-skopierten Deklarationen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) Blöcke verhindern, dass temporäre Variablen den globalen Namensraum verschmutzen, ähnlich wie [IIFEs](/de/docs/Glossary/IIFE).

### Block-Skopierungsregeln mit var oder Funktionsdeklaration im Nicht-Strikt-Modus

Variablen, die mit `var` deklariert oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Nicht-Strikt-Modus erstellt werden, haben **keinen** Block-Scope. Variablen, die innerhalb eines Blocks eingeführt werden, sind auf die enthaltende Funktion oder das Skript beschränkt, und die Auswirkungen ihrer Zuweisung bleiben über den Block hinaus bestehen. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 aus, da die `var x`-Anweisung innerhalb des Blocks im selben Scope wie die `var x`-Anweisung vor dem Block ist.

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Verwenden Sie sie nicht.

### Block-Skopierungsregeln mit let, const, class oder Funktionsdeklaration im Strikt-Modus

Im Gegensatz dazu haben Bezeichner, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklariert werden, Block-Scope:

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
console.log(c); // 1; wirft keinen SyntaxError
```

Beachten Sie, dass das block-skopierte `const c = 2` **keinen** `SyntaxError: Identifier 'c' has already been declared` wirft, da es eindeutig innerhalb des Blocks deklariert werden kann.

Im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden an den Anfang des Blocks gehoben.

```js
"use strict";

{
  foo(); // Protokolliert "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined
```

## Beispiele

### Verwenden einer Block-Anweisung als Körper einer for-Schleife

Eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife akzeptiert eine einzelne Anweisung als ihren Körper.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

Wenn Sie mehr als eine Anweisung im Schleifen-Körper verwenden möchten, können Sie diese in einer Block-Anweisung gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwenden einer Block-Anweisung zur Datenkapselung

`let`- und `const`-Deklarationen sind auf den enthaltenden Block begrenzt. Dies erlaubt es Ihnen, Daten aus dem globalen Scope zu verbergen, ohne sie in eine Funktion zu wickeln.

```js
let sector;
{
  // Diese Variablen sind auf diesen Block beschränkt und sind
  // nach dem Block nicht mehr zugänglich
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
