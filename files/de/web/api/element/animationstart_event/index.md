---
title: "Element: 'animationstart' Ereignis"
short-title: animationstart
slug: Web/API/Element/animationstart_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

Das **`animationstart`** Ereignis wird ausgelöst, wenn eine [CSS-Animation](/de/docs/Web/CSS/CSS_animations) begonnen hat. Wenn es eine {{cssxref("animation-delay")}} gibt, wird dieses Ereignis ausgelöst, sobald die Verzögerungszeit abgelaufen ist. Eine negative Verzögerung führt dazu, dass das Ereignis mit einem {{domxref("AnimationEvent/elapsedTime", "elapsedTime")}} ausgelöst wird, das den absoluten Wert der Verzögerung wiedergibt (und entsprechend beginnt die Animation zu diesem Zeitpunkt innerhalb der Sequenz zu spielen).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("animationstart", (event) => {});

onanimationstart = (event) => {};
```

## Ereignistyp

Ein {{domxref("AnimationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : Ein String, der den Wert des {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der angibt, wie lange die Animation bereits läuft, in Sekunden, wenn dieses Ereignis ausgelöst wird, ohne die Zeit einzuschließen, in der die Animation angehalten war. Für ein `animationstart` Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in welchem Fall das Ereignis mit `elapsedTime` ausgelöst wird, das `(-1 * Verzögerung)` enthält.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, beginnend mit `'::'`, der den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element selbst läuft, wird ein leerer String: `''` verwendet.

## Beispiele

Dies hört auf das `animationstart` Ereignis und protokolliert eine Nachricht, wenn es ausgelöst wird:

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationstart", () => {
  console.log("Animation gestartet");
});
```

Dasselbe, aber mit `onanimationstart`:

```js
const animated = document.querySelector(".animated");

animated.onanimationstart = () => {
  console.log("Animation gestartet");
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
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Using CSS Animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Verwandte Ereignisse: {{domxref("Element/animationend_event", "animationend")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}
