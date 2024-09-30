---
title: animation-direction
slug: Web/CSS/animation-direction
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation vorwärts, rückwärts oder abwechselnd vorwärts und rückwärts gespielt werden soll.

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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
  - : Die Animation wird _vorwärts_ bei jedem Zyklus abgespielt. Mit anderen Worten, jedes Mal, wenn der Animationszyklus neu beginnt, wird die Animation auf den Anfangszustand zurückgesetzt und beginnt von vorne. Dies ist der Standardwert.
- `reverse`
  - : Die Animation wird _rückwärts_ bei jedem Zyklus abgespielt. Mit anderen Worten, jedes Mal, wenn der Animationszyklus neu beginnt, wird die Animation auf den Endzustand zurückgesetzt und beginnt von vorne. Die Animationsschritte werden rückwärts ausgeführt, und auch die Easing-Funktionen werden umgekehrt. Beispielsweise wird eine `ease-in` Easing-Funktion zu `ease-out`.
- `alternate`
  - : Die Animation wechselt mit jedem Zyklus die Richtung, wobei die erste Iteration _vorwärts_ abgespielt wird. Die Zählung, um zu bestimmen, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.
- `alternate-reverse`
  - : Die Animation wechselt mit jedem Zyklus die Richtung, wobei die erste Iteration _rückwärts_ abgespielt wird. Die Zählung, um zu bestimmen, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte auf einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationsproperty-Werte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) funktioniert die Angabe einer `animation-direction` wie erwartet, zum Beispiel bewirkt `reverse`, dass die Animation im Verlauf des Fortschritts der Zeitachse rückwärts läuft. Ein Wert von `alternate` (kombiniert mit einer {{cssxref("animation-iteration-count")}}) bewirkt, dass die Animation vorwärts und rückwärts verläuft, während die Zeitachse fortschreitet.

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

- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Weitere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
