---
title: "Element: transitionend event"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

Das **`transitionend`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) abgeschlossen ist. Falls eine Transition vor Abschluss entfernt wird, zum Beispiel wenn die {{cssxref("transition-property")}} entfernt wird oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht ausgelöst.

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst – sowohl wenn es in den Übergangszustand wechselt, als auch wenn es vollständig auf den Standard- oder Nicht-Übergangszustand zurückkehrt. Gibt es keine Transition-Verzögerung oder -Dauer, also wenn beide 0 Sekunden sind oder keiner von beiden deklariert wurde, findet keine Transition statt, und keiner der Transition-Ereignisse wird ausgelöst. Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("transitionend", (event) => { })

ontransitionend = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-`Event`_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Länge der Zeit in Sekunden angibt, die die Transition lief, als dieses Ereignis ausgelöst wurde. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieser Code ermittelt ein Element, das eine definierte Transition hat, und fügt einen Listener für das `transitionend`-Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Das Gleiche, aber mit `ontransitionend`:

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

Dazu werden wir etwas JavaScript hinzufügen, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` ausgelöst werden. In diesem Beispiel, um die Transition abzubrechen, hören Sie auf, über das Element zu schweben, das sich in der Transition befindet, bevor die Transition endet. Damit das Transition-Endereignis ausgelöst wird, bleiben Sie über der Transition, bis die Transition endet.

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

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst: wenn das Element seine Drehung beendet und die Deckkraft 0 oder 1 erreicht, abhängig von der Richtung.

Gibt es keine Transition-Verzögerung oder -Dauer, also wenn beide 0 Sekunden sind oder keiner von beiden deklariert wurde, findet keine Transition statt, und keiner der Transition-Ereignisse wird ausgelöst.

Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
