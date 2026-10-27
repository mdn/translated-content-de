---
title: "Element: transitionrun-Ereignis"
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef}}

Das **`transitionrun`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) erstmals erstellt wird, also bevor eine durch {{cssxref("transition-delay")}} festgelegte Verzögerung begonnen hat.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("transitionrun", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontransitionrun = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Beispiele

Dieser Code fügt einen Listener für das `transitionrun`-Ereignis hinzu:

```js
el.addEventListener("transitionrun", () => {
  console.log(
    "Transition is running but hasn't necessarily started transitioning yet",
  );
});
```

Dasselbe Beispiel verwendet die Eigenschaft `ontransitionrun` anstelle von `addEventListener()`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontransitionrun` hinzugefügte Event-Listener ersetzt werden:

```js
el.ontransitionrun = () => {
  console.log(
    "Transition started running, and will start transitioning when the transition delay has expired",
  );
};
```

### Interaktives Beispiel

Im folgenden Beispiel wird ein einfaches {{htmlelement("div")}}-Element mit einer Transition gestaltet, die eine Verzögerung enthält:

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

Dazu fügen wir JavaScript hinzu, um anzuzeigen, wann die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event) und `transitionrun` ausgelöst werden.

```js
const el = document.querySelector(".transition");
const message = document.querySelector(".message");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

Der Unterschied besteht darin, dass:

- `transitionrun` ausgelöst wird, wenn die Transition erstellt wird (also zu Beginn einer etwaigen Verzögerung).
- `transitionstart` ausgelöst wird, wenn die eigentliche Animation beginnt (also am Ende einer etwaigen Verzögerung).

`transitionrun` wird auch dann ausgelöst, wenn die Transition vor Ablauf der Verzögerung abgebrochen wird. Wenn keine Verzögerung für die Transition festgelegt ist oder `transition-delay` negativ ist, werden sowohl `transitionrun` als auch `transitionstart` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionend`](/de/docs/Web/API/Element/transitionend_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
