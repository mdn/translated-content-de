---
title: "ShadowRoot: slotAssignment-Eigenschaft"
short-title: slotAssignment
slug: Web/API/ShadowRoot/slotAssignment
l10n:
  sourceCommit: f77236a72e479b61c6b1cb6059c9ae1e90f4c7cd
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`slotAssignment`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt den _Slot-Zuweisungsmodus_ für den Shadow-DOM-Baum zurück. Knoten werden entweder automatisch basierend auf Namensübereinstimmung (`named`) oder manuell (`manual`) zugewiesen.

Der Wert dieser Eigenschaft wird mit der `slotAssignment`-Option definiert, wenn [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) aufgerufen wird, oder mithilfe des [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment)-Attributs auf einem {{htmlelement("template")}}-Element, wenn ein Shadow-Root deklarativ erstellt wird.

## Wert

Ein String, der einer der folgenden sein kann:

- `named`
  - : Elemente werden automatisch {{HTMLElement("slot")}}-Elementen innerhalb dieses Shadow-Roots zugewiesen.
    Alle obersten Kind-Elemente des Hosts mit einem `slot`-Attribut, das dem `name`-Attribut eines `<slot>` innerhalb dieses Shadow-Roots entspricht, werden diesem Slot zugewiesen.
    Alle obersten Kind-Elemente des Hosts ohne `slot`-Attribut werden einem `<slot>` ohne `name`-Attribut (dem "Standard-Slot") zugewiesen, falls vorhanden.
- `manual`
  - : Elemente werden nicht automatisch {{HTMLElement("slot")}}-Elementen zugewiesen.
    Stattdessen müssen sie manuell mit [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) zugewiesen werden.

## Beispiele

### Grundlegende Verwendung

Im untenstehenden Beispiel wird die `assign()`-Methode verwendet, um den richtigen Tab in einer tabulierten Anwendung anzuzeigen.
Die Funktion wird aufgerufen und das anzuzeigende Panel wird dem Slot zugewiesen.
Wir prüfen, ob `slotAssignment` `named` ist, um eine Ausnahme zu verhindern, die ausgelöst wird, wenn [`HTMLSlotElement.assign()`](/de/docs/Web/API/HTMLSlotElement/assign) aufgerufen wird.

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
- [`shadowrootslotassignment`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) Attribut des `<template>`-Elements
- [`HTMLTemplateElement.shadowRootSlotAssignment`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSlotAssignment)
