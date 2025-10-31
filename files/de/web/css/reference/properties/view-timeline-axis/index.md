---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Scrollleiste festzulegen, die für die Bereitstellung der Zeitachse einer _benannten View-Progress-Timeline_ Animation genutzt wird. Diese Animation wird basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scrollelement_) vorangetrieben. `view-timeline-axis` wird auf dem Subjekt festgelegt. Weitere Details finden Sie unter [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scrollelement in der Achsenrichtung nicht über den Container hinausläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitachse erstellt.

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

Erlaubte Werte für `view-timeline-axis` sind:

- `block`
  - : Die Scrollleiste auf der Blockachse des Scrollelements, welche die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie das standardmäßige Englisch, ist dies dasselbe wie `y`, während es bei vertikalen Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Scrollleiste auf der Inline-Achse des Scrollelements, welche die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile ist. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es bei vertikalen Schreibmodi dasselbe wie `y` ist.
- `y`
  - : Die Scrollleiste auf der vertikalen Achse des Scrollelements.
- `x`
  - : Die Scrollleiste auf der horizontalen Achse des Scrollelements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der View-Progress-Timeline

In diesem Beispiel wird eine View-Progress-Timeline namens `--subject-reveal` mithilfe der Eigenschaft `view-timeline-name` auf einem Subjektelement mit der Klasse "animation" definiert. Diese Timeline wird dann auf die Animation desselben Elements angewendet, indem `animation-timeline: --subject-reveal;` verwendet wird.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste genutzt, um die Animation voranzutreiben.

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

Im CSS setzen wir das `subject` Element als Quelle einer View-Progress-Timeline namens `--subject-reveal` unter Verwendung der Eigenschaft `view-timeline-name`.
Die Scrollachse wird mithilfe von `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die _horizontale Scrollbalken_-Position des scrollenden Vorgängerelements die Zeitachse der Animation bestimmt.

Das `content` Vorgängerelement wird horizontal zum Überlaufen gebracht, indem die Inhalte mit `display: flex;` und `flex-flow: column wrap;` angeordnet werden.

Ebenfalls erwähnenswert ist, dass das Subjektelement eine `animation-duration` erhalten hat, damit das Beispiel in Firefox funktioniert.

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
