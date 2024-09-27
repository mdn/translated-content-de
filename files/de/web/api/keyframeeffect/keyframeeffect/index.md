---
title: "KeyframeEffect: KeyframeEffect() Konstruktor"
short-title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

Der **`KeyframeEffect()`** Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objektinstanz zurück und ermöglicht es Ihnen auch, eine existierende Keyframe-Effekt-Objektinstanz zu klonen.

## Syntax

```js-nolint
new KeyframeEffect(target, keyframes)
new KeyframeEffect(target, keyframes, options)
new KeyframeEffect(sourceKeyFrames)
```

### Parameter

Der Mehrfach-Argument-Konstruktor (siehe oben) erstellt eine komplett neue [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objektinstanz. Seine Parameter sind:

- `target`
  - : Das DOM-Element, das animiert werden soll, oder `null`.
- `keyframes`
  - : Ein [Keyframes-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) oder `null`.
- `options` {{optional_inline}}

  - : Entweder eine ganze Zahl, die die Dauer der Animation (in Millisekunden) darstellt, oder ein Objekt, das einen oder mehrere der folgenden Werte enthält:

    - `delay` {{optional_inline}}
      - : Die Anzahl der Millisekunden, um den Start der Animation zu verzögern. Standardmäßig 0.
    - `direction` {{optional_inline}}
      - : Gibt an, ob die Animation vorwärts (`normal`), rückwärts (`reverse`), die Richtung nach jeder Iteration wechselt (`alternate`) oder rückwärts läuft und die Richtung nach jeder Iteration wechselt (`alternate-reverse`). Standardmäßig `"normal"`.
    - `duration` {{optional_inline}}
      - : Die Anzahl der Millisekunden, die jede Iteration der Animation benötigt, um abgeschlossen zu werden. Standardmäßig 0. Obwohl dies technisch optional ist, beachten Sie, dass Ihre Animation nicht abläuft, wenn dieser Wert 0 ist.
    - `easing` {{optional_inline}}
      - : Die Änderungsrate der Animation über die Zeit. Akzeptiert eine {{cssxref("easing-function")}}, wie zum Beispiel `"linear"`, `"ease-in"`, `"step-end"` oder `"cubic-bezier(0.42, 0, 0.58, 1)"`. Standardmäßig `"linear"`.
    - `endDelay` {{optional_inline}}
      - : Die Anzahl der Millisekunden Verzögerung nach dem Ende einer Animation. Dies ist hauptsächlich nützlich, wenn Animationen basierend auf der Endzeit einer anderen Animation sequentiert werden. Standardmäßig 0.
    - `fill` {{optional_inline}}
      - : Bestimmt, ob die Effekte der Animation vor dem Abspielen vom/von den Element(en) reflektiert werden sollen (`"backwards"`), nach dem vollständigen Abspielen der Animation beibehalten werden sollen (`"forwards"`) oder `both`. Standardmäßig `"none"`.
    - `iterationStart` {{optional_inline}}
      - : Beschreibt, zu welchem Zeitpunkt in der Iteration die Animation beginnen soll. 0.5 würde beispielsweise den Start in der Mitte der ersten Iteration anzeigen, und mit diesem Wert würde eine Animation mit 2 Iterationen in der Mitte einer dritten Iteration enden. Standardmäßig 0.0.
    - `iterations` {{optional_inline}}
      - : Die Anzahl der Wiederholungen der Animation. Standardmäßig `1`, und kann auch den Wert {{jsxref("Infinity")}} annehmen, damit sie sich so lange wiederholt, wie das Element existiert.
    - `composite` {{optional_inline}}

      - : Bestimmt, wie Werte zwischen dieser Animation und anderen, separaten
        Animationen kombiniert werden, die nicht ihre eigene spezifische Zusammensetzungsoperation angeben. Standardmäßig
        `replace`.

        - `add` bestimmt einen additiven Effekt, bei dem jede nachfolgende Iteration
          auf der vorhergehenden aufbaut. Beispielsweise würde bei `transform` ein
          `translateX(-200px)` einen früheren
          `rotate(20deg)` Wert nicht überschreiben, sondern in einem
          `translateX(-200px) rotate(20deg)` resultieren.
        - `accumulate` ist ähnlich, aber etwas intelligenter: `blur(2)`
          und `blur(5)` werden zu `blur(7)`, nicht
          `blur(2) blur(5)`.
        - `replace` überschreibt den vorherigen Wert mit dem neuen.

    - `iterationComposite` {{optional_inline}}
      - : Bestimmt, wie Werte von Iteration zu Iteration in dieser Animation aufgebaut werden. Kann auf
        `accumulate` oder `replace` (siehe oben) gesetzt werden. Standardmäßig
        `replace`.
    - `pseudoElement` {{optional_inline}}
      - : Ein `string`, der einen {{cssxref("pseudo-elements","Pseudo-Element-")}} Selektor enthält, wie zum Beispiel `"::before"`. Wenn vorhanden, wird der Effekt auf das ausgewählte Pseudo-Element von `target` angewendet, anstatt auf `target` selbst.

Der Einzel-Argument-Konstruktor (siehe oben) erstellt eine Kopie einer existierenden [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objektinstanz. Sein Parameter ist wie folgt:

- `sourceKeyFrames`
  - : Ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objekt, das Sie klonen möchten.

## Beispiele

Im folgenden Beispiel wird der KeyframeEffect-Konstruktor verwendet, um eine Reihe von Keyframes zu erstellen, die bestimmen, wie das Emoji über den Boden rollen soll:

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

- [KeyframeEffect Schnittstelle](/de/docs/Web/API/KeyframeEffect)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
