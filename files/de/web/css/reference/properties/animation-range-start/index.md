---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`animation-range-start`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Startbereich einer Animation entlang ihrer Zeitleiste festzulegen, d. h. an welchem Punkt der Zeitleiste eine Animation startet.

Die Eigenschaften `animation-range-start` und {{cssxref("animation-range-end")}} können auch mit der Kurzschreibweise [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range) festgelegt werden.

> [!NOTE]
> `animation-range-start` ist in der {{cssxref("animation")}} Kurzschreibweise als reiner Rücksetz-Wert enthalten. Dies bedeutet, dass die Verwendung von `animation` einen zuvor deklarierten `animation-range-start` Wert auf `normal` zurücksetzt, jedoch ein spezifischer Wert nicht über `animation` gesetzt werden kann. Beim Erstellen von [CSS Scroll-gesteuerten Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) müssen Sie `animation-range-start` nach der Deklaration einer `animation` Kurzschreibweise deklarieren, damit es wirksam wird.

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

Erlaubte Werte für `animation-range-start` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem nachfolgenden `<length-percentage>`. Siehe [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte.

Sehen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die unterschiedlichen Werte in einem leicht verständlichen visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Zeitleiste mit Startbereich

Eine View-Progress-Zeitleiste namens `--subject-reveal` wird mit der Eigenschaft `view-timeline` auf einem Zielobjekt mit einer `class` von `animation` definiert. Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Zielobjekt animiert wird, während es sich beim Scrollen nach oben durch das Dokument bewegt.

Eine `animation-range-start` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet starten zu lassen.

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

Das `subject` Element und sein enthaltendes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält ebenfalls eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Zeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um zu erklären, dass dies das Element sein wird, das animiert wird, während die View-Progress-Zeitleiste fortschreitet. Wir geben ihm auch eine `animation-range-start` Deklaration, um die Animation später als erwartet beginnen zu lassen.

Zuletzt wird eine Animation auf dem Element spezifiziert, das seine Deckkraft und Größe animiert, wodurch es einblendet und größer wird, während es im Scroller nach oben bewegt.

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

Scrollen Sie, um das animierte Zielobjekt zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with range start", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range), [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/de/docs/Web/CSS/Reference/Properties/view-timeline-inset)
- Das JavaScript-Äquivalent: Die `rangeStart` Eigenschaft verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
