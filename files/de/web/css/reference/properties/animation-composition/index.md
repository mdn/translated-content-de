---
title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`animation-composition`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die {{Glossary("composite_operation", "Kompositionsoperation")}} an, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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
> Wenn Sie mehrere kommagetrennte Werte in einer `animation-*`-Eigenschaft angeben, werden diese in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Kompositionen unterschiedlich ist, werden die Werte, die in der `animation-composition`-Eigenschaft aufgeführt sind, von der ersten bis zur letzten `animation-name` durchlaufen, bis allen Animationen ein `animation-composition`-Wert zugewiesen wurde. Weitere Informationen finden Sie unter [Festlegen mehrerer Werte für Animationseigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert ersetzt den zugrundeliegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrundeliegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Für Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrundeliegende Wert gefolgt vom Effektwert.
- `accumulate`
  - : Die Effekt- und zugrundeliegenden Werte werden kombiniert. Für Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrundeliegende Wert gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die von der [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-At-Regel anvisiert wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird berechnet, indem der _zugrundeliegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die `animation-composition`-Eigenschaft hilft dabei zu spezifizieren, wie der zugrundeliegende Wert mit dem Effektwert kombiniert werden soll.

Zum Beispiel ist im folgenden CSS `blur(5px)` der zugrundeliegende Wert und `blur(10px)` ist der Effektwert. Die `animation-composition`-Eigenschaft gibt die Operation an, die ausgeführt werden soll, um den endgültigen Effektwert nach der Komposition des Effektwerts mit dem zugrundeliegenden Wert zu erhalten.

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

Betrachten Sie unterschiedliche Werte für die `animation-composition`-Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie folgt berechnet:

- Mit `replace` wird `blur(10px)` im `0%`-Keyframe `blur(5px)` ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(15px)` sein.

> [!NOTE]
> Eine Kompositionsoperation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Kompositionsoperation zuerst für jede Eigenschaft innerhalb dieses Keyframes verwendet und anschließend auf jede Eigenschaft im nächsten Keyframe angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der animation-composition-Werte

Das folgende Beispiel zeigt die Wirkung unterschiedlicher `animation-composition`-Werte nebeneinander.

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

Hier ist der zugrundeliegende Wert `translateX(50px) rotate(45deg)`.

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

- Mit `replace` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%`-Keyframe `translateX(100px)` (ersetzt vollständig den zugrundeliegenden Wert `translateX(30px) rotate(45deg)`). In diesem Fall dreht sich das Element von 45 Grad auf 0 Grad, wenn es sich von dem Standardwert des Elements selbst zum nicht-gedrehten Wert am 20%-Punkt bewegt. Dies ist das Standardverhalten.
- Mit `add` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%`-Keyframe `translateX(30px) rotate(45deg) translateX(100px)`. Das Element wird also zuerst 100px nach rechts verschoben, um 45 Grad um den Ursprung gedreht und dann erneut um 30px nach rechts verschoben.
- Mit `accumulate` ist der endgültige Effektwert im `20%, 40%`-Keyframe `translateX(130px) rotate(45deg)`. Das bedeutet, dass die beiden X-Achsen-Translationswerte `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Zusammengesetzte Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
