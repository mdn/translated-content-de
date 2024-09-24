---
title: "KeyframeEffect: KeyframeEffect() Konstruktor"
short-title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
l10n:
  sourceCommit: 8c04dd43cc39e6726e3b15416d8498f8514cd071
---

{{ APIRef("Web Animations") }}

Der **`KeyframeEffect()`** Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue {{domxref("KeyframeEffect")}} Objektinstanz zurück und ermöglicht es Ihnen auch, eine bestehende Keyframe-Effekt-Objektinstanz zu klonen.

## Syntax

```js-nolint
new KeyframeEffect(target, keyframes)
new KeyframeEffect(target, keyframes, options)
new KeyframeEffect(sourceKeyFrames)
```

### Parameter

Der Multi-Argument-Konstruktor (siehe oben) erstellt eine komplett neue {{domxref("KeyframeEffect")}} Objektinstanz. Seine Parameter sind:

- `target`
  - : Das DOM-Element, das animiert werden soll, oder `null`.
- `keyframes`
  - : Ein [Keyframes-Objekt](/de/docs/Web/API/Web_Animations_API/Keyframe_Formats) oder `null`.
- `options` {{optional_inline}}

  - : Entweder eine ganze Zahl, die die Dauer der Animation in Millisekunden darstellt, oder ein Objekt, das eines oder mehrere der folgenden enthält:

    - `delay` {{optional_inline}}
      - : Die Anzahl der Millisekunden, die der Start der Animation verzögert wird. Standard ist 0.
    - `direction` {{optional_inline}}
      - : Ob die Animation vorwärts (`normal`), rückwärts (`reverse`), nach jeder Iteration die Richtung wechselt (`alternate`) oder rückwärts läuft und nach jeder Iteration die Richtung wechselt (`alternate-reverse`). Standard ist `"normal"`.
    - `duration` {{optional_inline}}
      - : Die Anzahl der Millisekunden, die jede Iteration der Animation benötigt, um abgeschlossen zu werden. Standard ist 0. Auch wenn dies technisch optional ist, beachten Sie bitte, dass Ihre Animation nicht ausgeführt wird, wenn dieser Wert 0 ist.
    - `easing` {{optional_inline}}
      - : Die Rate der Änderung der Animation über die Zeit. Akzeptiert eine {{cssxref("easing-function")}}, wie `"linear"`, `"ease-in"`, `"step-end"` oder `"cubic-bezier(0.42, 0, 0.58, 1)"`. Standard ist `"linear"`.
    - `endDelay` {{optional_inline}}
      - : Die Anzahl der Millisekunden, die nach dem Ende einer Animation verzögert werden. Dies ist hauptsächlich nützlich, wenn Animationen basierend auf der Endzeit einer anderen Animation sequenziert werden. Standard ist 0.
    - `fill` {{optional_inline}}
      - : Bestimmt, ob die Effekte der Animation vor dem Abspielen (`"backwards"`), nach dem vollständigen Abspielen der Animation (`"forwards"`) oder `both` auf das Element bzw. die Elemente reflektiert werden sollen. Standard ist `"none"`.
    - `iterationStart` {{optional_inline}}
      - : Beschreibt, ab welchem Punkt in der Iteration die Animation starten soll. Zum Beispiel würde 0,5 bedeuten, dass die Animation zur Hälfte der ersten Iteration startet, und bei diesem Wert würde eine Animation mit 2 Iterationen zur Hälfte einer dritten Iteration enden. Standard ist 0,0.
    - `iterations` {{optional_inline}}
      - : Die Anzahl der Wiederholungen, die die Animation durchlaufen soll. Der Standardwert ist `1`, und sie kann auch den Wert {{jsxref("Infinity")}} annehmen, um sie so lange wiederholen zu lassen, wie das Element existiert.
    - `composite` {{optional_inline}}

      - : Bestimmt, wie Werte zwischen dieser Animation und anderen, separaten Animationen, die keine eigene spezifische Kompositionsoperation angeben, kombiniert werden. Standard ist `replace`.

        - `add` diktiert einen additiven Effekt, bei dem jede nachfolgende Iteration auf der letzten aufbaut. Zum Beispiel würde bei `transform` ein `translateX(-200px)` einen vorherigen `rotate(20deg)` Wert nicht überschreiben sondern in `translateX(-200px) rotate(20deg)` resultieren.
        - `accumulate` ist ähnlich, aber ein wenig intelligenter: `blur(2)` und `blur(5)` werden zu `blur(7)`, nicht zu `blur(2) blur(5)`.
        - `replace` überschreibt den vorherigen Wert mit dem neuen.

    - `iterationComposite` {{optional_inline}}
      - : Bestimmt, wie Werte von Iteration zu Iteration in dieser Animation aufgebaut werden. Kann auf `accumulate` oder `replace` gesetzt werden (siehe oben). Standard ist `replace`.
    - `pseudoElement` {{optional_inline}}
      - : Ein `string`, der einen {{cssxref("pseudo-elements","Pseudo-Elementen")}}-Selektor wie `"::before"` enthält. Wenn vorhanden, wird der Effekt auf das ausgewählte Pseudo-Element von `target` anstatt auf `target` selbst angewendet.

Der Einzelargument-Konstruktor (siehe oben) erstellt eine Kopie einer bestehenden {{domxref("KeyframeEffect")}} Objektinstanz. Sein Parameter lautet wie folgt:

- `sourceKeyFrames`
  - : Ein {{domxref("KeyframeEffect")}} Objekt, das Sie klonen möchten.

## Beispiele

Im folgenden Beispiel wird der KeyframeEffect-Konstruktor verwendet, um eine Reihe von Keyframes zu erstellen, die festlegen, wie das Emoji über den Boden rollen soll:

```js
const emoji = document.querySelector("div"); // Element, das animiert werden soll

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
- {{domxref("Animation")}}
