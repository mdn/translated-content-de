---
title: "`animation-composition` CSS property"
short-title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`animation-composition`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die {{Glossary("composite_operation", "Zusammensetzungsoperation")}} fest, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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
> Wenn Sie mehrere durch Kommas getrennte Werte in einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und der Zusammensetzungen unterschiedlich ist, werden die aufgelisteten Werte in der `animation-composition`-Eigenschaft vom ersten bis zum letzten `animation-name` durchlaufen, bis alle Animationen einen zugewiesenen `animation-composition`-Wert haben. Weitere Informationen finden Sie unter [Mehrere Animations-Werte festlegen](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den darunterliegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem darunterliegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Bei Animationstypen, bei denen die Addition nicht kommutativ ist, erfolgt die Reihenfolge der Operanden durch den darunterliegenden Wert, gefolgt vom Effektwert.
- `accumulate`
  - : Die Effekt- und darunterliegenden Werte werden kombiniert. Bei Animationstypen, bei denen die Addition nicht kommutativ ist, erfolgt die Reihenfolge der Operanden durch den darunterliegenden Wert, gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die von der [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) At-Regel angesprochen wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird berechnet, indem der _darunterliegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die Eigenschaft `animation-composition` hilft, festzulegen, wie der darunterliegende Wert mit dem Effektwert kombiniert werden soll.

Zum Beispiel, im untenstehenden CSS ist `blur(5px)` der darunterliegende Wert und `blur(10px)` der Effektwert. Die `animation-composition`-Eigenschaft gibt an, welche Operation ausgeführt werden soll, um den endgültigen Effektwert nach der Zusammensetzung des darunterliegenden Werts und des Effektwerts zu erhalten.

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

Betrachten Sie verschiedene Werte für die `animation-composition`-Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie unten erklärt berechnet:

- Mit `replace` wird `blur(10px)` `blur(5px)` im `0%`-Keyframe ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(15px)` sein.

> [!NOTE]
> Eine Zusammensetzungsoperation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Zusammensetzungsoperation zuerst auf jede Eigenschaft innerhalb dieses Keyframes und dann auf jede Eigenschaft im nächsten Keyframe angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der Werte von animation-composition

Das untenstehende Beispiel zeigt den Effekt unterschiedlicher `animation-composition`-Werte nebeneinander.

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

Hier ist der darunterliegende Wert `translateX(50px) rotate(45deg)`.

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

- Mit `replace` ist der endgültige Effektwert für die Eigenschaft `transform` im `20%, 40%`-Keyframe `translateX(100px)` (es ersetzt vollständig den darunterliegenden Wert `translateX(30px) rotate(45deg)`). In diesem Fall dreht das Element von 45 Grad auf 0 Grad, während es von dem auf das Element selbst gesetzten Standardwert zu dem bei 20% gesetzten nicht rotierenden Wert animiert. Dies ist das Standardverhalten.
- Mit `add` ist der endgültige Effektwert für die Eigenschaft `transform` im `20%, 40%`-Keyframe `translateX(30px) rotate(45deg) translateX(100px)`. Das Element wird zuerst um 100px nach rechts verschoben, dreht sich um 45 Grad um den Ursprung und bewegt sich dann um 30px nach rechts.
- Mit `accumulate` ist der endgültige Effektwert im `20%, 40%`-Keyframe `translateX(130px) rotate(45deg)`. Das bedeutet, dass die beiden X-Achsen-Translationswerte von `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [Zusammengesetzte Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
