---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 2597731017bf54bd583bd533fce1a5fab064b597
---

{{APIRef("Popover API")}}

Die **`ToggleEvent`**-Schnittstelle stellt ein Ereignis dar, das ausgelöst wird, wenn ein Popover-Element ein- oder ausgeblendet wird.

Dies ist das Ereignisobjekt für die [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse, die auf Elementen wie folgt ausgelöst werden:

- Das `beforetoggle`-Ereignis wird ausgelöst, bevor [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}}-Elemente ein- oder ausgeblendet werden.
- Das `toggle`-Ereignis wird ausgelöst, nachdem Popover-, `<dialog>`- oder {{htmlelement("details")}}-Elemente ein- oder ausgeblendet wurden.

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
- [`ToggleEvent.source`](/de/docs/Web/API/ToggleEvent/source) {{ReadOnlyInline}}
  - : Eine Instanz des [`Element`](/de/docs/Web/API/Element)-Objekts, die das HTML-Steuerelement repräsentiert, das das Umschalten initiiert hat.

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
