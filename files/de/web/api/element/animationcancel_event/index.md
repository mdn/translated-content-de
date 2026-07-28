---
title: "Element: animationcancel Ereignis"
short-title: animationcancel
slug: Web/API/Element/animationcancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Web Animations")}}

Das **`animationcancel`** Ereignis wird ausgelöst, wenn eine [CSS-Animation](/de/docs/Web/CSS/Guides/Animations) unerwartet abbricht. Mit anderen Worten, jedes Mal, wenn sie ohne das Senden eines [`animationend`](/de/docs/Web/API/Element/animationend_event) Ereignisses stoppt. Dies kann passieren, wenn das {{cssxref("animation-name")}} geändert wird, sodass die Animation entfernt wird, oder wenn der animierte Knoten mithilfe von CSS verborgen wird. Dies kann direkt geschehen oder weil einer der enthaltenen Knoten verborgen ist.

Ein Ereignishandler für dieses Ereignis kann durch Setzen der `onanimationcancel` Eigenschaft hinzugefügt werden oder durch die Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("animationcancel", (event) => { })

onanimationcancel = (event) => { }
```

## Ereignistyp

Ein [`AnimationEvent`](/de/docs/Web/API/AnimationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationEvent")}}

## Beispiele

Dieser Code holt ein Element, das derzeit animiert ist, und fügt einen Listener für das `animationcancel` Ereignis hinzu. Anschließend wird die {{cssxref("display")}} Eigenschaft des Elements auf `none` gesetzt, was das `animationcancel` Ereignis auslöst.

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationcancel", () => {
  console.log("Animation canceled");
});

animated.style.display = "none";
```

Dasselbe, aber mit der `onanimationcancel` Eigenschaft anstelle von `addEventListener()`:

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

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Verwandte Ereignisse: [`animationstart`](/de/docs/Web/API/Element/animationstart_event), [`animationend`](/de/docs/Web/API/Element/animationend_event), [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
