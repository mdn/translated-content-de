---
title: "Selection: collapse() Methode"
short-title: collapse()
slug: Web/API/Selection/collapse
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ApiRef("DOM")}}

Die **`Selection.collapse()`** Methode reduziert die aktuelle Auswahl auf einen einzigen Punkt. Das Dokument wird nicht verändert. Wenn der Inhalt fokussiert und bearbeitbar ist, blinkt der Cursor dort.

> [!NOTE]
> Diese Methode ist ein Alias für die Methode {{domxref("Selection.setPosition()")}}.

## Syntax

```js-nolint
collapse(node)
collapse(node, offset)
```

### Parameter

- `node`
  - : Die Position des Cursors wird sich innerhalb dieses Knotens befinden. Dieser Wert kann auch auf `null` gesetzt werden — wenn `null` angegeben ist, verhält sich die Methode wie {{domxref("Selection.removeAllRanges()")}}, d. h. alle Bereiche werden aus der Auswahl entfernt.
- `offset` {{optional_inline}}
  - : Der Versatz innerhalb von `node`, zu dem die Auswahl reduziert wird. Wenn nicht angegeben, wird der Standardwert `0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Platziert den Cursor am Anfang des Body-Elements eines HTML-Dokuments.
const body = document.querySelector("body");
window.getSelection().collapse(body, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection.setPosition()")}}
