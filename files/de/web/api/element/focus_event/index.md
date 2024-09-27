---
title: "Element: focus Event"
short-title: focus
slug: Web/API/Element/focus_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`focus`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhält. Das Ereignis wird nicht weitergeleitet, aber das nachfolgende [`focusin`](/de/docs/Web/API/Element/focusin_event) Ereignis wird weitergeleitet.

Das Gegenteil von `focus` ist das [`blur`](/de/docs/Web/API/Element/blur_event) Ereignis, das ausgelöst wird, wenn das Element den Fokus _verloren_ hat.

Das `focus`-Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignisbehandlereigenschaft fest.

```js
addEventListener("focus", (event) => {});

onfocus = (event) => {};
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
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

### Ereignisdelegation

Es gibt zwei Möglichkeiten, die Ereignisdelegation für dieses Ereignis zu implementieren: durch Nutzung des [`focusin`](/de/docs/Web/API/Element/focusin_event) Ereignisses oder durch Setzen des `useCapture`-Parameters von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true`.

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

- Die Methode [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis auf `Window`-Zielen: [`focus`](/de/docs/Web/API/Window/focus_event) Ereignis
- [Focusing: focus/blur](https://javascript.info/focus-blur)
