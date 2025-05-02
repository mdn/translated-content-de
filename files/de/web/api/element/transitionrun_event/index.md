---
title: "Element: transitionrun-Ereignis"
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`transitionrun`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) erstmals erstellt wird, d.h. bevor eine {{cssxref("transition-delay")}} begonnen hat.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("transitionrun", (event) => { })

ontransitionrun = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, das die Zeit in Sekunden angibt, die die Transition beim Auslösen dieses Ereignisses bereits läuft. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ist der String leer: `''`.

## Beispiele

Dieser Code fügt einen Listener für das `transitionrun`-Ereignis hinzu:

```js
el.addEventListener("transitionrun", () => {
  console.log(
    "Transition is running but hasn't necessarily started transitioning yet",
  );
});
```

Das Gleiche, aber unter Verwendung der `ontransitionrun`-Eigenschaft anstelle von `addEventListener()`:

```js
el.ontransitionrun = () => {
  console.log(
    "Transition started running, and will start transitioning when the transition delay has expired",
  );
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einer Transition, die eine Verzögerung enthält, gestylt ist:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, wo die [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)- und `transitionrun`-Ereignisse ausgelöst werden.

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

- `transitionrun` ausgelöst wird, wenn die Transition erstellt wird (d.h. zu Beginn einer Verzögerung).
- `transitionstart` wird ausgelöst, wenn die eigentliche Animation beginnt (d.h. am Ende einer Verzögerung).

Das `transitionrun`-Ereignis tritt auch dann auf, wenn die Transition vor dem Ablauf der Verzögerung abgebrochen wird. Wenn es keine Transition-Verzögerung gibt oder wenn die transition-delay negativ ist, werden sowohl `transitionrun` als auch `transitionstart` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionend`](/de/docs/Web/API/Element/transitionend_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
