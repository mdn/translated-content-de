---
title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`animation-composition`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die {{Glossary("composite_operation", "Zusammensetzungsoperation")}} an, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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
> Wenn Sie mehrere durch Kommas getrennte Werte auf einer `animation-*`-Eigenschaft spezifizieren, werden diese in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Zusammensetzungen unterschiedlich ist, werden die im `animation-composition`-Eigenschaft gelisteten Werte von dem ersten bis zum letzten `animation-name` durchlaufen, bis allen Animationen ein `animation-composition`-Wert zugewiesen ist. Weitere Informationen finden Sie unter [Festlegen mehrerer Animationsproperty-Werte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Bei Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, folgt die Reihenfolge der Operanden dem zugrunde liegenden Wert und dann dem Effektwert.
- `accumulate`
  - : Die Effekt- und zugrunde liegenden Werte werden kombiniert. Bei Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, folgt die Reihenfolge der Operanden dem zugrunde liegenden Wert und dann dem Effektwert.

## Beschreibung

Jede Eigenschaft, die durch die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-Regel anvisiert wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird berechnet, indem der _zugrunde liegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die `animation-composition`-Eigenschaft hilft zu spezifizieren, wie der zugrunde liegende Wert mit dem Effektwert kombiniert werden soll.

Zum Beispiel ist im folgenden CSS `blur(5px)` der zugrunde liegende Wert, und `blur(10px)` ist der Effektwert. Die `animation-composition`-Eigenschaft spezifiziert die Operation, die durchgeführt werden soll, um den endgültigen Effektwert nach dem Zusammenführen des zugrunde liegenden Werts und des Effektwerts zu erzeugen.

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

- Mit `replace` ersetzt `blur(10px)` `blur(5px)` im `0%` Keyframe. Dies ist das standardmäßige Verhalten der Eigenschaft.
- Mit `add` ist der zusammengesetzte Effektwert im `0%` Keyframe `blur(5px) blur(10px)`.
- Mit `accumulate` ist der zusammengesetzte Effektwert im `0%` Keyframe `blur(15px)`.

> [!NOTE]
> Eine Zusammensetzungsoperation kann auch in einem Keyframe spezifiziert werden. In diesem Fall wird die spezifizierte Zusammensetzungsoperation zuerst für jede Eigenschaft innerhalb dieses Keyframes und dann für jede Eigenschaft im nächsten Keyframe verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der `animation-composition` Werte

Das folgende Beispiel zeigt nebeneinander die Wirkung unterschiedlicher `animation-composition` Werte.

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

- Mit `replace` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%` Keyframe `translateX(100px)` (vollständiges Ersetzen des zugrunde liegenden Werts `translateX(30px) rotate(45deg)`). In diesem Fall dreht sich das Element von 45 Grad zu 0 Grad, während es von dem standardmäßig auf das Element selbst gesetzten Wert zu dem nicht gedrehten Wert bei der 20-%-Marke animiert. Dies ist das standardmäßige Verhalten.
- Mit `add` ist der endgültige Effektwert für die `transform`-Eigenschaft im `20%, 40%` Keyframe `translateX(30px) rotate(45deg) translateX(100px)`. So wird das Element zuerst 100px nach rechts verschoben, um 45 Grad um den Ursprung gedreht und dann um weitere 30px nach rechts verschoben.
- Mit `accumulate` ist der endgültige Effektwert im `20%, 40%` Keyframe `translateX(130px) rotate(45deg)`. Dies bedeutet, dass die beiden X-Achsen-Übersetzungswerte von `30px` und `100px` kombiniert oder "akkumuliert" werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [Zusammengesetzte Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
