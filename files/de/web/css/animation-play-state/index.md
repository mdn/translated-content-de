---
title: animation-play-state
slug: Web/CSS/animation-play-state
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-play-state`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation läuft oder pausiert ist.

{{EmbedInteractiveExample("pages/css/animation-play-state.html")}}

Wenn eine pausierte Animation fortgesetzt wird, beginnt sie an der Stelle, an der sie pausiert wurde, und nicht von vorne in der Animationssequenz.

## Syntax

```css
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;

/* Global values */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: revert;
animation-play-state: revert-layer;
animation-play-state: unset;
```

### Werte

- `running`
  - : Die **Animation** ist momentan **aktiv**.
- `paused`
  - : Die **Animation** ist momentan **pausiert**.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Animation pausieren

Diese Animation ist pausiert, wird aber ausgeführt, wenn Sie darüber fahren.

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
  animation-name: rotate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-play-state: paused;
}

.box:hover {
  animation-play-state: running;
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

Fahren Sie mit der Maus über das Rechteck, um die Animation abzuspielen.

{{EmbedLiveSample("Pausing an animation","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
