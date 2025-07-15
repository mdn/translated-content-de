---
title: animation-play-state
slug: Web/CSS/animation-play-state
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`animation-play-state`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation läuft oder pausiert ist.

{{InteractiveExample("CSS Demo: animation-play-state")}}

```css interactive-example-choice
animation-play-state: paused;
```

```css interactive-example-choice
animation-play-state: running;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

Wird eine pausierte Animation fortgesetzt, so startet sie an der Stelle, an der sie pausiert wurde, und nicht von Anfang der Animationssequenz.

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
  - : Die **Animation** läuft **derzeit**.
- `paused`
  - : Die **Animation** ist **derzeit pausiert**.

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte in einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge der {{cssxref("animation-name")}}s auf die Animationen angewendet. Für Situationen, in denen die Anzahl der Animationen und die `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerten](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Animation pausieren

Diese Animation ist pausiert, läuft aber, wenn Sie mit der Maus darüber fahren.

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

Siehe [CSS Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
