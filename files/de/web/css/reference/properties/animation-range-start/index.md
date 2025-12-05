---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`animation-range-start`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Startbereich einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnen wird.

Die Eigenschaften `animation-range-start` und {{cssxref("animation-range-end")}} können auch über die Kurzform {{cssxref("animation-range")}} gesetzt werden.

> [!NOTE]
> `animation-range-start` ist in der {{cssxref("animation")}}-Kurzschreibweise als reiner Reset-Wert enthalten. Das bedeutet, dass bei Einbeziehung von `animation` ein zuvor deklarierter `animation-range-start`-Wert auf `normal` zurückgesetzt wird, aber ein spezifischer Wert nicht über `animation` festgelegt werden kann. Beim Erstellen von [Scroll-gesteuerten CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) müssen Sie `animation-range-start` nach der Deklaration einer `animation`-Kurzschreibweise angeben, damit es wirksam wird.

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

Erlaubte Werte für `animation-range-start` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>` oder ein `<timeline-range-name>` mit einem danach folgenden `<length-percentage>`. Siehe {{cssxref("animation-range")}} für eine detaillierte Beschreibung der verfügbaren Werte.

Sehen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschrittszeitleiste mit Startbereich

Eine Fortschrittszeitleiste namens `--subject-reveal` wird mit der `view-timeline`-Eigenschaft auf einem Element mit der `class` von `animation` definiert. Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Element animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

Eine `animation-range-start`-Deklaration wird ebenfalls festgelegt, um die Animation später als erwartet beginnen zu lassen.

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

Das `subject`-Element und sein umgebendes `content`-Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schrifteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittszeitleiste zu definieren. Es wird auch ein `animation-timeline`-Name mit demselben Wert angegeben, um zu erklären, dass dieses Element als die Fortschrittszeitleiste animiert wird. Wir geben ihm auch eine `animation-range-start`-Deklaration, um die Animation später als erwartet beginnen zu lassen.

Schließlich wird eine Animation für das Element spezifiziert, die ihre Opazität und Skalierung animiert und es beim Aufwärtsbewegen im Scroller ausblendet und vergrößert.

```css
.animation {
  view-timeline: --subject-reveal block;
  animation-timeline: --subject-reveal;

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
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, dass das Element animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline with range start", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}, {{cssxref("animation-range-end")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-inset")}}
- Das JavaScript-Äquivalent: Die `rangeStart`-Eigenschaft verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate)-Aufrufen
- [Scroll-gesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
