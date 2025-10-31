---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Beginn und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d. h., wo entlang der Zeitachse eine Animation beginnen und enden wird.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end)

## Syntax

```css
/* single keyword or length percentage value */
animation-range: normal; /* Equivalent to normal normal */
animation-range: 20%; /* Equivalent to 20% normal */
animation-range: 100px; /* Equivalent to 100px normal */

/* single named timeline range value */
animation-range: cover; /* Equivalent to cover 0% cover 100% */
animation-range: contain; /* Equivalent to contain 0% contain 100% */
animation-range: cover 20%; /* Equivalent to cover 20% cover 100% */
animation-range: contain 100px; /* Equivalent to contain 100px cover 100% */

/* two values for range start and end */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit; /* Equivalent to entry 0% exit 100% */
animation-range: cover cover 200px; /* Equivalent to cover 0% cover 200px */
animation-range: entry 10% exit; /* Equivalent to entry 10% exit 100% */
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
```

Die Kurzform-Eigenschaft `animation-range` kann auf ein Container-Element als Kombination der Werte `<animation-range-start>` und `<animation-range-end>` angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert.

Wie durch die Kommentare im Syntaxblock oben gezeigt, gibt es ein paar mögliche Interpretationen, wenn nur ein einziger Wert bereitgestellt wird:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, nimmt `<animation-range-start>` diesen Wert an und `<animation-range-end>` wird gleich `normal`.
- Wenn der Wert ein benannter Zeitachsenbereich ohne ein folgendes `<length-percentage>` ist, liegt der Bereich zwischen diesem benannten Zeitachsenbereich bei 0% und 100%.
- Wenn der Wert ein benannter Zeitachsenbereich mit einem folgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitachsenbereich und Prozentsatz und endet bei diesem benannten Zeitachsenbereich und 100%.

### Werte

Ein oder zwei Werte repräsentieren [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end). Diese Werte können eines der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitachse im Fall von `animation-range-start` und das Ende der Zeitachse im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentsatzwert gemessen vom Beginn der Zeitachse.
- `<timeline-range-name>`
  - : Ein spezifischer benannter Zeitachsenbereich innerhalb der gesamten Zeitachse. Mögliche Werte sind:
    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Sichtbarkeitszeitachse_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details), von dem Punkt an, an dem das Subjektelement erstmals beginnt, in den Sichtbarkeitsbereich des Scrollports einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Sichtbarkeitszeitachse_, in dem das Subjektelement vollständig vom Sichtbarkeitsbereich des Scrollports umschlossen wird oder diesen vollständig umschließt.
        - Wenn das Subjektelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement erstmals vollständig vom Scrollport umschlossen wird (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport umschlossen wird (100% Fortschritt).
        - Wenn das Subjektelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement erstmals vollständig den Scrollport überdeckt (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig den Scrollport überdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Sichtbarkeitszeitachse_ von dem Punkt, an dem das Subjektelement erstmals beginnt, in den Scrollport einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Sichtbarkeitszeitachse_ von dem Punkt, an dem das Subjektelement erstmals beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es vollständig den Scrollport verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Sichtbarkeitszeitachse_ von dem Punkt, an dem das Subjektelement erstmals beginnt, die Startkante des Scrollports zu überschreiten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig die Startkante des Scrollports überschritten hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Sichtbarkeitszeitachse_ von dem Punkt, an dem das Subjektelement erstmals beginnt, die Endkante des Scrollports zu überschreiten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig die Endkante des Scrollports überschritten hat (100%).

    Im Fall von `<timeline-range-name>`-Werten, die kein `<length-percentage>` enthalten, wird der Prozentsatz standardmäßig auf `0%` gesetzt, wenn es sich um einen `animation-range-start`-Wert handelt, und auf `100%`, wenn es sich um einen `animation-range-end`-Wert handelt.

    > [!NOTE]
    > Es ist ziemlich schwer, anhand der obigen Beschreibungen zu visualisieren, was diese Werte bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie visuell bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder Abstand durch den angegebenen benannten Zeitachsenbereich entspricht, gemessen vom Beginn dieses Zeitachsenbereichs.

> [!NOTE]
> Der Scrollport (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details) Bereich, der als Sichtbarkeitsbereich bekannt ist, ist der Bereich, in dem das Subjektelement einer _benannten Sichtbarkeitszeitachse_-Animation als sichtbar gilt. Standardmäßig ist dies der gesamte Bereich des Scrollports, aber er kann mithilfe der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine visuelle Erklärung dessen an, was alle Wertetypen bedeuten.

### Erstellen einer benannten Sichtbarkeitszeitachse mit Bereich

Eine Sichtbarkeitszeitachse namens `--subject-reveal` wird mithilfe der `view-timeline`-Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert. Diese wird dann als Zeitachse für dasselbe Element mithilfe von `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es sich durch das Dokument nach oben bewegt, wenn es gescrollt wird.

Eine `animation-range`-Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
```

#### CSS

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Sichtbarkeitszeitachse zu definieren. Es erhält auch einen `animation-timeline`-Namen mit demselben Wert, um zu erklären, dass dies das Element sein wird, das animiert wird, während die Sichtbarkeitszeitachse voranschreitet. Wir geben ihm auch eine `animation-range`-Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Deckkraft und Skalierung animiert, wodurch es verblasst und sich vergrößert, während es nach oben durch die Scroller bewegt.

```css
.animation {
  view-timeline: --subject-reveal block;
  animation-timeline: --subject-reveal;

  animation-name: appear;
  animation-range: entry 10% contain 25%;
  animation-fill-mode: both;
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

Scrollen, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Erstellen einer benannten Sichtbarkeitszeitachse mit Bereich", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end), [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/Reference/Properties/view-timeline-inset)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
