---
title: "HTMLSlotElement: Methode assignedElements()"
short-title: assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("Shadow DOM API")}}

Die Methode **`assignedElements()`** des Interfaces [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
gibt eine Sequenz der diesem Slot zugewiesenen Elemente zurück (und keine
anderen Knoten).

Wenn die Option `flatten` auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der diesem Slot zugewiesenen Elemente als auch der Elemente zurück, die allen anderen Slots zugewiesen sind, welche Nachkommen dieses Slots sind. Wenn keine zugewiesenen Elemente gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Syntax

```js-nolint
assignedElements()
assignedElements(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:
    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die
        zugewiesenen Elemente aller verfügbaren untergeordneten `<slot>`-Elemente
        (`true`) zurückgegeben werden sollen oder nicht (`false`). Der Standardwert ist `false`.

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
