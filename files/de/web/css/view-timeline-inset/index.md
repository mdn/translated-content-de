---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details) darstellen, in dem das Zielelement einer Animation mit _benanntem View-Progress-Timeline_ als sichtbar angesehen wird. Anders ausgedrückt, erlaubt dies Ihnen, Start- und/oder Endeinzugs- (oder Auszugs-) Werte anzugeben, die die Position der Timeline verschieben.

Dies kann kombiniert werden mit oder anstelle von {{cssxref("animation-range")}} und deren Langform-Eigenschaften, die verwendet werden können, um den Anhangsbereich einer Animation entlang ihrer Timeline festzulegen.
Siehe [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details.

> [!NOTE]
> Wenn das Scroll-Element seinen Container in der Achsendimension nicht überläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Progress-Timeline erstellt.

Die Eigenschaften `view-timeline-inset`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-name")}} können auch mit der Kurzform-Eigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Wenn festgelegt, wird das entsprechende {{cssxref("scroll-padding")}} (oder gleichwertiger Langform-Wert) für diese Kante des Scrollports verwendet. Wenn dies nicht festgelegt ist (oder auf `auto` gesetzt ist), wird der Wert in der Regel 0 sein, obwohl einige User Agents Heuristiken verwenden könnten, um einen anderen Standardwert zu bestimmen, falls angemessen.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Einzugs-/Auszugswert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Animationsbeginns/-endes um die angegebene Länge oder Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Animationsbeginns/-endes um die angegebene Länge oder Prozentsatz außerhalb des Scrollports verschoben, das heißt, sie beginnt zu animieren, bevor sie im Scrollport erscheint, oder endet zu animieren, nachdem sie den Scrollport verlässt.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert den Start-Einzugs-/Auszug in der entsprechenden Achse (wo die Animation beginnt) und der zweite Wert repräsentiert den End-Einzugs-/Auszug (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden beide, Start- und End-Einzug/Auszug auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline mit Einzug

Eine View-Progress-Timeline namens `--subjectReveal` wird durch die `view-timeline` Eigenschaft auf einem Zielelement mit einer `class` von `animation` definiert. Diese wird dann als die Timeline für das gleiche Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Zielelement animiert, während es durch das Dokument aufwärts scrollt.

Eine `view-timeline-inset` Deklaration wird ebenfalls gesetzt, damit die Animation später als erwartet beginnt und früher endet.

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

Das `subject` Element und sein umgebendes `content` Element werden minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` zugewiesen — hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, damit die Animation später beginnt als erwartet und früher endet. Es wird ebenfalls mit einem `animation-timeline` Namen mit demselben Wert versehen, um anzugeben, dass dies das Element ist, das animiert wird, wenn die View-Progress-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die die Opazität und Skalierung animiert, wodurch es ausfaded und vergrößert, während es im Scroller aufwärts bewegt.

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
    opacity: 1;
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

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
