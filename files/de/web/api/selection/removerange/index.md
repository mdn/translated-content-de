---
title: "Selection: die removeRange()-Methode"
short-title: removeRange()
slug: Web/API/Selection/removeRange
l10n:
  sourceCommit: 29601e9dc567c497143866aa9c2eca9358e9f449
---

{{ ApiRef("DOM") }}

Die **`Selection.removeRange()`**-Methode entfernt einen Bereich aus einer Selektion.

## Syntax

```js-nolint
removeRange(range)
```

### Parameter

- `range`
  - : Ein Bereichsobjekt, das aus der Selektion entfernt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
/* Programmatisch können mehr als ein Bereich ausgewählt werden.
 * Dies wird alle Bereiche außer dem ersten entfernen. */
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

- {{domxref("Selection")}}, das Interface, zu dem sie gehört.
