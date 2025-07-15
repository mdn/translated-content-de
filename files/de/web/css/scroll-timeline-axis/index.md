---
title: scroll-timeline-axis
slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung des Scrollbalkens anzugeben, die verwendet wird, um die Zeitleiste für eine _benannte Scroll-Fortschrittszeitleiste_-Animation bereitzustellen, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller festgelegt, der die Zeitleiste bereitstellen soll. Siehe [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroll-Element in der Achsendimension nicht über seinen Container hinausgeht oder wenn der Überlauf ausgeblendet oder abgeschnitten wird, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die Eigenschaften `scroll-timeline-axis` und {{cssxref("scroll-timeline-name")}} können auch mithilfe der Kurzschreibweise [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) festgelegt werden.

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
  - : Der Scrollbalken auf der Block-Achse des Scroll-Elements, die die Achse in der Richtung ist, die senkrecht zum Fluss des Textes innerhalb einer Zeile verläuft. Für horizontale Schreibrichtungen, wie zum Beispiel Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroll-Elements, die die Achse in der Richtung ist, die parallel zum Fluss des Textes innerhalb einer Zeile verläuft. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroll-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroll-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Achse der Scroll-Fortschrittszeitleiste

In diesem Beispiel wird eine Scroll-Fortschrittszeitleiste namens `--myScroller` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem <code>:root</code> Element ({{htmlelement("html")}}) verwendet wird. Diese Zeitleiste wird dann auf die Animation des Elements mit der Klasse `animation` mit `animation-timeline: --myScroller` angewendet.

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

Der CSS-Code für das Container-Element setzt <code>:root</code> als Quelle einer Scroll-Fortschrittszeitleiste namens `--myScroller` mithilfe der `scroll-timeline-name` Eigenschaft fest.
Die Scroll-Achse wird mit `scroll-timeline-axis: x;` (Chromium) und `scroll-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die Position des _horizontalen Scrollbalkens_ die Animationszeitleiste bestimmt.

Die Breite des `.content` Elements wird auf einen großen Wert gesetzt, damit es das `:root` Element überläuft.

Ebenfalls erwähnenswert ist, dass das `.animation` Element die Zeitleiste mit `animation-timeline: --myScroller;` angewendet hat und es hat auch eine `animation-duration` angewendet, um sicherzustellen, dass das Beispiel in Firefox funktioniert.

```css
:root {
  scroll-timeline-name: --myScroller;

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
  animation-timeline: --myScroller;
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

Scrollen Sie den horizontalen Balken unten, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
