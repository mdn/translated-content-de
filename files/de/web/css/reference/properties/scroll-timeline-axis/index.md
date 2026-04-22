---
title: "`scroll-timeline-axis` CSS property"
short-title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens anzugeben, die verwendet wird, um die [Zeitleiste für eine scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) bereitzustellen. Diese wird durch das Scrollen eines scrollbaren Elements (_Scroller_) vorangetrieben.

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
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, die die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll-timeline-axis` Eigenschaft spezifiziert, welcher Scrollbalken verwendet wird, um die Zeitleiste für eine [Scroll-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) Animation bereitzustellen. Der Wert ist die `<axis>` des Scrollbalkens. Die `scroll-timeline` Eigenschaft wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellen wird.

Wenn das Scroller-Element in seiner Achsenrichtung nicht über seinen Container hinausgeht oder wenn das Überlaufverhalten versteckt oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} Eigenschaften können auch mit der {{cssxref("scroll-timeline")}} Kurzform-Eigenschaft gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Scroll-Fortschrittszeitleiste

In diesem Beispiel wird eine Scroll-Fortschrittszeitleiste namens `--my-scroller` mit der `scroll-timeline-name` Eigenschaft auf dem <code>:root</code> Element ({{htmlelement("html")}}) definiert. Diese Zeitleiste wird dann auf die Animation des Elements mit der `animation` Klasse mit `animation-timeline: --my-scroller` angewendet.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation anzutreiben.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container legt das <code>:root</code> als Quelle für eine Scroll-Fortschrittszeitleiste namens `--my-scroller` mit der `scroll-timeline-name` Eigenschaft fest.
Die Scrollachse wird mit `scroll-timeline-axis: x;` gesetzt, wodurch die _horizontale Scrollbar_-Position die Zeitleiste der Animation bestimmt. Wir fügen auch `scroll-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen, veralteten Werte `horizontal` und `vertical` unterstützen, aber nicht `x` und `y`.

Die Breite des `.content` Elements ist auf einen großen Wert gesetzt, damit es über das `:root` Element hinausgeht.

Das `.animation` Element hat die Animation mittels der {{cssxref("animation")}} Kurzform, und die Scroll-Zeitleiste wird mit der {{cssxref("animation-timeline")}} gesetzt.

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
      text-align: center;
      padding: 1rem 0;
    }
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

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- [Scroll-gesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
