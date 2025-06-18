---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollport darstellen (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für mehr Details), in dem das Zielelement einer _benannten Fortschrittstimeline_ Animation als sichtbar erachtet wird. Anders ausgedrückt, erlaubt dies das Festlegen von Anfangs- und/oder Endwerten (Inset oder Outset), die die Position der Timeline verschieben.

Dies kann mit oder anstelle von {{cssxref("animation-range")}} und dessen Langform-Eigenschaften kombiniert werden, die verwendet werden können, um den Anheftungsbereich einer Animation entlang ihrer Timeline festzulegen. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details.

> [!NOTE]
> Wenn das Scroller-Element nicht über seinen Container in der Achsendimension hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Fortschrittstimeline erstellt.

Die Eigenschaften `view-timeline-inset`, {{cssxref("view-timeline-axis")}}, und {{cssxref("view-timeline-name")}} können ebenfalls mit der Kurzform-Eigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Wenn gesetzt, wird das entsprechende {{cssxref("scroll-padding")}} (oder der entsprechende Langform-Wert) für diese Kante des Scrollport verwendet. Wenn dies nicht gesetzt ist (oder auf `auto` gesetzt ist), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken verwenden können, um einen anderen Standardwert zu bestimmen, wenn es angemessen ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Inset/Outset-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endpunkts der Animation innerhalb des Scrollport um die angegebene Länge oder den Prozentsatz verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endpunkts der Animation außerhalb des Scrollport um die angegebene Länge oder den Prozentsatz verschoben, d.h. sie beginnt zu animieren, bevor sie im Scrollport erscheint, oder endet, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben sind, repräsentiert der erste Wert das Start-Inset/-Outset in der relevanten Achse (wo die Animation beginnt) und der zweite Wert das End-Inset/-Outset (wo die Animation endet). Wenn nur ein Wert angegeben ist, werden sowohl Start- als auch End-Inset/-Outset auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschrittstimeline mit Inset

Eine benannte Fortschrittstimeline `--subjectReveal` wird mithilfe der `view-timeline` Eigenschaft auf einem Zielelement mit einer `class` von `animation` definiert. Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Zielelement animiert, während es durch das Dokument nach oben verschoben wird, während es gescrollt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

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

Das `subject`-Element und sein enthaltenes `content`-Element sind minimal gestaltet, und dem Textinhalt werden einige grundlegende Zeicheneinstellungen gegeben:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` zugeordnet — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittstimeline zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, um die Animation später als erwartet beginnen zu lassen und früher zu beenden. Es wird ebenfalls ein `animation-timeline`-Name mit demselben Wert angegeben, um zu erklären, dass dies das Element sein wird, das animiert wird, wenn die Fortschrittstimeline fortschreitet.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Opazität und Skalierung animiert, was dazu führt, dass es verblasst und größer wird, wenn es den Scroller nach oben bewegt.

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
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
