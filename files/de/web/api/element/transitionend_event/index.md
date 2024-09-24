---
title: "Element: transitionend Ereignis"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Das **`transitionend`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgeschlossen ist. Falls eine Transition vor dem Abschluss entfernt wird, beispielsweise wenn die {{cssxref("transition-property")}} entfernt oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht generiert.

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst - sowohl wenn es in den transitionierten Zustand wechselt, als auch wenn es vollständig in den Standard- oder nicht transitionierten Zustand zurückkehrt. Wenn es keine Verzögerung oder Dauer für die Transition gibt, wenn beide 0s sind oder keine deklariert sind, gibt es keine Transition, und keines der Transition-Ereignisse wird ausgelöst. Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("transitionend", (event) => {});

ontransitionend = (event) => {};
```

## Ereignistyp

Ein {{domxref("TransitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten {{domxref("Event")}}_.

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Laufzeit des Übergangs in Sekunden angibt, wenn dieses Ereignis ausgelöst wird. Dieser Wert wird nicht von der Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation abläuft. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element selbst abläuft, ist es ein leerer String: `''`.

## Beispiele

Dieser Code erhält ein Element, das eine definierte Transition hat, und fügt einen Listener für das `transitionend`-Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Dasselbe, aber unter Verwendung von `ontransitionend`:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einer Transition und einer Verzögerung gestylt ist:

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

Zu diesem Beispiel fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` ausgelöst werden. In diesem Beispiel, um die Transition abzubrechen, hören Sie auf, über das sich bewegende Feld zu schweben, bevor die Transition endet. Damit das Transition-Ende-Ereignis ausgelöst wird, bleiben Sie über dem Transitionselement, bis die Transition endet.

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

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst: wenn das Feld zu drehen aufhört und die Deckkraft 0 oder 1 erreicht, abhängig von der Richtung.

Wenn es keine Verzögerung oder Dauer für die Transition gibt, wenn beide 0s sind oder keine deklariert sind, gibt es keine Transition, und keines der Transition-Ereignisse wird ausgelöst.

Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("TransitionEvent")}} Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
