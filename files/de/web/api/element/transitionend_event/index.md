---
title: "Element: transitionend Ereignis"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef}}

Das **`transitionend`** Ereignis wird ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions/Using) abgeschlossen ist. Falls ein Übergang vor seiner Vollendung entfernt wird, etwa wenn die {{cssxref("transition-property")}} entfernt oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht generiert.

Das `transitionend` Ereignis wird in beide Richtungen ausgelöst - sowohl wenn es zum Übergangszustand wechselt als auch wenn es vollständig in den Standard- oder Nicht-Übergangszustand zurückkehrt. Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beide auf 0s gesetzt sind oder keiner erklärt ist, gibt es keinen Übergang und keines der Übergangsereignisse wird ausgelöst. Wenn das `transitioncancel` Ereignis ausgelöst wird, wird das `transitionend` Ereignis nicht ausgelöst.

Dieses Ereignis ist nicht stornierbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("transitionend", (event) => { })

ontransitionend = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Beispiele

Dieser Code holt ein Element, das einen definierten Übergang hat, und fügt einen Listener für das `transitionend` Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Dasselbe, aber mit `ontransitionend`:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einem Übergang, der eine Verzögerung beinhaltet, gestaltet ist:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` Ereignisse ausgelöst werden. In diesem Beispiel, um den Übergang abzubrechen, hören Sie auf, über dem Übergangselement zu schweben, bevor der Übergang endet. Damit das `transitionend` Ereignis ausgelöst wird, bleiben Sie über dem Übergang, bis der Übergang endet.

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

Das `transitionend` Ereignis wird in beide Richtungen ausgelöst: wenn das Kästchen das Drehen beendet und die Deckkraft 0 oder 1 erreicht, abhängig von der Richtung.

Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beide auf 0s gesetzt sind oder keiner erklärt ist, gibt es keinen Übergang und keines der Übergangsereignisse wird ausgelöst.

Wenn das `transitioncancel` Ereignis ausgelöst wird, wird das `transitionend` Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
