---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d.h. an welcher Stelle entlang der Zeitachse eine Animation beginnen und enden wird.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`animation-range-start`](/de/docs/Web/CSS/animation-range-start)
- [`animation-range-end`](/de/docs/Web/CSS/animation-range-end)

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

Die Kurzschreibweise `animation-range` kann auf ein Containerelement angewendet werden als eine Kombination von `<animation-range-start>` und `<animation-range-end>` Werten. Wenn beide Werte spezifiziert sind, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im Syntaxblock oben gezeigt, gibt es, wenn nur ein einziger Wert angegeben wird, mehrere mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, wird `<animation-range-start>` diesen Wert übernehmen, und `<animation-range-end>` wird gleich `normal` sein.
- Wenn der Wert ein benannter Zeitachsenbereich ohne ein folgendes `<length-percentage>` ist, wird der Bereich zwischen diesem benannten Zeitachsenbereich bei 0% und 100% liegen.
- Wenn der Wert ein benannter Zeitachsenbereich mit einem folgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitachsenbereich und Prozentsatz, und endet bei diesem benannten Zeitachsenbereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) repräsentieren. Diese Werte können einer der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitachse im Fall von `animation-range-start` und das Ende der Zeitachse im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentwert, gemessen vom Beginn der Zeitachse an.
- `<timeline-range-name>`
  - : Ein spezifischer benannter Zeitachsenbereich innerhalb der gesamten Zeitachse. Mögliche Werte sind:
    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Fortschrittszeitanimation_ (siehe [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details), vom Punkt an, an dem das Subjektelement beginnt, in den Sichtbarkeitsbereich des Scrollports einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitanimation_, in dem das Subjektelement vollständig im Sichtbarkeitsbereich des Scrollports enthalten ist oder diesen vollständig bedeckt.
        - Wenn das Subjektelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement zum ersten Mal vollständig vom Scrollport umfasst wird (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport umfasst wird (100% Fortschritt).
        - Wenn das Subjektelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement zum ersten Mal den Scrollport vollständig bedeckt (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig bedeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitanimation_ vom Punkt, an dem das Subjektelement beginnt, in den Scrollport einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitanimation_ vom Punkt, an dem das Subjektelement beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es vollständig ausgetreten ist (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitanimation_ vom Punkt, an dem das Subjektelement beginnt, die Anfangskante des Scrollports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es diese vollständig überquert hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitanimation_ vom Punkt, an dem das Subjektelement beginnt, die Endkante des Scrollports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es diese vollständig überquert hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` beinhalten, wird die Prozentzahl standardmäßig auf `0%` festgelegt, wenn es sich um einen `animation-range-start` Wert handelt und `100%`, wenn es sich um einen `animation-range-end` Wert handelt.

    > [!NOTE]
    > Es ist ziemlich schwierig, aus den obigen Beschreibungen zu visualisieren, was diese Werte bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in einem einfach visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein kombinierter Wert, der dem angegebenen Prozentsatz oder Abstand durch den angegebenen benannten Zeitachsenbereich entspricht, gemessen vom Start dieses Zeitachsenbereichs an.

> [!NOTE]
> Der Bereich des Scrollports (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details), der als Sichtbarkeitsbereich für den Fortschritt des Subjektelements einer _benannten Fortschrittszeitanimation_ angesehen wird, ist der Bereich, in dem das Subjektelement sichtbar ist. Standardmäßig umfasst dies den gesamten Bereich des Scrollports, kann jedoch mithilfe der {{cssxref("view-timeline-inset")}} Eigenschaft angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, um eine anschauliche, leichte visuelle Erklärung aller Werttypen zu erhalten.

### Erstellen einer benannten Fortschrittszeitanimation mit Bereich

Eine Fortschrittszeitanimation mit dem Namen `--subjectReveal` wird definiert, indem die `view-timeline` Eigenschaft auf ein Subjektelement mit der `class` von `animation` angewendet wird.
Dies wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es vertikal durch das Dokument bewegt wird, während es gescrollt wird.

Außerdem wird eine `animation-range` Deklaration festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schriftsteinstellungen:

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
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` wird auch mit einer Klasse `animation` versehen — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittszeitanimation zu definieren. Es wird auch ein Name für `animation-timeline` mit demselben Wert angegeben, um zu erklären, dass dies das Element sein wird, das animiert wird, während die Fortschrittszeitanimation fortschreitet. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen.

Abschließend wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Größe animiert, sodass es beim Hochscrollen im Scroller einblendet und sich vergrößert.

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

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

Scrollen Sie, um das Subjektelement in Aktion zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with range", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`animation-range-end`](/de/docs/Web/CSS/animation-range-end), [`animation-range-start`](/de/docs/Web/CSS/animation-range-start)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/view-timeline-inset)
- [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
