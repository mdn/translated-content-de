---
title: animation-name
slug: Web/CSS/animation-name
l10n:
  sourceCommit: dfd18cb9ee7c6195d07cd937d206b53246f7507e
---

{{CSSRef}}

Die **`animation-name`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Namen von einem oder mehreren {{cssxref("@keyframes")}} at-rules an, die die anzuwendende Animation auf ein Element beschreiben. Mehrere `@keyframes` at-rules werden als kommagetrennte Liste von Namen angegeben. Wenn der angegebene Name nicht mit einem `@keyframes` at-rule übereinstimmt, werden keine Eigenschaften animiert.

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
  border: 5px solid #333;
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

Es ist oft praktisch, die Kurzschreibweise {{cssxref("animation")}} zu verwenden, um alle Animations-Eigenschaften auf einmal festzulegen.

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
  - : Ein spezielles Schlüsselwort, das keine Keyframes bezeichnet. Es kann verwendet werden, um eine Animation zu deaktivieren, ohne die Reihenfolge der anderen Identifikatoren zu ändern, oder um Animationen aus der Cascade zu deaktivieren.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein nicht zitierter Name, der die Animation identifiziert. Dieser Bezeichner besteht aus einer Kombination von Groß- und Kleinschreibung berücksichtigenden Buchstaben `a` bis `z`, Zahlen `0` bis `9`, Unterstrichen (`_`) und/oder Bindestrichen (`-`). Das erste nicht-Bindestrich-Zeichen muss ein Buchstabe sein. Außerdem sind zwei Bindestriche am Anfang des Bezeichners verboten. Ferner darf der Bezeichner nicht `none`, `unset`, `initial` oder `inherit` sein.
- {{cssxref("&lt;string&gt;")}}
  - : Eine Reihe von Zeichen, die denselben Regeln wie benutzerdefinierte Bezeichner folgen, wie oben beschrieben, außer dass sie entweder von doppelten (") oder einfachen (') Anführungszeichen umgeben sind. Wenn ein zitierter String sowohl für den `animation-name` als auch den entsprechenden {{cssxref("@keyframes")}} at-rule Namen verwendet wird, sind `none`, globale Schlüsselwörter und Namen, die mit einem Unterstrich oder doppelten Bindestrichen beginnen, gültig, obwohl nicht empfohlen.

> [!NOTE]
> Wenn Sie mehrere kommagetrennte Werte für eine `animation-*` Eigenschaft angeben, werden sie den Animationen in der Reihenfolge zugewiesen, in der die `animation-name`s erscheinen. Für Fälle, in denen die Anzahl der Animationen und `animation-*` Eigenschaftswerte nicht übereinstimmen, siehe [Mehrere Werte für Animations-Eigenschaften festlegen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Animation benennen

Diese Animation hat einen `animation-name` mit dem Namen `rotate`.

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

Bewegen Sie die Maus über das Rechteck, um die Animation zu starten.

{{EmbedLiveSample("Naming an animation","100%","250")}}

Siehe [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- JavaScript [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) API
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
