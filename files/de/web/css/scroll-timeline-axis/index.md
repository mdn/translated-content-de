---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Scrollbarrichtung anzugeben, die verwendet wird, um die Timeline für eine _benannte Scrollfortschritts-Timeline_ Animation bereitzustellen, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Timeline bereitstellt. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scrollfortschritts-Timeline erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mit der Abkürzungseigenschaft [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) gesetzt werden.

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
  - : Die Scrollbar auf der Blockachse des Scroller-Elements, die Achse senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibrichtungen, wie z.B. Standard-Englisch, entspricht dies `y`, während es für vertikale Schreibrichtungen `x` entspricht. Dies ist der Standardwert.
- `inline`
  - : Die Scrollbar auf der Inline-Achse des Scroller-Elements, die Achse parallel zum Textfluss in einer Zeile. Für horizontale Schreibrichtungen entspricht dies `x`, während es für vertikale Schreibrichtungen `y` entspricht.
- `y`
  - : Die Scrollbar auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Scrollbar auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Scrollfortschritts-Timeline

In diesem Beispiel wird eine Scrollfortschritts-Timeline namens `--myScroller` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem <code>:root</code>-Element ({{htmlelement("html")}}) verwendet wird. Diese Timeline wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, indem `animation-timeline: --myScroller` verwendet wird.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollbar verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt das <code>:root</code> als Quelle einer Scrollfortschritts-Timeline namens `--myScroller` unter Verwendung der Eigenschaft `scroll-timeline-name`.
Die Scrollachse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) eingestellt — dies bewirkt, dass die _horizontale Scrollbar_-Position die Animations-Timeline bestimmt.

Die Breite des `.content`-Elements wird auf einen hohen Wert gesetzt, damit es das `:root`-Element überläuft.

Außerdem ist zu beachten, dass das `.animation`-Element die Timeline mit `animation-timeline: --myScroller;` zugewiesen hat und auch eine `animation-duration` angewendet hat, damit das Beispiel in Firefox funktioniert.

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
