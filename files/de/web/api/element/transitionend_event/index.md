---
title: "Element: transitionend-Ereignis"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef}}

Das **`transitionend`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) abgeschlossen ist. Wird eine Transition vor ihrem Abschluss entfernt, etwa weil {{cssxref("transition-property")}} entfernt oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht ausgelöst.

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst: wenn der Übergang zum Zielzustand abgeschlossen ist und wenn die Rückkehr zum Standardzustand oder zum Zustand ohne Transition vollständig abgeschlossen ist. Wenn weder eine Verzögerung noch eine Dauer für die Transition festgelegt ist oder beide `0s` betragen, findet keine Transition statt und keines der Transition-Ereignisse wird ausgelöst. Wird das `transitioncancel`-Ereignis ausgelöst, wird das `transitionend`-Ereignis nicht ausgelöst.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("transitionend", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ontransitionend = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Beispiele

Dieser Code ruft ein Element ab, für das eine Transition definiert ist, und fügt einen Listener für das `transitionend`-Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Dasselbe mit `ontransitionend` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontransitionend` hinzugefügte Event-Listener ersetzt werden):

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Interaktives Beispiel

Im folgenden Beispiel verwenden wir ein einfaches {{htmlelement("div")}}-Element, für das eine Transition mit Verzögerung definiert ist:

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

Dazu fügen wir JavaScript hinzu, das anzeigt, wann die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` ausgelöst werden. Um die Transition in diesem Beispiel abzubrechen, bewegen Sie den Mauszeiger von der Box weg, bevor die Transition endet. Damit das Ereignis `transitionend` ausgelöst wird, lassen Sie den Mauszeiger bis zum Ende der Transition über der Box.

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

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst: wenn die Drehung der Box abgeschlossen ist und die Deckkraft je nach Richtung den Wert 0 oder 1 erreicht.

Wenn weder eine Verzögerung noch eine Dauer für die Transition festgelegt ist oder beide `0s` betragen, findet keine Transition statt und keines der Transition-Ereignisse wird ausgelöst.

Wird das `transitioncancel`-Ereignis ausgelöst, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
