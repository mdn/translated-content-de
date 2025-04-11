---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Start- und Endpunkt des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnen und enden wird.

## Bestandteile der Eigenschaften

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

Die Kurzform-Eigenschaft `animation-range` kann auf ein Containerelement angewendet werden als eine Kombination der Werte `<animation-range-start>` und `<animation-range-end>`. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im Syntaxblock oben gezeigt, gibt es bei Angabe eines einzigen Wertes mehrere mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, nimmt `<animation-range-start>` diesen Wert an, und `<animation-range-end>` entspricht `normal`.
- Wenn der Wert ein benannter Zeitabschnitt ohne ein folgendes `<length-percentage>` ist, wird der Bereich zwischen diesem benannten Zeitabschnitt bei 0% und 100% liegen.
- Wenn der Wert ein benannter Zeitabschnitt mit einem folgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitabschnitt und Prozentsatz und endet bei diesem benannten Zeitabschnitt und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) repräsentieren. Diese Werte können eines der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitleiste bei `animation-range-start` und das Ende der Zeitleiste bei `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentwert, gemessen vom Anfang der Zeitleiste.
- `<timeline-range-name>`

  - : Ein spezifischer benannter Zeitabschnitt innerhalb der gesamten Zeitleiste. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Fortschrittszeitleiste_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details), von dem Punkt, an dem das betreffenden Element beginnt, in den Sichtbarkeitsbereich des Scrollports einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_, wo das betreffende Element vollständig vom, oder das vollständige, Sichtbarkeitsbereich des Scrollports enthält oder darin enthalten ist.
        - Wenn das betreffende Element kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das betreffende Element erstmals vollständig vom Scrollport enthalten ist (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport enthalten ist (100% Fortschritt).
        - Wenn das betreffende Element größer als der Scrollport ist, reicht es von dem Punkt, an dem das betreffende Element erstmals den Scrollport vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig abdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ von dem Punkt, an dem das betreffende Element beginnt, in den Scrollport einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ von dem Punkt, an dem das betreffende Element beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es vollständig aus dem Scrollport ausgetreten ist (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ von dem Punkt, an dem das betreffende Element beginnt, die Startrand des Scrollports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Startrand des Scrollports vollständig überquert hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ von dem Punkt, an dem das betreffende Element beginnt, die Endrand des Scrollports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Endrand des Scrollports vollständig überquert hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` beinhalten, wird der Prozentsatz auf `0%` als `animation-range-start` Wert und `100%` als `animation-range-end` Wert gesetzt.

    > [!NOTE]
    > Es ist recht schwer, sich vorzustellen, was diese Werte aus den obigen Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in einem leicht verständlichen visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein kombinierter Wert, der den angegebenen Prozentsatz oder die Entfernung durch den angegebenen benannten Zeitleistenbereich entspricht, gemessen vom Anfang dieses Zeitleistenbereichs.

> [!NOTE]
> Der Scrollport (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details) Bereich, bekannt als der Sichtbarkeitsbereich des Fortschritts, ist der Bereich, in dem das betreffenden Element einer _benannten Fortschrittszeitleisten_-Animation als sichtbar gerendert wird. Standardmäßig ist dies der vollständige Bereich des Scrollports, kann aber mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung, was alle Werttypen bedeuten.

### Erstellen einer benannten Fortschrittszeitleiste mit Bereich

Eine Fortschrittszeitleiste namens `--subjectReveal` wird mit der Eigenschaft `view-timeline` auf einem betreffenden Element mit einer `class` von `animation` definiert.
Diese wird dann als die Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das betreffende Element animiert, während es sich beim Scrollen durch das Dokument nach oben bewegt.

Eine `animation-range` Deklaration wird auch gesetzt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteneinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittszeitleiste zu definieren. Es wird auch ein solcher `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das animierte Element sein wird, während die Fortschrittszeitleiste fortschreitet. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später als erwartet beginnen und früher beenden zu lassen.

Zuletzt wird eine Animation auf dem Element angegeben, die seine Deckkraft und Skalierung animiert und es beim Bewegen nach oben im Scrollbereich einblenden und vergrößern lässt.

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

Scrollen Sie, um zu sehen, wie das betreffende Element animiert wird.

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
