---
title: "HTMLSlotElement: assignedElements()-Methode"
short-title: assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("Shadow DOM API")}}

Die **`assignedElements()`**-Methode der {{domxref("HTMLSlotElement")}}-Schnittstelle gibt eine Sequenz der diesem Slot zugewiesenen Elemente zurück (und keine anderen Knoten).

Wenn die Option `flatten` auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der diesem Slot zugewiesenen Elemente als auch der den Nachkommen dieses Slots zugewiesenen Elemente zurück. Wenn keine zugewiesenen Elemente gefunden werden, wird der Fallback-Inhalt des Slots zurückgegeben.

## Syntax

```js-nolint
assignedElements()
assignedElements(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:

    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Elemente aller verfügbaren Kind-`<slot>`-Elemente zurückgegeben werden sollen (`true`) oder nicht (`false`). Standardmäßig `false`.

### Rückgabewert

Ein Array von Elementen.

## Beispiele

```js
let slots = this.shadowRoot.querySelector("slot");
let elements = slots.assignedElements({ flatten: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}