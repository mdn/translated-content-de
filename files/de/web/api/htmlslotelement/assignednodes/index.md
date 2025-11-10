---
title: "HTMLSlotElement: assignedNodes()-Methode"
short-title: assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Shadow DOM API")}}

Die **`assignedNodes()`**-Methode des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Interfaces gibt eine Sequenz der Knoten zurück, die diesem Slot zugewiesen sind.

Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz von sowohl den Knoten zurück, die diesem Slot zugewiesen sind, als auch von den Knoten, die jedem anderen Slot zugewiesen sind, der ein Nachkomme dieses Slots ist. Wenn keine zugewiesenen Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Syntax

```js-nolint
assignedNodes()
assignedNodes(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die zurückzugebenden Knoten festlegt. Die verfügbaren Optionen sind:
    - `flatten`
      - : Ein boolescher Wert, der angibt, ob die zugewiesenen Knoten aller verfügbaren Kindes-`<slot>`-Elemente zurückgegeben werden sollen (`true`) oder nicht (`false`). Standardmäßig `false`.

### Rückgabewert

Ein Array von Knoten.

## Beispiele

Der folgende Ausschnitt ist von unserem [Slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) entnommen ([Live-Demo ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen Slots und fügen dann einen slotchange-Event-Listener zum zweiten Slot in der Vorlage hinzu – welcher derjenige ist, dessen Inhalt im Beispiel immer wieder geändert wird.

Jedes Mal, wenn sich das Element im Slot ändert, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und was der neue Knoten innerhalb des Slots ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
