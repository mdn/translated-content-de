---
title: "KeyframeEffect: target-Eigenschaft"
short-title: target
slug: Web/API/KeyframeEffect/target
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

Die **`target`**-Eigenschaft der [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Schnittstelle repräsentiert das Element oder Pseudo-Element, das animiert wird. Sie kann `null` für Animationen sein, die kein spezifisches Element ansprechen. Sie funktioniert sowohl als Getter als auch als Setter, außer bei Animationen und Übergängen, die durch CSS erzeugt werden.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder `null`.

## Beispiele

Im folgenden Beispiel wurde `emoji` als `target`-Element festgelegt, das animiert werden soll:

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

// logs "<div>🤣</div>"
console.log(rollingKeyframes.target);
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
- Eigenschaft von [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekten.
