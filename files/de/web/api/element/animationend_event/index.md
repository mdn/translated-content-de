---
title: "Element: `animationend`-Ereignis"
short-title: animationend
slug: Web/API/Element/animationend_event
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef}}

Das **`animationend`**-Ereignis wird ausgelöst, wenn eine [CSS-Animation](/de/docs/Web/CSS/CSS_animations) abgeschlossen ist. Wenn die Animation vor dem Erreichen des Endes abbricht, zum Beispiel wenn das Element aus dem DOM entfernt wird oder die Animation vom Element entfernt wird, wird das `animationend`-Ereignis nicht ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("animationend", (event) => {});

onanimationend = (event) => {};
```

## Ereignistyp

Ein [`AnimationEvent`](/de/docs/Web/API/AnimationEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("AnimationEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-[`Event`](/de/docs/Web/API/Event)_.

- [`AnimationEvent.animationName`](/de/docs/Web/API/AnimationEvent/animationName) {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- [`AnimationEvent.elapsedTime`](/de/docs/Web/API/AnimationEvent/elapsedTime) {{ReadOnlyInline}}
  - : Ein `float`, das die Zeit angibt, die die Animation beim Auslösen dieses Ereignisses in Sekunden läuft, exklusive der Zeit, in der die Animation pausiert war. Für ein `animationstart`-Ereignis beträgt `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in welchem Fall das Ereignis mit `elapsedTime` als `(-1 * delay)` ausgelöst wird.
- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) {{ReadOnlyInline}}
  - : Ein String, beginnend mit `'::'`, der den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieses Beispiel holt sich ein animiertes Element und lauscht auf das `animationend`-Ereignis:

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationend", () => {
  console.log("Animation ended");
});
```

Das Gleiche, aber die `onanimationend`-Ereignis-Handler-Eigenschaft wird verwendet:

```js
const animated = document.querySelector(".animated");

animated.onanimationend = () => {
  console.log("Animation ended");
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

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- Verwandte Ereignisse: [`animationstart`](/de/docs/Web/API/Element/animationstart_event), [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event), [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
