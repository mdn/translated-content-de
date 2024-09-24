---
title: "Element: transitionrun-Ereignis"
short-title: transitionrun
slug: Web/API/Element/transitionrun_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das **`transitionrun`**-Ereignis wird ausgelöst, wenn eine [CSS-Transition](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) erstmals erstellt wird, d.h. bevor eine {{cssxref("transition-delay")}} begonnen hat.

Dieses Ereignis ist nicht abbruchbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("transitionrun", (event) => {});

ontransitionrun = (event) => {};
```

## Ereignistyp

Ein {{domxref("TransitionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TransitionEvent")}}

## Ereigniseigenschaften

_Übernimmt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}._

- {{domxref("TransitionEvent.propertyName")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
- {{domxref("TransitionEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, die die Transition beim Auslösen dieses Ereignisses bereits läuft. Dieser Wert wird nicht durch die Eigenschaft {{cssxref("transition-delay")}} beeinflusst.
- {{domxref("TransitionEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, der mit `::` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element selbst läuft, ein leerer String: `''`.

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

Im folgenden Beispiel haben wir ein einfaches {{htmlelement("div")}}-Element, das mit einer Transition gestaltet ist, die eine Verzögerung beinhaltet:

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

Dazu fügen wir etwas JavaScript hinzu, um anzuzeigen, wann die Ereignisse {{domxref("Element/transitionstart_event", "transitionstart")}} und `transitionrun` ausgelöst werden.

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

Der Unterschied ist, dass:

- `transitionrun` ausgelöst wird, wenn die Transition erstellt wird (d.h. zu Beginn einer Verzögerung).
- `transitionstart` ausgelöst wird, wenn die eigentliche Animation begonnen hat (d.h. am Ende einer Verzögerung).

Der `transitionrun` tritt auf, selbst wenn die Transition vor dem Ablauf der Verzögerung abgebrochen wird. Wenn keine Transition-Verzögerung vorhanden ist oder die Transition-Verzögerung negativ ist, werden sowohl `transitionrun` als auch `transitionstart` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("TransitionEvent")}}-Schnittstelle
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}}, {{cssxref("transition-duration")}}, {{cssxref("transition-property")}}, {{cssxref("transition-timing-function")}}
- Verwandte Ereignisse: {{domxref("Element/transitionend_event", "transitionend")}}, {{domxref("Element/transitionstart_event", "transitionstart")}}, {{domxref("Element/transitioncancel_event", "transitioncancel")}}
