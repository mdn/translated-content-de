---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{APIRef("Popover API")}}

Die **`ToggleEvent`** Schnittstelle repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass sich der Zustand eines Elements geändert hat.

Dies ist das Ereignisobjekt für die `HTMLElement`-Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event), die auf einigen Elementen unmittelbar vor und unmittelbar nachdem sie zwischen sichtbar und verborgen wechseln, ausgelöst werden.

- `beforetoggle` wird bei [Popovers](/de/docs/Web/API/Popover_API) und {{htmlelement("dialog")}}-Elementen ausgelöst.
- `toggle` wird bei [Popovers](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}}-Elementen und {{htmlelement("details")}}-Elementen ausgelöst.

{{InheritanceDiagram}}

## Konstruktor

- [`ToggleEvent()`](/de/docs/Web/API/ToggleEvent/ToggleEvent)
  - : Erstellt ein `ToggleEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Element, [`Event`](/de/docs/Web/API/Event)._

- [`ToggleEvent.newState`](/de/docs/Web/API/ToggleEvent/newState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand repräsentiert, zu dem das Element wechselt.
- [`ToggleEvent.oldState`](/de/docs/Web/API/ToggleEvent/oldState) {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand repräsentiert, von dem das Element wechselt.
- [`ToggleEvent.source`](/de/docs/Web/API/ToggleEvent/source) {{ReadOnlyInline}}
  - : Eine Instanz des [`Element`](/de/docs/Web/API/Element)-Objekts, die das HTML-Steuerelement darstellt, das das Umschalten initiiert hat.

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
