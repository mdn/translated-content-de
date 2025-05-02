---
title: "Element: transitionend-Ereignis"
short-title: transitionend
slug: Web/API/Element/transitionend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`transitionend`**-Ereignis wird ausgelöst, wenn eine [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgeschlossen ist. Wenn ein Übergang vor seiner Vollendung entfernt wird, z.B. wenn die {{cssxref("transition-property")}} entfernt wird oder {{cssxref("display")}} auf `none` gesetzt wird, wird das Ereignis nicht generiert.

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst – sowohl wenn es zum Übergangszustand wechselt, als auch wenn es vollständig zum Standard- oder Nicht-Übergangszustand zurückkehrt. Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beide 0s sind oder keines deklariert ist, gibt es keinen Übergang und keines der Übergangsereignisse wird ausgelöst. Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

Dieses Ereignis ist nicht abbrechbar.

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

_Erbt auch Eigenschaften von seinem Eltern-`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit dem Übergang verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer angibt, wie lange der Übergang beim Auslösen dieses Ereignisses bereits läuft, in Sekunden. Dieser Wert wird nicht von der {{cssxref("transition-delay")}}-Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `::`, der den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn der Übergang nicht auf einem Pseudoelement, sondern auf dem Element läuft, ist der String leer: `''`.

## Beispiele

Dieser Code holt sich ein Element, das einen definierten Übergang hat, und fügt einen Listener für das `transitionend`-Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitionend", () => {
  console.log("Transition ended");
});
```

Das gleiche, aber mit `ontransitionend`:

```js
const transition = document.querySelector(".transition");

transition.ontransitionend = () => {
  console.log("Transition ended");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einem Übergang gestylt ist, der eine Verzögerung beinhaltet:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event) und `transitionend` ausgelöst werden. In diesem Beispiel, um den Übergang abzubrechen, hören Sie auf, über das übergehende Feld zu schweben, bevor der Übergang endet. Damit das Übergangsende-Ereignis ausgelöst wird, bleiben Sie über den Übergang bis zum Ende schweben.

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

Das `transitionend`-Ereignis wird in beide Richtungen ausgelöst: wenn das Kästchen das Drehen beendet und die Deckkraft 0 oder 1 erreicht, je nach Richtung.

Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beide 0s sind oder keines deklariert ist, gibt es keinen Übergang, und keines der Übergangsereignisse wird ausgelöst.

Wenn das `transitioncancel`-Ereignis ausgelöst wird, wird das `transitionend`-Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
