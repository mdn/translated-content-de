---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens anzugeben, die genutzt wird, um eine Zeitleiste für eine _benannte Fortschrittszeitleisten_-Animation bereitzustellen, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) voranschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellt. Weitere Details finden Sie in den [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension nicht seinen Container überläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Fortschrittszeitleiste für das Scrollen erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline) Kurzschreibweise gesetzt werden.

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

Zulässige Werte für `scroll-timeline-axis` sind:

- `block`
  - : Der Scrollbalken auf der Blockachse des Scroller-Elements, die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibrichtungen wie das standardmäßige Englisch entspricht dies `y`, während es für vertikale Schreibrichtungen `x` entspricht. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroller-Elements, die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile. Für horizontale Schreibrichtungen entspricht dies `x`, während es für vertikale Schreibrichtungen `y` entspricht.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der Fortschrittszeitleiste

In diesem Beispiel wird eine Fortschrittszeitleiste namens `--my-scroller` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem <code>:root</code>-Element ({{htmlelement("html")}}) verwendet wird. Diese Zeitleiste wird dann auf die Animation auf dem Element mit der Klasse `animation` angewendet mittels `animation-timeline: --my-scroller`.

Um den Effekt von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt das <code>:root</code>-Element als Quelle einer Fortschrittszeitleiste namens `--my-scroller` unter Verwendung der `scroll-timeline-name` Eigenschaft. Die Scrollachse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) gesetzt — dies bewirkt, dass die _horizontale Scrollbalken_-Position die Zeitleiste der Animation bestimmt.

Die Breite des `.content`-Elements wird auf einen großen Wert gesetzt, um es über das `:root`-Element hinausfließen zu lassen.

Ebenso ist erwähnenswert, dass das `.animation`-Element die Zeitleiste mit `animation-timeline: --my-scroller;` angewendet hat und dass eine `animation-duration` darauf angewendet wird, damit das Beispiel in Firefox funktioniert.

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
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
