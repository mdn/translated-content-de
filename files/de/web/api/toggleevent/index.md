---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 303832e855634fdd74108d4a77c0654e9194ea24
---

{{APIRef("Popover API")}}

Die **`ToggleEvent`**-Schnittstelle repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass sich der Zustand eines Elements geändert hat.

Dies ist das Ereignisobjekt für die `HTMLElement`-[`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse, die auf einigen Elementen unmittelbar vor und nach dem Übergang zwischen Sichtbarkeit und Verborgenheit ausgelöst werden.

- `beforetoggle` wird bei [Popovers](/de/docs/Web/API/Popover_API) und {{htmlelement("dialog")}}-Elementen ausgelöst.
- `toggle` wird bei [Popovers](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}}-Elementen, und {{htmlelement("details")}}-Elementen ausgelöst.

{{InheritanceDiagram}}

## Konstruktor

- [`ToggleEvent()`](/de/docs/Web/API/ToggleEvent/ToggleEvent)
  - : Erstellt ein `ToggleEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`ToggleEvent.newState`](/de/docs/Web/API/ToggleEvent/newState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand repräsentiert, zu dem das Element übergeht.
- [`ToggleEvent.oldState`](/de/docs/Web/API/ToggleEvent/oldState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand repräsentiert, von dem das Element übergeht.
- [`ToggleEvent.source`](/de/docs/Web/API/ToggleEvent/source) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz, die das HTML-Steuerelement darstellt, das das Umschalten initiiert hat.

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
