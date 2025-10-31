---
title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-composition`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, welche {{Glossary("composite_operation", "Kompositionsoperation")}} verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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
> Wenn Sie auf einer `animation-*` Eigenschaft mehrere durch Komma getrennte Werte angeben, werden diese in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Kompositionen unterschiedlich ist, werden die in der `animation-composition`-Eigenschaft aufgelisteten Werte zyklisch von der ersten bis zur letzten `animation-name`-Angabe wiederholt, bis alle Animationen einen zugewiesenen `animation-composition`-Wert haben. Weitere Informationen finden Sie unter [Festlegen mehrerer Animationswerteigenschaften](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Für Animationstypen, bei denen die Addition nicht kommutativ ist, erfolgt die Reihenfolge der Operanden vom zugrunde liegenden Wert gefolgt vom Effektwert.
- `accumulate`
  - : Der Effekt- und der zugrunde liegende Wert werden kombiniert. Für Animationstypen, bei denen die Addition nicht kommutativ ist, erfolgt die Reihenfolge der Operanden vom zugrunde liegenden Wert gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die durch die [@keyframes](/de/docs/Web/CSS/@keyframes) at-Regel angesprochen wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird durch die Kombination des _zugrunde liegenden Werts_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe berechnet. Die `animation-composition`-Eigenschaft hilft dabei, festzulegen, wie der zugrunde liegende Wert mit dem Effektwert kombiniert wird.

Zum Beispiel wird im folgenden CSS `blur(5px)` als zugrunde liegender Wert und `blur(10px)` als Effektwert betrachtet. Die `animation-composition`-Eigenschaft gibt an, welche Operation durchgeführt wird, um den endgültigen Effektwert nach der Komposition des Effektwerts mit dem zugrunde liegenden Wert zu erzeugen.

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

Betrachten Sie unterschiedliche Werte der `animation-composition`-Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie unten erklärt berechnet:

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

### Verständnis der animation-composition-Werte

Das folgende Beispiel zeigt den Effekt unterschiedlicher `animation-composition`-Werte nebeneinander.

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

- Mit `replace` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%`-Keyframe `translateX(100px)` (vollständiges Ersetzen des zugrunde liegenden Werts `translateX(30px) rotate(45deg)`). In diesem Fall dreht sich das Element von 45 Grad zu 0 Grad, während es von dem Standardwert, der auf das Element selbst eingestellt ist, zu dem nicht gedrehten Wert am 20%-Wert animiert wird. Dies ist das Standardverhalten.
- Mit `add` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%`-Keyframe `translateX(30px) rotate(45deg) translateX(100px)`. Das Element wird also zuerst um 100px nach rechts verschoben, um 45 Grad um den Ursprung gedreht, und dann erneut um 30px nach rechts verschoben.
- Mit `accumulate` ist der endgültige Effektwert im `20%, 40%`-Keyframe `translateX(130px) rotate(45deg)`. Das bedeutet, dass die beiden X-Achsen-Translationswerte von `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Composite-Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
