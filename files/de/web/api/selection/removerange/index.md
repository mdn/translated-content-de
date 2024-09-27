---
title: "Selection: removeRange() Methode"
short-title: removeRange()
slug: Web/API/Selection/removeRange
l10n:
  sourceCommit: 29601e9dc567c497143866aa9c2eca9358e9f449
---

{{ ApiRef("DOM") }}

Die **`Selection.removeRange()`** Methode entfernt einen Bereich aus einer Auswahl.

## Syntax

```js-nolint
removeRange(range)
```

### Parameter

- `range`
  - : Ein Bereichsobjekt, das aus der Auswahl entfernt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
/* Programmatically, more than one range can be selected.
 * This will remove all ranges except the first. */
const s = window.getSelection();
if (s.rangeCount > 1) {
  for (let i = 1; i < s.rangeCount; i++) {
    s.removeRange(s.getRangeAt(i));
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem sie gehört.
