---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`view-timeline-axis`**-Eigenschaft des [CSS](/de/docs/Web/CSS) wird verwendet, um die Richtung der Bildlaufleiste anzugeben, die verwendet wird, um die Zeitleiste für eine _benannte Ansicht Fortschrittszeitleiste_-Animation bereitzustellen, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline-axis` wird auf das Subjekt gesetzt. Weitere Details finden Sie unter [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scrolling-Element in der Achsrichtung nicht überläuft oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die Eigenschaften `view-timeline-axis`, {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} können auch mit der Kurzform-Eigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Die Bildlaufleiste auf der Block-Achse des Scrolling-Elements, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie Standard-Englisch, entspricht dies `y`, während es für vertikale Schreibmodi `x` entspricht. Dies ist der Standardwert.
- `inline`
  - : Die Bildlaufleiste auf der Inline-Achse des Scrolling-Elements, welche die Achse in der Richtung parallel zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi entspricht dies `x`, während es für vertikale Schreibmodi `y` entspricht.
- `y`
  - : Die Bildlaufleiste auf der vertikalen Achse des Scrolling-Elements.
- `x`
  - : Die Bildlaufleiste auf der horizontalen Achse des Scrolling-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Fortschrittszeitleiste der Ansicht

In diesem Beispiel wird eine Fortschrittszeitleiste der Ansicht namens `--subject-reveal` definiert, indem die Eigenschaft `view-timeline-name` auf ein Subjektelement mit der Klasse "animation" angewendet wird. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, mit `animation-timeline: --subject-reveal;`.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Bildlaufleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

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

Im CSS setzen wir das `subject`-Element als Quelle einer Fortschrittszeitleiste der Ansicht namens `--subject-reveal` mithilfe der `view-timeline-name`-Eigenschaft.
Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies führt dazu, dass die _horizontale Bildlaufleiste_ des scrollenden Vorgängerelements die Animationszeitleiste bestimmt.

Das übergeordnete `content`-Element wird dazu gebracht, horizontal zu überlaufen, indem der Inhalt mit `display: flex;` und `flex-flow: column wrap;` angeordnet wird.

Es ist auch erwähnenswert, dass das Subjektelement mit einer `animation-duration` versehen ist, damit das Beispiel in Firefox funktioniert.

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
  font-family: "Helvetica", "Arial", sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --subject-reveal;
  /* Chromium supports the new x/y syntax */
  view-timeline-axis: x;
  /* Firefox still supports the old horizontal/vertical syntax */
  view-timeline-axis: horizontal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-timeline: --subject-reveal;
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

Scrollen Sie die horizontale Leiste am unteren Rand, um das Subjektelement zu animieren, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
