---
title: "Selection: extend() Methode"
short-title: extend()
slug: Web/API/Selection/extend
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.extend()`** Methode bewegt den Fokus der
Auswahl zu einem angegebenen Punkt. Der Anker der Auswahl bewegt sich nicht. Die Auswahl
erstreckt sich vom Anker zum neuen Fokus, unabhängig von der Richtung.

## Syntax

```js-nolint
extend(node)
extend(node, offset)
```

### Parameter

- `node`
  - : Der Knoten, innerhalb dessen der Fokus bewegt wird.
- `offset` {{optional_inline}}
  - : Die Versatzposition innerhalb von `node`, wohin der Fokus verschoben werden soll. Wenn
    nicht angegeben, wird der Standardwert `0` verwendet.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
