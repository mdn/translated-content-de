---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`animation-range-end`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitlinie festzulegen, d.h. wo entlang der Zeitlinie eine Animation endet.

Die Eigenschaften `animation-range-end` und {{cssxref("animation-range-start")}} können auch mit der Kurzformeigenschaft {{cssxref("animation-range")}} festgelegt werden.

> [!NOTE]
> `animation-range-end` ist in der {{cssxref("animation")}} Kurzform als ein reiner Rücksetz-Wert enthalten. Das bedeutet, dass das Einschließen von `animation` einen zuvor deklarierten `animation-range-end` Wert auf `normal` zurücksetzt, aber ein spezifischer Wert kann nicht über `animation` gesetzt werden. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) müssen Sie `animation-range-end` nach der Deklaration einer `animation` Kurzform deklarieren, damit es wirksam wird.

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

Erlaubte Werte für `animation-range-end` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>`, oder ein `<timeline-range-name>` mit einem darauf folgenden `<length-percentage>`. Siehe {{cssxref("animation-range")}} für eine detaillierte Beschreibung der verfügbaren Werte.

Schauen Sie sich auch den [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der genau zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline mit Range-Ende

Eine View-Progress-Timeline namens `--subject-reveal` wird unter Verwendung der Eigenschaft `view-timeline` auf einem Subjektelement mit einer `class` von `animation` definiert. Dies wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

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

Das `subject` Element und sein enthaltenes `content` Element sind minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse von `animation` zugewiesen – hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu erklären, dass dies das animierte Element ist, während die View-Progress-Timeline fortschreitet. Wir geben ihm auch eine `animation-range-end` Deklaration, um die Animation früher als erwartet zu beenden.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Skalierung animiert, wodurch es beim Bewegen nach oben im Scroller einblendet und vergrößert.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline with range end", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}, {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-axis")}}, {{cssxref("scroll-timeline-name")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-inset")}}
- Das JavaScript-Äquivalent: Die `rangeEnd` Eigenschaft verfügbar in [`Element.animate()`](/de/docs/Web/API/Element/animate) Aufrufen
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
