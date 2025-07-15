---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Scrollbalkenrichtung anzugeben, die verwendet wird, um die Zeitleiste für eine _benannte Ansichtsfortschrittszeitleiste_-Animation bereitzustellen. Diese wird basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitend animiert. `view-timeline-axis` wird auf das Subjekt angewendet. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsenrichtung nicht über seinen Container hinausläuft oder wenn das Überlaufen verborgen oder abgeschnitten ist, wird keine Fortschrittszeitleiste für das Scrollen erstellt.

Die Eigenschaften `view-timeline-axis`, {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} können auch mit der {{cssxref("view-timeline")}} Kurzschreibweise festgelegt werden.

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

Zulässige Werte für `view-timeline-axis` sind:

- `block`
  - : Der Scrollbalken auf der Blockachse des Scroller-Elements, was die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Bei horizontalen Schreibrichtungen, wie z.B. Standardenglisch, entspricht dies `y`, während es bei vertikalen Schreibrichtungen `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroller-Elements, was die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Bei horizontalen Schreibrichtungen entspricht dies `x`, während es bei vertikalen Schreibrichtungen `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definierung der Achse der Ansichtsfortschrittszeitleiste

In diesem Beispiel wird eine Ansichtsfortschrittszeitleiste namens `--subjectReveal` mithilfe der `view-timeline-name` Eigenschaft auf einem Subjektelement mit der Klasse "animation" definiert. Diese Zeitleiste wird dann auf die Animation desselben Elements angewandt, unter Verwendung von `animation-timeline: --subjectReveal;`.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

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

Im CSS setzen wir das `subject`-Element als Quelle einer Ansichtsfortschrittszeitleiste namens `--subjectReveal` mit der `view-timeline-name` Eigenschaft.
Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die _horizontale Scrollbalken_-Position des scrollenden Vorfahr-Elements die Animationszeitleiste bestimmt.

Das `content`-Vorfahrelement wird durch die Anordnung seiner Inhalte mittels `display: flex;` und `flex-flow: column wrap;` horizontal zum Überlaufen gebracht.

Es ist auch erwähnenswert, dass das Subjektelement eine `animation-duration` zugewiesen bekommt, damit das Beispiel in Firefox funktioniert.

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
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie den horizontalen Balken am unteren Rand, um zu sehen, wie sich das Subjektelement beim Scrollen animiert.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
