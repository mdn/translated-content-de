---
title: "`scroll-timeline-axis` CSS property"
short-title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Scrollleiste anzugeben, die für die Bereitstellung der [Timeline für eine scrollgesteuerte Animation](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) verwendet wird. Diese wird durch das Scrollen eines scrollbaren Elements (_Scroller_) fortschreiten.

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
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, der die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll-timeline-axis` Eigenschaft gibt an, welche Scrollleiste zur Bereitstellung der Timeline für eine [Scrollfortschritt-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) Animation verwendet wird. Der Wert ist die `<axis>` der Scrollleiste. Die `scroll-timeline` Eigenschaft wird auf den Scroller gesetzt, der die Timeline bereitstellen wird.

Wenn das Scroller-Element seinen Container in der Achsendimension nicht überläuft oder wenn das Überlaufen verborgen oder abgeschnitten ist, wird keine Scrollfortschritt-Timeline erstellt.

Die `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} Eigenschaften können auch mit der {{cssxref("scroll-timeline")}} Kurzschreibweise gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Scrollfortschritt-Timeline

In diesem Beispiel wird eine Scrollfortschritt-Timeline mit dem Namen `--my-scroller` definiert, indem die `scroll-timeline-name` Eigenschaft auf dem <code>:root</code> Element ({{htmlelement("html")}}) verwendet wird. Diese Timeline wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, unter Verwendung von `animation-timeline: --my-scroller`.

Um die Wirkung von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt das <code>:root</code> als Quelle einer Scrollfortschritt-Timeline mit dem Namen `--my-scroller` unter Verwendung der `scroll-timeline-name` Eigenschaft.
Die Scrollachse wird mit `scroll-timeline-axis: x;` festgelegt, was dazu führt, dass die _horizontale Scrollleiste_ die Animations-Timeline bestimmt. Wir fügen auch `scroll-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen Legacy-Werte `horizontal` und `vertical` unterstützen, aber nicht `x` und `y`.

Die Breite des `.content` Elements wird auf einen großen Wert gesetzt, um es über das `:root` Element hinausfließen zu lassen.

Auf das `.animation` Element wird die Animation mit der {{cssxref("animation")}} Kurzschreibweise angewendet, und die Scroll-Timeline wird mit der {{cssxref("animation-timeline")}} festgelegt.

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

Scrollen Sie die horizontale Leiste unten, um zu sehen, wie sich das Quadrat beim Scrollen animiert.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- [Scrollgesteuerte Animationstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
