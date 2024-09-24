---
title: ToggleEvent
slug: Web/API/ToggleEvent
l10n:
  sourceCommit: 672033be010ddec986fd7e12fd01297995ecc9b0
---

{{APIRef("Popover API")}}

Die **`ToggleEvent`** Schnittstelle repräsentiert ein Ereignis, das den Benutzer darüber informiert, dass sich der Zustand eines Elements geändert hat.

Es ist das Ereignisobjekt für die `HTMLElement`-Ereignisse {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} und {{domxref("HTMLElement.toggle_event", "toggle")}}, die auf Popovern ausgelöst werden, wenn sie zwischen dem Anzeigen und Verbergen wechseln (davor bzw. danach).
Es ist auch das Ereignisobjekt für das `HTMLDetailsElement`-Ereignis {{domxref("HTMLDetailsElement.toggle_event", "toggle")}}, das ausgelöst wird, wenn ein `<details>`-Element zwischen geöffnet und geschlossen umgeschaltet wird.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : Erstellt ein `ToggleEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand darstellt, in den das Element übergeht.
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : Ein String (entweder `"open"` oder `"closed"`), der den Zustand darstellt, aus dem das Element wechselt.

## Beispiele

### Einfaches Beispiel

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover wird angezeigt");
  } else {
    console.log("Popover wird ausgeblendet");
  }
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
- [`beforetoggle`-Ereignis](/de/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle`-Ereignis](/de/docs/Web/API/HTMLElement/toggle_event)
