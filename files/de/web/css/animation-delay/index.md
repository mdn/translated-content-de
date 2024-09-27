---
title: animation-delay
slug: Web/CSS/animation-delay
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Zeitspanne an, die gewartet werden soll, bevor die Animation an einem Element anfängt zu laufen. Die Animation kann später beginnen, sofort von Anfang an oder sofort und teilweise durch die Animation hindurch.

{{EmbedInteractiveExample("pages/css/animation-delay.html")}}

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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

  - : Der Zeitversatz, ab dem Moment, in dem die Animation auf das Element angewendet wird, an dem die Animation beginnen soll. Dies kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Die Einheit ist erforderlich.

    Ein positiver Wert zeigt an, dass die Animation nach Ablauf der angegebenen Zeit beginnen soll. Ein Wert von `0s`, der Standardwert, bedeutet, dass die Animation sofort beginnt, sobald sie angewendet wird.

    Ein negativer Wert führt dazu, dass die Animation sofort beginnt, aber teilweise in ihrem Zyklus. Zum Beispiel, wenn Sie `-1s` als Verzögerungszeit angeben, beginnt die Animation sofort, aber 1 Sekunde in die Animationssequenz. Wenn Sie einen negativen Wert für die Animationsverzögerung angeben, aber der Startwert implizit ist, wird der Startwert vom Moment an genommen, an dem die Animation auf das Element angewendet wird.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-delay` hat keine Auswirkung auf [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

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
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
