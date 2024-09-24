---
title: KeyframeEffect
slug: Web/API/KeyframeEffect
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

Die **`KeyframeEffect`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) ermöglicht es uns, Sätze von animierbaren Eigenschaften und Werten zu erstellen, die als **Keyframes** bezeichnet werden. Diese können dann mit dem {{domxref("Animation.Animation", "Animation()")}}-Konstruktor abgespielt werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  - : Gibt eine neue `KeyframeEffect`-Objektinstanz zurück und ermöglicht es auch, eine vorhandene Keyframe-Effekt-Objektinstanz zu klonen.

## Instanz-Eigenschaften

- {{domxref("KeyframeEffect.target")}}
  - : Ruft das Element ab oder legt es fest, das von diesem Objekt animiert wird, oder das Ursprungselement des Pseudo-Elements. Dies kann `null` sein für Animationen, die kein bestimmtes Element oder Pseudo-Element anvisieren.
- {{domxref("KeyframeEffect.pseudoElement")}}
  - : Ruft den Selektor des von diesem Objekt animierten Pseudo-Elements ab oder legt ihn fest. Dies kann `null` sein für Animationen, die kein Pseudo-Element anvisieren.
- {{domxref("KeyframeEffect.iterationComposite")}}
  - : Ruft die Iterationskompositionsoperation ab oder legt sie fest, um die Eigenschaftswertänderungen dieses Keyframe-Effekts zu lösen.
- {{domxref("KeyframeEffect.composite")}}
  - : Ruft die Kompositionsoperationseigenschaft ab oder legt sie fest, um die Eigenschaftswertänderungen zwischen diesem und anderen Keyframe-Effekten zu lösen.

## Instanz-Methoden

_Diese Schnittstelle erbt einige ihrer Methoden von ihrem Elternteil, {{domxref("AnimationEffect")}}._

- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : Gibt die berechneten, aktuellen Timing-Werte für diesen Keyframe-Effekt zurück.
- {{domxref("KeyframeEffect.getKeyframes()")}}
  - : Gibt die berechneten Keyframes zurück, die diesen Effekt ausmachen, zusammen mit ihren berechneten Keyframe-Offsets.
- {{domxref("AnimationEffect.getTiming()")}}
  - : Gibt das Objekt zurück, das mit der Animation verbunden ist und alle Timing-Werte der Animation enthält.
- {{domxref("KeyframeEffect.setKeyframes()")}}
  - : Ersetzt die Menge der Keyframes, die diesen Effekt ausmachen.
- {{domxref("AnimationEffect.updateTiming()")}}
  - : Aktualisiert die angegebenen Timing-Eigenschaften.

## Beispiele

Im folgenden Beispiel wird der KeyframeEffect-Konstruktor verwendet, um eine Reihe von Keyframes zu erstellen, die festlegen, wie das ROFL-Emoji über den Boden rollen soll:

```js
const emoji = document.querySelector("div"); // zu animierendes Element

const rollingKeyframes = new KeyframeEffect(
  emoji,
  [
    { transform: "translateX(0) rotate(0)" }, // Keyframe
    { transform: "translateX(200px) rotate(1.3turn)" }, // Keyframe
  ],
  {
    // Keyframe-Optionen
    duration: 2000,
    direction: "alternate",
    easing: "ease-in-out",
    iterations: "Infinity",
  },
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);

// ROFL-Animation abspielen
rollingAnimation.play();
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
- {{domxref("Animation")}}
