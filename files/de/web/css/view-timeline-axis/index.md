---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Bildlaufleiste zu spezifizieren, die für die Bereitstellung der Zeitleiste einer _benannten View-Progress-Timeline_ Animation genutzt wird. Diese schreitet basierend auf der Sichtbarkeitsänderung eines Elements (bekannt als das _Subjekt_) in einem scrollbaren Element (_Scroller_) voran. `view-timeline-axis` wird auf dem Subjekt gesetzt. Siehe [Scroll-Driven-Animationen in CSS](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroller-Element nicht in der Achsendimension über seinen Container hinausfließt oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Fortschrittszeitleiste für das Scrollen erstellt.

Die Eigenschaften `view-timeline-axis` und {{cssxref("view-timeline-name")}} können auch mithilfe der Kurzschrift-Eigenschaft [`view-timeline`](/de/docs/Web/CSS/view-timeline) festgelegt werden.

## Syntax

```css
/* Logical property values */
view-timeline-axis: block;
view-timeline-axis: inline;
/* Non-logical property values */
view-timeline-axis: y;
view-timeline-axis: x;
```

### Werte

Erlaubte Werte für `view-timeline-axis` sind:

- `block`
  - : Die Bildlaufleiste auf der Blockachse des Scroller-Elements, welche die Achse senkrecht zum Textfluss innerhalb einer Zeile ist. Für waagerechte Schreibrichtungen, wie das Standardenglisch, entspricht dies der `y`-Achse, während es bei vertikalen Schreibrichtungen der `x`-Achse entspricht. Dies ist der Standardwert.
- `inline`
  - : Die Bildlaufleiste auf der Inline-Achse des Scroller-Elements, welche die Achse parallel zum Textfluss in einer Zeile ist. Für waagerechte Schreibrichtungen entspricht dies der `x`-Achse, während es bei vertikalen Schreibrichtungen der `y`-Achse entspricht.
- `y`
  - : Die Bildlaufleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Bildlaufleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der View-Progress-Zeitleiste

In diesem Beispiel wird mithilfe der Eigenschaft `view-timeline-name` auf einem Subjektelement mit der Klasse "animation" eine View-Progress-Zeitleiste namens `--subjectReveal` definiert. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, mittels `animation-timeline: --subjectReveal;`.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Bildlaufleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div class="content">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p>
    Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin
    libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
    tincidunt lobortis feugiat vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras.
  </p>

  <p>
    A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat
    nisl vel pretium lectus.
  </p>

  <p>
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris.
  </p>
</div>
```

#### CSS

Im CSS setzen wir das `subject`-Element als Quelle einer View-Progress-Zeitleiste namens `--subjectReveal` mithilfe der Eigenschaft `view-timeline-name`.
Die Achse des Scrollens wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) eingestellt — dies bewirkt, dass die _horizontale Bildlaufleiste_ der scrollenden Vorfahrenelemente die Animationszeitleiste bestimmt.

Das `content` Vorfahrenelement wird horizontal über seinen Platz hinaus verteilt, indem seine Inhalte mit `display: flex;` und `flex-flow: column wrap;` angeordnet werden.

Ebenfalls erwähnenswert ist, dass auf das Subjektelement eine `animation-duration` angewendet wird, damit das Beispiel in Firefox funktioniert.

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 50%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --subjectReveal;
  /* Chromium supports the new x/y syntax */
  view-timeline-axis: x;
  /* Firefox still supports the old horizontal/vertical syntax */
  view-timeline-axis: horizontal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-timeline: --subjectReveal;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1,
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie die horizontale Leiste am unteren Rand, um zu sehen, wie sich das Subjektelement beim Scrollen animiert.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [Scroll-Driven-Animationen in CSS](/de/docs/Web/CSS/CSS_scroll-driven_animations)
