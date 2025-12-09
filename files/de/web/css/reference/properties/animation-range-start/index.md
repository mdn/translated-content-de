---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

Die **`animation-range-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Punkt auf der Zeitleiste fest, an dem eine Animation beginnen soll.

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

/* Global values */
animation-range-start: inherit;
animation-range-start: initial;
animation-range-start: revert;
animation-range-start: revert-layer;
animation-range-start: unset;
```

### Werte

- `normal`
  - : Repräsentiert den Beginn der Zeitleiste. Dies ist der Standardwert.
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, gemessen vom Beginn der Zeitleiste.
- [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)
  - : Gibt einen benannten Zeitleistenbereich innerhalb der gesamten Zeitleiste an. Der Bereich beginnt bei `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, gemessen vom Beginn des angegebenen benannten Zeitleistenbereichs.

## Beschreibung

Erlaubte Werte für die `animation-range-start`-Eigenschaft sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>` oder ein `<timeline-range-name>` gefolgt von einem `<length-percentage>`. Wenn der [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)-Wert keinen `<length-percentage>` enthält, beträgt der Standardprozentsatz `0%`.
Siehe [`animation-range`](/de/docs/Web/CSS/Reference/Properties/animation-range) für eine detaillierte Beschreibung der verfügbaren Werte.
Sehen Sie sich auch den [View progress timeline visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an, der zeigt, was die verschiedenen Werte in einem leicht verständlichen visuellen Format bedeuten.

Der `animation-range-start` ist im {{cssxref("animation")}}-Shorthand als "reset-only" Wert enthalten. Das bedeutet, dass bei Verwendung des `animation`-Shorthands jeder zuvor deklarierte `animation-range-start`-Wert von gleicher oder niedrigerer Spezifität auf `normal` zurückgesetzt wird; das Shorthand kann nicht verwendet werden, um einen neuen `animation-range-start`-Wert zu setzen. Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sollten Sie `animation-range-start` _nach_ der Deklaration eines `animation`-Shorthands deklarieren, um zu vermeiden, dass der Wert auf `normal` zurückgesetzt wird.

Der `animation-range-start`, zusammen mit der {{cssxref("animation-range-end")}}-Eigenschaft, kann auch unter Verwendung des {{cssxref("animation-range")}}-Shorthands gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer Scroll-View-Fortschrittszeitleiste mit Startbereich

In diesem Beispiel wird `animation-range-start` auf ein Element angewandt, das über eine Scroll-Fortschrittszeitleiste animiert wird. Dies bewirkt, dass die Animation bereits viel früher startet, bevor das Element den Scrollport erreicht.

#### HTML

```html hidden
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
</div>
```

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das wir animieren werden. Wir haben viel Text hinzugefügt, um sicherzustellen, dass der Inhalt seinen Container überläuft; der zusätzliche Text wird hier der Übersicht halber ausgeblendet.

```html
<div class="animatedElement"></div>
```

```html hidden
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

Eine Scroll-Fortschrittszeitleiste wird definiert, indem eine [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft verwendet wird. Dies wird **nach** dem {{cssxref("animation")}}-Shorthand deklariert, um zu vermeiden, dass der Langform-Eigenschaftswert zurückgesetzt wird.

Wir haben auch `animation-range-start` gesetzt, um die Animation früher als erwartet beginnen zu lassen.

```css
.animatedElement {
  background-color: deeppink;

  animation: appear 1ms linear;

  animation-timeline: scroll();
  animation-range-start: -25%;
}

@keyframes appear {
  from {
    background-color: rebeccapurple;
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    background-color: darkturquoise;
    opacity: 0.75;
    transform: scaleX(0.75);
  }
}
```

Andere in diesem Beispiel angewandte Stile wurden hier der Übersicht halber ausgeblendet.

```css hidden
.animatedElement {
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

@supports not (animation-range-start: normal) {
  body::before {
    content: "Your browser does not support the 'animation-range-start' property.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

Scrollen Sie, um die Animation des Elements zu sehen. Beachten Sie, wie das Element bereits skaliert und halbtransparent ist, wenn es den Viewport betritt. Das liegt daran, dass das Element bereits lange vor dem Eintritt in den Viewport zu animieren begann.

{{EmbedLiveSample("Creating a named view progress timeline with range start", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("view-timeline-inset")}}
- [`Element.animate()`](/de/docs/Web/API/Element/animate) `rangeStart` property
- [Scrollgesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View progress timeline: Ranges and animation progress visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
