---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{APIRef('Web Components')}}

Die **`HTMLSlotElement`**-Schnittstelle der [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) ermöglicht den Zugriff auf den Namen und die zugewiesenen Knoten eines HTML-{{HTMLElement("slot")}}-Elements.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.name`](/de/docs/Web/API/HTMLSlotElement/name)
  - : Ein String, der zum Abrufen und Festlegen des Slots-Namens verwendet wird.

## Instanz-Methoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign)
  - : Setzt die manuell zugewiesenen Knoten für diesen Slot auf die angegebenen Knoten.
- [`HTMLSlotElement.assignedNodes()`](/de/docs/Web/API/HTMLSlotElement/assignedNodes)
  - : Gibt eine Sequenz der Knoten zurück, die diesem Slot zugewiesen sind. Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Knoten zurück, die diesem Slot zugewiesen sind, als auch der Knoten, die anderen Slots zugewiesen sind, die Nachkommen dieses Slots sind. Wenn keine zugewiesenen Knoten gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.
- [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements)
  - : Gibt eine Sequenz der Elemente zurück, die diesem Slot zugewiesen sind (und keine anderen Knoten). Wenn die `flatten`-Option auf `true` gesetzt ist, gibt sie eine Sequenz sowohl der Elemente zurück, die diesem Slot zugewiesen sind, als auch der Elemente, die anderen Slots zugewiesen sind, die Nachkommen dieses Slots sind. Wenn keine zugewiesenen Elemente gefunden werden, gibt sie den Fallback-Inhalt des Slots zurück.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
  - : Wird auf einer `HTMLSlotElement`-Instanz ([`<slot>`](/de/docs/Web/HTML/Element/slot)-Element) ausgelöst, wenn sich die Knoten ändern, die in diesem Slot enthalten sind.

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

Hier holen wir Referenzen zu allen Slots und fügen dann einen slotchange-Ereignislistener zum zweiten Slot im Template hinzu — dies ist der Slot, dessen Inhalt im Beispiel immer wieder geändert wird.

Jedes Mal, wenn sich das Element im Slot ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und was der neue Knoten im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
