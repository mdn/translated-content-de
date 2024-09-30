---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Scrollleiste anzugeben, die verwendet wird, um die Zeitleiste für eine _benannte View-Progress-Timeline_-Animation bereitzustellen, die auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) in einem scrollbaren Element (_Scroller_) fortschreitet. `view-timeline-axis` wird am Subjekt festgelegt. Weitere Details finden Sie unter [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension nicht über seinen Container hinausläuft oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scroll-Fortschritt-Zeitleiste erstellt.

Die Eigenschaften `view-timeline-axis` und {{cssxref("view-timeline-name")}} können auch mit der [`view-timeline`](/de/docs/Web/CSS/view-timeline) Kurzform-Eigenschaft festgelegt werden.

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
  - : Die Scrollleiste auf der Blockachse des Scroller-Elements, die die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Bei horizontalen Schreibrichtungen, wie beispielsweise Standard-Englisch, ist dies dasselbe wie `y`, während es bei vertikalen Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Scrollleiste auf der Inlineachse des Scroller-Elements, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Bei horizontalen Schreibrichtungen ist dies dasselbe wie `x`, während es bei vertikalen Schreibrichtungen dasselbe wie `y` ist.
- `y`
  - : Die Scrollleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Scrollleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der View-Progress-Zeitleiste

In diesem Beispiel wird eine View-Progress-Zeitleiste mit dem Namen `--subjectReveal` definiert, indem die Eigenschaft `view-timeline-name` an einem Subjektelement mit der Klasse "animation" verwendet wird. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, mit `animation-timeline: --subjectReveal;`.

Um den Effekt von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

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

Im CSS setzen wir das `subject` Element als Quelle einer View-Progress-Zeitleiste mit dem Namen `--subjectReveal` unter Verwendung der `view-timeline-name`-Eigenschaft.
Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die _horizontale Scrollleiste_ des scrollenden übergeordneten Elements die Animationszeitleiste bestimmt.

Das `content` übergeordnete Element wird durch das Layouten seiner Inhalte mit `display: flex;` und `flex-flow: column wrap;` horizontal überlaufen gemacht.

Es ist auch erwähnenswert, dass dem Subjektelement eine `animation-duration` angewendet wird, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie die horizontale Leiste am unteren Rand, um zu sehen, wie sich das Subjektelement während des Scrollens animiert.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
