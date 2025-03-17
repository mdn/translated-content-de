---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweiseigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Bereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Zusammengesetzte Eigenschaften

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

Die Kurzschreibweiseigenschaft `animation-range` kann auf ein Containerelement als Kombination der Werte `<animation-range-start>` und `<animation-range-end>` angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im Syntaxblock oben gezeigt, gibt es bei Angabe eines einzelnen Wertes einige mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, wird `<animation-range-start>` diesen Wert übernehmen und `<animation-range-end>` wird `normal` entsprechen.
- Wenn der Wert ein benannter Zeitleistenbereich ohne ein folgendes `<length-percentage>` ist, wird der Bereich zwischen diesem benannten Zeitleistenbereich bei 0 % und 100 % liegen.
- Wenn der Wert ein benannter Zeitleistenbereich mit einem folgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitleistenbereich und Prozentsatz und endet bei diesem benannten Zeitleistenbereich und 100 %.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) darstellen. Diese Werte können eines der folgenden sein:

- `normal`
  - : Repräsentiert den Anfang der Zeitleiste im Fall von `animation-range-start` und das Ende der Zeitleiste im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentsatzwert, gemessen vom Beginn der Zeitleiste.
- `<timeline-range-name>`

  - : Ein spezifisch benannter Bereich in der gesamten Zeitleiste. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den vollständigen Bereich einer _benannten Ansicht-Fortschritt-Zeitleiste_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details), von dem Punkt, an dem das Subjektelement beginnt, den Sichtbarkeitsbereich des Scrollports zu betreten (0 % Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100 % Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Zeitleiste_, in dem das Subjektelement vollständig vom oder vollständig das Sichtbarkeitsbereich des Scrollports umfasst.
        - Wenn das Subjektelement kleiner als der Scrollport ist, reicht es vom Punkt, an dem das Subjektelement vollständig vom Scrollport umfasst ist (0 % Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport umfasst ist (100 % Fortschritt).
        - Wenn das Subjektelement größer als der Scrollport ist, reicht es vom Punkt, an dem das Subjektelement den Scrollport erstmals vollständig bedeckt (0 % Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig bedeckt (100 % Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, den Scrollport zu betreten (0 % Fortschritt), bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist (100 %).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, den Scrollport zu verlassen (0 % Fortschritt), bis zu dem Punkt, an dem es vollständig den Scrollport verlassen hat (100 %).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, den Startrand des Scrollports zu überqueren (0 % Fortschritt), bis zu dem Punkt, an dem es vollständig den Startrand des Scrollports überquert hat (100 %).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, den Endrand des Scrollports zu überqueren (0 % Fortschritt), bis zu dem Punkt, an dem es vollständig den Endrand des Scrollports überquert hat (100 %).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` enthalten, ist der Prozentsatz standardmäßig `0 %`, wenn es sich um einen `animation-range-start` Wert handelt, und `100 %`, wenn es sich um einen `animation-range-end` Wert handelt.

    > [!NOTE]
    > Es ist ziemlich schwer zu visualisieren, was diese Werte aus den oben stehenden Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in einem leicht verständlichen visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder der Distanz durch den angegebenen benannten Zeitleistenbereich entspricht, gemessen vom Beginn dieses Zeitleistenbereichs.

> [!NOTE]
> Der Scrollport-Bereich (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details), der als Sichtbarkeitsbereich des Fortschritts bekannt ist, ist der Bereich, in dem das Subjektelement einer _benannten Ansicht-Fortschritt-Zeitleiste_ Animation als sichtbar angesehen wird. Standardmäßig ist dies der vollständige Bereich des Scrollports, aber er kann mithilfe der {{cssxref("view-timeline-inset")}} Eigenschaft angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung dessen, was alle Wertetypen bedeuten, an.

### Erstellen einer benannten Ansicht-Fortschritt-Zeitleiste mit Bereich

Eine Ansicht-Fortschritt-Zeitleiste mit dem Namen `--subjectReveal` wird mithilfe der `view-timeline` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Dies wird dann als Zeitleiste für dasselbe Element mithilfe von `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Das `subject`-Element und sein enthaltenes `content`-Element sind minimal gestylt, und dem Textinhalt werden einige grundlegende Schriftarteinstellungen gegeben:

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

Die `<div>` mit der Klasse `subject` erhält ebenfalls eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Ansicht-Fortschritt-Zeitleiste zu definieren. Es erhält ebenfalls einen `animation-timeline`-Namen mit demselben Wert, um zu erklären, dass dies das Element sein wird, das animiert wird, während die Ansicht-Fortschritt-Zeitleiste fortschreitet. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später als erwartet beginnen und früher beenden zu lassen.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Größe animiert, wodurch es beim Hochscrollen ausblendet und vergrößert wird.

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
    opacity: 1,
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie nach unten, um zu sehen, wie das Subjektelement animiert wird.

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
