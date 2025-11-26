---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Scrollleiste festzulegen, die für die Bereitstellung der [Zeitleiste für eine scroll-gesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) verwendet wird, die durch das Scrollen eines scrollbaren Elements (_Scroller_) vorangebracht wird.

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
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, die die scrollbasierte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll-timeline-axis` Eigenschaft legt fest, welche Scrollleiste verwendet wird, um die Zeitleiste für eine [Scroll-Prozess-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) Animation bereitzustellen. Der Wert ist die `<axis>` der Scrollleiste. Die `scroll-timeline` Eigenschaft wird auf dem Scroller festgelegt, der die Zeitleiste bereitstellen wird.

Wenn das Scroller-Element nicht in der Achsen-Dimension über seinen Container hinausgeht oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scroll-Prozess-Zeitleiste erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mit der {{cssxref("scroll-timeline")}} Kurzschreibweise festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Achse der Scroll-Prozess-Zeitleiste definieren

In diesem Beispiel wird eine Scroll-Prozess-Zeitleiste mit dem Namen `--my-scroller` unter Verwendung der `scroll-timeline-name` Eigenschaft auf dem <code>:root</code> Element ({{htmlelement("html")}}) definiert. Diese Zeitleiste wird dann auf die Animation des Elements mit der `animation` Klasse unter Verwendung von `animation-timeline: --my-scroller` angewendet.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht voreingestellte) Scrollleiste verwendet, um die Animation anzutreiben.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt das <code>:root</code> als Quelle einer Scroll-Prozess-Zeitleiste namens `--my-scroller` unter Verwendung der `scroll-timeline-name` Eigenschaft.
Die Scrollachse wird mit `scroll-timeline-axis: x;` festgelegt, was dazu führt, dass die _horizontale Scrollleiste_ die Animationszeitleiste bestimmt. Wir fügen auch `scroll-timeline-axis: horizontal;` für Browser hinzu, die die nicht-standardisierten Legacy-Werte `horizontal` und `vertical` und nicht `x` und `y` unterstützen.

Die Breite des `.content` Elements wird auf einen großen Wert gesetzt, um es über das `:root` Element hinaus laufen zu lassen.

Das `.animation` Element hat die Animation mit der {{cssxref("animation")}} Kurzschreibweise angewendet, und die Scroll-Zeitleiste wird mit der {{cssxref("animation-timeline")}} festgelegt.

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

Scrollen Sie die horizontale Leiste am unteren Rand, um das Quadrat beim Scrollen animiert zu sehen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- [Scroll-gesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
