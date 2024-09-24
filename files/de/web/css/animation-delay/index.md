---
title: animation-delay
slug: Web/CSS/animation-delay
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-delay`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie viel Zeit zwischen dem Anwenden der Animation auf ein Element und dem Beginn der Animation vergeht. Die Animation kann später beginnen, sofort von Anfang an beginnen oder sofort und teilweise in der Mitte der Animation erfolgen.

{{EmbedInteractiveExample("pages/css/animation-delay.html")}}

Oft ist es praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften gleichzeitig festzulegen.

## Syntax

```css
/* Einzelne Animation */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Mehrere Animationen */
animation-delay: 2.1s, 480ms;

/* Globale Werte */
animation-delay: inherit;
animation-delay: initial;
animation-delay: revert;
animation-delay: revert-layer;
animation-delay: unset;
```

### Werte

- {{cssxref("&lt;time&gt;")}}

  - : Der Zeitversatz ab dem Moment, in dem die Animation auf das Element angewendet wird und die Animation beginnen soll. Dieser kann entweder in Sekunden (`s`) oder Millisekunden (`ms`) angegeben werden. Die Einheit ist erforderlich.

    Ein positiver Wert gibt an, dass die Animation beginnen soll, nachdem die angegebene Zeit verstrichen ist. Ein Wert von `0s`, der Standardwert, gibt an, dass die Animation sofort beginnen soll, nachdem sie angewendet wurde.

    Ein negativer Wert führt dazu, dass die Animation sofort beginnt, aber teilweise im Verlauf ihres Zyklus. Beispielsweise, wenn Sie `-1s` als Animationsverzögerung angeben, beginnt die Animation sofort, jedoch 1 Sekunde in der Animationssequenz. Wenn Sie einen negativen Wert für die Animationsverzögerung angeben, aber der Startwert implizit ist, wird der Startwert von dem Moment an genommen, in dem die Animation auf das Element angewendet wird.

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte in einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}es erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationseigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> **Hinweis:** `animation-delay` hat keinen Einfluss auf [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen einer Animationsverzögerung

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

Bewegen Sie den Mauszeiger über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting an animation delay","100%","250")}}

Weitere Beispiele finden Sie unter [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
