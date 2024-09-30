---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports darstellen (siehe [Scroll-Container](/de/docs/Glossary/Scroll_container) für weitere Details), in welchem das Subjektelement einer _benannten View-Progress-Timeline_-Animation als sichtbar angesehen wird. Anders ausgedrückt, können Sie hier Start- und/oder Endwerte für Ein- oder Ausrücken (inset/outset) angeben, die die Position der Timeline verschieben.

Dies kann mit oder anstelle von {{cssxref("animation-range")}} und dessen Langform-Eigenschaften kombiniert werden, die verwendet werden können, um den Befestigungsbereich einer Animation entlang ihrer Timeline festzulegen. Weitere Einzelheiten finden Sie unter [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Syntax

```css
/* Single value */
view-timeline-inset: auto;
view-timeline-inset: 200px;
view-timeline-inset: 20%;

/* Two values */
view-timeline-inset: 20% auto;
view-timeline-inset: auto 200px;
view-timeline-inset: 20% 200px;
```

### Werte

Zulässige Werte für `view-timeline-inset` sind:

- `auto`
  - : Wenn gesetzt, wird der entsprechende {{cssxref("scroll-padding")}} (oder ein gleichwertiger Langformwert) für diesen Rand des Scrollports verwendet. Wenn dies nicht gesetzt ist (oder auf `auto` gesetzt ist), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken anwenden können, um einen anderen Standardwert zu bestimmen, wenn dies angemessen ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>`-Wert wird als Ein- oder Ausrückwert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endpunkts der Animation um die angegebene Länge oder Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endpunkts der Animation um die angegebene Länge oder Prozentsatz außerhalb des Scrollports verschoben, d.h. die Animation beginnt, bevor sie im Scrollport sichtbar wird, oder endet, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert das Ein- oder Ausrücken am Start in der relevanten Achse (wo die Animation beginnt) und der zweite Wert das Ein- oder Ausrücken am Ende (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden sowohl Start- als auch End-Ein- oder Ausrückung auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline mit Inset

Eine View-Progress-Timeline mit dem Namen `--subjectReveal` wird mit der `view-timeline` Eigenschaft an einem Subjektelement mit einer `class` von `animation` definiert.
Dies wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es durch das Dokument nach oben bewegt wird, wenn es gescrollt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls gesetzt, um die Animation später beginnen zu lassen als erwartet und früher zu enden.

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

Das `subject`-Element und sein umgebendes `content`-Element werden minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` zugewiesen — hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, um die Animation später beginnen zu lassen und früher zu enden. Es erhält außerdem einen `animation-timeline`-Namen mit demselben Wert, um zu erklären, dass dies das Element ist, das animiert wird, während die View-Progress-Timeline fortschreitet.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Opazität und Skalierung animiert, wodurch es beim Hochscrollen ein- und größer wird.

```css
.animation {
  view-timeline: --subjectReveal block;
  view-timeline-inset: 70% -100px;
  animation-timeline: --subjectReveal;

  animation-name: appear;
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

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
