---
title: "Element: transitionend Ereignis"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Das **`transitionend`** Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgeschlossen ist. Wenn eine Transition vor der Fertigstellung entfernt wird, zum Beispiel wenn die {{cssxref("transition-property")}} entfernt oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht generiert.

Das `transitionend` Ereignis wird in beide Richtungen ausgelöst - sowohl beim Übergang in den Zielzustand als auch beim vollständigen Zurückkehren in den Standard- oder Nicht-Übergangszustand. Wenn es keine Übergangsverzögerung oder -dauer gibt, d.h. wenn beide 0s sind oder nicht deklariert sind, findet kein Übergang statt, und keines der Übergangsereignisse wird ausgelöst. Wenn das `transitioncancel` Ereignis ausgelöst wird, wird das `transitionend` Ereignis nicht ausgelöst.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("transitionend", (event) => {});

ontransitionend = (event) => {};
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitspanne in Sekunden angibt, die die Transition lief, als dieses Ereignis ausgelöst wurde. Dieser Wert wird nicht durch die {{cssxref("transition-delay")}} Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Läuft die Transition nicht auf einem Pseudo-Element, sondern auf dem Element, enthält es einen leeren String: `''`.

## Beispiele

Dieser Code holt sich ein Element, das eine definierte Transition hat, und fügt einen Listener für das `transitionend` Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Das gleiche, aber unter Verwendung von `ontransitionend`:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}} Element, das mit einer Transition inklusive einer Verzögerung gestylt ist:

```html
<div class="transition">Hover over me</div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgb(255 0 0 / 100%);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 1s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgb(255 0 0 / 0%);
}
```

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` Ereignisse ausgelöst werden. In diesem Beispiel, um die Transition abzubrechen, hören Sie auf, über das übergehende Kästchen zu fahren, bevor die Transition endet. Damit das Transition-Ende-Ereignis ausgelöst wird, bleiben Sie bis zum Ende der Transition über diesem.

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

Das `transitionend` Ereignis wird in beide Richtungen ausgelöst: wenn das Kästchen das Drehen beendet und die Opazität 0 oder 1 erreicht, je nach Richtung.

Wenn es keine Übergangsverzögerung oder -dauer gibt, d.h. wenn beide 0s sind oder nicht deklariert sind, findet kein Übergang statt, und keines der Übergangsereignisse wird ausgelöst.

Wenn das `transitioncancel` Ereignis ausgelöst wird, wird das `transitionend` Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
