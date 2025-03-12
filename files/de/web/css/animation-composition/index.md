---
title: animation-composition
slug: Web/CSS/animation-composition
l10n:
  sourceCommit: 0c8ed7f82f3aee5ee177f8c8e33879460b82ad6b
---

{{CSSRef}}

Die **`animation-composition`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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
> Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*`-Eigenschaft angeben, werden diese auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Kompositionen unterschiedlich ist, werden die in der `animation-composition`-Eigenschaft aufgeführten Werte von dem ersten bis zum letzten `animation-name` durchlaufen und wiederholt, bis alle Animationen einen zugewiesenen `animation-composition`-Wert haben. Weitere Informationen finden Sie unter [Festlegen mehrerer Animationswerteigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Für Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert gefolgt vom Effektwert.
- `accumulate`
  - : Die Effekt- und zugrunde liegenden Werte werden kombiniert. Für Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die durch die [@keyframes](/de/docs/Web/CSS/@keyframes) At-Regel angesprochen wird, ist mit einem Effektstapel verknüpft. Der Wert des Effektstapels wird berechnet, indem der _zugrunde liegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die `animation-composition`-Eigenschaft hilft dabei zu spezifizieren, wie der zugrunde liegende Wert mit dem Effektwert kombiniert werden soll.

Zum Beispiel, im untenstehenden CSS ist `blur(5px)` der zugrunde liegende Wert, und `blur(10px)` ist der Effektwert. Die `animation-composition`-Eigenschaft gibt an, welche Operation ausgeführt werden soll, um den endgültigen Effektwert nach dem Zusammenfügen des zugrunde liegenden Werts und des Effektwerts zu erzeugen.

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

Betrachten Sie verschiedene Werte für die `animation-composition`-Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie folgt berechnet:

- Mit `replace` wird `blur(10px)` `blur(5px)` im `0%`-Keyframe ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(15px)` sein.

> [!NOTE]
> Eine Kompositionsoperation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Kompositionsoperation zuerst für jede Eigenschaft innerhalb dieses Keyframes und dann auf jede Eigenschaft im nächsten Keyframe verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der animation-composition Werte

Das folgende Beispiel zeigt den Effekt verschiedener `animation-composition`-Werte nebeneinander.

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

- Mit `replace` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%`-Keyframe `translateX(100px)` (vollständiger Ersatz des zugrunde liegenden Werts `translateX(30px) rotate(45deg)`). In diesem Fall dreht sich das Element während der Animation vom Standardwert, der auf das Element selbst gesetzt ist, bis zum nicht rotierten Wert, der bei der 20%-Marke festgelegt ist, von 45 Grad auf 0 Grad. Dies ist das Standardverhalten.
- Mit `add` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%`-Keyframe `translateX(30px) rotate(45deg) translateX(100px)`. So wird das Element zuerst 100px nach rechts bewegt, um 45 Grad um den Ursprung gedreht und dann um 30px nach rechts bewegt.
- Mit `accumulate` ist der endgültige Effektwert im `20%, 40%`-Keyframe `translateX(130px) rotate(45deg)`. Das bedeutet, dass die beiden X-Achsen-Translationswerte von `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Kompositionseigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
