---
title: "Element: animationcancel event"
short-title: animationcancel
slug: Web/API/Element/animationcancel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Animations")}}

Das **`animationcancel`**-Ereignis wird ausgelöst, wenn eine [CSS-Animation](/de/docs/Web/CSS/CSS_animations) unerwartet abbricht. Mit anderen Worten, immer wenn sie aufhört zu laufen, ohne ein [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis zu senden. Dies kann passieren, wenn der Wert von {{cssxref("animation-name")}} geändert wird, sodass die Animation entfernt wird, oder wenn der animierende Knoten über CSS verborgen wird. Entweder direkt oder weil einer seiner enthaltenen Knoten verborgen ist.

Ein Ereignis-Handler für dieses Ereignis kann hinzugefügt werden, indem die `onanimationcancel`-Eigenschaft gesetzt oder `addEventListener()` verwendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("animationcancel", (event) => { })

onanimationcancel = (event) => { }
```

## Ereignistyp

Ein [`AnimationEvent`](/de/docs/Web/API/AnimationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-`Event`._

- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert von {{cssxref("animation-name")}} enthält, der die Animation generiert hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Laufzeit der Animation in Sekunden angibt, wenn dieses Ereignis ausgelöst wird, ohne die Pausenzeiten zu berücksichtigen. Bei einem `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * Verzögerung)` enthält, ausgelöst.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `'::'`, der den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieser Code holt ein Element, das derzeit animiert wird, und fügt einen Listener für das `animationcancel`-Ereignis hinzu. Es setzt dann die {{cssxref("display")}}-Eigenschaft des Elements auf `none`, was das `animationcancel`-Ereignis auslösen wird.

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationcancel", () => {
  console.log("Animation canceled");
});

animated.style.display = "none";
```

Dasselbe, aber unter Verwendung der `onanimationcancel`-Eigenschaft anstelle von `addEventListener()`:

```js
const animated = document.querySelector(".animated");
animated.onanimationcancel = () => {
  console.log("Animation canceled");
};

animated.style.display = "none";
```

### Live-Beispiel

#### HTML

```html
<div class="animation-example">
  <div class="container">
    <p class="animation">You chose a cold night to visit our planet.</p>
  </div>
  <button class="activate" type="button">Activate animation</button>
  <div class="event-log"></div>
</div>
```

#### CSS

```css
.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slide-in;
  animation-iteration-count: 2;
}

@keyframes slide-in {
  from {
    transform: translateX(100%) scaleX(3);
  }
  to {
    transform: translateX(0) scaleX(1);
  }
}
```

#### JavaScript

```js
const animation = document.querySelector("p.animation");
const animationEventLog = document.querySelector(
  ".animation-example>.event-log",
);
const applyAnimation = document.querySelector(
  ".animation-example>button.activate",
);
let iterationCount = 0;

animation.addEventListener("animationstart", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation started' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'animation iterations: ${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation ended'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "Activate animation";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animation canceled'`;
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
    ? "Cancel animation"
    : "Activate animation";
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Verwandte Ereignisse: [`animationstart`](/de/docs/Web/API/Element/animationstart_event), [`animationend`](/de/docs/Web/API/Element/animationend_event), [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
