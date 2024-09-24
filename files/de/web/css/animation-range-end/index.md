---
title: animation-range-end
slug: Web/CSS/animation-range-end
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range-end`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d.h. wo entlang der Zeitachse eine Animation endet.

Die Eigenschaften `animation-range-end` und {{cssxref("animation-range-start")}} können auch mit der Kurzschreibweise [`animation-range`](/de/docs/Web/CSS/animation-range) gesetzt werden.

> **Hinweis:** `animation-range-end` ist in der {{cssxref("animation")}} Kurzschreibweise als Reset-Wert enthalten. Dies bedeutet, dass die Einbeziehung von `animation` einen zuvor deklarierten `animation-range-end` Wert auf `normal` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` gesetzt werden. Bei der Erstellung von [CSS scrollgesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) muss `animation-range-end` nach der Deklaration einer `animation` Kurzschreibweise deklariert werden, damit es wirksam wird.

## Syntax

```css
/* Schlüsselwort oder Längen-Prozentwert */
animation-range-end: normal;
animation-range-end: 80%;
animation-range-end: 700px;

/* Benannter Bereichswert der Zeitachse */
animation-range-end: cover;
animation-range-end: contain;
animation-range-end: cover 80%;
animation-range-end: contain 700px;
```

### Werte

Erlaubte Werte für `animation-range-end` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem darauf folgenden `<length-percentage>`. Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte.

Sehen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschrittszeitachse mit Bereichsende

Eine Fortschrittszeitachse namens `--subjectReveal` wird mit der Eigenschaft `view-timeline` auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

Eine `animation-range-end` Deklaration wird ebenfalls gesetzt, um die Animation früher als erwartet enden zu lassen.

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

Das `subject` Element und sein enthaltendes `content` Element sind minimal gestaltet, und dem Textinhalt werden einige grundlegende Schriftarteinstellungen gegeben:

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

Die `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittszeitachse zu definieren. Es erhält ebenfalls einen `animation-timeline` Namen mit demselben Wert, um zu erklären, dass dieses Element animiert wird, während die Fortschrittszeitachse fortschreitet. Wir geben ihm auch eine `animation-range-end` Deklaration, um die Animation früher als erwartet enden zu lassen.

Zuletzt wird eine Animation auf das Element spezifiziert, das dessen Deckkraft und Maßstab animiert, wodurch es einblendet und an Größe zunimmt, während es an der Ansicht entlang nach oben bewegt wird.

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-range-end: contain 50%;
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

Scrollen Sie, um das Subjektelement animiert zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with range end", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`animation-range`](/de/docs/Web/CSS/animation-range), [`animation-range-start`](/de/docs/Web/CSS/animation-range-start)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/view-timeline-inset)
- Das JavaScript-Äquivalent: Die `rangeEnd` Eigenschaft verfügbar in {{domxref("Element.animate()")}} Aufrufen
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
