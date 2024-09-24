---
title: animation-direction
slug: Web/CSS/animation-direction
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-direction`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation vorwärts, rückwärts oder abwechselnd vorwärts und rückwärts abgespielt werden soll.

{{EmbedInteractiveExample("pages/css/animation-direction.html")}}

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

## Syntax

```css
/* Einzelne Animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Mehrere Animationen */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Globale Werte */
animation-direction: inherit;
animation-direction: initial;
animation-direction: revert;
animation-direction: revert-layer;
animation-direction: unset;
```

### Werte

- `normal`
  - : Die Animation spielt jeden Zyklus _vorwärts_ ab. Mit anderen Worten: Jedes Mal, wenn der Animationszyklus wiederholt wird, wird die Animation auf den Anfangszustand zurückgesetzt und erneut gestartet. Dies ist der Standardwert.
- `reverse`
  - : Die Animation spielt jeden Zyklus _rückwärts_ ab. Mit anderen Worten: Jedes Mal, wenn der Animationszyklus wiederholt wird, wird die Animation auf den Endzustand zurückgesetzt und erneut gestartet. Animationsschritte werden rückwärts durchgeführt und auch die Übergangsfunktionen werden umgekehrt. Zum Beispiel wird eine `ease-in` Übergangsfunktion zu `ease-out`.
- `alternate`
  - : Die Animation wechselt in jedem Zyklus die Richtung, wobei die erste Iteration _vorwärts_ abgespielt wird. Die Zählung, um festzustellen, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.
- `alternate-reverse`
  - : Die Animation wechselt in jedem Zyklus die Richtung, wobei die erste Iteration _rückwärts_ abgespielt wird. Die Zählung, um festzustellen, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) wirkt sich die Angabe einer `animation-direction` wie erwartet aus, zum Beispiel führt `reverse` dazu, dass die Animation im Verlauf des Zeitstrahls rückwärts läuft. Ein Wert von `alternate` (in Kombination mit {{cssxref("animation-iteration-count")}}) bewirkt, dass die Animation vorwärts und rückwärts läuft, während der Zeitstrahl fortschreitet.

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

Sehen Sie sich [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
