---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports darstellen (siehe {{glossary("Scroll container")}} für weitere Details), in dem das Subjektelement einer _benannten Ansicht-Fortschritts-Timeline_-Animation als sichtbar gilt. Anders ausgedrückt, ermöglicht dies Ihnen, Start- und/oder Endeinrückungswerte (oder Ausrückungswerte) anzugeben, die die Position der Timeline versetzen.

Dies kann in Kombination mit oder anstelle von {{cssxref("animation-range")}} und seinen Langformen verwendet werden, die zum Festlegen des Anwendungsbereichs einer Animation entlang ihrer Timeline verwendet werden können.
Weitere Informationen finden Sie unter [Scrollbasierte Animationen in CSS](/de/docs/Web/CSS/CSS_scroll-driven_animations).

## Syntax

```css
/* Einzelwert */
view-timeline-inset: auto;
view-timeline-inset: 200px;
view-timeline-inset: 20%;

/* Zwei Werte */
view-timeline-inset: 20% auto;
view-timeline-inset: auto 200px;
view-timeline-inset: 20% 200px;
```

### Werte

Erlaubte Werte für `view-timeline-inset` sind:

- `auto`
  - : Wenn eingestellt, wird der entsprechende {{cssxref("scroll-padding")}} (oder der gleichwertige Langformwert) für diese Kante des Scrollports verwendet. Wenn dies nicht eingestellt ist (oder auf `auto` gesetzt ist), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten möglicherweise Heuristiken verwenden, um einen anderen Standardwert zu bestimmen, wenn dies angemessen ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Einrückungs-/Ausstoßwert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Anfangs/Endes der Animation innerhalb des Scrollports um die angegebene Länge oder Prozentzahl verschoben.
    - Wenn der Wert negativ ist, wird die Position des Anfangs/Endes der Animation außerhalb des Scrollports um die angegebene Länge oder Prozentzahl verschoben, d.h., sie beginnt zu animieren, bevor sie im Scrollport erscheint, oder beendet die Animation, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben sind, repräsentiert der erste Wert die Start-Einrückung/Ausstoßung in der betreffenden Achse (wo die Animation beginnt) und der zweite Wert repräsentiert die End-Einrückung/Ausstoßung (wo die Animation endet). Wird nur ein Wert angegeben, werden Start- und End-Einrückung/Ausstoßung auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Ansicht-Fortschritts-Timeline mit Einrückung

Eine Ansicht-Fortschritts-Timeline mit dem Namen `--subjectReveal` wird unter Verwendung der `view-timeline` Eigenschaft auf einem Subjektelement mit der Klasse `animation` definiert.
Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es durch das Dokument nach oben bewegt wird, wenn es gescrollt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls festgelegt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <h1>Inhalt</h1>

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestaltet, und dem Textinhalt werden einige grundlegende Schriftart-Einstellungen gegeben:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` zugewiesen — hier wird `view-timeline` gesetzt, um eine benannte Ansicht-Fortschritts-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, um die Animation später als erwartet beginnen und früher beenden zu lassen. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das Element ist, das animiert wird, während die Ansicht-Fortschritts-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die ihre Deckkraft und Skalierung animiert, wodurch es beim Hochbewegen im Scroller verblasst und größer wird.

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

Scrollen Sie, um das animierte Subjektelement zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [Scrollbasierte Animationen in CSS](/de/docs/Web/CSS/CSS_scroll-driven_animations)
