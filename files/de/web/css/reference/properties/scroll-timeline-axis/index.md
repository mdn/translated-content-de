---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: f89de66a773484024ab5d914bc88fa08d894db1c
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Bildlaufleiste anzugeben, die genutzt wird, um die [Zeitachse für eine scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) bereitzustellen, die durch das Scrollen eines scrollbaren Elements (_Scroller_) fortschreitet.

## Syntax

```css
/* Logical property values */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;

/* Physical property values */
scroll-timeline-axis: y;
scroll-timeline-axis: x;

/* Global values */
scroll-timeline-axis: inherit;
scroll-timeline-axis: initial;
scroll-timeline-axis: revert;
scroll-timeline-axis: revert-layer;
scroll-timeline-axis: unset;
```

### Werte

- `<axis>`
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, die die scroll-gesteuerte Animation kontrolliert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll-timeline-axis` Eigenschaft legt fest, welche Scrollleiste verwendet wird, um die Zeitachse für eine [Scroll-Fortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) Animation bereitzustellen. Der Wert ist die `<axis>` der Scrollleiste. Die `scroll-timeline` Eigenschaft wird auf dem Scroller gesetzt, der die Zeitachse bereitstellen wird.

Wenn das Scroller-Element in der Achsendimension nicht außerhalb seines Containers überläuft oder wenn der Überlauf ausgeblendet oder abgeschnitten ist, wird keine Scroll-Fortschritts-Zeitachse erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mit der Kurzschreibweise {{cssxref("scroll-timeline")}} gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der Scroll-Fortschritts-Zeitachse

In diesem Beispiel wird eine Scroll-Fortschritts-Zeitachse mit dem Namen `--my-scroller` mithilfe der `scroll-timeline-name` Eigenschaft auf dem <code>:root</code> Element ({{htmlelement("html")}}) definiert. Diese Zeitachse wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, indem `animation-timeline: --my-scroller` verwendet wird.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Bildlaufleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt das <code>:root</code> als Quelle einer Scroll-Fortschritts-Zeitachse mit dem Namen `--my-scroller` unter Verwendung der `scroll-timeline-name` Eigenschaft.
Die Scroll-Achse wird mit `scroll-timeline-axis: x;` gesetzt, wodurch die Position der _horizontalen Bildlaufleiste_ die Animationszeitachse bestimmt. Wir fügen auch `scroll-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen alten Werte `horizontal` und `vertical` unterstützen und nicht `x` und `y`.

Die Breite des `.content` Elements wird auf einen großen Wert gesetzt, damit es das `:root` Element überläuft.

Auf das `.animation` Element wird die Animation mit der {{cssxref("animation")}} Kurzschreibweise angewendet, und die Scroll-Zeitachse wird mit der {{cssxref("animation-timeline")}} gesetzt.

```css
:root {
  scroll-timeline-name: --my-scroller;

  scroll-timeline-axis: x;
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
  animation: rotate-appear 1ms linear;
  animation-timeline: --my-scroller;
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

```css hidden
@layer no-support {
  @supports not (scroll-timeline-axis: block) {
    body::before {
      content: "Your browser doesn't support the `scroll-timeline-axis` property.";
      background-color: wheat;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
}
```

#### Ergebnis

Scrollen Sie die horizontale Leiste am unteren Rand, um das Quadrat animiert zu sehen, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- [Scroll-gesteuerte Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
