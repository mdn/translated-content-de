---
title: "Element: blur-Ereignis"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`blur`**-Ereignis wird ausgelöst, wenn ein Element den Fokus verliert. Das Ereignis wird nicht in der DOM-Hierarchie nach oben weitergegeben; das anschließend ausgelöste, verwandte Ereignis [`focusout`](/de/docs/Web/API/Element/focusout_event) dagegen schon.

Ein Element verliert den Fokus, wenn ein anderes Element ausgewählt wird. Es verliert den Fokus auch, wenn ein Stil angewendet wird, der keinen Fokus zulässt, etwa `hidden`, oder wenn das Element aus dem Dokument entfernt wird. In beiden Fällen wechselt der Fokus zum `body`-Element (Viewport). Beachten Sie, dass sich Browser unterschiedlich verhalten, wenn ein fokussiertes Element aus dem Dokument entfernt wird: In Chromium-basierten Browsern löst dies ein `blur`-Ereignis aus, in Firefox hingegen nicht.

<!-- Prior to FF110 elements did not lose focus if the style changed to hidden (say) -->

Das Gegenstück zu `blur` ist das Ereignis [`focus`](/de/docs/Web/API/Element/focus_event), das ausgelöst wird, wenn das Element den Fokus _erhält_.

Das `blur`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("blur", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle belegen:

```js-nolint
onblur = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Es erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

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

Es gibt zwei Möglichkeiten, die Ereignisdelegation für dieses Ereignis umzusetzen: Verwenden Sie das Ereignis [`focusout`](/de/docs/Web/API/Element/focusout_event) oder setzen Sie den Parameter `useCapture` von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true`.

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

Der Wert von [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) unterscheidet sich zwischen Browsern, während dieses Ereignis verarbeitet wird ([Firefox-Bug 452307](https://bugzil.la/452307)): IE10 setzt ihn auf das Element, zu dem der Fokus wechseln wird, während Firefox und Chrome ihn häufig auf das `body`-Element des Dokuments setzen.

## Siehe auch

- Die Methode [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
- Verwandte Ereignisse: [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis für `Window`-Ziele: [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignis
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
