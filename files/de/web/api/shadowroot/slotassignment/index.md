---
title: "ShadowRoot: slotAssignment-Eigenschaft"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`slotAssignment`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum zurück. Knoten werden entweder automatisch zugewiesen (`named`) oder manuell zugewiesen (`manual`). Der Wert dieser Eigenschaft wird mit der Option `slotAssignment` festgelegt, wenn [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufgerufen wird.

## Wert

Ein String, der einer der folgenden sein kann:

- `named`
  - : Elemente werden automatisch den {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Roots zugewiesen. Alle Nachkommen des Hosts mit einem `slot`-Attribut, das dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Roots entspricht, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (der "Standard-Slot") zugewiesen, falls vorhanden.
- `manual`
  - : Elemente werden nicht automatisch den {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.

## Beispiele

Im folgenden Beispiel wird die `assign()`-Methode verwendet, um den richtigen Tab in einer Tab-Anwendung anzuzeigen. Die Funktion wird aufgerufen und das anzuzeigende Panel übergeben, welches dann dem Slot zugewiesen wird. Wir prüfen, ob das `slotAssignment` `named` ist, um eine Ausnahme zu vermeiden, wenn [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) aufgerufen wird.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;

  // This test is usually not needed, but can be useful when debugging
  if (shadow.slotAssignment === "named") {
    console.error(
      "Trying to manually assign a slot on an automatically-assigned (named) slot",
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

- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign)
