---
title: "Element: transitioncancel-Ereignis"
short-title: transitioncancel
slug: Web/API/Element/transitioncancel_event
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef}}

Das **`transitioncancel`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) abgebrochen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandlereigenschaft fest.

```js-nolint
addEventListener("transitioncancel", (event) => { })

ontransitioncancel = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Beispiele

Dieser Code erhält ein Element, das eine definierte Transition hat, und fügt einen Listener für das `transitioncancel`-Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitioncancel", () => {
  console.log("Transition canceled");
});
```

Dasselbe, aber unter Verwendung der `ontransitioncancel`-Eigenschaft anstelle von `addEventListener()`:

```js
const transition = document.querySelector(".transition");

transition.ontransitioncancel = () => {
  console.log("Transition canceled");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einer Transition mit verzögerter Startzeit gestylt ist:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), `transitioncancel` und [`transitionend`](/de/docs/Web/API/Element/transitionend_event) ausgelöst werden. In diesem Beispiel, um die Transition abzubrechen, hören Sie auf, über das transformierende Kästchen zu fahren, bevor die Transition endet. Damit das `transitionend`-Ereignis ausgelöst wird, bleiben Sie über der Transition, bis diese endet.

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

Das `transitioncancel`-Ereignis wird ausgelöst, wenn die Transition in beide Richtungen nach Auftreten des `transitionrun`-Ereignisses und vor dem Auslösen des `transitionend`-Ereignisses abgebrochen wird.

Falls es keine Übergangsverzögerung oder -dauer gibt, wenn beide 0s betragen oder keines deklariert ist, gibt es keine Transition und keines der Transition-Ereignisse wird ausgelöst.

Falls das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
