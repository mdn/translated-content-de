---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Scrollleiste zu spezifizieren, die verwendet wird, um die Zeitachse für eine _benannte Scrollfortschritts-Zeitachsen_-Animation bereitzustellen, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitachse bereitstellt. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf versteckt oder abgeschnitten wird, wird keine Scrollfortschritts-Zeitachse erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mithilfe der [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurzform-Eigenschaft gesetzt werden.

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
  - : Die Scrollleiste auf der Blockachse des Scroller-Elements, die die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie das standardmäßige Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Scrollleiste auf der Inlineachse des Scroller-Elements, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
- `y`
  - : Die Scrollleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Scrollleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Scrollfortschritts-Zeitachse

In diesem Beispiel wird eine Scrollfortschritts-Zeitachse namens `--my-scroller` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem <code>:root</code>-Element ({{htmlelement("html")}}) festgelegt wird. Diese Zeitachse wird dann auf die Animation des Elements mit der Klasse `animation` angewendet, indem `animation-timeline: --my-scroller` verwendet wird.

Um den Effekt von `scroll-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

Das CSS für den Container setzt das <code>:root</code> als Quelle einer Scrollfortschritts-Zeitachse namens `--my-scroller` mithilfe der Eigenschaft `scroll-timeline-name`.
Die Scrollachse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) festgelegt – dadurch bestimmt die Position der _horizontalen Scrollleiste_ die Animations-Zeitachse.

Die Breite des `.content`-Elements wird auf einen großen Wert gesetzt, damit es das `:root`-Element überläuft.

Es ist auch erwähnenswert, dass das `.animation`-Element die Zeitachse auf sie angewendet hat mittels `animation-timeline: --my-scroller;`, und es hat auch eine `animation-duration`, damit das Beispiel in Firefox funktioniert.

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
