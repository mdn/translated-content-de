---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports darstellen (siehe [Scroll-Container](/de/docs/Glossary/Scroll_container) für weitere Details), in dem das Zielelement einer _benannten View Progress Timeline_ Animation als sichtbar erachtet wird. Anders ausgedrückt, ermöglicht dies das Festlegen von Start- und/oder Endwerten, die die Position der Timeline versetzen.

Dies kann in Kombination mit oder anstelle von {{cssxref("animation-range")}} und seinen Langform-Eigenschaften verwendet werden, die den Anwendungsbereich einer Animation entlang ihrer Timeline festlegen können.
Siehe [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details.

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

Erlaubte Werte für `view-timeline-inset` sind:

- `auto`
  - : Wenn festgelegt, wird das entsprechende {{cssxref("scroll-padding")}} (oder ein gleichwertiger Langformwert) für diesen Rand des Scrollports verwendet. Wenn dies nicht festgelegt ist (oder auf `auto` gesetzt ist), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken verwenden können, um einen anderen Standardwert zu bestimmen, falls dies angemessen ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Ein-/Aussetzungswert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endes der Animation um die angegebene Länge oder Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endes der Animation um die angegebene Länge oder Prozentsatz außerhalb des Scrollports verschoben, d.h. sie beginnt, bevor sie im Scrollport erscheint, zu animieren, oder endet nach dem Verlassen des Scrollports.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert die Start-Ein-/Aussetzung in der relevanten Achse (wo die Animation beginnt) und der zweite Wert die End-Ein-/Aussetzung (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden die Start- und End-Ein-/Aussetzungen beide auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View Progress Timeline mit Inset

Eine View Progress Timeline namens `--subjectReveal` wird unter Verwendung der `view-timeline` Eigenschaft an einem Zielelement mit einer `class` von `animation` definiert.
Dies wird dann als Timeline für dasselbe Element unter Verwendung von `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Zielelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls festgelegt, damit die Animation später als erwartet beginnt und früher endet.

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

Das `subject` Element und sein umschließendes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte View Progress Timeline zu definieren. Wir geben ihr auch eine `view-timeline-inset` Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um anzugeben, dass dieses Element als die View Progress Timeline animiert wird.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Skala animiert, wodurch es verblasst und größer wird, während es den Scroller hinauf bewegt.

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

Scrollen Sie, um zu sehen, wie das Zielelement animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
