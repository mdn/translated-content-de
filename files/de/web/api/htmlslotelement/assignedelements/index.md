---
title: "HTMLSlotElement: assignedElements()-Methode"
short-title: assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("Shadow DOM API")}}

Die **`assignedElements()`**-Methode des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Interfaces gibt eine Sequenz der Elemente zurück, die diesem Slot (und keinen anderen Knoten) zugewiesen sind.

Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Elemente zurück, die diesem Slot zugewiesen sind, als auch der Elemente, die anderen Slots, die Nachkommen dieses Slots sind, zugewiesen sind. Wenn keine zugewiesenen Elemente gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Syntax

```js-nolint
assignedElements()
assignedElements(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:

    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Elemente aller verfügbaren Kind-`<slot>`-Elemente (`true`) zurückgegeben werden sollen oder nicht (`false`). Standardmäßig `false`.

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
