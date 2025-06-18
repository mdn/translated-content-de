---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens festzulegen, die für die Bereitstellung der Zeitleiste für eine _benannte Scroll-Fortschrittszeitleiste_-Animation verwendet wird, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller festgelegt, der die Zeitleiste bereitstellen wird. Weitere Informationen finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überlappt oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mithilfe der [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurzschreibweise festgelegt werden.

## Syntax

```css
/* Logical property values */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;
/* Non-logical property values */
scroll-timeline-axis: y;
scroll-timeline-axis: x;
```

### Werte

Erlaubte Werte für `scroll-timeline-axis` sind:

- `block`
  - : Der Scrollbalken auf der Blockachse des Scroller-Elements, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie z.B. Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroller-Elements, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Achse der Scroll-Fortschrittszeitleiste

In diesem Beispiel wird eine Scroll-Fortschrittszeitleiste mit dem Namen `--myScroller` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem <code>:root</code>-Element ({{htmlelement("html")}}) verwendet wird. Diese Zeitleiste wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, indem `animation-timeline: --myScroller` verwendet wird.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für das Container-Element setzt das <code>:root</code> als Quelle einer Scroll-Fortschrittszeitleiste mit dem Namen `--myScroller` unter Verwendung der Eigenschaft `scroll-timeline-name`. Die Scroll-Achse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) festgelegt - dies bewirkt, dass die _horizontale Scrollbalken_-Position die Animation-Zeitleiste bestimmt.

Die Breite des `.content`-Elements wird auf einen großen Wert gesetzt, um es über das `:root`-Element hinauslaufen zu lassen.

Auch erwähnenswert ist, dass das `.animation`-Element die Zeitleiste mit `animation-timeline: --myScroller;` angewendet hat und außerdem eine `animation-duration`, damit das Beispiel in Firefox funktioniert.

```css
:root {
  scroll-timeline-name: --myScroller;

  /* Chromium supports the new x/y syntax */
  scroll-timeline-axis: x;
  /* Firefox still supports the old horizontal/vertical syntax */
  scroll-timeline-axis: horizontal;
}

body {
  margin: 0;
  overflow-y: hidden;
}

.content {
  height: 100vh;
  width: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 25px;
  left: 25px;
}

.animation {
  animation: rotate-appear;
  animation-timeline: --myScroller;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    top: 0%;
  }

  to {
    rotate: 720deg;
    top: 100%;
  }
}
```

#### Ergebnis

Scrollen Sie die horizontale Leiste unten, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
