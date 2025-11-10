---
title: Leere Anweisung
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Eine **leere Anweisung** wird verwendet, um keine Anweisung bereitzustellen, obwohl die
JavaScript-Syntax eine erwarten würde.

{{InteractiveExample("JavaScript Demo: Empty statement")}}

```js interactive-example
const array = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < array.length; array[i++] = 0 /* empty statement */);

console.log(array);
// Expected output: Array [0, 0, 0]
```

## Syntax

```js-nolint
;
```

## Beschreibung

Die leere Anweisung ist ein Semikolon (`;`), das anzeigt, dass keine Anweisung
ausgeführt wird, selbst wenn die JavaScript-Syntax eine erfordert.

Das gegenteilige Verhalten, bei dem Sie mehrere Anweisungen möchten, JavaScript jedoch nur eine
zulässt, ist mit einer [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) möglich,
die mehrere Anweisungen zu einer einzigen zusammenfasst.

## Beispiele

### Leere Schleifenkörper

Die leere Anweisung wird manchmal mit Schleifenanweisungen verwendet. Sehen Sie sich das folgende
Beispiel mit einem leeren Schleifenkörper an:

```js-nolint
const arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr);
// [0, 0, 0]
```

### Unbeabsichtigte Verwendung

Es ist eine gute Idee, die _beabsichtigte_ Verwendung der leeren Anweisung zu kommentieren, da sie
nicht wirklich offensichtlich von einem normalen Semikolon zu unterscheiden ist.

Im folgenden Beispiel ist die Verwendung wahrscheinlich nicht beabsichtigt:

```js-nolint example-bad
if (condition);      // Caution, this "if" does nothing!
  killTheUniverse(); // So this always gets executed!!!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block)
