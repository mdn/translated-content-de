---
title: "Element: transitionend-Event"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef}}

Das **`transitionend`**-Event wird ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgeschlossen ist. Falls ein Übergang vor Abschluss entfernt wird, beispielsweise wenn die {{cssxref("transition-property")}} entfernt wird oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Event nicht generiert.

Das `transitionend`-Event wird in beide Richtungen ausgelöst: sowohl wenn es in den Übergangszustand wechselt, als auch wenn es vollständig in den Standard- oder Nicht-Übergangszustand zurückkehrt. Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beides 0s ist oder keines von beiden angegeben ist, gibt es keinen Übergang und keines der Übergangs-Events wird ausgelöst. Wenn das `transitioncancel`-Event ausgelöst wird, wird das `transitionend`-Event nicht ausgelöst.

Dieses Event ist nicht abbruchbar.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("transitionend", (event) => { })

ontransitionend = (event) => { }
```

## Event-Typ

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternobjekt [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der mit dem Übergang verbundenen CSS-Eigenschaft enthält.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `Float`, der die Zeitdauer angibt, die der Übergang bereits läuft, in Sekunden, wenn dieses Event ausgelöst wird. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn der Übergang nicht auf einem Pseudoelement, sondern auf dem Element selbst läuft, ist dies ein leerer String: `''`.

## Beispiele

Dieser Code wählt ein Element aus, dem ein Übergang definiert wurde, und fügt einen Listener für das `transitionend`-Event hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Das Gleiche, aber unter Verwendung von `ontransitionend`:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einem Übergang inklusive Verzögerung gestylt ist:

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

Hierzu fügen wir JavaScript hinzu, um anzuzeigen, dass die Events [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` ausgelöst werden. In diesem Beispiel, um den Übergang abzubrechen, bewegen Sie den Mauszeiger vor dem Ende des Übergangs von der Übergangsbox weg. Damit das Ende des Übergangs-Events ausgelöst wird, bleiben Sie so lange über der Transition, bis der Übergang endet.

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

Das `transitionend`-Event wird in beide Richtungen ausgelöst: Wenn die Box fertig gedreht wird und die Deckkraft entweder 0 oder 1 erreicht, abhängig von der Richtung.

Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beides 0s ist oder keines von beiden angegeben ist, gibt es keinen Übergang und keines der Übergangs-Events wird ausgelöst.

Wenn das `transitioncancel`-Event ausgelöst wird, wird das `transitionend`-Event nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Events: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
