---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-iteration-count`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie oft eine Animationssequenz abgespielt werden soll, bevor sie stoppt.

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu nutzen, um alle Animations-Eigenschaften auf einmal festzulegen.

## Syntax

```css
/* Schlüsselwortwert */
animation-iteration-count: infinite;

/* <number> Werte */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Mehrere Werte */
animation-iteration-count: 2, 0, infinite;

/* Globale Werte */
animation-iteration-count: inherit;
animation-iteration-count: initial;
animation-iteration-count: revert;
animation-iteration-count: revert-layer;
animation-iteration-count: unset;
```

Die **`animation-iteration-count`** Eigenschaft wird als ein oder mehrere durch Kommas getrennte Werte angegeben.

### Werte

- `infinite`
  - : Die Animation wird unendlich oft wiederholt.
- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Wiederholungen der Animation; standardmäßig ist dies `1`. Sie können nicht ganzzahlige Werte angeben, um einen Teil eines Animationszyklus abzuspielen: Zum Beispiel wird `0.5` einen halben Animationszyklus abspielen. Negative Werte sind ungültig.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte auf einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Bei der Erstellung von [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations), bewirkt die Angabe eines `animation-iteration-count`, dass die Animation entsprechend der Fortschritt der Zeitachse mehrmals wiederholt wird. Wenn kein `animation-iteration-count` angegeben wird, tritt die Animation nur einmal auf. `infinite` ist ein gültiger Wert für scroll-gesteuerte Animationen, führt jedoch zu einer nicht funktionierenden Animation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Iterationsanzahl festlegen

Diese Animation wird 10-mal ausgeführt.

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
  animation-iteration-count: 10;
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

{{EmbedLiveSample("Setting iteration count","100%","250")}}

Sehen Sie sich [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
