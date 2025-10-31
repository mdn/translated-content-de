---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-range-end`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation enden wird.

Die Eigenschaften `animation-range-end` und {{cssxref("animation-range-start")}} können auch mit der [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range) Kurzform festgelegt werden.

> [!NOTE]
> `animation-range-end` ist als reiner Zurücksetzungswert in der Kurzform {{cssxref("animation")}} enthalten. Das bedeutet, dass die Aufnahme von `animation` einen zuvor deklarierten `animation-range-end` Wert auf `normal` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` gesetzt werden. Beim Erstellen von [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-range-end` nach der Deklaration einer `animation` Kurzform erklären, damit es wirksam wird.

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

Erlaubte Werte für `animation-range-end` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem darauf folgenden `<length-percentage>`. Siehe [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte.

Sehen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem einfach zu verstehenden visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Timeline für den Fortschritt der Ansicht mit Bereichsende

Eine Timeline für den Fortschritt der Ansicht namens `--subject-reveal` wird unter Verwendung der Eigenschaft `view-timeline` auf einem Subjekt-Element mit der `class` `animation` definiert. Diese wird dann als die Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjekt-Element animiert wird, während es durch das Dokument nach oben bewegt wird, während es gescrollt wird.

Eine Deklaration von `animation-range-end` wird ebenfalls festgelegt, um die Animation früher als erwartet enden zu lassen.

#### HTML

Das HTML für das Beispiel wird unten dargestellt.

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

Das `subject` Element und sein enthaltendes `content` Element sind minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält ebenfalls eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Timeline für den Fortschritt der Ansicht zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu deklarieren, dass dies das Element sein wird, das animiert wird, während die Timeline für den Fortschritt der Ansicht voranschreitet. Wir geben ihm auch eine `animation-range-end` Deklaration, um die Animation früher als erwartet enden zu lassen.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Opazität und Skalierung animiert, was dazu führt, dass es einblendet und größer wird, während es sich nach oben bewegt.

```css
.animation {
  view-timeline: --subject-reveal block;
  animation-timeline: --subject-reveal;

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

Scrollen Sie, um das animierte Subjekt-Element zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with range end", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range), [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/Reference/Properties/view-timeline-inset)
- Das JavaScript-Äquivalent: Die `rangeEnd` Eigenschaft, verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
