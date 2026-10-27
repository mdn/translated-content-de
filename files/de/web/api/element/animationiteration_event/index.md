---
title: "Element: animationiteration-Ereignis"
short-title: animationiteration
slug: Web/API/Element/animationiteration_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Web Animations")}}

Das **`animationiteration`**-Ereignis wird ausgelöst, wenn eine Iteration einer [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) endet und die nächste beginnt. Dieses Ereignis tritt nicht gleichzeitig mit dem [`animationend`](/de/docs/Web/API/Element/animationend_event)-Ereignis auf. Bei Animationen mit einem `animation-iteration-count` von eins tritt es daher nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("animationiteration", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onanimationiteration = (event) => { }
```

## Ereignistyp

Ein [`AnimationEvent`](/de/docs/Web/API/AnimationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationEvent")}}

## Beispiele

Dieser Code verwendet `animationiteration`, um die Anzahl der abgeschlossenen Iterationen einer Animation zu zählen:

```js
const animated = document.querySelector(".animated");

let iterationCount = 0;

animated.addEventListener("animationiteration", () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
});
```

Dasselbe mit der Event-Handler-Eigenschaft `onanimationiteration` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onanimationiteration` hinzugefügte Event-Listener ersetzt werden):

```js
const animated = document.querySelector(".animated");

let iterationCount = 0;

animated.onanimationiteration = () => {
  iterationCount++;
  console.log(`Animation iteration count: ${iterationCount}`);
};
```

### Interaktives Beispiel

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
- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Verwandte Ereignisse: [`animationstart`](/de/docs/Web/API/Element/animationstart_event), [`animationend`](/de/docs/Web/API/Element/animationend_event), [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
