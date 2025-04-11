---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef('Web Components')}}

Das **`HTMLSlotElement`** Interface der [Shadow DOM-API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ermöglicht den Zugriff auf den Namen und die zugeordneten Knoten eines HTML {{HTMLElement("slot")}} Elements.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Eltern-Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.name`](/de/docs/Web/API/HTMLSlotElement/name)
  - : Ein String, der verwendet wird, um den Namen des Slots zu erhalten und festzulegen.

## Instanz-Methoden

_Erbt auch Methoden von seiner Eltern-Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign)
  - : Setzt die manuell zugewiesenen Knoten für diesen Slot auf die angegebenen Knoten.
- [`HTMLSlotElement.assignedNodes()`](/de/docs/Web/API/HTMLSlotElement/assignedNodes)
  - : Gibt eine Sequenz der Knoten zurück, die diesem Slot zugewiesen sind. Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Knoten zurück, die diesem Slot zugewiesen sind, als auch der Knoten, die jedem anderen Slot zugewiesen sind, der Nachfahrer dieses Slots ist. Wenn keine zugewiesenen Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.
- [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements)
  - : Gibt eine Sequenz der Elemente zurück, die diesem Slot zugewiesen sind (und keine anderen Knoten). Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Elemente zurück, die diesem Slot zugewiesen sind, als auch der Elemente, die jedem anderen Slot zugewiesen sind, der Nachfahrer dieses Slots ist. Wenn keine zugewiesenen Elemente gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Ereignisse

_Erbt auch Ereignisse von seiner Eltern-Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört werden oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Wird auf einer `HTMLSlotElement` Instanz ([`<slot>`](/de/docs/Web/HTML/Reference/Elements/slot) Element) ausgelöst, wenn sich die in diesem Slot enthaltenen Knoten ändern.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([siehe es auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier greifen wir auf Referenzen zu allen Slots zu und fügen dem zweiten Slot im Template einen slotchange-Ereignis-Listener hinzu — welcher der Slot ist, dessen Inhalt im Beispiel ständig geändert wird.

Jedes Mal, wenn sich das im Slot eingefügte Element ändert, wird ein Bericht an die Konsole protokolliert, der angibt, welcher Slot sich geändert hat und was der neue Knoten im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
