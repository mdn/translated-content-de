---
title: "Auswahl: setPosition()-Methode"
short-title: setPosition()
slug: Web/API/Selection/setPosition
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("DOM")}}

Die **`Selection.setPosition()`**-Methode reduziert die aktuelle Auswahl auf einen einzigen Punkt. Das Dokument wird nicht geändert. Wenn der Inhalt fokussiert und bearbeitbar ist, wird der Cursor dort blinken.

> [!NOTE]
> Diese Methode ist ein Alias für die [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)-Methode.

## Syntax

```js-nolint
setPosition(node)
setPosition(node, offset)
```

### Parameter

- `node`
  - : Die Position des Cursors wird innerhalb dieses Knotens liegen. Dieser Wert kann auch auf `null` gesetzt werden — wenn `null` angegeben ist, verhält sich die Methode wie [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges), d.h. alle Bereiche werden aus der Auswahl entfernt.
- `offset` {{optional_inline}}
  - : Der Versatz in `node`, auf den die Auswahl reduziert wird. Wenn nicht angegeben, wird der Standardwert `0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Place the caret at the beginning of an HTML document's body.
const body = document.querySelector("body");
window.getSelection().setPosition(body, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
