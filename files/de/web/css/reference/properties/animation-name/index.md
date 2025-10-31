---
title: animation-name
slug: Web/CSS/Reference/Properties/animation-name
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-name`**-Eigenschaft [CSS](/de/docs/Web/CSS) gibt die Namen eines oder mehrerer {{cssxref("@keyframes")}}-Regeln an, die die Animation beschreiben, die auf ein Element angewendet werden soll. Mehrere `@keyframes`-Regeln werden als kommagetrennte Liste von Namen angegeben. Wenn der angegebene Name keiner `@keyframes`-Regel entspricht, werden keine Eigenschaften animiert.

{{InteractiveExample("CSS Demo: animation-name")}}

```css interactive-example-choice
animation-name: none;
```

```css interactive-example-choice
animation-name: slide;
```

```css interactive-example-choice
animation-name: bounce;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  animation-direction: alternate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  background-color: #1766aa;
  border-radius: 50%;
  border: 5px solid #333333;
  color: white;
  height: 150px;
  margin: auto;
  margin-left: 0;
  width: 150px;
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

@keyframes bounce {
  from {
    background-color: orange;
    color: black;
    margin-top: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-top: 40%;
  }
}
```

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("animation")}} zu verwenden, um alle Animationseigenschaften auf einmal festzulegen.

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
  - : Ein spezielles Schlüsselwort, das keine Keyframes bezeichnet. Es kann verwendet werden, um eine Animation zu deaktivieren, ohne die Reihenfolge der anderen Bezeichner zu ändern, oder um Animationen aus dem Kaskadenstil zu deaktivieren.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein unzitierter Name, der die Animation identifiziert. Dieser Bezeichner besteht aus einer Kombination von Groß-/Kleinschreibung beachtenden Buchstaben `a` bis `z`, Zahlen `0` bis `9`, Unterstrichen (`_`) und/oder Bindestrichen (`-`). Das erste Zeichen, das kein Bindestrich ist, muss ein Buchstabe sein. Außerdem sind zwei Bindestriche am Anfang des Bezeichners verboten. Ferner darf der Bezeichner nicht `none`, `unset`, `initial` oder `inherit` sein.
- {{cssxref("&lt;string&gt;")}}
  - : Eine Zeichenfolge, die denselben Regeln wie benutzerdefinierte Bezeichner folgt, wie oben beschrieben, außer dass sie von doppelten (") oder einfachen (') Anführungszeichen umgeben ist. Wenn Sie einen in Anführungszeichen gesetzten String sowohl für den `animation-name` als auch für den entsprechenden {{cssxref("@keyframes")}}-Regelnamen verwenden, sind `none`, globale Schlüsselwörter und mit einem Unterstrich oder zwei Bindestrichen beginnende Namen gültig, aber nicht empfohlen.

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte für eine `animation-*`-Eigenschaft angeben, werden sie in der Reihenfolge angewendet, in der die `animation-name`s erscheinen. Für Situationen, in denen die Anzahl der Animationen und der `animation-*`-Eigenschaftswerte nicht übereinstimmen, siehe [Festlegen mehrerer Animationseigenschaftswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Animation benennen

Diese Animation hat den `animation-name` `rotate`.

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

Fahren Sie mit dem Mauszeiger über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Naming an animation","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
