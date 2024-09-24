---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef('Web Components')}}

Die **`HTMLSlotElement`**-Schnittstelle der [Shadow-DOM-API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ermöglicht den Zugriff auf den Namen und die zugewiesenen Knoten eines HTML-{{HTMLElement("slot")}}-Elements.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("HTMLElement")}}._

- {{domxref('HTMLSlotElement.name')}}
  - : Ein String, der verwendet wird, um den Namen des Slots zu erhalten und festzulegen.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, {{domxref("HTMLElement")}}._

- {{domxref('HTMLSlotElement.assign()')}}
  - : Legt die manuell zugewiesenen Knoten für diesen Slot auf die angegebenen Knoten fest.
- {{domxref('HTMLSlotElement.assignedNodes()')}}
  - : Gibt eine Sequenz der Knoten zurück, die diesem Slot zugewiesen sind. Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der zugewiesenen Knoten dieses Slots als auch der Knoten zurück, die anderen Slots zugewiesen sind, die Nachfahren dieses Slots sind. Wenn keine zugewiesenen Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.
- {{domxref('HTMLSlotElement.assignedElements()')}}
  - : Gibt eine Sequenz der diesem Slot zugewiesenen Elemente zurück (und keine anderen Knoten). Wenn die Option `flatten` auf `true` gesetzt ist, gibt es sowohl die zugewiesenen Elemente dieses Slots als auch die Elemente zurück, die anderen Slots zugewiesen sind, die Nachfahren dieses Slots sind. Wenn keine zugewiesenen Elemente gefunden werden, gibt es den Fallback-Inhalt des Slots zurück.

## Ereignisse

_Erbt auch Ereignisse von ihrer Elternschnittstelle, {{domxref("HTMLElement")}}._

Hören Sie diese Ereignisse mit {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ab oder indem Sie einen Ereignis-Listener der Eigenschaft `oneventname` dieser Schnittstelle zuweisen.

- {{domxref('HTMLSlotElement.slotchange_event', 'slotchange')}}
  - : Wird auf einer `HTMLSlotElement`-Instanz ({{HTMLElement("slot")}}-Element) ausgelöst, wenn sich die Knoten in diesem Slot ändern.

## Beispiele

Das folgende Snippet stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([siehe es auch live](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier erfassen wir Referenzen zu allen Slots und fügen dann einen Slotchange-Ereignis-Listener zum zweiten Slot im Template hinzu – bei dem handelt es sich um den Slot, dessen Inhalt im Beispiel kontinuierlich geändert wird.

Jedes Mal, wenn sich das im Slot eingefügte Element ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot geändert wurde und welches das neue Knoten-Element im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
