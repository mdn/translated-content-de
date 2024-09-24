---
title: "HTMLElement: toggle-Ereignis"
slug: Web/API/HTMLElement/toggle_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Das **`toggle`**-Ereignis der {{domxref("HTMLElement")}}-Schnittstelle wird bei einem {{domxref("Popover_API", "Popover", "", "nocode")}}-Element ausgelöst (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Attribut besitzt), unmittelbar nachdem es angezeigt oder verborgen wird.

- Wenn das Popover-Element von verborgen zu angezeigt wechselt, wird die Eigenschaft `event.oldState` auf `closed` und die Eigenschaft `event.newState` auf `open` gesetzt.
- Wenn das Popover-Element von angezeigt zu verborgen wechselt, wird `event.oldState` auf `open` und `event.newState` auf `closed` gesetzt.

> [!NOTE]
> Das `toggle`-Ereignis verhält sich anders, wenn es bei {{htmlelement("details")}}-Elementen ausgelöst wird. In diesem Fall bezieht es sich nicht auf Popovers, sondern wird ausgelöst, wenn der `open`/`closed`-Zustand eines `<details>`-Elements umgeschaltet wird. Weitere Informationen finden Sie auf der `HTMLDetailsElement` {{domxref("HTMLDetailsElement.toggle_event", "toggle")}}-Ereignisseite.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereigenschaft für den Ereignishandler.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Ereignistyp

Ein {{domxref("ToggleEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

### Eine Anmerkung zur Zusammenführung von toggle-Ereignissen

Es ist erwähnenswert, dass `toggle`-Ereignisse zusammengeführt werden, was bedeutet, dass, wenn mehrere `toggle`-Ereignisse ausgelöst werden, bevor die Ereignisschleife die Chance hat, einen Zyklus zu beenden, nur ein einziges Ereignis ausgelöst wird.

Zum Beispiel:

```js
popover.addEventListener("toggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `toggle` wird nur einmal ausgelöst
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popover`](/de/docs/Web/HTML/Global_attributes/popover) HTML-Globalattribut
- [Popover API](/de/docs/Web/API/Popover_API)
- Verwandtes Ereignis: [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
