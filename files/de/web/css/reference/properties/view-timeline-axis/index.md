---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um die Richtung der Bildlaufleiste festzulegen, die verwendet wird, um die Zeitleiste für eine _benannte Ansichtsfortschritts-Animation_ bereitzustellen, die sich basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline-axis` wird auf dem Subjekt festgelegt. Weitere Details finden Sie unter [CSS-Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element seinen Container in der Achsendimension nicht überläuft oder wenn das Überlaufen verborgen oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die Eigenschaften `view-timeline-axis`, {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} können auch mithilfe der Kurzform-Eigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Die Bildlaufleiste auf der Blockachse des Scroller-Elements, welches die Achse ist, die sich senkrecht zum Textfluss innerhalb einer Zeile befindet. Bei horizontalen Schreibmodi, wie Standard-Englisch, ist dies dasselbe wie `y`, während es bei vertikalen Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Die Bildlaufleiste auf der Inline-Achse des Scroller-Elements, welches die Achse ist, die parallel zum Textfluss in einer Zeile verläuft. Bei horizontalen Schreibmodi ist dies dasselbe wie `x`, während es bei vertikalen Schreibmodi dasselbe wie `y` ist.
- `y`
  - : Die Bildlaufleiste auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Die Bildlaufleiste auf der horizontalen Achse des Scroller-Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der Ansichtsfortschritts-Zeitleiste

In diesem Beispiel wird eine Ansichtsfortschritts-Zeitleiste mit dem Namen `--subject-reveal` definiert, indem die Eigenschaft `view-timeline-name` auf einem Subjekt-Element mit der Klasse "animation" verwendet wird. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, indem `animation-timeline: --subject-reveal;` verwendet wird.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Bildlaufleiste verwendet, um die Animation zu steuern.

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

Im CSS setzen wir das `subjekt`-Element als Quelle einer Ansichtsfortschritts-Zeitleiste mit dem Namen `--subject-reveal` unter Verwendung der Eigenschaft `view-timeline-name`.
Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies führt dazu, dass die Position der _horizontalen Bildlaufleiste_ des scrollenden übergeordneten Elements die Animationszeitleiste bestimmt.

Das `content`-Übergeordnete-Element wird durch die Verwendung von `display: flex;` und `flex-flow: column wrap;` so gestaltet, dass es horizontal überläuft.

Auch erwähnenswert ist, dass auf das Subjekt-Element eine `animation-duration` angewendet wird, damit das Beispiel in Firefox funktioniert.

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
- [CSS-Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
