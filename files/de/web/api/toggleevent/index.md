---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Popover API")}}

Das **`ToggleEvent`**-Interface stellt ein Ereignis dar, das den Benutzer darüber informiert, dass sich der Zustand eines Elements geändert hat.

Dies ist das Ereignisobjekt für die `HTMLElement`-Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), die auf einigen Elementen unmittelbar davor und danach ausgelöst werden, wenn sie zwischen sichtbar und versteckt wechseln.

- `beforetoggle` wird auf [Popups](/de/docs/Web/API/Popover_API) und {{htmlelement("dialog")}}-Elementen ausgelöst
- `toggle` wird auf [Popups](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}}- und {{htmlelement("details")}}-Elementen ausgelöst

{{InheritanceDiagram}}

## Konstruktor

- [`ToggleEvent()`](/de/docs/Web/API/ToggleEvent/ToggleEvent)
  - : Erstellt ein `ToggleEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`ToggleEvent.newState`](/de/docs/Web/API/ToggleEvent/newState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand repräsentiert, zu dem das Element wechselt.
- [`ToggleEvent.oldState`](/de/docs/Web/API/ToggleEvent/oldState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand repräsentiert, von dem das Element wechselt.

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event)
