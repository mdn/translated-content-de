---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: a62600788f390d326859cfbf6171013a3f351690
---

{{APIRef("Popover API")}}

Das **`ToggleEvent`**-Interface repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass sich der Zustand eines Elements geändert hat.

Dies ist das Ereignisobjekt für die `HTMLElement`-Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), die bei einigen Elementen kurz bevor und kurz nachdem sie zwischen sichtbar und verborgen wechseln, ausgelöst werden.

- `beforetoggle` wird bei [Popovers](/de/docs/Web/API/Popover_API) und {{htmlelement("dialog")}}-Elementen ausgelöst
- `toggle` wird bei [Popovers](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}}-Elementen und {{htmlelement("details")}}-Elementen ausgelöst

{{InheritanceDiagram}}

## Konstruktor

- [`ToggleEvent()`](/de/docs/Web/API/ToggleEvent/ToggleEvent)
  - : Erstellt ein `ToggleEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`ToggleEvent.newState`](/de/docs/Web/API/ToggleEvent/newState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand darstellt, zu dem das Element wechselt.
- [`ToggleEvent.oldState`](/de/docs/Web/API/ToggleEvent/oldState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand darstellt, von dem das Element wechselt.

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

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
