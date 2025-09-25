---
title: "Element: focusout-Ereignis"
short-title: focusout
slug: Web/API/Element/focusout_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`focusout`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verloren hat, nach dem [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignis. Die beiden Ereignisse unterscheiden sich dadurch, dass `focusout` eine Bubbling-Eigenschaft hat, während `blur` dies nicht hat.

Das Gegenteil von `focusout` ist das [`focusin`](/de/docs/Web/API/Element/focusin_event)-Ereignis, das ausgelöst wird, wenn das Element den Fokus erhält.

Das `focusout`-Ereignis ist nicht abbruchbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("focusout", (event) => { })
```

> [!NOTE]
> Es gibt keine `onfocusout`-Ereignishandler-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)_.

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Das Element, das den Fokus erhält, falls vorhanden.

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
> Die Spezifikation _UI Events_ beschreibt eine [Reihenfolge der Fokus-Ereignisse](/de/docs/Web/API/FocusEvent#order_of_events), die sich von der unterscheidet, die aktuelle Browser implementieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event)
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
