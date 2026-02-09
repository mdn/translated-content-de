---
title: "Element: blur-Ereignis"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: 8ee7b342ad04d3414a678080987f806bb1ea5afa
---

{{APIRef("UI Events")}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verliert. Das Ereignis wird nicht weitergereicht, jedoch das darauf folgende verwandte [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignis wird weitergereicht.

Ein Element verliert den Fokus, wenn ein anderes Element ausgewählt wird.
Ein Element verliert auch den Fokus, wenn ein Stil angewendet wird, der keinen Fokus erlaubt, wie z.B. `hidden`, oder wenn das Element aus dem Dokument entfernt wird — in beiden Fällen wird der Fokus auf das `body`-Element (Viewport) verschoben.
Beachten Sie, dass das Verhalten des Browsers unterschiedlich ist, wenn ein fokussiertes Element aus dem Dokument entfernt wird. In Chromium-basierten Browsern löst das Entfernen eines fokussierten Elements ein `blur`-Ereignis aus, während es in Firefox nicht der Fall ist.

<!-- Vor FF110 verloren Elemente den Fokus nicht, wenn sich der Stil zu hidden (zum Beispiel) änderte -->

Das Gegenteil von `blur` ist das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis, das ausgelöst wird, wenn ein Element den Fokus _erhält_.

Das `blur`-Ereignis ist nicht abgebrochen werden kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

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

Es gibt zwei Möglichkeiten, die Ereignisdelegierung für dieses Ereignis zu implementieren: durch Verwendung des [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignisses oder durch Setzen des `useCapture`-Parameters von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true`.

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

Der Wert von [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) variiert zwischen den Browsern, während dieses Ereignis behandelt wird ([Firefox-Bug 452307](https://bugzil.la/452307)): IE10 setzt ihn auf das Element, zu dem der Fokus wechseln wird, während Firefox und Chrome ihn oft auf das `body` des Dokuments setzen.

## Siehe auch

- Die Methode [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
- Verwandte Ereignisse: [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis mit `Window`-Zielen: [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignis
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
