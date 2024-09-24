---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens festzulegen, die genutzt wird, um die Zeitleiste für eine _benannte Scrollfortschritts-Timeline_ Animation bereitzustellen, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellt. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element seine Container in der Achsenausrichtung nicht überläuft oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scrollfortschritts-Timeline erstellt.

Die `scroll-timeline-axis` und die {{cssxref("scroll-timeline-name")}} Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurznotation gesetzt werden.

## Syntax

```css
/* Logische Eigenschaftswerte */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;
/* Nicht-logische Eigenschaftswerte */
scroll-timeline-axis: y;
scroll-timeline-axis: x;
```

### Werte

Erlaubte Werte für `scroll-timeline-axis` sind:

- `block`
  - : Der Scrollbalken auf der Blockachse des Scroller-Elements, was die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie das Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inlineachse des Scroller-Elements, was die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der Scrollfortschritts-Timeline

In diesem Beispiel wird eine Scrollfortschritts-Timeline namens `--myScroller` mit der Eigenschaft `scroll-timeline-name` auf dem <code>:root</code> Element ({{htmlelement("html")}}) definiert. Diese Zeitleiste wird dann auf die Animation des Elements mit der `animation` Klasse mithilfe von `animation-timeline: --myScroller` angewendet.

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

Das CSS für den Container setzt das <code>:root</code> als Quelle einer Scrollfortschritts-Timeline namens `--myScroller` mit der Eigenschaft `scroll-timeline-name`.
Die Scrollachse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die _horizontale Scrollbalken_-Position die Animationszeitleiste bestimmt.

Die Breite des `.content` Elements ist auf einen großen Wert gesetzt, damit es über das `:root` Element hinausläuft.

Es ist auch erwähnenswert, dass das `.animation` Element eine auf es angewendete Zeitleiste mit `animation-timeline: --myScroller;` hat und dass eine `animation-duration` auf es angewendet wird, damit das Beispiel in Firefox funktioniert.

```css
:root {
  scroll-timeline-name: --myScroller;

  /* Chromium unterstützt die neue x/y-Syntax */
  scroll-timeline-axis: x;
  /* Firefox unterstützt nach wie vor die alte horizontal/vertikal-Syntax */
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
  animation-duration: 1ms; /* Firefox erfordert dies, um die Animation anzuwenden */
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
