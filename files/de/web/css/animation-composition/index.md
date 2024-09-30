---
title: animation-composition
slug: Web/CSS/animation-composition
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-composition`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die [Kompositionsoperation](/de/docs/Glossary/composite_operation) an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig die gleiche Eigenschaft beeinflussen.

## Syntax

```css
/* Single animation */
animation-composition: replace;
animation-composition: add;
animation-composition: accumulate;

/* Multiple animations */
animation-composition: replace, add;
animation-composition: add, accumulate;
animation-composition: replace, add, accumulate;

/* Global values */
animation-composition: inherit;
animation-composition: initial;
animation-composition: revert;
animation-composition: revert-layer;
animation-composition: unset;
```

> [!NOTE]
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden diese auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Kompositionen unterschiedlich ist, werden die in der Eigenschaft `animation-composition` aufgeführten Werte von der ersten bis zur letzten `animation-name` durchlaufen, bis alle Animationen einen zugewiesenen `animation-composition` Wert haben. Weitere Informationen finden Sie unter [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Bei Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert gefolgt vom Effektwert.
- `accumulate`
  - : Die Effekt- und zugrunde liegenden Werte werden kombiniert. Bei Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die durch die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel anvisiert wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird berechnet, indem der _zugrunde liegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die `animation-composition` Eigenschaft hilft dabei festzulegen, wie der zugrunde liegende Wert mit dem Effektwert kombiniert wird.

Zum Beispiel, im untenstehenden CSS ist `blur(5px)` der zugrunde liegende Wert, und `blur(10px)` ist der Effektwert. Die `animation-composition` Eigenschaft gibt die Operation an, die ausgeführt werden soll, um den endgültigen Effektwert nach der Komposition des Effekts des zugrunde liegenden Wertes und des Effektwertes zu erzeugen.

```css
.icon:hover {
  filter: blur(5px);
  animation: 3s infinite pulse;
  animation-composition: add;
}

@keyframes pulse {
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(20px);
  }
}
```

Berücksichtigen Sie verschiedene Werte für die `animation-composition` Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie unten erklärt berechnet:

- Mit `replace` wird `blur(10px)` `blur(5px)` im `0%` Keyframe ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%` Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%` Keyframe `blur(15px)` sein.

> [!NOTE]
> Eine Kompositionsoperation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Kompositionsoperation zuerst auf jede Eigenschaft innerhalb dieses Keyframes und dann auf jede Eigenschaft im nächsten Keyframe angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der animation-composition Werte

Das untenstehende Beispiel zeigt den Effekt verschiedener `animation-composition` Werte nebeneinander.

#### HTML

```html
<div class="container">
  replace
  <div id="replace" class="target"></div>
</div>
<div class="container">
  add
  <div id="add" class="target"></div>
</div>
<div class="container">
  accumulate
  <div id="accumulate" class="target"></div>
</div>
```

#### CSS

Hier ist der zugrunde liegende Wert `translateX(50px) rotate(45deg)`.

```css hidden
.container {
  width: 230px;
  height: 200px;
  background: cyan;
  display: inline-block;
  text-align: center;
}

.target {
  width: 20px;
  height: 50px;
  background: green;
  border-radius: 10px;
  margin: 20px 0;
}
```

```css
@keyframes slide {
  20%,
  40% {
    transform: translateX(100px);
    background: yellow;
  }
  80%,
  100% {
    transform: translateX(150px);
    background: orange;
  }
}

.target {
  transform: translateX(30px) rotate(45deg);
  animation: slide 5s linear infinite;
}
.target:hover {
  animation-play-state: paused;
}
#replace {
  animation-composition: replace;
}
#add {
  animation-composition: add;
}
#accumulate {
  animation-composition: accumulate;
}
```

#### Ergebnis

{{EmbedLiveSample("Reversing the animation direction","100%","250")}}

- Mit `replace` ist der endgültige Effektwert für die `transform` Eigenschaft im `0%, 20%` Keyframe `translateX(100px)` (vollständiges Ersetzen des zugrunde liegenden Werts `translateX(30px) rotate(45deg)`). In diesem Fall dreht sich das Element von 45 Grad auf 0 Grad, während es von dem auf dem Element selbst gesetzten Standardwert zum nicht-gedrehten Wert am 0%-Markierungspunkt animiert. Dies ist das Standardverhalten.
- Mit `add` ist der endgültige Effektwert für die `transform` Eigenschaft im `0%, 20%` Keyframe `translateX(30px) rotate(45deg)` gefolgt von `translateX(100px)`. Das Element wird also `30px` nach rechts verschoben, um `45deg` gedreht und dann weiter um `100px` entlang der umgelenkten X-Achse übersetzt.
- Mit `accumulate` ist der endgültige Effektwert im `0%, 20%` Keyframe `translateX(130px) rotate(45deg)`. Das bedeutet, dass die beiden X-Achse-Translationswerte von `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Zusammengesetzte Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
