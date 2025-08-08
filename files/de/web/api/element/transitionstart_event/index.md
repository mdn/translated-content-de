---
title: "Element: transitionstart-Ereignis"
short-title: transitionstart
slug: Web/API/Element/transitionstart_event
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef}}

Das **`transitionstart`**-Ereignis wird ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) tatsächlich beginnt, d.h. nach dem Ende eines beliebigen {{cssxref("transition-delay")}}.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("transitionstart", (event) => { })

ontransitionstart = (event) => { }
```

## Ereignistyp

Ein [`TransitionEvent`](/de/docs/Web/API/TransitionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)._

- [`TransitionEvent.propertyName`](/de/docs/Web/API/TransitionEvent/propertyName) {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit dem Übergang verknüpft ist.
- [`TransitionEvent.elapsedTime`](/de/docs/Web/API/TransitionEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeitdauer in Sekunden angibt, wie lange der Übergang läuft, wenn dieses Ereignis ausgelöst wird. Dieser Wert wird nicht von der Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn der Übergang nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieser Code fügt einen Listener für das `transitionstart`-Ereignis hinzu:

```js
element.addEventListener("transitionstart", () => {
  console.log("Started transitioning");
});
```

Dasselbe, aber mit der Eigenschaft `ontransitionstart` anstelle von `addEventListener()`:

```js
element.ontransitionstart = () => {
  console.log("Started transitioning");
};
```

### Live-Beispiel

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einem Übergang, der eine Verzögerung einschließt, gestylt ist:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, wo die `transitionstart`- und [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)-Ereignisse ausgelöst werden.

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

Der Unterschied ist:

- transitionrun wird ausgelöst, wenn der Übergang erstellt wird (d.h. zu Beginn einer Verzögerung).
- transitionstart wird ausgelöst, wenn die eigentliche Animation begonnen hat (d.h. am Ende einer Verzögerung).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: [`transitionend`](/de/docs/Web/API/Element/transitionend_event), [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event), [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
