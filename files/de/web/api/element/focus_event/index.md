---
title: "Element: focus-Ereignis"
short-title: focus
slug: Web/API/Element/focus_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`focus`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält. Das Ereignis wird nicht nach oben weitergereicht, jedoch das darauf folgende verwandte [`focusin`](/de/docs/Web/API/Element/focusin_event)-Ereignis wird nach oben weitergereicht.

Das Gegenteil von `focus` ist das [`blur`](/de/docs/Web/API/Element/blur_event)-Ereignis, welches ausgelöst wird, wenn das Element den Fokus _verloren_ hat.

Das `focus`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandler-Eigenschaft fest.

```js-nolint
addEventListener("focus", (event) => { })

onfocus = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

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

Es gibt zwei Möglichkeiten, die Ereignisdelegierung für dieses Ereignis zu implementieren: durch die Verwendung des [`focusin`](/de/docs/Web/API/Element/focusin_event)-Ereignisses oder indem der `useCapture`-Parameter von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true` gesetzt wird.

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

- Die [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode
- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis bei `Window`-Zielen: [`focus`](/de/docs/Web/API/Window/focus_event)-Ereignis
- [Fokusierung: focus/blur](https://javascript.info/focus-blur)
