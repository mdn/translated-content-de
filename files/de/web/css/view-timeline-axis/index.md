---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Rollbalkenrichtung festzulegen, die für die Bereitstellung der Zeitleiste einer _benannten View-Progress-Timeline_-Animation verwendet wird. Diese Animation wird basierend auf der Veränderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortgeschritten. `view-timeline-axis` wird auf das Subjekt angewendet. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf ausgeblendet oder abgeschnitten ist, wird keine Scroll-Prozesszeitleiste erstellt.

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
  - : Der Rollbalken auf der Blockachse des Scroller-Elements, was die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie zum Beispiel Standard-Englisch, entspricht dies `y`, während es für vertikale Schreibmodi `x` entspricht. Dies ist der Standardwert.
- `inline`
  - : Der Rollbalken auf der Inline-Achse des Scroller-Elements, was die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi entspricht dies `x`, während es für vertikale Schreibmodi `y` entspricht.
- `y`
  - : Der Rollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Rollbalken auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der View-Progress-Timeline

In diesem Beispiel wird eine View-Progress-Timeline namens `--subject-reveal` definiert, indem die `view-timeline-name` Eigenschaft auf einem Subjektelement mit einer Klasse von "animation" verwendet wird. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, indem `animation-timeline: --subject-reveal;` verwendet wird.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Rollbalken verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

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

Im CSS setzen wir das `subject` Element als Quelle einer View-Progress-Timeline namens `--subject-reveal` unter Verwendung der `view-timeline-name` Eigenschaft. Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die _horizontale Rollbalken_-Position des scrollenden Vorgängerelements die Animationszeitleiste bestimmt.

Das `content` Vorgängerelement wird durch `display: flex;` und `flex-flow: column wrap;` horizontal überlaufen gelassen.

Zu beachten ist auch, dass das Subjektelement eine `animation-duration` hat, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie die horizontale Leiste unten, um zu sehen, wie das Subjektelement beim Scrollen animiert wird.

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
