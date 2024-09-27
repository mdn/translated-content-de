---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens anzugeben, die genutzt wird, um die Zeitachse für eine _benannte Scroll-Fortschritts-Zeitachsen_ Animation bereitzustellen. Diese wird erzielt, indem ein scrollbares Element (_Scroller_) zwischen oben und unten (oder links und rechts) gescrollt wird. `scroll-timeline` wird auf dem Scroller festgelegt, der die Zeitachse bereitstellt. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsen-Dimension nicht seinen Container überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Fortschritts-Zeitachse erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mit der Abkürzung [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) eingestellt werden.

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
  - : Der Scrollbalken auf der Blockachse des Scroller-Elements, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie zum Beispiel Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroller-Elements, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Achse der Scroll-Fortschritts-Zeitachse

In diesem Beispiel wird eine Scroll-Fortschritts-Zeitachse namens `--myScroller` mit der Eigenschaft `scroll-timeline-name` auf dem <code>:root</code>-Element ({{htmlelement("html")}}) definiert. Diese Zeitachse wird dann auf die Animation des Elements mit der `animation` Klasse durch `animation-timeline: --myScroller` angewendet.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Der CSS-Code für den Container legt das <code>:root</code> Element als Quelle einer Scroll-Fortschritts-Zeitachse namens `--myScroller` mit der Eigenschaft `scroll-timeline-name` fest.
Die Scrollachse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) eingestellt — dies bewirkt, dass die Position des _horizontalen Scrollbalkens_ die Animations-Zeitachse bestimmt.

Die Breite des `.content`-Elements wird auf einen großen Wert gesetzt, damit es das `:root`-Element überläuft.

Bemerkenswert ist auch, dass das `.animation`-Element die Zeitachse mit `animation-timeline: --myScroller;` angewendet hat und dass ihm eine `animation-duration` zugewiesen wurde, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie den horizontalen Balken unten, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

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
