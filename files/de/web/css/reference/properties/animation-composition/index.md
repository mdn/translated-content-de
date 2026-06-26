---
title: "`animation-composition` CSS property"
short-title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: 68bff8f2a51944e80394307c8e5c2879c167b126
---

Die **`animation-composition`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die {{Glossary("composite_operation", "composite operation")}} an, die verwendet werden soll, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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
> Wenn Sie mehrere durch Kommas getrennte Werte bei einer `animation-*` Eigenschaft angeben, werden diese in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Wenn die Anzahl der Animationen und Zusammensetzungen unterschiedlich ist, werden die im `animation-composition`-Eigenschaft aufgeführten Werte von der ersten bis zur letzten `animation-name` durchlaufen, bis alle Animationen einen zugewiesenen `animation-composition`-Wert haben. Weitere Informationen finden Sie unter [Festlegen mehrerer Animationswerte](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

### Werte

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Für Animationstypen, bei denen die Addition nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert gefolgt vom Effektwert.
- `accumulate`
  - : Der Effekt- und der zugrunde liegende Wert werden kombiniert. Für Animationstypen, bei denen die Addition nicht kommutativ ist, ist die Reihenfolge der Operanden der zugrunde liegende Wert gefolgt vom Effektwert.

## Beschreibung

Jede Eigenschaft, die durch die [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes) At-Regel angesprochen wird, ist mit einem Effekt-Stack verbunden. Der Wert des Effekt-Stacks wird berechnet, indem der _zugrunde liegende Wert_ einer Eigenschaft in einem CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Die `animation-composition`-Eigenschaft hilft dabei, anzugeben, wie der zugrunde liegende Wert mit dem Effektwert kombiniert werden soll.

Zum Beispiel ist im untenstehenden CSS `blur(5px)` der zugrunde liegende Wert und `blur(10px)` der Effektwert. Die `animation-composition`-Eigenschaft gibt die Operation an, die durchgeführt werden soll, um den endgültigen Effektwert nach der Zusammensetzung des Effekts des zugrunde liegenden Werts und des Effektwerts zu erzeugen.

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

Berücksichtigen Sie unterschiedliche Werte für die `animation-composition`-Eigenschaft im obigen Beispiel. Der endgültige Effektwert in jedem dieser Fälle wird wie folgt berechnet:

- Mit `replace` wird `blur(10px)` im `0%` Keyframe `blur(5px)` ersetzen. Dies ist das Standardverhalten der Eigenschaft.
- Mit `add` wird der zusammengesetzte Effektwert im `0%` Keyframe `blur(5px) blur(10px)` sein.
- Mit `accumulate` wird der zusammengesetzte Effektwert im `0%` Keyframe `blur(15px)` sein.

> [!NOTE]
> Eine Zusammensetzungsoperation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Zusammensetzungsoperation zuerst für jede Eigenschaft innerhalb dieses Keyframes und dann auf jede Eigenschaft im nächsten Keyframe verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verständnis der Werte von animation-composition

Das Beispiel unten zeigt den Effekt verschiedener `animation-composition`-Werte nebeneinander.

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

- Mit `replace` ersetzt die `transform`-Eigenschaft in jedem Keyframe vollständig die zugrunde liegende `transform`-Eigenschaft, die auf dem animierten Element gesetzt ist. Der endgültige Effektwert für die `transform`-Eigenschaft am `50%` Keyframe ist `translateY(30px)` (kein `rotate` oder `translateX`); am `100%` Keyframe ist es `translateX(150px)` (kein `rotate` oder `translateY`).

  Das Ziel beginnt mit `transform: translateX(30px) rotate(45deg)` und animiert effektiv zu `transform: translateY(30px)`, dann zu `transform: translateX(150px)`.

- Mit `add` ist der endgültige Effektwert an jedem Keyframe der zugrunde liegende `transform`-Wert mit dem Effektwert, der unmittelbar danach platziert wird.

  Daher beginnt das Ziel mit `transform: translateX(30px) rotate(45deg)` und animiert effektiv zuerst zu `transform: translateX(30px) rotate(45deg) translateY(30px)` (was `30px` "nach unten" auf der gedrehten Y-Achse ist), und dann zu `transform: translateX(30px) rotate(45deg) translateX(150px)`. Da die additive Operation relativ zum zugrunde liegenden `transform` und nicht zum vorherigen Keyframe ist, gibt es kein `translateY(30px)` bei `100%`, wodurch das Element `150px` entlang der gedrehten X-Achse von der ursprünglichen Position ist.

- Mit `accumulate` ist der endgültige Effektwert der Effekt-`transform` des Keyframes kombiniert mit dem zugrunde liegenden Original. Bei `50%` kombiniert `translateY(30px)` mit dem Original `translateX(30px)` in eine einzelne Übersetzung (`translate(30px, 30px)`). Bei `100%` kombiniert `translateX(150px)` mit dem Original `translateX(30px)` zu `translateX(180px)`.

  Daher beginnt das Ziel mit `transform: translateX(30px) rotate(45deg)` und animiert effektiv zuerst zu `transform: translate(30px, 30px) rotate(45deg)`, und dann zu `transform: translateX(180px) rotate(45deg)`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [Komposit-Eigenschaft von KeyFrameEffect](/de/docs/Web/API/KeyframeEffect/composite)
- Andere verwandte Animations-Eigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
