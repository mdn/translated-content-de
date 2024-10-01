---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um den Start- und Endpunkt eines Animationsbereichs entlang seiner Zeitachse festzulegen, d.h. wo eine Animation entlang der Zeitachse beginnt und endet.

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Die `animation-range` Shorthand-Eigenschaft kann auf ein Containerelement als Kombination der Werte `<animation-range-start>` und `<animation-range-end>` angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im obigen Syntaxblock gezeigt, gibt es bei der Angabe eines einzelnen Wertes einige mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, übernimmt `<animation-range-start>` diesen Wert, und `<animation-range-end>` entspricht `normal`.
- Wenn der Wert ein benannter Zeitachsenbereich ohne ein darauf folgendes `<length-percentage>` ist, erstreckt sich der Bereich zwischen diesem benannten Zeitachsenbereich bei 0% und 100%.
- Wenn der Wert ein benannter Zeitachsenbereich mit einem darauf folgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitachsenbereich und Prozentsatz und endet bei diesem benannten Zeitachsenbereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) darstellen. Diese Werte können eine der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitachse im Fall von `animation-range-start` und das Ende der Zeitachse im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentsatzwert, der vom Beginn der Zeitachse gemessen wird.
- `<timeline-range-name>`

  - : Ein spezifisch benannter Zeitachsenbereich innerhalb der gesamten Zeitachse. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten View-Progress-Zeitachse_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details), von dem Punkt, an dem das Zielelement zum ersten Mal beginnt, in den Sichtbarkeitsbereich des Scrollport zu gelangen (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten View-Progress-Zeitachse_, in dem das Zielelement vollständig vom Sichtbarkeitsbereich des Scrollport eingeschlossen wird oder diesen vollständig enthält.
        - Wenn das Zielelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Zielelement zum ersten Mal vollständig vom Scrollport eingeschlossen wird (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig enthalten ist (100% Fortschritt).
        - Wenn das Zielelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Zielelement den Scrollport zum ersten Mal vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, an dem es ihn nicht mehr vollständig abdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten View-Progress-Zeitachse_ von dem Punkt, an dem das Zielelement zum ersten Mal beginnt, in den Scrollport einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten View-Progress-Zeitachse_ von dem Punkt, an dem das Zielelement zum ersten Mal beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollport vollständig verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten View-Progress-Zeitachse_ von dem Punkt, an dem das Zielelement zum ersten Mal beginnt, die startende Kante des Scrollport zu kreuzen (0% Fortschritt), bis zu dem Punkt, an dem es die startende Kante des Scrollports vollständig gekreuzt hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten View-Progress-Zeitachse_ von dem Punkt, an dem das Zielelement zum ersten Mal beginnt, die endende Kante des Scrollports zu kreuzen (0% Fortschritt), bis zu dem Punkt, an dem es die endende Kante des Scrollports vollständig gekreuzt hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` enthalten, beträgt der Prozentsatz standardmäßig `0%`, wenn es sich um einen `animation-range-start` Wert handelt, und `100%`, wenn es sich um einen `animation-range-end` Wert handelt.

    > [!NOTE]
    > Es ist ziemlich schwer, sich vorzustellen, was diese Werte aus den obigen Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in einem einfach zu verstehenden visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder der Entfernung durch den angegebenen benannten Zeitachsenbereich entspricht, gemessen von Beginn dieses Zeitachsenbereichs.

> [!NOTE]
> Der Scrollbereich (siehe {{Glossary("Scroll_container", "Scroll-container")}} für weitere Details), der als Sichtbarkeitsbereich des View-Progress bekannt ist, ist der Bereich, in dem das Zielelement einer _benannten View-Progress-Zeitachse_ als sichtbar gilt. Standardmäßig ist dies der gesamte Bereich des Scrollports, kann jedoch mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung, was alle Wertetypen bedeuten.

### Erstellen einer benannten View-Progress-Zeitachse mit Bereich

Eine View-Progress-Zeitachse mit dem Namen `--subjectReveal` wird mit der Eigenschaft `view-timeline` auf einem Zielelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Zielelement animiert wird, während es nach oben durch das Dokument verschoben wird, während es gescrollt wird.

Eine `animation-range` Deklaration wird ebenfalls festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

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

Das `subject` Element und sein enthaltendes `content` Element werden minimal gestaltet, und dem Textinhalt werden einige grundlegende Schriftsatzeinstellungen gegeben:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` gegeben — hier wird `view-timeline` festgelegt, um eine benannte View-Progress-Zeitachse zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert zugewiesen, um anzugeben, dass dies das Element sein wird, das animiert wird, während die View-Progress-Zeitachse fortschreitet. Außerdem geben wir eine `animation-range` Deklaration, um die Animation später beginnen und früher enden zu lassen.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Opazität und Skalierung animiert und es verblassen lässt und vergrößert, während es den Scroller hinauf bewegt.

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

Scrollen Sie, um zu sehen, wie das Zielelement animiert wird.

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
