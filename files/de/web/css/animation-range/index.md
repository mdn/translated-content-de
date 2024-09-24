---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnen und enden wird.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`animation-range-start`](/de/docs/Web/CSS/animation-range-start)
- [`animation-range-end`](/de/docs/Web/CSS/animation-range-end)

## Syntax

```css
/* einzelnes Schlüsselwort oder Längen-Prozentwert */
animation-range: normal; /* Entspricht normal normal */
animation-range: 20%; /* Entspricht 20% normal */
animation-range: 100px; /* Entspricht 100px normal */

/* einzelner benannter Zeitrahmenwert */
animation-range: cover; /* Entspricht cover 0% cover 100% */
animation-range: contain; /* Entspricht contain 0% contain 100% */
animation-range: cover 20%; /* Entspricht cover 20% cover 100% */
animation-range: contain 100px; /* Entspricht contain 100px cover 100% */

/* zwei Werte für Start und Ende des Bereichs */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit; /* Entspricht entry 0% exit 100% */
animation-range: cover cover 200px; /* Entspricht cover 0% cover 200px */
animation-range: entry 10% exit; /* Entspricht entry 10% exit 100% */
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
```

Die Shorthand-Eigenschaft `animation-range` kann auf ein Containerelement als Kombination der Werte `<animation-range-start>` und `<animation-range-end>` angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie in den Kommentaren im obigen Syntax-Block gezeigt, gibt es, wenn nur ein einzelner Wert angegeben wird, einige mögliche Interpretationen:

- Wenn der Wert eine {{cssxref("length-percentage")}} oder `normal` ist, nimmt `<animation-range-start>` diesen Wert an, und `<animation-range-end>` entspricht `normal`.
- Wenn der Wert ein benannter Zeitrahmenbereich ohne nachfolgendes `<length-percentage>` ist, liegt der Bereich zwischen diesem benannten Zeitrahmenbereich bei 0% und 100%.
- Wenn der Wert ein benannter Zeitrahmenbereich mit einem nachfolgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitrahmenbereich und Prozentsatz und endet bei diesem benannten Zeitrahmenbereich und 100%.

### Werte

Ein oder zwei Werte, die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) repräsentieren. Diese Werte können eines der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Zeitleiste im Fall von `animation-range-start` und das Ende der Zeitleiste im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentwert, gemessen vom Beginn der Zeitleiste.
- `<timeline-range-name>`

  - : Ein spezifisch benannter Zeitrahmenbereich innerhalb der gesamten Zeitleiste. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den vollständigen Bereich einer _benannten Fortschrittszeitleiste_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details), von dem Punkt, an dem das Subjektelement erstmals beginnt, in den Sichtbarkeitsbereich des Scroll-Ports einzutreten (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_, in dem das Subjektelement vollständig vom Scroll-Port enthalten ist oder ihn vollständig enthält.
        - Wenn das Subjektelement kleiner als der Scrollport ist, reicht es vom Punkt, an dem das Subjektelement erstmals vollständig vom Scrollport enthalten ist (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport enthalten ist (100% Fortschritt).
        - Wenn das Subjektelement größer als der Scrollport ist, reicht es vom Punkt, an dem das Subjektelement erstmals den Scrollport vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr den Scrollport vollständig abdeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, den Scroll-Port zu betreten (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig betreten hat (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, den Scroll-Port zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, die Startkante des Scroll-Ports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Startkante des Scroll-Ports vollständig überquert hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Fortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, die Endkante des Scroll-Ports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Endkante des Scroll-Ports vollständig überquert hat (100%).

    Im Fall von `<timeline-range-name>`-Werten, die kein `<length-percentage>` enthalten, standardisiert der Prozentsatz auf `0%`, wenn es ein `animation-range-start`-Wert ist, und `100%`, wenn es ein `animation-range-end`-Wert ist.

    > [!NOTE]
    > Es ist ziemlich schwer zu visualisieren, was diese Werte aus den obigen Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/), was sie genau in einem einfachen visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder der Entfernung durch den angegebenen benannten Zeitrahmenbereich entspricht, gemessen vom Anfang dieses Zeitrahmenbereichs.

> [!NOTE]
> Der Scroll-Port (siehe {{glossary("Scroll container")}} für mehr Details) als der Bereich, der als Sichtbarkeitsbereich des Fortschritts angesehen wird, ist der Bereich, in dem das Subjektelement einer _benannten Fortschrittszeitleisten_-Animation als sichtbar angesehen wird. Standardmäßig ist dies der vollständige Bereich des Scrollports, kann jedoch mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung, was alle Wertetypen bedeuten.

### Erstellen eines benannten Fortschrittszeitrahmens mit Bereich

Ein Fortschrittszeitrahmen namens `--subjectReveal` wird unter Verwendung der Eigenschaft `view-timeline` auf einem Subjektelement mit der Klasse `animation` definiert. Dieser wird dann als die Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert, während es nach oben durch das Dokument bewegt wird, wenn es gescrollt wird.

Eine `animation-range`-Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

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

Das `subject`-Element und sein enthaltenes `content`-Element sind minimal gestaltet, und dem Textinhalt werden einige grundlegende Schriftarteinstellungen gegeben:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um einen benannten Fortschrittszeitleisten-Zeitplan zu definieren. Es erhält auch einen `animation-timeline`-Namen mit demselben Wert, um anzugeben, dass dieses Element animiert wird, während der Fortschrittszeitleisten-Zeitplan fortschreitet. Wir geben ihm auch eine `animation-range`-Deklaration, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

Schließlich wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es verblasst und sich vergrößert, während es den Scroller hoch bewegt.

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-range: entry 10% contain 25%;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox erfordert dies, um die Animation anzuwenden */
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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

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
