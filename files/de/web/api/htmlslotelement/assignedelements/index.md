---
title: "HTMLSlotElement: assignedElements() Methode"
short-title: assignedElements()
slug: Web/API/HTMLSlotElement/assignedElements
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Shadow DOM API")}}

Die **`assignedElements()`** Methode des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
Interfaces gibt eine Sequenz der Elemente zurück, die diesem Slot zugewiesen sind (und keine
anderen Knoten).

Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz von sowohl den Elementen zurück, die diesem Slot zugewiesen sind, als auch den Elementen, die zu anderen Slots gehören, die Nachfolger dieses Slots sind. Wenn keine zugewiesenen Elemente gefunden werden, wird der Fallback-Inhalt des Slots zurückgegeben.

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
        zugewiesenen Elemente von beliebigen vorhandenen untergeordneten `<slot>`-Elementen
        zurückgegeben werden sollen (`true`) oder nicht (`false`). Der Standardwert ist `false`.

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
