---
title: animation-range-start
slug: Web/CSS/animation-range-start
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range-start`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Startbereich der Anbindung einer Animation entlang ihrer Timeline festzulegen, d.h. an welcher Stelle der Timeline eine Animation gestartet wird.

Die Eigenschaften `animation-range-start` und {{cssxref("animation-range-end")}} können auch mithilfe der [`animation-range`](/de/docs/Web/CSS/animation-range) Kurzschreibweise gesetzt werden.

> **Note:** `animation-range-start` ist in der {{cssxref("animation")}} Kurzschreibweise als ein Wert nur zum Zurücksetzen enthalten. Das bedeutet, dass das Einfügen von `animation` einen zuvor erklärten `animation-range-start` Wert auf `normal` zurücksetzt, aber ein spezifischer Wert nicht über `animation` gesetzt werden kann. Wenn Sie [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) erstellen, müssen Sie `animation-range-start` nach der Deklaration einer `animation` Kurzschreibweise erklären, damit es wirksam wird.

## Syntax

```css
/* Keyword or length percentage value */
animation-range-start: normal;
animation-range-start: 20%;
animation-range-start: 100px;

/* Named timeline range value */
animation-range-start: cover;
animation-range-start: contain;
animation-range-start: cover 20%;
animation-range-start: contain 100px;
```

### Werte

Erlaubte Werte für `animation-range-start` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem folgenden `<length-percentage>`. Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte.

Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem leicht nachvollziehbaren visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Ansichtsfortschritts-Timeline mit Range-Start

Eine Ansichtsfortschritts-Timeline namens `--subjectReveal` wird mit der Eigenschaft `view-timeline` auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es nach oben durch das Dokument scrollt.

Eine `animation-range-start` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet zu starten.

#### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

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

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` bekommt ebenfalls eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Ansichtsfortschritts-Timeline zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu deklarieren, dass dies das Element ist, das animiert wird, wenn die Ansichtsfortschritts-Timeline fortschreitet. Wir geben ihm auch eine `animation-range-start` Deklaration, um die Animation später als erwartet zu starten.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Opazität und Skalierung animiert, wobei es beim Aufwärtsbewegen im Scrollbarer verblasst und größer wird.

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-range-start: entry 25%;
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

{{EmbedLiveSample("Erstellen einer benannten Ansichtsfortschritts-Timeline mit Range-Start", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`animation-range`](/de/docs/Web/CSS/animation-range), [`animation-range-end`](/de/docs/Web/CSS/animation-range-end)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/view-timeline-inset)
- Das JavaScript-Äquivalent: Die `rangeStart` Eigenschaft verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
