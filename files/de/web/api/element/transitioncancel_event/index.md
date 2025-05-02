---
title: "Element: transitioncancel Ereignis"
short-title: transitioncancel
slug: Web/API/Element/transitioncancel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`transitioncancel`** Ereignis wird ausgelöst, wenn eine [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) abgebrochen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("transitioncancel", (event) => { })

ontransitioncancel = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit dem Übergang verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer in Sekunden angibt, wie lange der Übergang lief, als dieses Ereignis ausgelöst wurde. Dieser Wert wird nicht von der {{cssxref("transition-delay")}} Eigenschaft beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Falls der Übergang nicht auf einem Pseudoelement läuft, sondern auf dem Element selbst, ist der String leer: `''`.

## Beispiele

Dieser Code holt sich ein Element, das einen definierten Übergang hat, und fügt einen Listener für das `transitioncancel` Ereignis hinzu:

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

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einem Übergang, der eine Verzögerung beinhaltet, gestylt ist:

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

Hierzu fügen wir etwas JavaScript hinzu, um anzuzeigen, dass die Ereignisse [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), `transitioncancel` und [`transitionend`](/de/docs/Web/API/Element/transitionend_event) ausgelöst werden. In diesem Beispiel brechen Sie den Übergang ab, indem Sie aufhören, über das Übergangselement zu schweben, bevor der Übergang endet. Damit das Übergangsende-Ereignis ausgelöst wird, bleiben Sie über dem Übergangselement, bis der Übergang endet.

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

Das `transitioncancel` Ereignis wird ausgelöst, wenn der Übergang in irgendeine Richtung abgebrochen wird, nachdem das `transitionrun` Ereignis aufgetreten ist und bevor das `transitionend` Ereignis ausgelöst wird.

Wenn es keine Übergangsverzögerung oder -dauer gibt, wenn beide 0s sind oder keines erklärt ist, gibt es keinen Übergang, und keines der Übergangsereignisse wird ausgelöst.

Wenn das `transitioncancel` Ereignis ausgelöst wird, wird das `transitionend` Ereignis nicht ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event), [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
