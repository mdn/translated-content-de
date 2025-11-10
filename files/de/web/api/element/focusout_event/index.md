---
title: "Element: focusout-Ereignis"
short-title: focusout
slug: Web/API/Element/focusout_event
l10n:
  sourceCommit: 8537b5ece30237256a68275574022c76b8b85d51
---

{{APIRef("UI Events")}}

Das **`focusout`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verloren hat, nach dem [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignis. Die beiden Ereignisse unterscheiden sich darin, dass `focusout` aufsteigt, während `blur` dies nicht tut.

Das Gegenteil von `focusout` ist das [`focusin`](/de/docs/Web/API/Element/focusin_event)-Ereignis, das ausgelöst wird, wenn das Element den Fokus erhält.

Das `focusout`-Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("focusout", (event) => { })

onfocusout = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

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
> Die _UI Events_-Spezifikation beschreibt eine [Reihenfolge von Fokusereignissen](/de/docs/Web/API/FocusEvent#order_of_events), die sich von der aktuellen Implementierung in Browsern unterscheidet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event)
- [Fokussieren: focus/blur](https://javascript.info/focus-blur)
