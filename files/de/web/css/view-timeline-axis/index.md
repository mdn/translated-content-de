---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: d9cdeed408531b3a224d29b52e42d909c000c2a1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Scrollbarrichtung festzulegen, die genutzt wird, um die Zeitleiste für eine _benannte View-Progress-Zeitleisten_-Animation bereitzustellen, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) voranschreitet. `view-timeline-axis` wird auf das Subjekt gesetzt. Weitere Einzelheiten finden Sie unter [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension nicht über seinen Container hinausragt oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scroll-Progress-Zeitleiste erstellt.

Die Eigenschaften `view-timeline-axis`, {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} können auch mit der Abkürzungseigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Der Scrollbalken auf der Block-Achse des Scroller-Elements, die die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile ist. Bei horizontalen Schreibmodi, wie zum Beispiel im Standard-Englisch, ist dies dasselbe wie `y`, während es bei vertikalen Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroller-Elements, die die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile ist. Bei horizontalen Schreibmodi ist dies dasselbe wie `x`, während es bei vertikalen Schreibmodi dasselbe wie `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der View-Progress-Zeitleiste

In diesem Beispiel wird eine View-Progress-Zeitleiste namens `--subjectReveal` mit der Eigenschaft `view-timeline-name` auf einem Subjekt-Element mit der Klasse "animation" definiert. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, mit `animation-timeline: --subjectReveal;`.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation anzutreiben.

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

Im CSS setzen wir das `subject`-Element als Quelle einer View-Progress-Zeitleiste namens `--subjectReveal` mit der Eigenschaft `view-timeline-name`.
Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) eingestellt — dadurch wird die Position des _horizontalen Scrollbalkens_ des scrollenden Vorfahr-Elements verwendet, um die Animationszeitleiste zu bestimmen.

Das `content` Vorfahr-Element wird horizontal überfließend gemacht, indem seine Inhalte mit `display: flex;` und `flex-flow: column wrap;` layoutet werden.

Bemerkenswert ist auch, dass das Subjekt-Element eine `animation-duration` erhält, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie die horizontale Leiste am unteren Rand, um zu sehen, wie das Subjekt-Element animiert wird, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
