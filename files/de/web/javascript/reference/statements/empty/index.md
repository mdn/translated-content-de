---
title: Leere Anweisung
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Statements")}}

Eine **leere Anweisung** wird verwendet, um keine Anweisung bereitzustellen, obwohl die
JavaScript-Syntax eine erwarten würde.

{{EmbedInteractiveExample("pages/js/statement-empty.html")}}

## Syntax

```js-nolint
;
```

## Beschreibung

Die leere Anweisung ist ein Semikolon (`;`), das anzeigt, dass keine Anweisung
ausgeführt wird, selbst wenn die JavaScript-Syntax eine erfordert.

Das entgegengesetzte Verhalten, bei dem Sie mehrere Anweisungen wünschen, JavaScript jedoch nur eine
zulässt, ist mit einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) möglich,
die mehrere Anweisungen zu einer einzigen kombiniert.

## Beispiele

### Leerer Schleifenkörper

Die leere Anweisung wird manchmal mit Schleifenanweisungen verwendet. Sehen Sie sich das folgende Beispiel
mit einem leeren Schleifenkörper an:

```js-nolint
const arr = [1, 2, 3];

// Weisen Sie allen Array-Werten 0 zu
for (let i = 0; i < arr.length; arr[i++] = 0) /* leere Anweisung */ ;

console.log(arr);
// [0, 0, 0]
```

### Unbeabsichtigte Verwendung

Es ist eine gute Idee, die _beabsichtigte_ Verwendung der leeren Anweisung zu kommentieren, da es
nicht wirklich offensichtlich ist, sie von einem normalen Semikolon zu unterscheiden.

Im folgenden Beispiel ist die Verwendung wahrscheinlich nicht beabsichtigt:

```js-nolint example-bad
if (condition);      // Vorsicht, diese "if"-Anweisung macht nichts!
  killTheUniverse(); // Daher wird dies immer ausgeführt!!!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)
