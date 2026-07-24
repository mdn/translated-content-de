---
title: "`animation-composition` CSS property"
short-title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: d4dc9d899ebec0e9c22a5bb9229f39f33457d8df
---

Die **`animation-composition`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die {{Glossary("composite_operation", "Compositing-Operation")}} fest, die verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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

### Werte

Diese Eigenschaft wird als ein oder mehrere durch Kommas getrennte Schlüsselwörter angegeben:

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Bei Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, folgt die Reihenfolge der Operanden dem zugrunde liegenden Wert gefolgt vom Effektwert.
- `accumulate`
  - : Die Effekt- und zugrunde liegenden Werte werden kombiniert. Bei Animationstypen, bei denen die Additionsoperation nicht kommutativ ist, folgt die Reihenfolge der Operanden dem zugrunde liegenden Wert gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die durch die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) At-Regel angesprochen wird, ist mit einem Effektstapel verbunden. Der Wert des Effektstapels wird berechnet, indem der _zugrunde liegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die Eigenschaft `animation-composition` hilft dabei, festzulegen, wie der zugrunde liegende Wert mit dem Effektwert kombiniert werden soll.

In dem unten stehenden CSS-Beispiel ist `blur(5px)` der zugrunde liegende Wert und `blur(10px)` der Effektwert. Die Eigenschaft `animation-composition` gibt die Operation an, die durchgeführt werden soll, um den abschließenden Effektwert nach dem Compositing des Effektwerts und des zugrunde liegenden Werts zu erzeugen.

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

Betrachten Sie verschiedene Werte für die Eigenschaft `animation-composition` im obigen Beispiel. Der finale Effektwert wird in jedem dieser Fälle wie folgt berechnet:

- Mit `replace` wird `blur(10px)` `blur(5px)` im `0%`-Keyframe ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%`-Keyframe `blur(15px)` betragen.

> [!NOTE]
> Eine Compositing-Operation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Compositing-Operation zuerst für jede Eigenschaft innerhalb dieses Keyframes und dann für jede Eigenschaft im nächsten Keyframe verwendet.

### Mehrere Werte

Wenn Sie mehrere durch Kommas getrennte Werte für eine `animation-*`-Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Kompositionen unterschiedlich ist, werden die in der Eigenschaft `animation-composition` aufgelisteten Werte von der ersten bis zur letzten `animation-name` weitergeführt, bis allen Animationen ein `animation-composition`-Wert zugewiesen ist. Weitere Informationen finden Sie unter [Festlegen mehrerer Animations-Eigenschaftswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der Werte von animation-composition

Das folgende Beispiel zeigt die Wirkung verschiedener `animation-composition`-Werte nebeneinander.

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

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

.container {
  flex: 1;
  min-width: 200px;
  height: 200px;
  background: lightblue;
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
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateX(150px);
  }
}

.target {
  transform: translateX(30px) rotate(45deg);
  animation: slide 5s linear infinite;
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

Der zugrunde liegende Wert für die `transform`-Eigenschaft in allen Fällen ist `translateX(30px) rotate(45deg)`. Die Effekte der verschiedenen `animation-composition`-Werte sind wie folgt:

- Bei `replace` ersetzt die `transform`-Eigenschaft in jedem Keyframe vollständig die zugrunde liegende `transform`-Eigenschaft, die auf das animierte Element angewendet wird. Der finale Effektwert für die `transform`-Eigenschaft im `50%`-Keyframe ist `translateY(30px)` (kein `rotate` oder `translateX`); im `100%`-Keyframe ist es `translateX(150px)` (kein `rotate` oder `translateY`).

  Das Ziel beginnt bei `transform: translateX(30px) rotate(45deg)` und animiert effektiv zu `transform: translateY(30px)`, dann zu `transform: translateX(150px)`.

- Bei `add` ist der finale Effektwert in jedem Keyframe der zugrunde liegende `transform`-Wert mit dem Effektwert, der unmittelbar danach platziert wird.

  Daher beginnt das Ziel bei `transform: translateX(30px) rotate(45deg)` und animiert effektiv zuerst zu `transform: translateX(30px) rotate(45deg) translateY(30px)` (was `30px` "nach unten" auf der gedrehten Y-Achse ist), und dann zu `transform: translateX(30px) rotate(45deg) translateX(150px)`. Da die additiv Operation relativ zum zugrunde liegenden `transform` und nicht zum vorherigen Keyframe ist, gibt es bei `100%` kein `translateY(30px)`, wodurch das Element `150px` entlang der gedrehten X-Achse von der ursprünglichen Position entfernt wird.

- Bei `accumulate` ist der finale Effektwert der Effekt `transform` des Keyframes, kombiniert mit dem ursprünglichen zugrunde liegenden. Bei `50%` wird `translateY(30px)` mit dem ursprünglichen `translateX(30px)` zu einer einzigen Translation kombiniert (`translate(30px, 30px)`). Bei `100%` kombiniert sich `translateX(150px)` mit dem ursprünglichen `translateX(30px)` zu `translateX(180px)`.

  Daher beginnt das Ziel bei `transform: translateX(30px) rotate(45deg)` und animiert effektiv zuerst zu `transform: translate(30px, 30px) rotate(45deg)`, und dann zu `transform: translateX(180px) rotate(45deg)`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [Composite-Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
