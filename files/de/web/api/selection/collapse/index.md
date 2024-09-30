---
title: "Selection: collapse() Methode"
short-title: collapse()
slug: Web/API/Selection/collapse
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ApiRef("DOM")}}

Die **`Selection.collapse()`** Methode reduziert die aktuelle Auswahl auf einen einzigen Punkt. Das Dokument wird nicht geändert. Wenn der Inhalt fokussiert und bearbeitbar ist, wird der Cursor dort blinken.

> [!NOTE]
> Diese Methode ist ein Alias für die [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition) Methode.

## Syntax

```js-nolint
collapse(node)
collapse(node, offset)
```

### Parameter

- `node`
  - : Die Cursorposition wird in diesem Knoten sein. Dieser Wert kann auch auf
    `null` gesetzt werden – wenn `null` angegeben ist, verhält sich die Methode wie
    [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges); d.h. alle Bereiche werden aus der
    Auswahl entfernt.
- `offset` {{optional_inline}}
  - : Der Versatz in `node`, auf den die Auswahl reduziert wird. Wenn nicht
    angegeben, wird der Standardwert `0` verwendet.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
// Place the caret at the beginning of an HTML document's body.
const body = document.querySelector("body");
window.getSelection().collapse(body, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
