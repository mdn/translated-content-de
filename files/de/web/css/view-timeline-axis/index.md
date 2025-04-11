---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Scrollleiste anzugeben, die genutzt wird, um die Zeitachse für eine _view progress timeline_ Animation bereitzustellen. Diese Animation schreitet voran, basierend auf der Veränderung der Sichtbarkeit eines Elements (bekannt als _subject_) innerhalb eines scrollbaren Elements (_scroller_). `view-timeline-axis` wird auf dem Subject gesetzt. Weitere Details finden Sie unter [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Progess-Zeitachse erstellt.

Die Eigenschaften `view-timeline-axis`, {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} können auch mit der Kurzschreibweise {{cssxref("view-timeline")}} gesetzt werden.

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
  - : Die Scrollleiste auf der Blockachse des Scroller-Elements, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie im Standard-Englischen, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Scrollleiste auf der Inline-Achse des Scroller-Elements, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
- `y`
  - : Die Scrollleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Scrollleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Die Achse der View Progress Timeline definieren

In diesem Beispiel wird eine _view progress timeline_ namens `--subjectReveal` durch die Eigenschaft `view-timeline-name` auf einem Subject-Element mit einer Klasse "animation" definiert. Diese Zeitachse wird dann auf die Animation desselben Elements angewendet, indem `animation-timeline: --subjectReveal;` verwendet wird.

Um den Effekt von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste verwendet, um die Animation zu steuern.

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

Im CSS setzen wir das `subject`-Element als Quelle einer _view progress timeline_ namens `--subjectReveal` über die Eigenschaft `view-timeline-name`.
Die Scrollachse wird durch `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) gesetzt — dies bewirkt, dass die _horizontale Scrollleiste_ des scrollenden Ahnen-Elements bestimmt, wie die Animation verläuft.

Das `content`-Ahnen-Element wird durch die Layout-Anweisung `display: flex;` und `flex-flow: column wrap;` horizontal zum Überlauf gebracht.

Auch zu beachten ist, dass das Subject-Element eine `animation-duration` hat, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie den horizontalen Balken am unteren Rand, um zu sehen, wie das Subject-Element animiert wird, während Sie scrollen.

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
