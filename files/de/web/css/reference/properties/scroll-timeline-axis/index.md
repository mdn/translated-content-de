---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Bildlaufleiste anzugeben, die genutzt wird, um die Zeitleiste für eine _benannte Fortschrittszeitleiste des Bildlaufs_ zu bieten, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellen wird. Siehe [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroller-Element seinen Container in der Achsendimension nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Fortschrittszeitleiste des Bildlaufs erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline) Abkürzungseigenschaft gesetzt werden.

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
  - : Die Bildlaufleiste auf der Blockachse des Scroller-Elements, die Achse in Richtung senkrecht zum Textfluss innerhalb einer Zeile. Bei horizontalen Schreibrichtungen, wie sie im Standardenglischen üblich sind, entspricht dies `y`, während es bei vertikalen Schreibrichtungen `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Bildlaufleiste auf der Inline-Achse des Scroller-Elements, die Achse in Richtung parallel zum Textfluss in einer Zeile. Bei horizontalen Schreibrichtungen entspricht dies `x`, während es bei vertikalen Schreibrichtungen `y` ist.
- `y`
  - : Die Bildlaufleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Bildlaufleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Fortschrittszeitleiste des Bildlaufs

In diesem Beispiel wird eine Fortschrittszeitleiste des Bildlaufs namens `--my-scroller` mithilfe der Eigenschaft `scroll-timeline-name` auf dem <code>:root</code> Element ({{htmlelement("html")}}) definiert. Diese Zeitleiste wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, indem `animation-timeline: --my-scroller` verwendet wird.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Bildlaufbalken verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt <code>:root</code> als Quelle einer Fortschrittszeitleiste des Bildlaufs namens `--my-scroller` unter Verwendung der `scroll-timeline-name` Eigenschaft.
Die Scroll-Achse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) — festgelegt, was dazu führt, dass die Position der _horizontalen Bildlaufleiste_ die Zeitleiste der Animation bestimmt.

Die Breite des `.content` Elements ist auf einen großen Wert gesetzt, um es den `:root` Element überlaufen zu lassen.

Ebenfalls bemerkenswert ist, dass das `.animation` Element die Zeitleiste mit `animation-timeline: --my-scroller;` angewendet hat, und dass es auch eine `animation-duration` hat, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie die horizontale Leiste unten, um das Quadrat zu animieren, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
