---
title: "HTMLSlotElement: assignedElements()-Methode"
short-title: assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("Shadow DOM API")}}

Die **`assignedElements()`**-Methode des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Interfaces gibt eine Sequenz der Elemente zurück, die diesem Slot (und keinen anderen Knoten) zugewiesen sind.

Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz der Elemente zurück, die diesem Slot sowie den Elementen zugewiesen sind, die anderen Slots zugewiesen sind, die Nachkommen dieses Slots sind. Wenn keine zugewiesenen Elemente gefunden werden, wird der Fallback-Inhalt des Slots zurückgegeben.

## Syntax

```js-nolint
assignedElements()
assignedElements(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:

    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Elemente aller verfügbaren untergeordneten `<slot>`-Elemente (`true`) oder nicht (`false`) zurückgegeben werden sollen. Standardmäßig `false`.

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
