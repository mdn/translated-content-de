---
title: "Selection: extend() Methode"
short-title: extend()
slug: Web/API/Selection/extend
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.extend()`**-Methode bewegt den Fokus der Auswahl zu einem angegebenen Punkt. Der Anker der Auswahl bewegt sich nicht. Die Auswahl erstreckt sich vom Anker bis zum neuen Fokus, unabhängig von der Richtung.

## Syntax

```js-nolint
extend(node)
extend(node, offset)
```

### Parameter

- `node`
  - : Der Knoten, innerhalb dessen der Fokus bewegt wird.
- `offset` {{optional_inline}}
  - : Die Position innerhalb von `node`, zu der der Fokus bewegt wird. Wenn
    nicht angegeben, wird der Standardwert `0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, die Schnittstelle, zu der es gehört.
