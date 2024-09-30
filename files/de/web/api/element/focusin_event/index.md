---
title: "Element: focusin Ereignis"
short-title: focusin
slug: Web/API/Element/focusin_event
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef}}

Das **`focusin`** Ereignis tritt auf, wenn ein Element den Fokus erhalten hat, nach dem [`focus`](/de/docs/Web/API/Element/focus_event) Ereignis. Die beiden Ereignisse unterscheiden sich darin, dass `focusin` durchblubbert, während `focus` dies nicht tut.

Das Gegenteil von `focusin` ist das [`focusout`](/de/docs/Web/API/Element/focusout_event) Ereignis, das ausgelöst wird, wenn das Element den Fokus verloren hat.

Das `focusin` Ereignis ist nicht abbruchbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js
addEventListener("focusin", (event) => {});
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)_.

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
> Die _UI Events_ Spezifikation beschreibt eine [Reihenfolge der Fokus-Ereignisse](/de/docs/Web/API/FocusEvent#order_of_events), die von den aktuellen Browsern anders implementiert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- [Fokus: focus/blur](https://javascript.info/focus-blur)
