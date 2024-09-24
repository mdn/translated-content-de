---
title: animation-composition
slug: Web/CSS/animation-composition
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`animation-composition`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die {{Glossary("composite operation")}}, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

## Syntax

```css
/* Einzelne Animation */
animation-composition: replace;
animation-composition: add;
animation-composition: accumulate;

/* Mehrere Animationen */
animation-composition: replace, add;
animation-composition: add, accumulate;
animation-composition: replace, add, accumulate;

/* Globale Werte */
animation-composition: inherit;
animation-composition: initial;
animation-composition: revert;
animation-composition: revert-layer;
animation-composition: unset;
```

> [!NOTE]
> Wenn Sie mehrere durch Komma getrennte Werte in einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}} erscheinen. Wenn sich die Anzahl der Animationen und Kompositionen unterscheiden, werden die im `animation-composition` aufgeführten Werte von der ersten bis zur letzten `animation-name` zyklisch durchlaufen, bis alle Animationen einen zugewiesenen `animation-composition` Wert haben. Für mehr Informationen siehe [Einstellen mehrerer Animationswerte](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Bei Animationstypen, bei denen die Addition nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert, gefolgt vom Effektwert.
- `accumulate`
  - : Die Effekt- und zugrunde liegenden Werte werden kombiniert. Bei Animationstypen, bei denen die Addition nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert, gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die von der [@keyframes](/de/docs/Web/CSS/@keyframes) Regel angesprochen wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird durch Kombination des _zugrunde liegenden Werts_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe berechnet. Die `animation-composition` Eigenschaft hilft zu spezifizieren, wie der zugrunde liegende Wert mit dem Effektwert kombiniert wird.

Zum Beispiel, im folgenden CSS ist `blur(5px)` der zugrunde liegende Wert und `blur(10px)` der Effektwert. Die `animation-composition` Eigenschaft gibt die Operation an, die ausgeführt werden soll, um den endgültigen Effektwert nach der Zusammensetzung des Effekts des zugrunde liegenden Wertes und des Effektwertes zu erzeugen.

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

Betrachten Sie verschiedene Werte für die `animation-composition` Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie unten erläutert berechnet:

- Mit `replace` wird `blur(10px)` `blur(5px)` im `0%` Keyframe ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%` Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%` Keyframe `blur(15px)` sein.

> [!NOTE]
> Eine zusammengesetzte Operation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene zusammengesetzte Operation zuerst für jede Eigenschaft in diesem Keyframe und dann für jede Eigenschaft im nächsten Keyframe verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der Werte von animation-composition

Das folgende Beispiel zeigt die Wirkung verschiedener `animation-composition` Werte nebeneinander.

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

- Mit `replace` ist der endgültige Effektwert für die `transform` Eigenschaft im `0%, 20%` Keyframe `translateX(100px)` (kompletter Ersatz des zugrunde liegenden Wertes `translateX(30px) rotate(45deg)`). In diesem Fall dreht sich das Element von 45 Grad bis 0 Grad, während es von dem Standardwert, der am Element selbst gesetzt ist, bis zum nicht gedrehten Wert an der 0% Marke animiert. Dies ist das Standardverhalten.
- Mit `add` ist der endgültige Effektwert für die `transform` Eigenschaft im `0%, 20%` Keyframe `translateX(30px) rotate(45deg)`, gefolgt von `translateX(100px)`. Das Element wird also um `30px` nach rechts bewegt, um `45deg` gedreht und dann noch `100px` entlang der neu ausgerichteten X-Achse verschoben.
- Mit `accumulate` ist der endgültige Effektwert im `0%, 20%` Keyframe `translateX(130px) rotate(45deg)`. Dies bedeutet, dass die zwei X-Achsenverschiebungswerte `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Komposit-Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
