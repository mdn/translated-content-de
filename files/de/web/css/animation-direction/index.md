---
title: animation-direction
slug: Web/CSS/animation-direction
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation vorwärts, rückwärts oder abwechselnd hin und her zwischen dem Abspielen der Sequenz vorwärts und rückwärts abgespielt werden soll.

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

## Syntax

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### Werte

- `normal`
  - : Die Animation spielt jedes Mal _vorwärts_ ab. Mit anderen Worten, jedes Mal, wenn die Animation zyklisch wiederholt wird, wird die Animation auf den Anfangszustand zurückgesetzt und beginnt erneut. Dies ist der Standardwert.
- `reverse`
  - : Die Animation spielt jedes Mal _rückwärts_ ab. Mit anderen Worten, jedes Mal, wenn die Animation zyklisch wiederholt wird, wird die Animation auf den Endzustand zurückgesetzt und beginnt erneut. Animationsschritte werden rückwärts ausgeführt, und auch die Easing-Funktionen sind umgekehrt. Zum Beispiel wird eine `ease-in` Easing-Funktion zu `ease-out`.
- `alternate`
  - : Die Animation kehrt in jedem Zyklus die Richtung um, wobei die erste Iteration _vorwärts_ gespielt wird. Die Zählung, um festzustellen, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.
- `alternate-reverse`
  - : Die Animation kehrt in jedem Zyklus die Richtung um, wobei die erste Iteration _rückwärts_ gespielt wird. Die Zählung, um festzustellen, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) funktioniert das Festlegen einer `animation-direction` wie erwartet, z. B. führt `reverse` dazu, dass die Animation umgekehrt während des Fortschreitens der Zeitachse abläuft. Ein Wert von `alternate` (kombiniert mit einem {{cssxref("animation-iteration-count")}}) führt dazu, dass die Animation vorwärts und rückwärts läuft, während die Zeitachse fortschreitet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehrung der Animationsrichtung

#### HTML

```html
<div class="box"></div>
```

#### CSS

```css
.box {
  background-color: rebeccapurple;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.box:hover {
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-direction: reverse;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Reversing the animation direction","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
