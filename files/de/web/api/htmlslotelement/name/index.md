---
title: "HTMLSlotElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLSlotElement/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

Die **`name`**-Eigenschaft der [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Schnittstelle gibt den Slot-Namen zurück oder setzt ihn. Ein Slot ist ein Platzhalter innerhalb eines Web-Komponenten, den Benutzer mit ihrem eigenen Markup füllen können.

## Wert

Ein String.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [Slotwechsel-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([Live ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen Slots und fügen dann einen `slotchange`-Event-Listener zum zweiten Slot im Template hinzu — das ist der Slot, dessen Inhalt im Beispiel immer wieder geändert wird.

Jedes Mal, wenn das Element im Slot geändert wird, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und welches neue Element sich im Slot befindet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
