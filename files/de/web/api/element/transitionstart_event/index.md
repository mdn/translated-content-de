---
title: "Element: transitionstart-Ereignis"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef}}

Das **`transitionstart`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) tatsächlich begonnen hat, also nachdem eine etwaige {{cssxref("transition-delay")}} abgelaufen ist.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("transitionstart", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontransitionstart = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Beispiele

Dieser Code fügt einen Listener für das `transitionstart`-Ereignis hinzu:

```js
element.addEventListener("transitionstart", () => {
  console.log("Started transitioning");
});
```

Das Gleiche, jedoch mit der Eigenschaft `ontransitionstart` statt `addEventListener()` (beachten Sie, dass dadurch gegebenenfalls andere über `ontransitionstart` hinzugefügte Event-Listener ersetzt werden):

```js
element.ontransitionstart = () => {
  console.log("Started transitioning");
};
```

### Interaktives Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einer Transition gestaltet ist, die eine Verzögerung enthält:

```html
<div class="transition">Hover over me</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: transparent;
}
```

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, wann die Ereignisse `transitionstart` und [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) ausgelöst werden.

```js
const transition = document.querySelector(".transition");
const message = document.querySelector(".message");

transition.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

transition.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

transition.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live example', '100%', '170') }}

Der Unterschied besteht darin:

- `transitionrun` wird ausgelöst, wenn die Transition erstellt wird (also zu Beginn einer etwaigen Verzögerung).
- `transitionstart` wird ausgelöst, wenn die eigentliche Animation begonnen hat (also am Ende einer etwaigen Verzögerung).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionend`](/de/docs/Web/API/Element/transitionend_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
