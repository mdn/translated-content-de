---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Scrollbarrichtung anzugeben, die verwendet wird, um die Zeitleiste für eine _benannte View-Progress-Timeline_-Animation bereitzustellen, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline-axis` wird auf dem Subjekt festgelegt. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Progresse-Zeitleiste erstellt.

Die Eigenschaften `view-timeline-axis`, {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} können auch mit der Kurzschreibweise {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Die Scrollleiste auf der Blockachse des Scroller-Elements, welche die Achse in der senkrechten Richtung zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie Standard-Englisch, ist dies das gleiche wie `y`, während es für vertikale Schreibmodi das gleiche wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Scrollleiste auf der Inlineachse des Scroller-Elements, welche die Achse in der parallelen Richtung zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi ist dies das gleiche wie `x`, während es für vertikale Schreibmodi das gleiche wie `y` ist.
- `y`
  - : Die Scrollleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Scrollleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Achse der View-Progress-Zeitleiste

In diesem Beispiel wird eine View-Progress-Zeitleiste namens `--subjectReveal` mit der Eigenschaft `view-timeline-name` auf einem Subjektelement mit der Klasse "animation" definiert. Diese Zeitleiste wird dann mit `animation-timeline: --subjectReveal;` auf die Animation desselben Elements angewendet.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

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

Im CSS legen wir das `subject`-Element als Quelle einer View-Progress-Zeitleiste namens `--subjectReveal` mit der Eigenschaft `view-timeline-name` fest.
Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt - dies bewirkt, dass die _horizontale Scrollleiste_ des scrollenden Elternelements die Animationszeitleiste bestimmt.

Das `content` Elternelement wird horizontal überlaufend gemacht, indem seine Inhalte mit `display: flex;` und `flex-flow: column wrap;` angeordnet werden.

Ebenso wichtig ist, dass das Subjektelement eine `animation-duration` zugewiesen bekommt, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie die horizontale Leiste am unteren Rand, um zu sehen, wie sich das Subjektelement beim Scrollen animiert.

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
