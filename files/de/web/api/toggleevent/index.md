---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 672033be010ddec986fd7e12fd01297995ecc9b0
---

{{APIRef("Popover API")}}

Die **`ToggleEvent`**-Schnittstelle stellt ein Ereignis dar, das den Benutzer darüber informiert, dass sich der Zustand eines Elements geändert hat.

Es ist das Ereignisobjekt für die `HTMLElement`-Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), die ausgelöst werden, wenn Popovers zwischen den Zuständen sichtbar und verborgen wechseln (bzw. vor und nach der Änderung).
Es ist ebenfalls das Ereignisobjekt für das `HTMLDetailsElement`-Ereignis [`toggle`](/de/docs/Web/API/HTMLDetailsElement/toggle_event), das ausgelöst wird, wenn ein `<details>`-Element zwischen den Zuständen geöffnet und geschlossen wechselt.

{{InheritanceDiagram}}

## Konstruktor

- [`ToggleEvent()`](/de/docs/Web/API/ToggleEvent/ToggleEvent)
  - : Erstellt ein `ToggleEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

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
- [`beforetoggle` Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle` Ereignis](/de/docs/Web/API/HTMLElement/toggle_event)
