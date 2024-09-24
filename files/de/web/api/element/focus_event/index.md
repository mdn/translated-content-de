---
title: "Element: focus-Ereignis"
short-title: focus
slug: Web/API/Element/focus_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`focus`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält. Das Ereignis wird nicht weitergeleitet, aber das darauf folgende {{domxref("Element/focusin_event", "focusin")}}-Ereignis wird weitergeleitet.

Das Gegenteil von `focus` ist das {{domxref("Element/blur_event", "blur")}}-Ereignis, das ausgelöst wird, wenn das Element den Fokus _verliert_.

Das `focus`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## Ereignistyp

Ein {{domxref("FocusEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil {{domxref("UIEvent")}}, und indirekt von {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
  - : Das Element, das den Fokus verliert, falls vorhanden.

## Beispiele

### Einfaches Beispiel

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
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
```

#### Ergebnis

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### Ereignisdelegierung

Es gibt zwei Möglichkeiten, die Ereignisdelegierung für dieses Ereignis zu implementieren: durch die Verwendung des {{domxref("Element/focusin_event", "focusin")}}-Ereignisses oder durch Setzen des `useCapture`-Parameters von {{domxref("EventTarget.addEventListener()", "addEventListener()")}} auf `true`.

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

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true,
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);
```

#### Ergebnis

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode {{domxref("HTMLElement.focus()")}}
- Verwandte Ereignisse: {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- Dieses Ereignis bei `Window`-Zielen: {{domxref("Window/focus_event", "focus")}}-Ereignis
- [Focusing: focus/blur](https://javascript.info/focus-blur)
