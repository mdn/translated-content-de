---
title: "HTMLSlotElement: assignedNodes() Methode"
short-title: assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

Die **`assignedNodes()`**-Methode der [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Schnittstelle gibt eine Sequenz der den Slot zugewiesenen Knoten zurück.

Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz der diesem Slot zugewiesenen Knoten sowie der Knoten zurück, die allen anderen Slots zugewiesen sind, die Nachkommen dieses Slots sind. Falls keine zugewiesenen Knoten gefunden werden, wird der Fallback-Inhalt des Slots zurückgegeben.

## Syntax

```js-nolint
assignedNodes()
assignedNodes(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:

    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Knoten aller verfügbaren Kind-`<slot>`-Elemente zurückgegeben werden sollen (`true`) oder nicht (`false`). Standard ist `false`.

### Rückgabewert

Ein Array von Knoten.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [slotchange Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([Live ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier greifen wir auf alle Slots zu und fügen dem zweiten Slot im Template einen `slotchange`-Ereignislistener hinzu – das ist der Slot, dessen Inhalte im Beispiel ständig geändert werden.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und welcher neue Knoten sich im Slot befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
