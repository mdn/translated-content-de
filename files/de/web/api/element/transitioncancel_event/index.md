---
title: "Element: transitioncancel-Ereignis"
short-title: transitioncancel
slug: Web/API/Element/transitioncancel_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef}}

Das **`transitioncancel`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) abgebrochen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("transitioncancel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontransitioncancel = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Beispiele

Dieser Code ruft ein Element ab, für das eine Transition definiert ist, und fügt einen Listener für das `transitioncancel`-Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitioncancel", () => {
  console.log("Transition canceled");
});
```

Dasselbe mit der Eigenschaft `ontransitioncancel` anstelle von `addEventListener()` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontransitioncancel` hinzugefügte Event-Listener ersetzt werden):

```js
const transition = document.querySelector(".transition");

transition.ontransitioncancel = () => {
  console.log("Transition canceled");
};
```

### Interaktives Beispiel

Im folgenden Beispiel verwenden wir ein einfaches {{htmlelement("div")}}-Element, für das eine Transition mit einer Verzögerung definiert ist:

```html
<div class="transition"></div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 2s;
}

.transition:hover {
  transform: rotate(90deg);
  background: transparent;
}
```

Wir fügen JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), `transitioncancel` und [`transitionend`](/de/docs/Web/API/Element/transitionend_event) ausgelöst werden. Um die Transition in diesem Beispiel abzubrechen, bewegen Sie den Mauszeiger vor ihrem Ende von der Box weg. Damit das `transitionend`-Ereignis ausgelöst wird, lassen Sie den Mauszeiger bis zum Ende der Transition über der Box.

```js
const message = document.querySelector(".message");
const el = document.querySelector(".transition");

el.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

el.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

el.addEventListener("transitioncancel", () => {
  message.textContent = "transitioncancel fired";
});

el.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

Das `transitioncancel`-Ereignis wird ausgelöst, wenn die Transition in einer der beiden Richtungen abgebrochen wird, nachdem das `transitionrun`-Ereignis aufgetreten ist und bevor das `transitionend`-Ereignis ausgelöst wird.

Wenn keine Verzögerung oder Dauer für die Transition festgelegt ist, beide Werte `0s` betragen oder keiner der beiden Werte deklariert ist, findet keine Transition statt und keines der Transition-Ereignisse wird ausgelöst.

Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Zugehörige Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
