---
title: animation-name
slug: Web/CSS/animation-name
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`animation-name`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Namen von einem oder mehreren {{cssxref("@keyframes")}} at-Rules an, die die Animation beschreiben, die auf ein Element angewendet werden soll. Mehrere `@keyframe` at-Rules werden als kommaseparierte Liste von Namen angegeben. Wenn der angegebene Name mit keinem `@keyframe` at-Rule übereinstimmt, werden keine Eigenschaften animiert.

{{EmbedInteractiveExample("pages/css/animation-name.html")}}

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

## Syntax

```css
/* Einzelne Animation */
animation-name: none;
animation-name: test_05;
animation-name: -specific;
animation-name: sliding-vertically;

/* Mehrere Animationen */
animation-name: test1, animation4;
animation-name:
  none,
  -moz-specific,
  sliding;

/* Globale Werte */
animation-name: inherit;
animation-name: initial;
animation-name: revert;
animation-name: revert-layer;
animation-name: unset;
```

### Werte

- `none`
  - : Ein spezielles Schlüsselwort, das keine Keyframes bezeichnet. Es kann verwendet werden, um eine Animation zu deaktivieren, ohne die Reihenfolge der anderen Bezeichner zu ändern, oder um Animationen zu deaktivieren, die aus dem Cascade stammen.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein Name, der die Animation identifiziert. Dieser Bezeichner besteht aus einer Kombination von groß-/kleinsensitiven Buchstaben `a` bis `z`, Zahlen `0` bis `9`, Unterstrichen (`_`), und/oder Bindestrichen (`-`). Das erste nicht-Bindestrich-Zeichen muss ein Buchstabe sein. Auch sind zwei Bindestriche am Anfang des Bezeichners verboten. Außerdem kann der Bezeichner nicht `none`, `unset`, `initial` oder `inherit` sein.

> [!NOTE]
> Wenn Sie mehrere kommaseparierte Werte auf einer `animation-*` Eigenschaft angeben, werden sie in der Reihenfolge der `animation-name`s auf die Animationen angewendet. Für Situationen, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Einstellen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benennen einer Animation

Diese Animation hat einen `animation-name` von `rotate`.

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

{{EmbedLiveSample("Naming an animation","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
