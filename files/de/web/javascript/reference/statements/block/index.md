---
title: Blockanweisung
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Eine **Blockanweisung** wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt und enthält eine Liste von null oder mehr Anweisungen und Deklarationen.

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
  - : Anweisungen und Deklarationen, die innerhalb der Blockanweisung gruppiert sind.

## Beschreibung

Die Blockanweisung wird in anderen Sprachen oft als _zusammengesetzte Anweisung_ bezeichnet. Sie ermöglicht es Ihnen, mehrere Anweisungen dort zu verwenden, wo JavaScript nur eine Anweisung erwartet. Das Kombinieren von Anweisungen zu Blöcken ist eine gängige Praxis in JavaScript, insbesondere in Verbindung mit Kontrollflussanweisungen wie {{jsxref("Statements/if...else", "if...else")}} und {{jsxref("Statements/for", "for")}}. Das entgegengesetzte Verhalten ist durch die Verwendung einer [leeren Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) möglich, bei der Sie keine Anweisung bereitstellen, obwohl eine erforderlich ist.

Darüber hinaus können Blöcke in Kombination mit blockweise deklarierten Variablen wie [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) verhindern, dass temporäre Variablen den globalen Namensraum verschmutzen, ähnlich wie {{Glossary("IIFE", "IIFEs")}}.

### Block-Scope-Regeln mit var oder Funktionsdeklaration im Nicht-Strict-Modus

Variablen, die mit `var` deklariert werden oder durch [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) im Nicht-Strict-Modus erstellt werden, haben **keinen** Block-Scope. Im Block eingeführte Variablen sind im Gültigkeitsbereich der enthaltenen Funktion oder des Skripts, und die Auswirkungen ihrer Zuweisung bestehen über den Block hinaus. Zum Beispiel:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

Dies gibt 2 aus, weil die `var x`-Anweisung innerhalb des Blocks im gleichen Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block liegt.

In Nicht-Strict-Code verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Verwenden Sie sie nicht.

### Block-Scope-Regeln mit let, const, class oder Funktionsdeklaration im Strict-Modus

Im Gegensatz dazu haben Bezeichner, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) und [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) deklariert werden, Block-Scope:

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

Das `x = 2` ist im Gültigkeitsbereich auf den Block begrenzt, in dem es definiert wurde.

Das Gleiche gilt für `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```

Beachten Sie, dass das blocklokalisierte `const c = 2` _keinen_ `SyntaxError: Identifier 'c' has already been declared` auslöst, da es eindeutig innerhalb des Blocks deklariert werden kann.

Im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen innerhalb von Blöcken auf diesen Block beschränkt und werden an die Spitze des Blocks hochgehoben.

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

### Verwenden einer Blockanweisung als Körper einer for-Schleife

Eine [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife akzeptiert eine einzelne Anweisung als ihren Körper.

```js
for (let i = 0; i < 10; i++) console.log(i);
```

Wenn Sie mehr als eine Anweisung im Schleifenkörper verwenden möchten, können Sie sie in eine Blockanweisung gruppieren:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### Verwenden einer Blockanweisung zur Datenkapselung

`let`- und `const`-Deklarationen sind auf den enthaltenen Block beschränkt. Dadurch können Sie Daten vor dem globalen Gültigkeitsbereich verbergen, ohne sie in eine Funktion zu kapseln.

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

### `using`-Deklarationen in einem Block

Sie können Variablen mit {{jsxref("Statements/using", "using")}} oder {{jsxref("Statements/await_using", "await using")}} in einem Block deklarieren, was bewirkt, dass das in der Variable gespeicherte Objekt beim Verlassen des Blocks entsorgt wird. Für weitere Informationen siehe [Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management).

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
