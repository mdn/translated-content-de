---
title: "ShadowRoot: slotAssignment-Eigenschaft"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`slotAssignment`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum zurück. Knoten werden entweder automatisch (`named`) oder manuell (`manual`) zugewiesen. Der Wert dieser Eigenschaft wird mit der `slotAssignment`-Option festgelegt, wenn [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufgerufen wird.

## Wert

Ein String, der einer der folgenden sein kann:

- `named`
  - : Elemente werden automatisch zu {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Roots zugewiesen. Alle Nachkommen des Hosts mit einem `slot`-Attribut, das dem `name`-Attribut eines `<slot>` in diesem Shadow-Root entspricht, werden diesem Slot zugewiesen. Alle obersten Kinder des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, falls vorhanden.
- `manual`
  - : Elemente werden nicht automatisch zu {{HTMLElement("slot")}}-Elementen zugewiesen. Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.

## Beispiele

Im folgenden Beispiel wird die `assign()`-Methode verwendet, um den richtigen Tab in einer Tabbed-Anwendung anzuzeigen. Die Funktion wird aufgerufen und das anzuzeigende Panel wird dem Slot zugewiesen. Wir prüfen, ob das `slotAssignment` `named` ist, um zu verhindern, dass eine Ausnahme ausgelöst wird, wenn [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) aufgerufen wird.

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
