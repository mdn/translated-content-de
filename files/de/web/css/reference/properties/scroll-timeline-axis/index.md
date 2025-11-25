---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: 0538876b43a1dddcf48f5335a22a98520ef3ebfc
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens festzulegen, die zur Bereitstellung der [Zeitachse für eine scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) verwendet wird, welche durch das Scrollen eines scrollbaren Elements (_Scroller_) fortschreitet.

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
  - : Ein {{ cssxref("axis") }} Schlüsselwort, das die Richtung, oder Achse, des Scrollports beschreibt, der die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll-timeline-axis` Eigenschaft legt fest, welcher Scrollbalken verwendet wird, um die Zeitachse für eine [Scroll-Fortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) bereitzustellen. Der Wert ist die `<axis>` des Scrollbalkens. Die `scroll-timeline` Eigenschaft wird auf den Scroller gesetzt, der die Zeitachse liefern wird.

Wenn das Scroller-Element in der Achsendimension nicht über seinen Container hinausragt oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scroll-Fortschritts-Zeitachse erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können ebenfalls mit der Kurzform-Eigenschaft {{cssxref("scroll-timeline")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Achse der Scroll-Fortschritts-Zeitachse

In diesem Beispiel wird eine Scroll-Fortschritts-Zeitachse namens `--my-scroller` definiert, indem die `scroll-timeline-name` Eigenschaft auf dem <code>:root</code>-Element ({{htmlelement("html")}}) verwendet wird. Diese Zeitachse wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, indem `animation-timeline: --my-scroller` verwendet wird.

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

Das CSS für den Container legt das <code>:root</code> als Quelle einer Scroll-Fortschritts-Zeitachse namens `--my-scroller` fest, indem die `scroll-timeline-name` Eigenschaft verwendet wird. Die Scrollachse wird mit `scroll-timeline-axis: x;` festgelegt, wodurch die Position des _horizontalen Scrollbalkens_ die Animationszeitachse bestimmt. Wir fügen auch `scroll-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen Legacy-Werte `horizontal` und `vertical` unterstützen, und nicht `x` und `y`.

Die Breite des `.content`-Elements wird auf einen großen Wert gesetzt, sodass es das `:root`-Element überlappen kann.

Das `.animation`-Element hat die Animation mit der {{cssxref("animation")}} Kurzform-Eigenschaft angewendet, und die Scroll-Zeitachse wurde mit der {{cssxref("animation-timeline")}} festgelegt.

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

Scrollen Sie die horizontale Leiste unten, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- [Scrollgesteuerte Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
