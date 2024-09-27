---
title: "KeyframeEffect: getKeyframes()-Methode"
short-title: getKeyframes()
slug: Web/API/KeyframeEffect/getKeyframes
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{ APIRef("Web Animations") }}

Die **`getKeyframes()`**-Methode eines [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) gibt ein Array der berechneten Keyframes zurück, die diese Animation zusammen mit ihren berechneten Offsets ausmachen.

## Syntax

```js-nolint
getKeyframes()
```

### Parameter

Keine.

### Rückgabewert

Gibt eine Sequenz von Objekten mit folgendem Format zurück:

- Eigenschaft-Werte-Paare
  - : So viele Eigenschaft-Werte-Paare wie in jedem Keyframe der Animation enthalten sind.
- `offset`
  - : Der Versatz des Keyframes, angegeben als Zahl zwischen `0.0` und `1.0` einschließlich oder `null`. Dies entspricht der Angabe von Start- und Endzuständen in Prozent in CSS-Stilen unter Verwendung von `@keyframes`. Dies ist `null`, wenn der Keyframe automatisch verteilt wird.
- `computedOffset`
  - : Der berechnete Offset für diesen Keyframe, der berechnet wird, wenn die Liste der berechneten Keyframes erstellt wurde. Im Gegensatz zum **`offset`** oben ist der **`computedOffset`** niemals `null`.
- `easing`
  - : Die [Easing-Funktion](/de/docs/Web/CSS/easing-function), die von diesem Keyframe bis zum nächsten Keyframe in der Serie verwendet wird.
- `composite`
  - : Der [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)-Vorgang, der verwendet wird, um die in diesem Keyframe angegebenen Werte mit dem zugrunde liegenden Wert zu kombinieren. Dies wird fehlen, wenn die auf dem Effekt angegebene Kombinationsoperation verwendet wird.

## Beispiele

Im folgenden Beispiel können wir die rollende Animation überprüfen, um ihre Keyframes mithilfe der `getKeyframes()`-Methode zu sehen:

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
- Methode von [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekten.
