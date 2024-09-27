---
title: "HTMLSlotElement: slotchange Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef}}

Das **`slotchange`** Ereignis wird bei einer Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{HTMLElement("slot")}} Element) ausgelöst, wenn sich die Knoten ändern, die in diesem Slot enthalten sind.

> [!NOTE]
> Das `slotchange` Ereignis wird nicht ausgelöst, wenn sich die Kinder eines geplatzten Knotens ändern – nur wenn Sie die tatsächlichen Knoten selbst ändern (z.B. hinzufügen oder löschen).

Um ein **slotchange** Ereignis auszulösen, muss das `slot` Attribut gesetzt oder entfernt werden.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("slotchange", (event) => {});

onslotchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
element.setAttribute("slot", slotName);
// element.assignedSlot = $slot
element.removeAttribute("slot");
// element.assignedSlot = null
```

Der folgende Codeausschnitt stammt aus unserem [slotchange Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([siehe es auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen `<slot>`s und fügen dann einen `slotchange` Ereignis-Listener zum zweiten Slot der Vorlage hinzu — das ist der Slot, dessen Inhalt im Beispiel geändert wird.

Jedes Mal, wenn sich das in den Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und welches das neue Element in dem Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
