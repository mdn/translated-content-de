---
title: "Element: animationstart-Ereignis"
short-title: animationstart
slug: Web/API/Element/animationstart_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Das **`animationstart`**-Ereignis wird ausgelöst, wenn eine [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) gestartet wurde. Wenn es eine {{cssxref("animation-delay")}} gibt, wird dieses Ereignis ausgelöst, sobald der Verzögerungszeitraum abgelaufen ist. Eine negative Verzögerung führt dazu, dass das Ereignis mit einer [`elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) ausgelöst wird, die dem absoluten Wert der Verzögerung entspricht (und entsprechend beginnt die Animation zu diesem Zeitpunkt im Zeitablauf der Sequenz).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("animationstart", (event) => { })

onanimationstart = (event) => { }
```

## Ereignistyp

Ein [`AnimationEvent`](/de/docs/Web/API/AnimationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, wie lange die Animation bereits läuft, wenn dieses Ereignis ausgelöst wird, ohne die Zeit zu berücksichtigen, in der die Animation pausiert war. Für ein `animationstart`-Ereignis ist `elapsedTime` `0,0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime` ausgelöst, das `(-1 * Verzögerung)` enthält.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element selbst ausgeführt wird, ist der String leer: `''`.

## Beispiele

Dies hört auf das `animationstart`-Ereignis und protokolliert eine Nachricht, wenn es ausgelöst wird:

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationstart", () => {
  console.log("Animation started");
});
```

Das gleiche, aber mit `onanimationstart`:

```js
const animated = document.querySelector(".animated");

animated.onanimationstart = () => {
  console.log("Animation started");
};
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

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Verwandte Ereignisse: [`animationend`](/de/docs/Web/API/Element/animationend_event), [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event), [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
