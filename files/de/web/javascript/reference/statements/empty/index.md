---
title: Leere Anweisung
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Eine **leere Anweisung** wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwarten würde.

{{InteractiveExample("JavaScript Demo: Empty statement")}}

```js interactive-example
const array1 = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < array1.length; array1[i++] = 0 /* empty statement */);

console.log(array1);
// Expected output: Array [0, 0, 0]
```

## Syntax

```js-nolint
;
```

## Beschreibung

Die leere Anweisung ist ein Semikolon (`;`), das anzeigt, dass keine Anweisung ausgeführt wird, selbst wenn die JavaScript-Syntax eine erfordert.

Das gegenteilige Verhalten, bei dem Sie mehrere Anweisungen möchten, JavaScript jedoch nur eine erlaubt, ist mit einer [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) möglich, die mehrere Anweisungen zu einer einzigen kombiniert.

## Beispiele

### Leerer Schleifenkörper

Die leere Anweisung wird manchmal mit Schleifenanweisungen verwendet. Sehen Sie sich das folgende Beispiel mit einem leeren Schleifenkörper an:

```js-nolint
const arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr);
// [0, 0, 0]
```

### Unbeabsichtigte Nutzung

Es ist eine gute Idee, die _beabsichtigte_ Verwendung der leeren Anweisung zu kommentieren, da sie sich nicht wirklich offensichtlich von einem normalen Semikolon unterscheidet.

Im folgenden Beispiel ist die Nutzung wahrscheinlich nicht beabsichtigt:

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
