---
title: "Element: transitionend-Ereignis"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Das **`transitionend`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgeschlossen ist. Wenn eine Transition vor der Fertigstellung entfernt wird, z. B. wenn die {{cssxref("transition-property")}} entfernt wird oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht generiert.

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst - sowohl wenn der Übergang in den übergangenen Zustand abgeschlossen ist als auch wenn er vollständig in den Standard- oder nicht-übergangenen Zustand zurückkehrt. Wenn es keine Verzögerung oder Dauer für die Transition gibt, wenn beide 0s sind oder keiner deklariert ist, gibt es keine Transition, und keines der Transition-Ereignisse wird ausgelöst. Falls das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

Dieses Ereignis ist nicht stornierbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("transitionend", (event) => {});

ontransitionend = (event) => {};
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, wie lange die Transition bereits läuft, wenn dieses Ereignis ausgelöst wird. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element selbst läuft, ist der String leer: `''`.

## Beispiele

Dieser Code ruft ein Element ab, das eine definierte Transition hat, und fügt einen Listener für das `transitionend`-Ereignis hinzu:

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

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einer Transition gestylt ist, die eine Verzögerung beinhaltet:

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

Dazu fügen wir JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` ausgelöst werden. In diesem Beispiel, um die Transition zu beenden, hören Sie auf, über das übergangene Feld zu schweben, bevor die Transition endet. Damit das `transitionend`-Ereignis ausgelöst wird, bleiben Sie über der Transition, bis die Transition endet.

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

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst: Wenn die Box aufhört sich zu drehen und die Deckkraft 0 oder 1 erreicht, je nach Richtung.

Wenn es keine Verzögerung oder Dauer für die Transition gibt, wenn beide 0s sind oder keiner deklariert ist, gibt es keine Transition und keines der Transition-Ereignisse wird ausgelöst.

Falls das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
