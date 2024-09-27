---
title: "Element: focusout-Ereignis"
short-title: focusout
slug: Web/API/Element/focusout_event
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef}}

Das **`focusout`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verloren hat, nach dem [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignis. Der Unterschied zwischen den beiden Ereignissen liegt darin, dass `focusout` weitergegeben wird, während `blur` dies nicht tut.

Das Gegenteil von `focusout` ist das [`focusin`](/de/docs/Web/API/Element/focusin_event)-Ereignis, das ausgelöst wird, wenn das Element den Fokus erhält.

Das `focusout`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js
addEventListener("focusout", (event) => {});
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereignis-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)_.

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
> Die _UI Events_-Spezifikation beschreibt eine [Reihenfolge der Fokusevents](/de/docs/Web/API/FocusEvent#order_of_events), die von den aktuellen Browsern unterschiedlich implementiert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event)
- [Fokussieren: focus/blur](https://javascript.info/focus-blur)
