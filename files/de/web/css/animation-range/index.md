---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 149256c7f22586eafb7c40f36f75e73e09a599b4
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um den Beginn und das Ende des Befestigungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für folgende CSS-Eigenschaften:

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

Die `animation-range` Shorthand-Eigenschaft kann auf ein Containerelement als Kombination von `<animation-range-start>` und `<animation-range-end>` Werten angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im obenstehenden Syntax-Block gezeigt, gibt es bei der Angabe eines einzigen Wertes mehrere mögliche Interpretationen:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, übernimmt `<animation-range-start>` diesen Wert und `<animation-range-end>` entspricht `normal`.
- Wenn der Wert ein benannter Zeitleistenbereich ohne ein folgendes `<length-percentage>` ist, erstreckt sich der Bereich zwischen diesem benannten Zeitleistenbereich bei 0% und 100%.
- Wenn der Wert ein benannter Zeitleistenbereich mit einem folgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitleistenbereich und Prozentsatz und endet bei diesem benannten Zeitleistenbereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) repräsentieren. Diese Werte können einer der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitleiste im Fall von `animation-range-start` und das Ende der Zeitleiste im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentwert, der vom Anfang der Zeitleiste aus gemessen wird.
- `<timeline-range-name>`
  - : Ein spezifisch benannter Zeitleistenbereich innerhalb der gesamten Zeitleiste. Mögliche Werte sind:
    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Fortschritts-Zeitleiste_ (siehe [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details), von dem Punkt, an dem das Zielelement zuerst beginnt, in den Sichtbarkeitsbereich des Scroll-Ports einzutreten (0% Fortschritt) bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Fortschritts-Zeitleiste_, wo das Zielelement vollständig im oder vollständig vom Sichtbarkeitsbereich des Scroll-Ports umfasst ist.
        - Wenn das Zielelement kleiner als der Scroll-Port ist, reicht es von dem Punkt, an dem das Zielelement zuerst vollständig vom Scroll-Port umfasst ist (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scroll-Port umfasst ist (100% Fortschritt).
        - Wenn das Zielelement größer als der Scroll-Port ist, reicht es von dem Punkt, an dem das Zielelement zuerst den Scroll-Port vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, an dem es den Scroll-Port nicht mehr vollständig abdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Fortschritts-Zeitleiste_ von dem Punkt, an dem das Zielelement zuerst beginnt, in den Scroll-Port einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig in den Scroll-Port eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Fortschritts-Zeitleiste_ von dem Punkt, an dem das Zielelement zuerst beginnt, aus dem Scroll-Port auszutreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig aus dem Scroll-Port ausgetreten ist (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschritts-Zeitleiste_ von dem Punkt, an dem das Zielelement zuerst beginnt, die Startkante des Scroll-Ports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Startkante des Scroll-Ports vollständig überquert hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschritts-Zeitleiste_ von dem Punkt, an dem das Zielelement zuerst beginnt, die Ende-Kante des Scroll-Ports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Ende-Kante des Scroll-Ports vollständig überquert hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` enthalten, ist der Prozentsatz standardmäßig `0%`, wenn es ein `animation-range-start` Wert ist, und `100%`, wenn es ein `animation-range-end` Wert ist.

    > [!NOTE]
    > Es ist ziemlich schwierig, anhand der oben stehenden Beschreibungen visuell zu erfassen, was diese Werte bedeuten. Zum Glück zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in visueller Form bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozent- oder Entfernungswert durch den angegebenen benannten Zeitleistenbereich entspricht, gemessen vom Beginn dieses Zeitleistenbereichs.

> [!NOTE]
> Der Scroll-Port (siehe {{Glossary("Scroll_container", "Scrollbehälter")}} für mehr Details) Bereich, der als Sichtbarkeitsbereich des Fortschritts bekannt ist, ist der Bereich, in dem das Zielelement einer _benannten Fortschritts-Zeitleisten_ Animation als sichtbar erachtet wird. Standardmäßig ist dies der gesamte Bereich des Scroll-Ports, aber er kann mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine visuelle Erklärung an, was alle Werttypen bedeuten.

### Erstellen einer benannten Fortschritts-Zeitleiste mit Bereich

Eine Fortschritts-Zeitleiste mit dem Namen `--subject-reveal` wird mithilfe der Eigenschaft `view-timeline` auf einem Zielelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Zielelement animiert wird, während es nach oben durchs Dokument bewegt wird, während gescrollt wird.

Eine `animation-range` Deklaration wird ebenfalls festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

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

Das `subject` Element und sein umschließendes `content` Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` hat auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Fortschritts-Zeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu deklarieren, dass dies das Element ist, das animiert wird, wenn die Fortschritts-Zeitleiste voranschreitet. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen.

Zuletzt wird eine Animation auf dem Element angegeben, die dessen Deckkraft und Skalierung animiert, wodurch es beim Bewegen nach oben im Scroller verblasst und vergrößert wird.

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

Scrollen Sie, um das animierte Zielelement zu sehen.

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
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
