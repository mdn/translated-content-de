---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Zusätzliche Eigenschaften

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

Die `animation-range`-Kurzschreibweise kann auf ein Containerelement als Kombination der Werte `<animation-range-start>` und `<animation-range-end>` angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert.

Wie durch die Kommentare im obigen Syntaxblock gezeigt, gibt es bei Angabe eines einzigen Wertes einige mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, nimmt `<animation-range-start>` diesen Wert an und `<animation-range-end>` wird `normal` sein.
- Wenn der Wert ein benannter Zeitachsenbereich ohne ein `<length-percentage>` nachfolgend ist, liegt der Bereich zwischen diesem benannten Zeitachsenbereich bei 0% und 100%.
- Wenn der Wert ein benannter Zeitachsenbereich mit einem `<length-percentage>` nachfolgend ist, beginnt der Bereich bei diesem benannten Zeitachsenbereich und Prozentsatz und endet bei diesem benannten Zeitachsenbereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) darstellen. Diese Werte können einer der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitleiste im Falle von `animation-range-start` und das Ende der Zeitleiste im Falle von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentsatzwert, gemessen vom Beginn der Zeitleiste.
- `<timeline-range-name>`
  - : Ein spezifisch benannter Zeitachsenbereich innerhalb der gesamten Zeitleiste. Mögliche Werte sind:
    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Ansicht-Fortschrittszeitleiste_ (siehe [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details), vom Punkt, an dem das Objektelement zum ersten Mal den Ansichtsfortschritts-Sichtbarkeitsbereich des Scrollports betritt (0% Fortschritt), bis zu dem Punkt, an dem es ihn komplett verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschrittszeitleiste_, in dem das Objektelement vollständig enthalten ist oder den Scrollport-Sichtbarkeitsbereich vollständig enthält.
        - Wenn das Objektelement kleiner als der Scrollport ist, reicht es vom Punkt, an dem das Objektelement zum ersten Mal vollständig vom Scrollport umschlossen ist (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig umschlossen ist (100% Fortschritt).
        - Wenn das Objektelement größer als der Scrollport ist, reicht es vom Punkt, an dem das Objektelement zum ersten Mal den Scrollport vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig abdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschrittszeitleiste_ vom Punkt, an dem das Objektelement zum ersten Mal den Scrollport betritt (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollport komplett betreten hat (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschrittszeitleiste_ vom Punkt, an dem das Objektelement zum ersten Mal den Scrollport verlässt (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollport komplett verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschrittszeitleiste_ vom Punkt, an dem das Objektelement zum ersten Mal den Anfangsrand des Scrollports überschreitet (0% Fortschritt), bis zu dem Punkt, an dem es den Anfangsrand des Scrollports komplett überschritten hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansicht-Fortschrittszeitleiste_ vom Punkt, an dem das Objektelement zum ersten Mal den Endrand des Scrollports überschreitet (0% Fortschritt), bis zu dem Punkt, an dem es den Endrand des Scrollports komplett überschritten hat (100%).

    Im Fall von `<timeline-range-name>`-Werten, die kein `<length-percentage>` enthalten, beträgt der Prozentsatz standardmäßig `0%`, wenn es sich um einen `animation-range-start`-Wert handelt, und `100%`, wenn es sich um einen `animation-range-end`-Wert handelt.

    > [!NOTE]
    > Es ist ziemlich schwer, sich aus den obigen Beschreibungen vorzustellen, was diese Werte bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in einem einfachen visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der den angegebenen Prozentsatz oder Abstand durch den angegebenen benannten Zeitachsenbereich darstellt, gemessen vom Beginn dieses Zeitachsenbereichs.

> [!NOTE]
> Der Scrollport (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für mehr Details), bekannt als der Ansichtsfortschritts-Sichtbarkeitsbereich, ist der Bereich, in dem das Objektelement einer _benannten Ansicht-Fortschrittszeitleiste_-Animation als sichtbar angesehen wird. Standardmäßig ist dies der gesamte Bereich des Scrollports, aber es kann mithilfe der {{cssxref("view-timeline-inset")}}-Eigenschaft angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung dessen, was alle Werttypen bedeuten, an.

### Erstellen einer benannten Ansicht-Fortschrittszeitleiste mit Bereich

Eine Ansicht-Fortschrittszeitleiste namens `--subject-reveal` wird mithilfe der `view-timeline`-Eigenschaft auf einem Objektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mithilfe von `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Objektelement animiert wird, während es sich beim Scrollen durch das Dokument nach oben bewegt.

Eine `animation-range`-Deklaration wird ebenfalls festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

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

Das `subject`-Element und sein enthaltendes `content`-Element sind minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` eingestellt, um eine benannte Ansicht-Fortschrittszeitleiste zu definieren. Es erhält auch einen `animation-timeline`-Namen mit demselben Wert, um zu erklären, dass dies das Element sein wird, das animiert wird, wenn die Ansicht-Fortschrittszeitleiste fortschreitet. Wir geben ihm auch eine `animation-range`-Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen.

Zuletzt wird eine Animation auf das Element angegeben, die seine Deckkraft und Skalierung animiert, sodass es verblasst und seine Größe erhöht, während es den Scroller hinaufsteigt.

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

Scrollen Sie, um das animierte Objektelement zu sehen.

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
