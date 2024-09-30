---
title: Empty Statement
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

Die leere Anweisung ist ein Semikolon (`;`), das angibt, dass keine Anweisung
ausgeführt wird, selbst wenn die JavaScript-Syntax eine erwartet.

Das gegenteilige Verhalten, bei dem Sie mehrere Anweisungen wünschen, aber JavaScript
nur eine einzige erlaubt, ist durch eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) möglich,
die mehrere Anweisungen zu einer einzigen kombiniert.

## Beispiele

### Leerer Schleifenkörper

Die leere Anweisung wird manchmal mit Schleifenanweisungen verwendet. Sehen Sie das folgende Beispiel
mit einem leeren Schleifenkörper:

```js-nolint
const arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr);
// [0, 0, 0]
```

### Unbeabsichtigte Nutzung

Es ist eine gute Idee, die _beabsichtigte_ Verwendung der leeren Anweisung zu kommentieren, da
sie sich nicht wirklich offensichtlich von einem normalen Semikolon unterscheidet.

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

- [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block)
