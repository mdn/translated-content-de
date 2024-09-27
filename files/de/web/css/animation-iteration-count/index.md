---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`animation-iteration-count`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie oft eine Animationssequenz abgespielt werden soll, bevor sie stoppt.

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

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

Die **`animation-iteration-count`** Eigenschaft wird als eine oder mehrere durch Kommas getrennte Werte angegeben.

### Werte

- `infinite`
  - : Die Animation wird für immer wiederholt.
- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Wiederholungen der Animation; standardmäßig ist dies `1`. Sie können Nicht-Integer-Werte angeben, um einen Teil eines Animationszyklus abzuspielen: zum Beispiel spielt `0.5` die Hälfte des Animationszyklus ab. Negative Werte sind ungültig.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

> [!NOTE]
> Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) führt die Angabe einer `animation-iteration-count` dazu, dass die Animation so oft wiederholt wird, wie es der Verlauf der Zeitachse vorgibt. Wenn keine `animation-iteration-count` angegeben wird, tritt die Animation nur einmal auf. `infinite` ist ein gültiger Wert für scroll-gesteuerte Animationen, führt jedoch zu einer Animation, die nicht funktioniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Iterationsanzahl

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
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
