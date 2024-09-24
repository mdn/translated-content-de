---
title: "Element: focusin-Ereignis"
short-title: focusin
slug: Web/API/Element/focusin_event
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef}}

Das **`focusin`**-Ereignis tritt auf, wenn ein Element den Fokus erhält, nach dem {{domxref("Element/focus_event", "focus")}}-Ereignis. Die beiden Ereignisse unterscheiden sich darin, dass `focusin` propagiert wird, während `focus` dies nicht tut.

Das Gegenteil von `focusin` ist das {{domxref("Element/focusout_event", "focusout")}}-Ereignis, das auftritt, wenn das Element den Fokus verliert.

Das `focusin`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
addEventListener("focusin", (event) => {});
```

## Ereignistyp

Ein {{domxref("FocusEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten {{domxref("UIEvent")}} und indirekt von {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
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
> Die _UI Events_-Spezifikation beschreibt eine [Reihenfolge von Fokusereignissen](/de/docs/Web/API/FocusEvent#order_of_events), die sich von dem unterscheidet, was aktuelle Browser implementieren.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusout_event", "focusout")}}
- [Fokus: focus/blur](https://javascript.info/focus-blur)
