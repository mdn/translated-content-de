---
title: "HTMLSlotElement: assign()-Methode"
short-title: assign()
slug: Web/API/HTMLSlotElement/assign
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("Shadow DOM API")}}

Die **`assign()`**-Methode der {{domxref("HTMLSlotElement")}}-Schnittstelle setzt die _manuell zugewiesenen Knoten_ des Slots auf eine geordnete Menge von Slottables. Die Menge der manuell zugewiesenen Knoten ist anfangs leer, bis Knoten mithilfe von `assign()` zugewiesen werden.

> [!NOTE]
> Sie können manuelle (imperative) und benannte (deklarative, automatische) Slot-Zuweisungen nicht mischen. Daher muss der Shadow-Baum, damit diese Methode funktioniert, mit der Option `slotAssignment: "manual"` [erstellt](/de/docs/Web/API/Element/attachShadow) worden sein.

## Syntax

```js-nolint
assign(node1)
assign(node1, node2)
assign(node1, node2, /* …, */ nodeN)
```

### Parameter

- `node1`, …, `nodeN`
  - : Eine Menge von {{domxref("Element")}}- oder {{domxref("Text")}}-Knoten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn diese Methode auf einem automatisch zugewiesenen Slot aufgerufen wird.

## Beispiele

Im folgenden Beispiel wird die `assign()`-Methode verwendet, um den richtigen Tab in einer tab-basierten Anwendung anzuzeigen. Die Funktion wird aufgerufen und das anzuzeigende Panel wird übergeben, das dann dem Slot zugewiesen wird.

```js
function UpdateDisplayTab(elem, tabIdx) {
  const shadow = elem.shadowRoot;
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
