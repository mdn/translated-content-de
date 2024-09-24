---
title: "Element: transitionstart Ereignis"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das **`transitionstart`** Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) tatsächlich begonnen hat, d.h. nach dem Ende jeder {{cssxref("transition-delay")}}.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("transitionstart", (event) => {});

ontransitionstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("TransitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit angibt, wie lange die Transition im Gange ist, in Sekunden, als dieses Ereignis ausgelöst wurde. Dieser Wert wird nicht von der {{cssxref("transition-delay")}} Eigenschaft beeinflusst.
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, beginnend mit `::`, der den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieser Code fügt einen Listener für das `transitionstart` Ereignis hinzu:

```js
element.addEventListener("transitionstart", () => {
  console.log("Started transitioning");
});
```

Das Gleiche, aber unter Verwendung der `ontransitionstart` Eigenschaft anstelle von `addEventListener()`:

```js
element.ontransitionstart = () => {
  console.log("Started transitioning");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}} Element, das mit einer Transition einschließlich einer Verzögerung gestylt ist:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, wann die `transitionstart` und {{domxref("Element/transitionrun_event", "transitionrun")}} Ereignisse ausgelöst werden.

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

- transitionrun ausgelöst wird, wenn die Transition erstellt wird (d.h. zu Beginn einer Verzögerung).
- transitionstart ausgelöst wird, wenn die eigentliche Animation begonnen hat (d.h. am Ende einer Verzögerung).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("TransitionEvent")}} Interface
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionrun_event", "transitionrun")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
