---
title: "Element: transitionstart Ereignis"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

Das **`transitionstart`** Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/Guides/Transitions/Using) tatsächlich begonnen hat, d.h. nachdem eine eventuelle {{cssxref("transition-delay")}} abgelaufen ist.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("transitionstart", (event) => { })

ontransitionstart = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternelement [`Event`](/de/docs/Web/API/Event)_.

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer, die die Transition beim Auslösen des Ereignisses bereits läuft, in Sekunden angibt. Dieser Wert wird nicht von der Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `::`, der den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudoelement, sondern auf dem Element selbst läuft, ist der String leer: `''`.

## Beispiele

Dieser Code fügt einen Listener zum `transitionstart` Ereignis hinzu:

```js
element.addEventListener("transitionstart", () => {
  console.log("Started transitioning");
});
```

Dasselbe, aber unter Verwendung der `ontransitionstart` Eigenschaft anstelle von `addEventListener()`:

```js
element.ontransitionstart = () => {
  console.log("Started transitioning");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}} Element, das mit einer Transition einschließlich einer Verzögerung gestaltet ist:

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

Dazu werden wir etwas JavaScript hinzufügen, um zu zeigen, wo die `transitionstart` und [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event) Ereignisse ausgelöst werden.

```js
const transition = document.querySelector(".transition");
const message = document.querySelector(".message");

transition.addEventListener("transitionrun", () => {
  message.textContent = "transitionrun fired";
});

transition.addEventListener("transitionstart", () => {
  message.textContent = "transitionstart fired";
});

transition.addEventListener("transitionend", () => {
  message.textContent = "transitionend fired";
});
```

{{ EmbedLiveSample('Live example', '100%', '170') }}

Der Unterschied ist, dass:

- transitionrun wird ausgelöst, wenn die Transition erstellt wird (d.h. zu Beginn einer eventuell vorhandenen Verzögerung).
- transitionstart wird ausgelöst, wenn die eigentliche Animation begonnen hat (d.h. am Ende jeder Verzögerung).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionend`](/de/docs/Web/API/Element/transitionend_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
