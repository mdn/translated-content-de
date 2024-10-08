---
title: "HTMLSlotElement: assignedNodes() Methode"
short-title: assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

Die **`assignedNodes()`** Methode des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) Interfaces gibt eine Sequenz der Knoten zurück, die diesem Slot zugewiesen sind.

Wenn die `flatten` Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Knoten zurück, die diesem Slot zugewiesen sind, als auch der Knoten, die jedem anderen Slot zugewiesen sind, der ein Nachfahre dieses Slots ist. Wenn keine zugewiesenen Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Syntax

```js-nolint
assignedNodes()
assignedNodes(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:

    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Knoten aller verfügbaren Kind-`<slot>`-Elemente (`true`) oder nicht (`false`) zurückgegeben werden sollen. Standard ist `false`.

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

Hier holen wir Referenzen zu allen Slots und fügen dann einen Slotchange-Event-Listener dem zweiten Slot im Template hinzu – was derjenige ist, dessen Inhalt im Beispiel immer wieder geändert wird.

Jedes Mal, wenn das in den Slot eingefügte Element sich ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und was der neue Knoten innerhalb des Slots ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
