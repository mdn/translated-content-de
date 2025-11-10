---
title: "Element: `blur`-Ereignis"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verliert. Das Ereignis wird nicht weitergereicht, jedoch das nachfolgende [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignis wird weitergeleitet.

Ein Element verliert den Fokus, wenn ein anderes Element ausgewählt wird. Ein Element verliert auch den Fokus, wenn ein Stil angewendet wird, der keinen Fokus zulässt, wie z.B. `hidden`, oder wenn das Element aus dem Dokument entfernt wird — in beiden Fällen wird der Fokus auf das `body`-Element (Ansichtsfenster) verschoben. Beachten Sie jedoch, dass `blur` nicht ausgelöst wird, wenn ein fokussiertes Element aus dem Dokument entfernt wird.

<!-- Vor FF110 haben Elemente den Fokus nicht verloren, wenn sich der Stil beispielsweise in hidden änderte -->

Das Gegenteil von `blur` ist das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis, das ausgelöst wird, wenn das Element den Fokus _erhalten_ hat.

Das `blur`-Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Das Element, das den Fokus erhält, falls vorhanden.

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

Es gibt zwei Möglichkeiten, eine Ereignisdelegierung für dieses Ereignis zu implementieren: durch Verwendung des [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignisses oder durch Setzen des `useCapture`-Parameters von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true`.

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

Der Wert von [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) variiert zwischen Browsern, während dieses Ereignis verarbeitet wird ([Firefox bug 452307](https://bugzil.la/452307)): IE10 setzt es auf das Element, auf das der Fokus verschoben wird, während Firefox und Chrome es oft auf den `body` des Dokuments setzen.

## Siehe auch

- Die [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)-Methode
- Verwandte Ereignisse: [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis bei `Window`-Zielen: [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignis
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
