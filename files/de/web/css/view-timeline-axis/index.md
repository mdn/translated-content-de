---
title: view-timeline-axis
slug: Web/CSS/view-timeline-axis
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um die Scrollbalkenrichtung anzugeben, die verwendet wird, um die Zeitleiste für eine _benannte Ansichtsfortschrittszeitleisten_-Animation bereitzustellen. Diese wird durch die Veränderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline-axis` wird auf das Subjekt gesetzt. Weitere Informationen finden Sie unter [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scroller-Element nicht in der Achsendimension über seinen Container hinaus läuft oder wenn das Überlaufen verborgen oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die Eigenschaften `view-timeline-axis` und {{cssxref("view-timeline-name")}} können auch mit der Kurzschreibweise [`view-timeline`](/de/docs/Web/CSS/view-timeline) festgelegt werden.

## Syntax

```css
/* Logische Eigenschaftswerte */
view-timeline-axis: block;
view-timeline-axis: inline;
/* Nicht-logische Eigenschaftswerte */
view-timeline-axis: y;
view-timeline-axis: x;
```

### Werte

Erlaubte Werte für `view-timeline-axis` sind:

- `block`
  - : Der Scrollbalken auf der Block-Achse des Scroller-Elements, was die Achse in der Richtung ist, die senkrecht zum Fluss des Textes innerhalb einer Zeile verläuft. Für horizontale Schreibrichtungen, wie Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
- `inline`
  - : Der Scrollbalken auf der Inline-Achse des Scroller-Elements, was die Achse in der Richtung ist, die parallel zum Fluss des Textes in einer Zeile verläuft. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
- `y`
  - : Der Scrollbalken auf der vertikalen Achse des Scroller-Elements.
- `x`
  - : Der Scrollbalken auf der horizontalen Achse des Scroller-Elements.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Achse der Ansichtsfortschrittszeitleiste

In diesem Beispiel wird eine Ansichtsfortschrittszeitleiste namens `--subjectReveal` definiert, indem die `view-timeline-name`-Eigenschaft auf einem Subjekt-Element mit der Klasse "animation" festgelegt wird. Diese Zeitleiste wird dann auf die Animation auf demselben Element angewendet, indem `animation-timeline: --subjectReveal;` verwendet wird.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

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

Im CSS legen wir das `subject`-Element als Quelle einer Ansichtsfortschrittszeitleiste namens `--subjectReveal` unter Verwendung der `view-timeline-name`-Eigenschaft fest. Die Scrollachse wird mit `view-timeline-axis: x;` (Chromium) und `view-timeline-axis: horizontal;` (Firefox) festgelegt — dies bewirkt, dass die _horizontale Scrollbalken_-Position des scrollenden übergeordneten Elements die Animationszeitleiste bestimmt.

Das `content`-übergeordnete Element wird horizontal überlaufen, indem sein Inhalt mit `display: flex;` und `flex-flow: column wrap;` angeordnet wird.

Es ist auch zu beachten, dass das Subjekt-Element eine `animation-duration` erhält, damit das Beispiel in Firefox funktioniert.

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

Scrollen Sie den horizontalen Balken unten, um das Subjekt-Element während des Scrollens zu animieren.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
