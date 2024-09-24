---
title: animation-play-state
slug: Web/CSS/animation-play-state
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-play-state`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob eine Animation läuft oder pausiert ist.

{{EmbedInteractiveExample("pages/css/animation-play-state.html")}}

Das Fortsetzen einer pausierten Animation setzt die Animation dort fort, wo sie zum Zeitpunkt der Unterbrechung gestoppt wurde, anstatt von Anfang der Animationssequenz neu zu starten.

## Syntax

```css
/* Einzelne Animation */
animation-play-state: running;
animation-play-state: paused;

/* Mehrere Animationen */
animation-play-state: paused, running, running;

/* Globale Werte */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: revert;
animation-play-state: revert-layer;
animation-play-state: unset;
```

### Werte

- `running`
  - : Die **Animation** läuft derzeit.
- `paused`
  - : Die **Animation** ist derzeit **pausiert**.

> [!NOTE]
> Wenn Sie mehrere Komma-getrennte Werte in einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Fälle, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationswerteigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Animation pausieren

Diese Animation ist pausiert, läuft jedoch, wenn Sie mit der Maus darüber fahren.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
