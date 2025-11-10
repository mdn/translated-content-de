---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Bereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

- [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end)

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

Die `animation-range` Kurzschrift-Eigenschaft kann auf ein Containerelement als Kombination der Werte `<animation-range-start>` und `<animation-range-end>` angewendet werden. Wenn beide Werte angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` gefolgt von `<animation-range-end>` interpretiert.

Wie in den Kommentaren im obigen Syntax-Block gezeigt wird, gibt es bei Angabe eines einzigen Wertes mehrere Interpretationsmöglichkeiten:

- Wenn der Wert ein {{cssxref("length-percentage")}} oder `normal` ist, nimmt `<animation-range-start>` diesen Wert an und `<animation-range-end>` entspricht `normal`.
- Wenn der Wert ein benannter Zeitleistenbereich ohne ein folgendes `<length-percentage>` ist, erstreckt sich der Bereich zwischen diesem benannten Zeitleistenbereich bei 0% und 100%.
- Wenn der Wert ein benannter Zeitleistenbereich mit einem folgendem `<length-percentage>` ist, beginnt der Bereich bei diesem benannten Zeitleistenbereich und Prozentsatz und endet bei diesem benannten Zeitleistenbereich und 100%.

### Werte

Ein oder zwei Werte, die den [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start) und/oder [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end) darstellen. Diese Werte können eines der folgenden sein:

- `normal`
  - : Repräsentiert den Anfang der Zeitleiste im Fall von `animation-range-start` und das Ende der Zeitleiste im Fall von `animation-range-end`. Dies ist der Standardwert.
- `<length-percentage>`
  - : Ein Längen- oder Prozentwert, gemessen vom Anfang der Zeitleiste.
- `<timeline-range-name>`

  - : Ein spezifisch benannter Zeitleistenbereich innerhalb der gesamten Zeitleiste. Mögliche Werte sind:

    - `cover`
      - : Repräsentiert den gesamten Bereich einer _benannten Ansichtsfortschrittszeitleiste_ (siehe [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für mehr Details), vom Punkt, an dem das Subjektelement das Sichtbarkeitsbereich des Ansichtsfortschritts der Scrollport erstmals zu betreten beginnt (0% Fortschritt) bis zu dem Punkt, an dem es diesen vollständig verlassen hat (100% Fortschritt).
    - `contain`
      - : Repräsentiert den Bereich einer _benannten Ansichtsfortschrittszeitleiste_, in dem das Subjektelement vollständig von dem Sichtbarkeitsbereich des Scrollports enthalten ist oder diesen vollständig enthält.
        - Wenn das Subjektelement kleiner ist als der Scrollport, erstreckt es sich von dem Punkt, an dem das Subjektelement erstmals vollständig von dem Sichtbarkeitsbereich des Scrollports enthalten ist (0% Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig enthalten ist (100% Fortschritt).
        - Wenn das Subjektelement größer ist als der Scrollport, erstreckt es sich von dem Punkt, an dem das Subjektelement erstmals den gesamte Sichtbarkeitsbereich des Scrollports vollständig abdeckt (0% Fortschritt), bis zu dem Punkt, an dem es diesen nicht mehr vollständig abdeckt (100%).
    - `entry`
      - : Repräsentiert den Bereich einer _benannten Ansichtsfortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, den Scrollport zu betreten (0% Fortschritt), bis zu dem Punkt, an dem es vollständig eingetreten ist (100%).
    - `exit`
      - : Repräsentiert den Bereich einer _benannten Ansichtsfortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, den Scrollport zu verlassen (0% Fortschritt), bis zu dem Punkt, an dem es vollständig verlassen hat (100%).
    - `entry-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansichtsfortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, die Startkante des Scrollports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Startkante des Scrollports vollständig überquert hat (100%).
    - `exit-crossing`
      - : Repräsentiert den Bereich einer _benannten Ansichtsfortschrittszeitleiste_ vom Punkt, an dem das Subjektelement erstmals beginnt, die Endkante des Scrollports zu überqueren (0% Fortschritt), bis zu dem Punkt, an dem es die Endkante des Scrollports vollständig überquert hat (100%).

    Im Fall von `<timeline-range-name>` Werten, die kein `<length-percentage>` beinhalten, beträgt der Prozentsatz standardmäßig `0%`, wenn es sich um einen `animation-range-start` Wert handelt, und `100%`, wenn es sich um einen `animation-range-end` Wert handelt.

    > [!NOTE]
    > Es ist recht schwierig, sich vorzustellen, was diese Werte aus den obigen Beschreibungen bedeuten. Glücklicherweise zeigt der [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) genau, was sie in visueller Form bedeuten.

- `<timeline-range-name> <length-percentage>`
  - : Ein Kombinationswert, der dem angegebenen Prozentsatz oder der Entfernung durch den spezifisch benannten Zeitleistenbereich entspricht, gemessen vom Beginn dieses Zeitleistenbereichs.

> [!NOTE]
> Der Scrollport (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für mehr Details) Bereich, der als Ansichtsfortschritts-Sichtbarkeitsbereich bekannt ist, ist der Bereich, in dem das Subjektelement einer _benannten Ansichtsfortschrittszeitleisten_-Animation als sichtbar gilt. Standardmäßig ist dies der volle Bereich des Scrollports, kann jedoch mit der {{cssxref("view-timeline-inset")}} Eigenschaft angepasst werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### View Timeline Ranges Visualizer

Sehen Sie sich den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) für eine visuelle Erklärung an, was alle Wertetypen bedeuten.

### Erstellen einer benannten Ansichtsfortschrittszeitleiste mit Bereich

Eine Ansichtsfortschrittszeitleiste mit dem Namen `--subject-reveal` wird mit der `view-timeline` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Dies wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

Eine `animation-range` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen und früher enden zu lassen.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

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

Das `subject` Element und sein enthaltenes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Ansichtsfortschrittszeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit dem gleichen Wert gegeben, um zu erklären, dass dies das Element ist, das animiert wird, während die Ansichtsfortschrittszeitleiste fortschreitet. Wir geben ihm auch eine `animation-range` Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen.

Zuletzt wird eine Animation auf dem Element angegeben, die seine Opazität und Größe animiert, sodass es beim Bewegen im Scroller einblendet und größer wird.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline with range", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end), [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/Reference/Properties/view-timeline-inset)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
