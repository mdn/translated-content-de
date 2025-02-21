---
title: animation-name
slug: Web/CSS/animation-name
l10n:
  sourceCommit: f60df9abb92bb11aae0cd04730d27266d5f3290e
---

{{CSSRef}}

Die **`animation-name`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Namen von einem oder mehreren {{cssxref("@keyframes")}} At-Regeln fest, die die Animation beschreiben, die auf ein Element angewendet werden soll. Mehrere `@keyframe` At-Regeln werden als kommagetrennte Liste von Namen angegeben. Wenn der angegebene Name keiner `@keyframe` At-Regel entspricht, werden keine Eigenschaften animiert.

{{EmbedInteractiveExample("pages/css/animation-name.html")}}

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

## Syntax

```css
/* No animation */
animation-name: none;

/* Single animation */
animation-name: test_05;
animation-name: -specific;
animation-name: "sliding-vertically";

/* Multiple animations */
animation-name: test1, animation4;
animation-name:
  none,
  -moz-specific,
  sliding;

/* Global values */
animation-name: inherit;
animation-name: initial;
animation-name: revert;
animation-name: revert-layer;
animation-name: unset;
```

### Werte

- `none`
  - : Ein spezielles Schlüsselwort, das keine Keyframes bezeichnet. Es kann verwendet werden, um eine Animation zu deaktivieren, ohne die Reihenfolge der anderen Identifikatoren zu ändern, oder um Animationen aus dem Kaskade zu deaktivieren.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein nicht zitierter Name, der die Animation identifiziert. Dieser Identifikator besteht aus einer Kombination von Groß- und Kleinschreibung beachtenden Buchstaben `a` bis `z`, Zahlen `0` bis `9`, Unterstrichen (`_`) und/oder Bindestrichen (`-`). Das erste Zeichen, das kein Bindestrich ist, muss ein Buchstabe sein. Außerdem sind zwei Bindestriche am Anfang des Identifikators verboten. Ferner kann der Identifikator nicht `none`, `unset`, `initial` oder `inherit` sein.
- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, die denselben Regeln wie benutzerdefinierte Identifikatoren folgt, wie oben beschrieben, außer dass sie von doppelten (") oder einfachen (') Anführungszeichen umgeben ist. Wenn ein zitierter String sowohl für den `animation-name` als auch für den entsprechenden {{cssxref("@keyframes")}} At-Regelnamen verwendet wird, sind `none`, globale Schlüsselwörter und Namen, die mit einem Unterstrich oder doppelten Bindestrichen beginnen, gültig, obwohl nicht empfohlen.

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte bei einer `animation-*` Eigenschaft angeben, werden diese auf die Animationen in der Reihenfolge angewendet, in der die `animation-name`s erscheinen. Für Situationen, in denen die Anzahl der Animationen und der `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Werte für Animationseigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Animation benennen

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

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
