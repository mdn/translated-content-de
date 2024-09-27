---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Anhangsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Zusammengehörige Eigenschaften

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

Die `animation-range` Kurzschrift-Eigenschaft kann auf ein Container-Element angewendet werden als Kombination der Werte `<animation-range-start>` und `<animation-range-end>`. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert.

Wie die Kommentare im obigen Syntaxblock zeigen, gibt es einige mögliche Interpretationen, wenn nur ein einzelner Wert angegeben ist:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, wird `<animation-range-start>` diesen Wert annehmen, und `<animation-range-end>` wird `normal` sein.
- Wenn der Wert ein benannter Zeitleistenbereich ohne einen nachfolgenden `<length-percentage>` ist, wird der Bereich zwischen diesem benannten Zeitleistenbereich bei 0% und 100% liegen.
- Wenn der Wert ein benannter Zeitleistenbereich mit einem nachfolgenden `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitleistenbereich und Prozentsatz und endet bei diesem benannten Zeitleistenbereich und 100%.

### Werte

Ein oder zwei Werte, die die [`animation-range-start`](/de/docs/Web/CSS/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/animation-range-end) darstellen. Diese Werte können eines der folgenden sein:

- `normal`
  - : Repräsentiert den Anfang der Zeitleiste im Fall von `animation-range-start` und das Ende der Zeitleiste im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Wert in Längeneinheiten oder Prozent, gemessen vom Anfang der Zeitleiste.
- `<timeline-range-name>`

  - : Ein spezifischer benannter Zeitleistenbereich innerhalb der gesamten Zeitleiste. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Ansichtsvortschritt-Zeitleiste_ (siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details), von dem Punkt, an dem das Subjektelement beginnt, den sichtbaren Bereich der Scrollansicht zu betreten (0% Fortschritt), bis zu dem Punkt, an dem es ihn vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Ansichtsvortschritt-Zeitleiste_, in dem das Subjektelement vollständig enthalten ist oder den Sichtbereich der Scrollansicht vollständig enthält.
        - Ist das Subjektelement kleiner als der Scrollbereich, reicht es vom Punkt, an dem das Subjektelement erstmals vollständig im Scrollbereich enthalten ist (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig enthalten ist (100% Fortschritt).
        - Ist das Subjektelement größer als der Scrollbereich, reicht es vom Punkt, an dem das Subjektelement erstmals den Scrollbereich vollständig bedeckt (0% Fortschritt), bis zu dem Punkt, an dem es den Scrollbereich nicht mehr vollständig bedeckt (100% Fortschritt).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Ansichtsvortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, den Scrollbereich zu betreten (0% Fortschritt), bis zum Punkt, an dem es den Scrollbereich vollständig betreten hat (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Ansichtsvortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, den Scrollbereich zu verlassen (0% Fortschritt), bis zum Punkt, an dem es den Scrollbereich vollständig verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansichtsvortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, die Anfangskante des Scrollbereichs zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Anfangskante vollständig überquert hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansichtsvortschritt-Zeitleiste_ vom Punkt, an dem das Subjektelement beginnt, die Endkante des Scrollbereichs zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Endkante vollständig überquert hat (100%).

    Im Fall von `<timeline-range-name>`-Werten, die kein `<length-percentage>` beinhalten, ist der Prozentsatz standardmäßig `0%`, wenn es sich um einen `animation-range-start`-Wert handelt, und `100%`, wenn es sich um einen `animation-range-end`-Wert handelt.

    > [!NOTE]
    > Es ist relativ schwer, sich vorzustellen, was diese Werte bedeuten, nur basierend auf den obigen Beschreibungen. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in einem leicht verständlichen visuellen Format bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder der Entfernung durch den spezifizierten benannten Zeitleistenbereich entspricht, gemessen vom Anfang dieses Zeitleistenbereichs.

> [!NOTE]
> Der Scrollbereich (siehe [Scrollcontainer](/de/docs/Glossary/Scroll_container) für mehr Details) wird als der sichtbare Bereich des Ansichtsvortschritts bezeichnet, in dem das Subjektelement einer _benannten Ansichtsvortschritt-Zeitleiste_ als sichtbar angesehen wird. Standardmäßig entspricht dies dem vollständigen Bereich des Scrollbereichs, er kann jedoch mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine einfache visuelle Erklärung an, was alle Wertetypen bedeuten.

### Erstellen einer benannten Ansichtsvortschritt-Zeitleiste mit Bereich

Eine Ansichtsvortschritt-Zeitleiste namens `--subjectReveal` wird mit der Eigenschaft `view-timeline` auf einem Subjektelement mit der `class` `animation` definiert.
Dies wird dann als die Zeitleiste für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es sich beim Scrollen nach oben durch das Dokument bewegt.

Eine `animation-range`-Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen und früher enden zu lassen.

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch die Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Ansichtsvortschritt-Zeitleiste zu definieren. Es erhält auch einen `animation-timeline`-Namen mit demselben Wert, um zu erklären, dass dies das Element sein wird, das animiert wird, während die Ansichtsvortschritt-Zeitleiste fortschreitet. Wir geben ihm auch eine `animation-range`-Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Deckkraft und Skalierung animiert, sodass es verblasst und vergrößert wird, während es sich im Scrollbereich nach oben bewegt.

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
