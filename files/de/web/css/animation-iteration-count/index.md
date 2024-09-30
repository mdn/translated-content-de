---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-iteration-count`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie oft eine Animationssequenz abgespielt werden soll, bevor sie stoppt.

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

Es ist oft praktisch, die Kurzformeigenschaft {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

## Syntax

```css
/* Keyword value */
animation-iteration-count: infinite;

/* <number> values */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Multiple values */
animation-iteration-count: 2, 0, infinite;

/* Global values */
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
  - : Die Anzahl der Wiederholungen der Animation; dies ist standardmäßig `1`. Sie können nicht-ganzzahlige Werte angeben, um einen Teil eines Animationszyklus abzuspielen: Zum Beispiel spielt `0.5` die Hälfte des Animationszyklus ab. Negative Werte sind ungültig.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewandt, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegung mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Wenn Sie [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) erstellen, bewirkt die Angabe einer `animation-iteration-count`, dass die Animation über den Verlauf der Timeline entsprechend oft wiederholt wird. Wenn keine `animation-iteration-count` angegeben ist, erfolgt die Animation nur einmal. `infinite` ist ein gültiger Wert für Scroll-gesteuerte Animationen, führt aber zu einer nicht funktionierenden Animation.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Iterationanzahl festlegen

Diese Animation wird 10 Mal ausgeführt.

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

Fahren Sie mit der Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Setting iteration count","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Weitere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
