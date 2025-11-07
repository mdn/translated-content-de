---
title: "KeyframeEffect: getKeyframes() Methode"
short-title: getKeyframes()
slug: Web/API/KeyframeEffect/getKeyframes
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{ APIRef("Web Animations") }}

Die **`getKeyframes()`** Methode eines [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) gibt ein Array der berechneten Keyframes zurück, die diese Animation zusammen mit ihren berechneten Offsets bilden.

## Syntax

```js-nolint
getKeyframes()
```

### Parameter

Keine.

### Rückgabewert

Gibt eine Sequenz von Objekten mit folgendem Format zurück:

- Eigenschaft-Wert-Paare
  - : So viele Eigenschaft-Wert-Paare, wie in jedem Keyframe der Animation enthalten sind.
- `offset`
  - : Der Offset des Keyframes, spezifiziert als eine Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht dem Festlegen von Start- und Endzuständen in Prozent in CSS-Stylesheets mittels `@keyframes`. Dies ist `null`, wenn das Keyframe automatisch verteilt ist.
- `computedOffset`
  - : Der berechnete Offset für dieses Keyframe, berechnet, als die Liste der berechneten Keyframes erstellt wurde. Im Gegensatz zu **`offset`** oben ist der **`computedOffset`** niemals `null`.
- `easing`
  - : Die [easing function](/de/docs/Web/CSS/Reference/Values/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- `composite`
  - : Die [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite) Operation, die verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird fehlen, wenn die auf dem Effekt angegebene Composite-Operation verwendet wird.

## Beispiele

Im folgenden Beispiel können wir die Rollanimation inspizieren, um ihre Keyframes mit der `getKeyframes()` Methode zu sehen:

```js
const emoji = document.querySelector("div"); // element to animate

const rollingKeyframes = new KeyframeEffect(
  emoji,
  [
    { transform: "translateX(0) rotate(0)" }, // keyframe
    { transform: "translateX(200px) rotate(1.3turn)" }, // keyframe
  ],
  {
    // keyframe options
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: "Infinity",
  },
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
rollingAnimation.play();

// Array [ {…}, {…} ]
console.log(rollingAnimation.effect.getKeyframes());
```

```html
<div>🤣</div>
```

```css hidden
body {
  box-shadow: 0 5px 5px pink;
}

div {
  width: fit-content;
  margin-left: calc(50% - 132px);
  font-size: 64px;
  user-select: none;
  margin-top: 1rem;
}
```

{{ EmbedLiveSample("Examples", "100%", "120") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- Methode der [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objekte.
