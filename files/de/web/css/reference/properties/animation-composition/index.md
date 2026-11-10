---
title: "`animation-composition` CSS property"
short-title: animation-composition
slug: Web/CSS/Reference/Properties/animation-composition
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-composition`** legt fest, welche {{Glossary("composite_operation", "Kompositionsoperation")}} verwendet wird, wenn mehrere Animationen gleichzeitig dieselbe Eigenschaft beeinflussen.

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

Diese Eigenschaft wird durch einen oder mehrere kommagetrennte Schlüsselwortwerte angegeben:

- `replace`
  - : Der Effektwert überschreibt den zugrunde liegenden Wert der Eigenschaft. Dies ist der Standardwert.
- `add`
  - : Der Effektwert baut auf dem zugrunde liegenden Wert der Eigenschaft auf. Diese Operation erzeugt einen additiven Effekt. Bei Animationstypen, für die die Addition nicht kommutativ ist, steht zuerst der zugrunde liegende Wert und danach der Effektwert.
- `accumulate`
  - : Der Effektwert und der zugrunde liegende Wert werden kombiniert. Bei Animationstypen, für die die Addition nicht kommutativ ist, steht zuerst der zugrunde liegende Wert und danach der Effektwert.

## Beschreibung

Jeder Eigenschaft, die von der [@keyframes](/de/docs/Web/CSS/Reference/At-rules/@keyframes)-At-Regel angesprochen wird, ist ein Effektstapel zugeordnet. Der Wert des Effektstapels wird berechnet, indem der _zugrunde liegende Wert_ einer Eigenschaft in einer CSS-Stilregel mit dem _Effektwert_ dieser Eigenschaft im Keyframe kombiniert wird. Mit der Eigenschaft `animation-composition` legen Sie fest, wie diese beiden Werte kombiniert werden.

Im folgenden CSS ist beispielsweise `blur(5px)` der zugrunde liegende Wert und `blur(10px)` der Effektwert. Die Eigenschaft `animation-composition` legt fest, mit welcher Operation aus beiden Werten der endgültige Effektwert entsteht.

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

Betrachten Sie die verschiedenen Werte für `animation-composition` im obigen Beispiel. Der endgültige Effektwert wird jeweils wie folgt berechnet:

- Bei `replace` ersetzt `blur(10px)` im `0%`-Keyframe den Wert `blur(5px)`. Dies ist das Standardverhalten der Eigenschaft.
- Bei `add` lautet der kombinierte Effektwert im `0%`-Keyframe `blur(5px) blur(10px)`.
- Bei `accumulate` lautet der kombinierte Effektwert im `0%`-Keyframe `blur(15px)`.

> [!NOTE]
> Eine Kompositionsoperation kann auch in einem Keyframe angegeben werden. In diesem Fall wird die angegebene Kompositionsoperation zuerst auf jede Eigenschaft innerhalb dieses Keyframes und dann auf jede Eigenschaft im nächsten Keyframe angewendet.

### Mehrere Werte

Wenn Sie für eine `animation-*`-Eigenschaft mehrere kommagetrennte Werte angeben, werden diese den Animationen in der Reihenfolge zugeordnet, in der die {{cssxref("animation-name")}}-Werte aufgeführt sind. Unterscheidet sich die Anzahl der Animationen von der Anzahl der Kompositionswerte, werden die in `animation-composition` aufgeführten Werte wiederholt, bis jeder Animation ein `animation-composition`-Wert zugeordnet ist. Weitere Informationen finden Sie unter [Mehrere Werte für Animationseigenschaften festlegen](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Werte von animation-composition verstehen

Das folgende Beispiel zeigt die Auswirkungen verschiedener `animation-composition`-Werte nebeneinander.

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

{{EmbedLiveSample("understanding_the_animation-composition_values","100%","250")}}

Der zugrunde liegende Wert der Eigenschaft `transform` ist in allen Fällen `translateX(30px) rotate(45deg)`. Die verschiedenen Werte von `animation-composition` wirken sich wie folgt aus:

- Bei `replace` ersetzt die `transform`-Eigenschaft in jedem Keyframe vollständig die zugrunde liegende `transform`-Eigenschaft des animierten Elements. Der endgültige Effektwert für `transform` ist beim `50%`-Keyframe `translateY(30px)` (ohne `rotate` oder `translateX`) und beim `100%`-Keyframe `translateX(150px)` (ohne `rotate` oder `translateY`).

  Das Zielelement beginnt mit `transform: translateX(30px) rotate(45deg)` und wird effektiv zunächst zu `transform: translateY(30px)` und dann zu `transform: translateX(150px)` animiert.

- Bei `add` besteht der endgültige Effektwert in jedem Keyframe aus dem zugrunde liegenden `transform`-Wert, unmittelbar gefolgt vom Effektwert.

  Das Zielelement beginnt daher mit `transform: translateX(30px) rotate(45deg)` und wird effektiv zuerst zu `transform: translateX(30px) rotate(45deg) translateY(30px)` animiert (also um `30px` entlang der gedrehten Y-Achse nach „unten“) und danach zu `transform: translateX(30px) rotate(45deg) translateX(150px)`. Da sich die additive Operation auf den zugrunde liegenden `transform`-Wert und nicht auf den vorherigen Keyframe bezieht, enthält der Wert bei `100%` kein `translateY(30px)`. Das Element wird damit gegenüber seiner ursprünglichen Position um `150px` entlang der gedrehten X-Achse verschoben.

- Bei `accumulate` ergibt sich der endgültige Effektwert aus der Kombination des `transform`-Effektwerts im Keyframe mit dem zugrunde liegenden ursprünglichen Wert. Bei `50%` wird `translateY(30px)` mit dem ursprünglichen `translateX(30px)` zu einer einzigen Verschiebung (`translate(30px, 30px)`) kombiniert. Bei `100%` wird `translateX(150px)` mit dem ursprünglichen `translateX(30px)` zu `translateX(180px)` kombiniert.

  Das Zielelement beginnt daher mit `transform: translateX(30px) rotate(45deg)` und wird effektiv zuerst zu `transform: translate(30px, 30px) rotate(45deg)` und dann zu `transform: translateX(180px) rotate(45deg)` animiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [Eigenschaft `composite` von `KeyframeEffect`](/de/docs/Web/API/KeyframeEffect/composite)
- Weitere verwandte Animationseigenschaften: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timeline")}}, {{cssxref("animation-timing-function")}}
