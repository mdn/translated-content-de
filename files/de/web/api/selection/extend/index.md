---
title: "Selection: extend()-Methode"
short-title: extend()
slug: Web/API/Selection/extend
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.extend()`**-Methode verschiebt den Fokus der Auswahl zu einem angegebenen Punkt. Der Anker der Auswahl bewegt sich nicht. Die Auswahl erstreckt sich vom Anker bis zum neuen Fokus, unabhängig von der Richtung.

## Syntax

```js-nolint
extend(node)
extend(node, offset)
```

### Parameter

- `node`
  - : Der Knoten, innerhalb dessen der Fokus verschoben wird.
- `offset` {{optional_inline}}
  - : Die Offset-Position innerhalb des `node`, wohin der Fokus verschoben wird. Wenn nicht angegeben, wird der Standardwert `0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
