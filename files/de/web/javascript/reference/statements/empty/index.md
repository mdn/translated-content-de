---
title: Leerer Ausdruck
slug: Web/JavaScript/Reference/Statements/Empty
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Statements")}}

Ein **leerer Ausdruck** wird verwendet, um keinen Ausdruck bereitzustellen, obwohl die
JavaScript-Syntax einen erwarten würde.

{{EmbedInteractiveExample("pages/js/statement-empty.html")}}

## Syntax

```js-nolint
;
```

## Beschreibung

Der leere Ausdruck ist ein Semikolon (`;`), das anzeigt, dass kein Ausdruck ausgeführt wird, selbst wenn die JavaScript-Syntax einen verlangt.

Das gegenteilige Verhalten, bei dem Sie mehrere Ausdrücke haben möchten, JavaScript jedoch nur einen zulässt, ist mithilfe eines [Block-Ausdrucks](/de/docs/Web/JavaScript/Reference/Statements/block) möglich, der mehrere Ausdrücke zu einem einzigen kombiniert.

## Beispiele

### Leerer Schleifenkörper

Der leere Ausdruck wird manchmal mit Schleifenanweisungen verwendet. Sehen Sie sich das folgende Beispiel mit einem leeren Schleifenkörper an:

```js-nolint
const arr = [1, 2, 3];

// Assign all array values to 0
for (let i = 0; i < arr.length; arr[i++] = 0) /* empty statement */ ;

console.log(arr);
// [0, 0, 0]
```

### Unbeabsichtigte Verwendung

Es ist eine gute Idee, die _beabsichtigte_ Verwendung des leeren Ausdrucks zu kommentieren, da es nicht wirklich offensichtlich ist, ihn von einem normalen Semikolon zu unterscheiden.

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

- [Block-Ausdruck](/de/docs/Web/JavaScript/Reference/Statements/block)
