---
title: "KeyframeEffect: KeyframeEffect() Konstruktor"
short-title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

Der **`KeyframeEffect()`** Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objektinstanz zurück und ermöglicht es Ihnen auch, eine vorhandene Keyframe-Effekt-Objektinstanz zu klonen.

## Syntax

```js-nolint
new KeyframeEffect(target, keyframes)
new KeyframeEffect(target, keyframes, options)
new KeyframeEffect(sourceKeyFrames)
```

### Parameter

Der Mehrfachargument-Konstruktor (siehe oben) erstellt eine völlig neue [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objektinstanz. Seine Parameter sind:

- `target`
  - : Das zu animierende DOM-Element oder `null`.
- `keyframes`
  - : Ein [Keyframes-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) oder `null`.
- `options` {{optional_inline}}

  - : Entweder eine Ganzzahl, die die Dauer der Animation (in Millisekunden) darstellt, oder ein Objekt, das eine oder mehrere der folgenden Optionen enthält:

    - `delay` {{optional_inline}}
      - : Die Anzahl der Millisekunden, um die der Start der Animation verzögert wird. Standardwert ist 0.
    - `direction` {{optional_inline}}
      - : Ob die Animation vorwärts (`normal`), rückwärts (`reverse`), nach jeder Iteration die Richtung wechselt (`alternate`) oder rückwärts läuft und nach jeder Iteration die Richtung wechselt (`alternate-reverse`). Standardwert ist `"normal"`.
    - `duration` {{optional_inline}}
      - : Die Anzahl der Millisekunden, die jede Iteration der Animation benötigt, um vollständig abzulaufen. Standardwert ist 0. Obwohl dies technisch optional ist, bedenken Sie, dass Ihre Animation nicht ausgeführt wird, wenn dieser Wert 0 ist.
    - `easing` {{optional_inline}}
      - : Die Rate der Veränderung der Animation im Laufe der Zeit. Akzeptiert eine {{cssxref("easing-function")}}, wie z.B. `"linear"`, `"ease-in"`, `"step-end"` oder `"cubic-bezier(0.42, 0, 0.58, 1)"`. Standardwert ist `"linear"`.
    - `endDelay` {{optional_inline}}
      - : Die Anzahl der Millisekunden, die nach dem Ende einer Animation verzögert werden. Dies wird hauptsächlich verwendet, wenn Animationen basierend auf der Endzeit einer anderen Animation sequenziert werden. Standardwert ist 0.
    - `fill` {{optional_inline}}
      - : Bestimmt, ob die Effekte der Animation vor dem Abspielen durch das/die Element(e) reflektiert werden sollen (`"backwards"`), nach dem vollständigen Abspielen der Animation beibehalten werden sollen (`"forwards"`) oder `both`. Standardwert ist `"none"`.
    - `iterationStart` {{optional_inline}}
      - : Beschreibt, zu welchem Zeitpunkt in der Iteration die Animation beginnen soll. Zum Beispiel würde 0,5 bedeuten, dass die Animation in der Mitte der ersten Iteration beginnt, und mit diesem Wert würde eine Animation mit 2 Iterationen in der Mitte einer dritten Iteration enden. Standardwert ist 0,0.
    - `iterations` {{optional_inline}}
      - : Die Anzahl der Male, die die Animation wiederholt werden soll. Standardwert ist `1` und kann auch den Wert {{jsxref("Infinity")}} annehmen, um sie so lange zu wiederholen, wie das Element existiert.
    - `composite` {{optional_inline}}

      - : Bestimmt, wie Werte zwischen dieser Animation und anderen separaten Animationen, die keine eigene spezifische Kompositionsoperation angeben, kombiniert werden. Standardwert ist `replace`.
        - `add` bestimmt einen additiven Effekt, bei dem jede aufeinanderfolgende Iteration auf der vorherigen aufbaut. Zum Beispiel würde bei `transform`, ein `translateX(-200px)` nicht einen früheren Wert von `rotate(20deg)` überschreiben, sondern in einem `translateX(-200px) rotate(20deg)` resultieren.
        - `accumulate` ist ähnlich, aber etwas intelligenter: `blur(2)` und `blur(5)` werden zu `blur(7)`, nicht zu `blur(2) blur(5)`.
        - `replace` überschreibt den vorherigen Wert mit dem Neuen.

    - `iterationComposite` {{optional_inline}}
      - : Bestimmt, wie sich Werte von Iteration zu Iteration in dieser Animation aufbauen. Kann auf `accumulate` oder `replace` gesetzt werden (siehe oben). Standardwert ist `replace`.
    - `pseudoElement` {{optional_inline}}
      - : Ein `string`, der einen {{cssxref("pseudo-elements","pseudo-element")}} Selektor enthält, wie z.B. `"::before"`. Wenn vorhanden, wird der Effekt auf das ausgewählte Pseudo-Element von `target` angewendet, anstatt auf `target` selbst.

Der Einzelargument-Konstruktor (siehe oben) erstellt einen Klon einer vorhandenen [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objektinstanz. Sein Parameter ist wie folgt:

- `sourceKeyFrames`
  - : Ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objekt, das Sie klonen möchten.

## Beispiele

Im folgenden Beispiel wird der `KeyframeEffect` Konstruktor verwendet, um eine Reihe von Keyframes zu erstellen, die bestimmen, wie das Emoji über den Boden rollen soll:

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

- [KeyframeEffect Interface](/de/docs/Web/API/KeyframeEffect)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
