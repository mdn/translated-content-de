---
title: animation-range-end
slug: Web/CSS/animation-range-end
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`animation-range-end`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d.h. an welchem Punkt der Zeitachse eine Animation enden wird.

Die Eigenschaften `animation-range-end` und {{cssxref("animation-range-start")}} können auch mit der Kurzschreibweise [`animation-range`](/de/docs/Web/CSS/animation-range) festgelegt werden.

> **Note:** `animation-range-end` ist in der {{cssxref("animation")}} Kurzschreibweise nur als Reset-Wert enthalten. Das bedeutet, dass das Einfügen von `animation` einen zuvor deklarierten `animation-range-end` Wert auf `normal` zurücksetzt, aber ein spezifischer Wert nicht über `animation` festgelegt werden kann. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-range-end` nach der Deklaration einer `animation`-Kurzschreibweise deklarieren, damit es wirksam wird.

## Syntax

```css
/* Keyword or length percentage value */
animation-range-end: normal;
animation-range-end: 80%;
animation-range-end: 700px;

/* Named timeline range value */
animation-range-end: cover;
animation-range-end: contain;
animation-range-end: cover 80%;
animation-range-end: contain 700px;
```

### Werte

Zulässige Werte für `animation-range-end` sind `normal`, eine {{cssxref("length-percentage")}}, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Siehe [`animation-range`](/de/docs/Web/CSS/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte.

Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die unterschiedlichen Werte in einem einfachen visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Sichtfortschritt-Zeitachse mit Bereichsende

Eine Sichtfortschritt-Zeitachse namens `--subjectReveal` wird mit der `view-timeline` Eigenschaft auf einem Subjekt-Element mit der `class` von `animation` definiert. Diese wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es sich nach oben durch das Dokument bewegt, wenn es gescrollt wird.

Eine `animation-range-end` Deklaration wird ebenfalls festgelegt, um die Animation früher als erwartet zu beenden.

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch die Klasse `animation` zugewiesen – hier wird `view-timeline` festgelegt, um eine benannte Sichtfortschritt-Zeitachse zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu erklären, dass dies das Element ist, das animiert wird, während die Sichtfortschritt-Zeitachse voranschreitet. Wir geben ihm auch eine `animation-range-end` Deklaration, um die Animation früher als erwartet zu beenden.

Zuletzt wird auf dem Element eine Animation spezifiziert, die ihre Deckkraft und Skalierung animiert, wodurch es einblendet und größer wird, wenn es den Scroller nach oben bewegt.

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

Scrollen Sie, um zu sehen, wie das Subjekt-Element animiert wird.

{{EmbedLiveSample("Erstellen einer benannten Sichtfortschritt-Zeitachse mit Bereichsende", "100%", "480px")}}

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
- Das JavaScript-Äquivalent: Die `rangeEnd` Eigenschaft, verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
