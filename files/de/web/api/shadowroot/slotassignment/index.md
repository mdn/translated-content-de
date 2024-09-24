---
title: "ShadowRoot: slotAssignment-Eigenschaft"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`slotAssignment`**-Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle gibt den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum zurück. Knoten werden entweder automatisch zugewiesen (`named`) oder manuell zugewiesen (`manual`). Der Wert dieser Eigenschaft wird durch die `slotAssignment`-Option festgelegt, wenn {{domxref("Element.attachShadow()")}} aufgerufen wird.

## Wert

Ein String, der einen der folgenden Werte haben kann:

- `named`
  - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Roots zugewiesen. Alle Nachkommen des Hosts mit einem `slot`-Attribut, das mit dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Roots übereinstimmt, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (der "Standard-Slot") zugewiesen, wenn einer vorhanden ist.
- `manual`
  - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit {{domxref("HTMLSlotElement.assign()")}} zugewiesen werden.

## Beispiele

Im folgenden Beispiel wird die `assign()`-Methode verwendet, um den richtigen Tab in einer Registerkartenanwendung anzuzeigen. Die Funktion wird aufgerufen und das anzuzeigende Panel übergeben, das dann dem Slot zugewiesen wird. Wir testen, ob das `slotAssignment` `named` ist, um zu verhindern, dass eine Ausnahme ausgelöst wird, wenn {{domxref("HTMLSlotElement.assign()")}} aufgerufen wird.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;

  // Dieser Test ist normalerweise nicht erforderlich, kann aber beim Debuggen nützlich sein
  if (shadow.slotAssignment === "named") {
    console.error(
      "Versuch, einen Slot manuell einem automatisch zugewiesenen (named) Slot zuzuweisen",
    );
  }
  const slot = shadow.querySelector("slot");
  const panels = elem.querySelectorAll("tab-panel");
  if (panels.length && tabIdx && tabIdx <= panels.length) {
    slot.assign(panels[tabIdx - 1]);
  } else {
    slot.assign();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.attachShadow()")}}
- {{domxref("HTMLSlotElement.assign()")}}
