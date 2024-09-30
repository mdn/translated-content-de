---
title: animation-delay
slug: Web/CSS/animation-delay
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Zeitspanne an, die nach Anwendung der Animation auf ein Element gewartet werden soll, bevor die Animation beginnt. Die Animation kann später starten, sofort von Anfang an beginnen oder sofort und mitten in der Animation beginnen.

{{EmbedInteractiveExample("pages/css/animation-delay.html")}}

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

## Syntax

```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;

/* Global values */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### Werte

- {{cssxref("&lt;time&gt;")}}

  - : Der Zeitversatz, ab dem Moment, in dem die Animation auf das Element angewendet wird, zu dem die Animation beginnen soll. Dies kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Die Einheit ist erforderlich.

    Ein positiver Wert gibt an, dass die Animation nach der angegebenen Zeitspanne beginnen soll. Ein Wert von `0s`, der Standardwert, bedeutet, dass die Animation beginnt, sobald sie angewendet wird.

    Ein negativer Wert führt dazu, dass die Animation sofort beginnt, jedoch mitten in ihrem Zyklus. Wenn Sie beispielsweise `-1s` als Animationsverzögerungszeit angeben, beginnt die Animation sofort, startet jedoch 1 Sekunde in die Animationssequenz. Wenn Sie einen negativen Wert für die Animationsverzögerung angeben, aber der Startwert implizit ist, wird der Startwert von dem Moment an genommen, in dem die Animation auf das Element angewendet wird.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte auf einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge, in der die {{cssxref("animation-name")}}s erscheinen, auf die Animationen angewendet. Für Fälle, bei denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-delay` hat keine Wirkung auf [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer Animationsverzögerung

Diese Animation hat eine Verzögerung von 2 Sekunden.

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
  animation-delay: 2s;
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

Fahren Sie mit der Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
