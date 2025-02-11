---
title: Block-Anweisung
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Eine **Block-Anweisung** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern ("Curly Braces") begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

{{InteractiveExample("JavaScript Demo: Statement - Block", "taller")}}

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

Die Block-Anweisung wird in anderen Sprachen oft als _compound statement_ (zusammengesetzte Anweisung) bezeichnet. Sie ermöglicht die Verwendung mehrerer Anweisungen, wo JavaScript nur eine einzelne Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcken ist eine gängige Praxis in JavaScript, besonders in Verbindung mit Kontrollflussanweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}}. Das gegenteilige Verhalten ist mit einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der Sie keine Anweisung bereitstellen, obwohl eine erforderlich ist.

Darüber hinaus können Blöcke, in Kombination mit block-skopierten Deklarationen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class), temporäre Variablen daran hindern, den globalen Namensraum zu verschmutzen, ähnlich wie es {{Glossary("IIFE", "IIFEs")}} tun.

### Block-Skoping-Regeln mit var oder Funktionsdeklaration im Nicht-Strikten-Modus

Variablen, die mit `var` deklariert oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Nicht-Strikten-Modus erstellt werden, haben **keinen** Block-Scope. Variablen, die innerhalb eines Blocks eingeführt werden, sind auf die umgebende Funktion oder das Skript beschränkt, und die Auswirkungen ihres Setzens bleiben über den Block hinaus bestehen. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 aus, da die Anweisung `var x` innerhalb des Blocks im selben Scope wie die `var x`-Anweisung vor dem Block liegt.

In nicht-striktem Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken eigenartig. Vermeiden Sie es, sie zu verwenden.

### Block-Skoping-Regeln mit let, const, class oder Funktionsdeklaration im Strikten-Modus

Im Gegensatz dazu haben Identifikatoren, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklariert wurden, einen Block-Scope:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

Das `x = 2` ist im Scope auf den Block begrenzt, in dem es definiert wurde.

Das Gleiche gilt für `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Beachten Sie, dass das block-skopierte `const c = 2` **keinen** `SyntaxError: Identifier 'c' has already been declared` auslöst, da es eindeutig innerhalb des Blocks deklariert werden kann.

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden an die Spitze des Blocks "gehoben" (hoisting).

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

Wenn Sie mehr als eine Anweisung im Schleifenkörper verwenden möchten, können Sie sie in eine Block-Anweisung gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwendung einer Block-Anweisung zur Einkapselung von Daten

Deklarationen mit `let` und `const` sind auf den umgebenden Block beschränkt. Dies ermöglicht es Ihnen, Daten vor dem globalen Scope zu verbergen, ohne sie in eine Funktion einzuschließen.

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
