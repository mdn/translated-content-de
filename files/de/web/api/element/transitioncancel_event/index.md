---
title: "Element: transitioncancel Ereignis"
short-title: transitioncancel
slug: Web/API/Element/transitioncancel_event
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Das **`transitioncancel`** Ereignis wird ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgebrochen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("transitioncancel", (event) => {});

ontransitioncancel = (event) => {};
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den CSS-Property-Namen enthält, der mit dem Übergang verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, seit der der Übergang läuft, wenn dieses Ereignis ausgelöst wird. Dieser Wert wird nicht von der {{cssxref("transition-delay")}} Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn der Übergang nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieser Code ruft ein Element ab, das einen definierten Übergang hat, und fügt einen Listener für das `transitioncancel` Ereignis hinzu:

```js
const transition = document.querySelector(".transition");

transition.addEventListener("transitioncancel", () => {
  console.log("Transition canceled");
});
```

Dasselbe, aber unter Verwendung der `ontransitioncancel` Eigenschaft anstelle von `addEventListener()`:

```js
const transition = document.querySelector(".transition");

transition.ontransitioncancel = () => {
  console.log("Transition canceled");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einem Übergang gestylt ist, der eine Verzögerung beinhaltet:

```html
<div class="transition"></div>
<div class="message"></div>
```

```css
.transition {
  width: 100px;
  height: 100px;
  background: rgb(255 0 0 / 100%);
  transition-property: transform, background;
  transition-duration: 2s;
  transition-delay: 2s;
}

.transition:hover {
  transform: rotate(90deg);
  background: rgb(255 0 0 / 0%);
}
```

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), `transitioncancel` und [`transitionend`](/de/docs/Web/API/Element/transitionend_event) ausgelöst werden. In diesem Beispiel, um den Übergang abzubrechen, hören Sie auf, über das Übergangsfeld zu schweben, bevor der Übergang endet. Damit das Übergangsende-Ereignis ausgelöst wird, bleiben Sie während des Übergangs über dem Element, bis der Übergang endet.

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

Das `transitioncancel` Ereignis wird ausgelöst, wenn der Übergang in irgendeiner Richtung nach dem Auftreten des `transitionrun` Ereignisses und bevor das `transitionend` ausgelöst wird, abgebrochen wird.

Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beide 0s sind oder keiner deklariert ist, gibt es keinen Übergang und keines der Übergangsereignisse wird ausgelöst.

Wenn das `transitioncancel` Ereignis ausgelöst wird, wird das `transitionend` Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
