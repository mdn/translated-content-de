---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Start und das Ende eines Animationsbereichs entlang seiner Timeline festzulegen, d.h. wo entlang der Timeline eine Animation beginnt und endet.

## Bestandeigenschaften

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

Die Kurzschreibweise `animation-range` kann auf ein Container-Element angewendet werden, als Kombination der Werte `<animation-range-start>` und `<animation-range-end>`. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im obigen Syntaxblock gezeigt, gibt es bei der Angabe eines Einzelwerts einige mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, wird `<animation-range-start>` diesen Wert übernehmen, und `<animation-range-end>` wird `normal` entsprechen.
- Wenn der Wert ein benannter Timeline-Bereich ohne ein `<length-percentage>` ist, wird der Bereich zwischen diesem benannten Timeline-Bereich bei 0% und 100% liegen.
- Wenn der Wert ein benannter Timeline-Bereich mit einem `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Timeline-Bereich und Prozentsatz und endet bei diesem benannten Timeline-Bereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) darstellen. Diese Werte können folgende sein:

- `normal`
  - : Repräsentiert den Beginn der Timeline im Falle von `animation-range-start` und das Ende der Timeline im Falle von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentwert, der vom Anfang der Timeline aus gemessen wird.
- `<timeline-range-name>`
  - : Ein spezifisch benannter Timeline-Bereich innerhalb der gesamten Timeline. Mögliche Werte sind:
    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Ansicht-Fortschritt-Timeline_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details), von dem Punkt, an dem das Subjektelement beginnt, in den Sichtbarkeitsbereich des Scrollports einzutreten (0% Fortschritt) bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Timeline_, in dem das Subjektelement vollständig vom Scrollport enthalten wird oder diesen vollständig enthält.
        - Wenn das Subjektelement kleiner ist als der Scrollport, reicht es von dem Punkt, an dem das Subjektelement vollständig vom Scrollport enthalten wird (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig enthalten ist (100% Fortschritt).
        - Wenn das Subjektelement größer ist als der Scrollport, reicht es von dem Punkt, an dem das Subjektelement den Scrollport vollständig bedeckt (0% Fortschritt), bis zu dem Punkt, an dem es ihn nicht mehr vollständig bedeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Timeline_ von dem Punkt, an dem das Subjektelement beginnt, in den Scrollport einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Timeline_ von dem Punkt, an dem das Subjektelement beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Timeline_ von dem Punkt, an dem das Subjektelement beginnt, die anfängliche Kante des Scrollports zu überschreiten (0% Fortschritt), bis zu dem Punkt, an dem es die Kante vollständig überschritten hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Timeline_ von dem Punkt, an dem das Subjektelement beginnt, die Endkante des Scrollports zu überschreiten (0% Fortschritt), bis zu dem Punkt, an dem es die Kante vollständig überschritten hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` beinhalten, wird der Prozentsatz standardmäßig auf `0%` gesetzt, wenn es sich um einen `animation-range-start` Wert handelt, und auf `100%`, wenn es sich um einen `animation-range-end` Wert handelt.

    > [!NOTE]
    > Es ist recht schwer, sich vorzustellen, was diese Werte anhand der obigen Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie bedeuten, in einem leicht verständlichen visuellen Format.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder Abstand durch den angegebenen benannten Timeline-Bereich entspricht, gemessen vom Beginn dieses Timeline-Bereichs.

> [!NOTE]
> Der Scrollport (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für mehr Details) Bereich, bekannt als der Ansicht-Fortschritt-Sichtbarkeitsbereich, ist der Bereich, innerhalb dessen das Subjektelement einer _benannten Ansicht-Fortschritt-Timeline_ Animation als sichtbar gilt. Standardmäßig ist dies der gesamte Bereich des Scrollports, kann jedoch mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung der Bedeutung aller Werttypen an.

### Erstellung einer benannten Ansicht-Fortschritt-Timeline mit Bereich

Eine Ansicht-Fortschritt-Timeline mit dem Namen `--subject-reveal` wird mittels der `view-timeline` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert. Diese wird dann als Timeline für das gleiche Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es sich durch das Dokument nach oben bewegt, während es gescrollt wird.

Eine `animation-range` Deklaration wird ebenfalls gesetzt, um die Animation später beginnen zu lassen als erwartet und früher zu beenden.

#### HTML

Der HTML-Code des Beispiels ist unten gezeigt.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält ebenfalls eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Ansicht-Fortschritt-Timeline zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dieses Element animiert wird, während die Ansicht-Fortschritt-Timeline fortschreitet. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später beginnen und früher beenden zu lassen.

Schließlich wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, sodass es einblendet und die Größe erhöht, während es den Scroller hinaufbewegt.

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

Scrollen Sie, um das Subjektelement animiert zu sehen.

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
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
