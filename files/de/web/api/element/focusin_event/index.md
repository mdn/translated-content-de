---
title: "Element: `focusin`-Ereignis"
short-title: focusin
slug: Web/API/Element/focusin_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`focusin`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält, nach dem [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis. Der Unterschied zwischen den beiden Ereignissen besteht darin, dass `focusin` blasenförmig nach oben wandert (bubbles), während `focus` dies nicht tut.

Das Gegenteil von `focusin` ist das [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignis, das ausgelöst wird, wenn das Element den Fokus verliert.

Das `focusin`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("focusin", (event) => { })
```

> [!NOTE]
> Es gibt keine `onfocusin`-Ereignisbehandlungs-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)_.

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
> Die _UI Events_-Spezifikation beschreibt eine [Reihenfolge von Fokus-Ereignissen](/de/docs/Web/API/FocusEvent#order_of_events), die sich von der unterscheidet, die aktuelle Browser implementieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- [Fokussieren: focus/blur](https://javascript.info/focus-blur)
