---
title: "Element: focusout-Ereignis"
short-title: focusout
slug: Web/API/Element/focusout_event
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef}}

Das **`focusout`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verloren hat, nach dem {{domxref("Element/blur_event", "blur")}}-Ereignis. Die beiden Ereignisse unterscheiden sich darin, dass `focusout` bubblet, während `blur` dies nicht tut.

Das Gegenteil von `focusout` ist das {{domxref("Element/focusin_event", "focusin")}}-Ereignis, das ausgelöst wird, wenn das Element den Fokus erhalten hat.

Das `focusout`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
addEventListener("focusout", (event) => {});
```

## Ereignistyp

Ein {{domxref("FocusEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Eltern-{{domxref("UIEvent")}}, und indirekt von {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
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
> Die _UI Events_-Spezifikation beschreibt eine [Reihenfolge von Fokus-Ereignissen](/de/docs/Web/API/FocusEvent#order_of_events), die sich von der derzeitigen Implementierung in Browsern unterscheidet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}
- [Fokussieren: focus/blur](https://javascript.info/focus-blur)
