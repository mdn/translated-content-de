---
title: "HTMLSlotElement: slotchange Event"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Components")}}

Das **`slotchange`**-Ereignis wird auf einer Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) ({{HTMLElement("slot")}}-Element) ausgelöst, wenn sich der/die Knoten in diesem Slot ändern.

> [!NOTE]
> Das `slotchange`-Ereignis wird nicht ausgelöst, wenn sich die Kinder eines geschlitzten Knotens ändern – sondern nur, wenn Sie die tatsächlichen Knoten selbst ändern (z.B. hinzufügen oder löschen).

Um ein **slotchange**-Ereignis auszulösen, muss man das `slot`-Attribut setzen oder entfernen.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("slotchange", (event) => { })

onslotchange = (event) => { }
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

Das folgende Snippet stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier holen wir Referenzen zu allen `<slot>`s und fügen dem zweiten Slot der Vorlage — das ist derjenige, dessen Inhalt im Beispiel geändert wird — einen `slotchange`-Ereignislistener hinzu.

Jedes Mal, wenn sich das im Slot eingefügte Element ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und was der neue Knoten im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
