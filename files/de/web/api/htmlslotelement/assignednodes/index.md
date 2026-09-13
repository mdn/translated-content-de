---
title: "HTMLSlotElement: Methode assignedNodes()"
short-title: assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("Shadow DOM API")}}

Die Methode **`assignedNodes()`** des Interfaces [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) gibt eine Sequenz der diesem Slot zugewiesenen Knoten zurück.

Wenn die Option `flatten` auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der diesem Slot zugewiesenen Knoten als auch der Knoten zurück, die anderen Slots zugewiesen sind, welche Nachfahren dieses Slots sind. Wenn keine zugewiesenen Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Syntax

```js-nolint
assignedNodes()
assignedNodes(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:
    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Knoten verfügbarer untergeordneter `<slot>`-Elemente (`true`) zurückgegeben werden sollen oder nicht (`false`). Der Standardwert ist `false`.

### Rückgabewert

Ein Array von Knoten.

## Beispiele

Das folgende Snippet stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([Live ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier erfassen wir Referenzen auf alle Slots und fügen dann dem zweiten Slot im Template einen `slotchange`-Event-Listener hinzu — also demjenigen, dessen Inhalte im Beispiel fortlaufend geändert werden.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und welcher neue Knoten sich innerhalb des Slots befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
