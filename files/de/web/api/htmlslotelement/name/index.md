---
title: "HTMLSlotElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLSlotElement/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

Die **`name`**-Eigenschaft des {{domxref("HTMLSlotElement")}} Interfaces gibt den Slotnamen zurück oder setzt ihn. Ein Slot ist ein Platzhalter innerhalb einer Web-Komponente, den Benutzer mit ihrem eigenen Markup füllen können.

## Wert

Ein String.

## Beispiele

Das folgende Snippet stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([Live-Demo ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier greifen wir auf alle Slots zu und fügen dann einen slotchange-Event-Listener zum zweiten Slot im Template hinzu — das ist der Slot, dessen Inhalt im Beispiel immer wieder geändert wird.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und welcher neue Knoten sich im Slot befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
