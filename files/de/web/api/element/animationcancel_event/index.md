---
title: "Element: animationcancel-Ereignis"
short-title: animationcancel
slug: Web/API/Element/animationcancel_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

Das **`animationcancel`**-Ereignis wird ausgelöst, wenn eine [CSS-Animation](/de/docs/Web/CSS/CSS_animations) unerwartet abbricht. Mit anderen Worten, jedes Mal, wenn sie stoppt, ohne ein {{domxref("Element/animationend_event", "animationend")}}-Ereignis zu senden. Dies kann passieren, wenn der Wert von {{cssxref("animation-name")}} so geändert wird, dass die Animation entfernt wird, oder wenn das animierende Element mit CSS versteckt wird. Dies kann entweder direkt geschehen oder weil eines der enthaltenen Elemente versteckt ist.

Ein Ereignishandler für dieses Ereignis kann hinzugefügt werden, indem die `onanimationcancel`-Eigenschaft gesetzt wird oder {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("animationcancel", (event) => {});

onanimationcancel = (event) => {};
```

## Ereignistyp

Ein {{domxref("AnimationEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : Ein String, der den Wert von {{cssxref("animation-name")}} enthält, der die Animation erzeugt hat.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Zeit in Sekunden angibt, die die Animation gelaufen ist, als dieses Ereignis ausgelöst wurde, ohne die Zeit, in der die Animation pausiert war. Für ein `animationstart`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis ausgelöst mit `elapsedTime`, das `(-1 * delay)` enthält.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Ein String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element läuft, ein leerer String: `''`.

## Beispiele

Dieses Code-Beispiel nimmt ein derzeit animiertes Element und fügt einen Listener für das `animationcancel`-Ereignis hinzu. Es setzt dann die {{cssxref("display")}}-Eigenschaft des Elements auf `none`, was das `animationcancel`-Ereignis auslösen wird.

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationcancel", () => {
  console.log("Animation canceled");
});

animated.style.display = "none";
```

Das gleiche, aber unter Verwendung der `onanimationcancel`-Eigenschaft anstelle von `addEventListener()`:

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Verwandte Ereignisse: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationend_event", "animationend")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
