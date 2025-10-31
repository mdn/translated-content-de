---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Bildlaufleiste anzugeben, die als Zeitachse für eine Animation mit _benannter Scrollfortschrittszeitachse_ dient. Diese Animation wird durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortgeführt. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitachse bereitstellt. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension nicht aus seinem Container herausläuft oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scrollfortschrittszeitachse erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch über die Kurzschreibweise [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline) gesetzt werden.

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
  - : Die Bildlaufleiste auf der Blockachse des Scroller-Elements, die Achse, die senkrecht zur Textflussrichtung innerhalb einer Zeile verläuft. Bei horizontalen Schriftsystemen, wie dem Standardenglisch, entspricht dies `y`, während es bei vertikalen Schriftsystemen `x` entspricht. Dies ist der Standardwert.
- `inline`
  - : Die Bildlaufleiste auf der Inline-Achse des Scroller-Elements, die Achse, die parallel zur Textflussrichtung in einer Zeile verläuft. Bei horizontalen Schriftsystemen entspricht dies `x`, während es bei vertikalen Schriftsystemen `y` entspricht.
- `y`
  - : Die Bildlaufleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Bildlaufleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der Scrollfortschrittszeitachse

In diesem Beispiel wird eine Scrollfortschrittszeitachse namens `--my-scroller` mithilfe der `scroll-timeline-name` Eigenschaft auf dem <code>:root</code> Element ({{htmlelement("html")}}) definiert. Diese Zeitachse wird dann auf die Animation auf dem Element mit der Klasse `animation` angewendet, mit `animation-timeline: --my-scroller`.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Bildlauf verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container legt <code>:root</code> als Quelle für eine Scrollfortschrittszeitachse namens `--my-scroller` mithilfe der `scroll-timeline-name` Eigenschaft fest.
Die Scrollachse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) gesetzt — dies führt dazu, dass die _horizontale Bildlaufleiste_ die Zeitleiste der Animation bestimmt.

Die Breite des `.content`-Elements wird auf einen großen Wert gesetzt, damit es über das `:root`-Element hinausläuft.

Es sei auch erwähnt, dass das `.animation`-Element die Zeitachse mit `animation-timeline: --my-scroller;` zugewiesen bekommt und ebenfalls eine `animation-duration` erhalten hat, damit das Beispiel in Firefox funktioniert.

```css
:root {
  scroll-timeline-name: --my-scroller;

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
  animation-timeline: --my-scroller;
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

Scrollen Sie die horizontale Leiste am unteren Rand, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
