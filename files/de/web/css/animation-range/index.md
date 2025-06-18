---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Anhängezeitraums einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnen und enden wird.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die Shorthand-Eigenschaft `animation-range` kann auf ein Containerelement angewendet werden und kombiniert die Werte von `<animation-range-start>` und `<animation-range-end>`. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert.

Wie durch die Kommentare im obigen Syntaxblock gezeigt, gibt es mehrere mögliche Interpretationen, wenn nur ein einziger Wert angegeben wird:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, nimmt `<animation-range-start>` diesen Wert an, und `<animation-range-end>` wird `normal` entsprechen.
- Wenn der Wert ein benannter Zeitleistenbereich ohne folgendes `<length-percentage>` ist, wird der Bereich zwischen diesem benannten Zeitleistenbereich bei 0% und 100% liegen.
- Wenn der Wert ein benannter Zeitleistenbereich mit folgendem `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitleistenbereich und Prozentsatz und endet bei diesem benannten Zeitleistenbereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) repräsentieren. Diese Werte können einer der folgenden sein:

- `normal`
  - : Repräsentiert den Anfang der Zeitleiste im Fall von `animation-range-start` und das Ende der Zeitleiste im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentsatzwert, gemessen vom Beginn der Zeitleiste.
- `<timeline-range-name>`

  - : Ein bestimmter benannter Zeitleistenbereich innerhalb der gesamten Zeitleiste. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den vollen Bereich einer _benannten Fortschrittsansicht-Zeitleiste_ (weitere Details finden Sie bei [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)), vom Punkt, wo das Ziel-Element beginnt, in den Sichtbarkeitsbereich der Fortschrittsansicht des Scrollports einzutreten (0% Fortschritt), bis zu dem Punkt, wo es diesen vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Fortschrittsansicht-Zeitleiste_, wo das Ziel-Element vollständig vom Sichtbarkeitsbereich des Scrollports umfasst wird oder diesen vollständig umfasst.
        - Wenn das Ziel-Element kleiner als der Scrollport ist, reicht es von dem Punkt, wo das Ziel-Element erstmals vollständig vom Scrollport umfasst wird (0% Fortschritt), bis zu dem Punkt, wo es nicht mehr vollständig vom Scrollport umfasst wird (100% Fortschritt).
        - Wenn das Ziel-Element größer als der Scrollport ist, reicht es von dem Punkt, wo das Ziel-Element erstmals den Scrollport vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, wo es den Scrollport nicht mehr vollständig abdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Fortschrittsansicht-Zeitleiste_ vom Punkt, wo das Ziel-Element beginnt, in den Scrollport einzutreten (0% Fortschritt), bis zu dem Punkt, wo es vollständig in den Scrollport eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Fortschrittsansicht-Zeitleiste_ vom Punkt, wo das Ziel-Element beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, wo es den Scrollport vollständig verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittsansicht-Zeitleiste_ vom Punkt, wo das Ziel-Element beginnt, die Startkante des Scrollports zu kreuzen (0% Fortschritt), bis zu dem Punkt, wo es die Startkante des Scrollports vollständig gekreuzt hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittsansicht-Zeitleiste_ vom Punkt, wo das Ziel-Element beginnt, die Endkante des Scrollports zu kreuzen (0% Fortschritt), bis zu dem Punkt, wo es die Endkante des Scrollports vollständig gekreuzt hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` enthalten, beträgt der Prozentsatz standardmäßig `0%`, wenn es sich um einen `animation-range-start` Wert handelt, und `100%`, wenn es sich um einen `animation-range-end` Wert handelt.

    > [!NOTE]
    > Es ist ziemlich schwer zu visualisieren, was diese Werte aus den obigen Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie bedeuten, in einem einfachen visuellen Format.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder Abstand durch den angegebenen benannten Zeitleistenbereich entspricht, gemessen vom Beginn dieses Zeitleistenbereichs.

> [!NOTE]
> Der Scrollport (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für weitere Details) Bereich, bekannt als der Sichtbarkeitsbereich der Fortschrittsansicht, ist der Bereich, in dem das Ziel-Element einer _benannten Fortschrittsansicht-Zeitleisten_ Animation als sichtbar angesehen wird. Standardmäßig ist dies der vollständige Bereich des Scrollports, kann aber mithilfe der {{cssxref("view-timeline-inset")}} Eigenschaft angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Siehe den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung, was alle Wertetypen bedeuten.

### Erstellen einer benannten Fortschrittsansicht-Zeitleiste mit Bereich

Eine Fortschrittsansicht-Zeitleiste namens `--subjectReveal` wird mithilfe der `view-timeline` Eigenschaft auf einem Ziel-Element mit einer `class` von `animation` definiert. Dies wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Ziel-Element animiert wird, während es sich durch das Dokument nach oben bewegt, wenn es gescrollt wird.

Eine `animation-range` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

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

Das `subject`-Element und das enthaltene `content`-Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse von `animation` hinzugefügt — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittsansicht-Zeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das animierte Element ist, während die Fortschrittsansicht-Zeitleiste abläuft. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später beginnen und früher enden zu lassen.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Opazität und Skalierung animiert und es dadurch verblassen und vergrößern lässt, während es sich durch den Scroller nach oben bewegt.

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

Scrollen Sie, um zu sehen, wie das Ziel-Element animiert wird.

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
