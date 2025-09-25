---
title: "Element: focusin-Event"
short-title: focusin
slug: Web/API/Element/focusin_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`focusin`**-Event wird ausgelöst, wenn ein Element den Fokus erhalten hat, nach dem [`focus`](/de/docs/Web/API/Element/focus_event)-Event. Der Unterschied zwischen den beiden Events besteht darin, dass `focusin` aufwärts durch die Event-Chain „bubbelt“, während `focus` das nicht tut.

Das Gegenteil von `focusin` ist das [`focusout`](/de/docs/Web/API/Element/focusout_event)-Event, das ausgelöst wird, wenn das Element den Fokus verliert.

Das `focusin`-Event kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("focusin", (event) => { })
```

> [!NOTE]
> Es gibt keine `onfocusin`-Eventhandler-Eigenschaft für dieses Event.

## Eventtyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Event-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)_.

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Das Element, das den Fokus verliert, falls vorhanden.

## Beispiele

### Live-Beispiel

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
```

#### Ergebnis

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Die _UI Events_-Spezifikation beschreibt eine [Reihenfolge der Fokus-Events](/de/docs/Web/API/FocusEvent#order_of_events), die sich von dem unterscheidet, was aktuelle Browser implementieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Events: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- [Fokussieren: focus/blur](https://javascript.info/focus-blur)
