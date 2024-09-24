---
title: "Element: blur-Ereignis"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{APIRef}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verliert. Das Ereignis wird nicht weitergeleitet, das zugehörige {{domxref("Element/focusout_event", "focusout")}}-Ereignis, das darauf folgt, wird jedoch weitergeleitet.

Ein Element verliert den Fokus, wenn ein anderes Element ausgewählt wird.
Ein Element verliert auch den Fokus, wenn ein Stil angewendet wird, der keinen Fokus zulässt, wie z. B. `hidden`, oder wenn das Element aus dem Dokument entfernt wird – in beiden Fällen wechselt der Fokus zum `body`-Element (Viewport).
Beachten Sie jedoch, dass `blur` nicht ausgelöst wird, wenn ein fokussiertes Element aus dem Dokument entfernt wird.

<!-- Vor FF110 verloren Elemente den Fokus nicht, wenn sich der Stil zu hidden (sagen wir) änderte -->

Das Gegenteil von `blur` ist das {{domxref("Element/focus_event", "focus")}}-Ereignis, das ausgelöst wird, wenn das Element den Fokus _erhalten_ hat.

Das `blur`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("blur", (event) => {});

onblur = (event) => {};
```

## Ereignistyp

Ein {{domxref("FocusEvent")}}. Erbt von {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten {{domxref("UIEvent")}} und indirekt von {{domxref("Event")}}._

- {{domxref("FocusEvent.relatedTarget")}}
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

### Ereignisdelegation

Es gibt zwei Möglichkeiten, die Ereignisdelegation für dieses Ereignis zu implementieren: durch Verwendung des {{domxref("Element/focusout_event", "focusout")}}-Ereignisses oder durch Setzen des `useCapture`-Parameters von {{domxref("EventTarget.addEventListener()", "addEventListener()")}} auf `true`.

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

Der Wert von {{DOMxRef("Document.activeElement")}} variiert zwischen den Browsern, während dieses Ereignis behandelt wird ([Firefox-Bug 452307](https://bugzil.la/452307)): IE10 setzt es auf das Element, zu dem der Fokus wechseln wird, während Firefox und Chrome es oft auf den `body` des Dokuments setzen.

## Siehe auch

- Die Methode {{domxref("HTMLElement.blur()")}}
- Verwandte Ereignisse: {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/focusin_event", "focusin")}}, {{domxref("Element/focusout_event", "focusout")}}
- Dieses Ereignis bei `Window`-Zielen: {{domxref("Window/blur_event", "blur")}}-Ereignis
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
