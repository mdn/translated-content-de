---
title: "HTMLSlotElement: slotchange-Ereignis"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef}}

Das **`slotchange`**-Ereignis wird bei einer Instanz von {{DOMxRef("HTMLSlotElement")}} ({{HTMLElement("slot")}}-Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

> [!NOTE]
> Das `slotchange`-Ereignis wird nicht ausgelöst, wenn sich die Kinder eines geschlitzten Knotens ändern – nur wenn Sie die tatsächlichen Knoten selbst ändern (z.B. hinzufügen oder löschen).

Um ein **slotchange**-Ereignis auszulösen, muss man das `slot`-Attribut setzen oder entfernen.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("slotchange", (event) => {});

onslotchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
element.setAttribute("slot", slotName);
// element.assignedSlot = $slot
element.removeAttribute("slot");
// element.assignedSlot = null
```

Das folgende Code-Beispiel stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element im Slot "${slots[1].name}" hat sich zu "${nodes[0].outerHTML}" geändert.`,
  );
});
```

Hier beziehen wir Referenzen auf alle `<slot>`-Elemente und fügen dann dem zweiten Slot der Vorlage einen `slotchange`-Ereignislistener hinzu – das ist derjenige, dessen Inhalt im Beispiel geändert wird.

Jedes Mal, wenn sich das im Slot eingefügte Element ändert, protokollieren wir einen Bericht in die Konsole, der angibt, welcher Slot sich geändert hat und was der neue Knoten innerhalb des Slots ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{domxref("HTMLSlotElement")}}
