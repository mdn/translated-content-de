---
title: Block Statement
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 8d538e9521d52d96f590b72101b4b50b0b259c4b
---

{{jsSidebar("Statements")}}

Ein **Block-Statement** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntax

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : Anweisungen und Deklarationen, die innerhalb des Block-Statements gruppiert sind.

## Beschreibung

Das Block-Statement wird in anderen Sprachen oft als _compound statement_ bezeichnet. Es ermöglicht Ihnen, mehrere Anweisungen zu verwenden, wo JavaScript nur eine einzige Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcken ist eine gängige Praxis in JavaScript, insbesondere in Verbindung mit Kontrollflussanweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}}. Das gegenteilige Verhalten ist mit einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der keine Anweisung angegeben wird, obwohl eine erforderlich ist.

Zusätzlich können Blöcke in Kombination mit Block-Scoped-Deklarationen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) temporäre Variablen davon abhalten, den globalen Namensraum zu verschmutzen, ähnlich wie [IIFEs](/de/docs/Glossary/IIFE) es tun.

### Block-Scoping-Regeln mit var oder Funktionsdeklaration im Nicht-Strict-Modus

Variablen, die mit `var` deklariert oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Nicht-Strict-Modus erstellt werden, haben **keinen** Block-Gültigkeitsbereich. Variablen, die innerhalb eines Blocks eingeführt werden, sind auf die umgebende Funktion oder das Skript beschränkt, und die Auswirkungen ihrer Zuweisung bleiben auch außerhalb des Blocks bestehen. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 aus, da die `var x`-Anweisung innerhalb des Blocks im gleichen Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block ist.

In Nicht-Strict-Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Verwenden Sie sie nicht.

### Block-Scoping-Regeln mit let, const, class oder Funktionsdeklaration im Strict-Modus

Im Gegensatz dazu haben mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklarierte Bezeichner Block-Gültigkeitsbereich:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

Die `x = 2` ist auf den Block beschränkt, in dem sie definiert wurde.

Dasselbe gilt für `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Beachten Sie, dass der Block-Scoped `const c = 2` _keinen_ `SyntaxError: Identifier 'c' has already been declared` wirft, da er innerhalb des Blocks eindeutig deklariert werden kann.

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden am Anfang des Blocks hochgezogen.

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

### Verwendung eines Block-Statements als Körper einer for-Schleife

Eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife akzeptiert eine einzelne Anweisung als ihren Körper.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

Wenn Sie mehr als eine Anweisung im Schleifenkörper verwenden möchten, können Sie sie in einem Block-Statement gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwendung eines Block-Statements zur Datenkapselung

`let`- und `const`-Deklarationen sind auf den umgebenden Block beschränkt. Dies ermöglicht es Ihnen, Daten vor dem globalen Gültigkeitsbereich zu verbergen, ohne sie in eine Funktion einzubetten.

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
