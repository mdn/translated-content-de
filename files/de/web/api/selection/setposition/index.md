---
title: "Selection: setPosition() Methode"
short-title: setPosition()
slug: Web/API/Selection/setPosition
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ApiRef("DOM")}}

Die **`Selection.setPosition()`** Methode reduziert die aktuelle Auswahl auf einen einzelnen Punkt. Das Dokument wird dabei nicht verändert. Wenn der Inhalt fokussiert und bearbeitbar ist, blinkt der Cursor an dieser Stelle.

> [!NOTE]
> Diese Methode ist ein Alias für die [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse) Methode.

## Syntax

```js-nolint
setPosition(node)
setPosition(node, offset)
```

### Parameter

- `node`
  - : Der Cursor wird sich innerhalb dieses Knotens befinden. Dieser Wert kann auch auf `null` gesetzt werden — wenn `null` angegeben ist, verhält sich die Methode wie [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges), d.h. alle Bereiche werden aus der Auswahl entfernt.
- `offset` {{optional_inline}}
  - : Der Offset in `node`, auf den die Auswahl reduziert wird. Wenn nicht angegeben, wird der Standardwert `0` verwendet.

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
