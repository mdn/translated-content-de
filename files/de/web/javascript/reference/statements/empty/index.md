---
title: Leere Anweisung
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Eine **leere Anweisung** wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwarten würde.

{{InteractiveExample("JavaScript Demo: Statement - Empty")}}

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

Das gegenteilige Verhalten, bei dem Sie mehrere Anweisungen möchten, JavaScript jedoch nur eine zulässt, ist mithilfe einer [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block) möglich, die mehrere Anweisungen zu einer einzigen kombiniert.

## Beispiele

### Leerer Schleifenrumpf

Die leere Anweisung wird manchmal in Verbindung mit Schleifenanweisungen verwendet. Siehe das folgende Beispiel mit einem leeren Schleifenrumpf:

```js-nolint
const arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr);
// [0, 0, 0]
```

### Unbeabsichtigte Verwendung

Es ist eine gute Idee, die _beabsichtigte_ Verwendung der leeren Anweisung zu kommentieren, da sie sich nicht wirklich offensichtlich von einem normalen Semikolon unterscheiden lässt.

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
