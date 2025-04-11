---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um ein oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details) darstellen, in dem das Zielelement einer _benannten View-Progress-Timeline_ Animation als sichtbar gilt. Anders ausgedrückt, erlaubt dies Ihnen, Start- und/oder End-Inset (oder Outset) Werte zu spezifizieren, die die Position der Timeline versetzen.

Dies kann in Kombination mit oder anstelle von {{cssxref("animation-range")}} und dessen Langform-Eigenschaften verwendet werden, um den Anwendungsbereich einer Animation entlang ihrer Timeline festzulegen. Siehe [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für mehr Details.

> [!NOTE]
> Wenn das Scroller-Element in der Achsrichtung nicht über seinen Container hinausläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Progres-Timeline erstellt.

Die Eigenschaften `view-timeline-inset`, {{cssxref("view-timeline-axis")}}, und {{cssxref("view-timeline-name")}} können auch mit der Kurzform {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Wenn gesetzt, wird das entsprechende {{cssxref("scroll-padding")}} (oder der äquivalente Langform-Wert) für diese Kante des Scrollports verwendet. Wenn dies nicht gesetzt ist (oder auf `auto` gesetzt), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken verwenden können, um einen anderen Standardwert zu bestimmen, falls angemessen.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Inset-/Outset-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endpunktes der Animation um die angegebene Länge oder Prozentsatz nach innen im Scrollport verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endpunktes der Animation um die angegebene Länge oder Prozentsatz nach außen im Scrollport verschoben, d.h. sie beginnt zu animieren, bevor sie im Scrollport erscheint, oder endet die Animation, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert das Start-Inset/-Outset in der relevanten Achse (wo die Animation beginnt), und der zweite Wert repräsentiert das End-Inset/-Outset (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden das Start- und End-Inset/-Outset auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline mit Inset

Eine View-Progress-Timeline mit dem Namen `--subjectReveal` wird mit der Eigenschaft `view-timeline` auf einem Zielelement mit einer `class` von `animation` definiert.
Dies wird dann als die Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Zielelement animiert wird, während es sich aufwärts durch das Dokument bewegt, während es gescrollt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

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

Das `subject` Element und das enthaltene `content` Element sind minimal gestylt, und der Textinhalt hat einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse von `animation` — hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Wir geben ihm ebenfalls eine `view-timeline-inset` Deklaration, damit die Animation später als erwartet beginnt und früher endet. Es wird auch ein `animation-timeline` Name mit demselben Wert vergeben, um zu deklarieren, dass dieses Element animiert wird, während die View-Progress-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es einblendet und größer wird, wenn es den Scroller hochbewegt.

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

{{EmbedLiveSample("Erstellen einer benannten View-Progress-Timeline mit Inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
