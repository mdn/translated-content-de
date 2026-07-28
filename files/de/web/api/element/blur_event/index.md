---
title: "Element: blur event"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verliert. Das Ereignis ist nicht auf Empfehlungen weiterleitbar, jedoch das zugehörige [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignis, das darauf folgt.

Ein Element verliert den Fokus, wenn ein anderes Element ausgewählt wird.
Ein Element verliert auch den Fokus, wenn ein Stil angewendet wird, der keinen Fokus erlaubt, wie `hidden`, oder wenn das Element aus dem Dokument entfernt wird — in beiden Fällen bewegt sich der Fokus auf das `body`-Element (Ansichtsfenster).
Beachten Sie, dass das Verhalten des Browsers unterschiedlich ist, wenn ein fokussiertes Element aus dem Dokument entfernt wird. In auf Chromium basierten Browsern löst das Entfernen eines fokussierten Elements ein `blur`-Ereignis aus, während es in Firefox nicht der Fall ist.

<!-- Vor FF110 verloren Elemente den Fokus nicht, wenn der Stil beispielsweise auf hidden geändert wurde -->

Das Gegenteil von `blur` ist das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis, welches ausgelöst wird, wenn das Element den Fokus _erhält_.

Das `blur`-Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
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

### Ereignisdelegation

Es gibt zwei Möglichkeiten, die Ereignisdelegation für dieses Ereignis zu implementieren: durch Verwendung des [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignisses oder durch Setzen des `useCapture`-Parameters von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true`.

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

Der Wert von [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) variiert zwischen den Browsern, während dieses Ereignis behandelt wird ([Firefox-Fehler 452307](https://bugzil.la/452307)): IE10 setzt es auf das Element, zu dem der Fokus wechseln wird, während Firefox und Chrome es oft auf den `body` des Dokuments setzen.

## Siehe auch

- Die Methode [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
- Verwandte Ereignisse: [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis auf `Window`-Zielen: [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignis
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
