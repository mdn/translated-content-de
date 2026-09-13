---
title: "`animation-range-start` CSS property"
short-title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-range-start`** legt den Punkt auf der Timeline fest, an dem eine Animation beginnen soll.

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

/* Multiple values */
animation-range-start:
  cover 20%,
  contain 100px;

/* Global values */
animation-range-start: inherit;
animation-range-start: initial;
animation-range-start: revert;
animation-range-start: revert-layer;
animation-range-start: unset;
```

### Werte

Diese Eigenschaft wird als kommagetrennte Liste von Werten angegeben. Jeder Wert kann einer der folgenden sein:

- `normal`
  - : Repräsentiert den Beginn der Timeline. Dies ist der Standardwert.
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn der Timeline gemessen wird.
- {{cssxref("timeline-range-name")}}
  - : Gibt einen benannten Timeline-Bereich innerhalb der gesamten Timeline an. Der Bereich beginnt bei `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn des angegebenen benannten Timeline-Bereichs gemessen wird.

## Beschreibung

Zulässige Werte für die Eigenschaft `animation-range-start` sind `normal`, ein {{cssxref("length-percentage")}}, ein `<timeline-range-name>` oder ein `<timeline-range-name>`, gefolgt von einem `<length-percentage>`. Wenn der Wert {{cssxref("timeline-range-name")}} kein `<length-percentage>` enthält, ist der Prozentwert standardmäßig `0%`.

Eine ausführliche Beschreibung der verfügbaren Werte finden Sie unter {{cssxref("animation-range")}}.

Bei der Angabe mehrerer kommagetrennter Werte werden diese auf die Animationen in der Reihenfolge angewendet, in der die Werte von {{cssxref("animation-name")}} erscheinen. Siehe [Festlegen mehrerer Werte für Animationseigenschaften](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

`animation-range-start` ist als reiner Zurücksetzungswert in der Kurzform {{cssxref("animation")}} enthalten. Das bedeutet, dass die Verwendung der Kurzform `animation` jeden zuvor deklarierten `animation-range-start`-Wert gleicher oder niedrigerer Spezifität auf `normal` zurücksetzt; die Kurzform kann nicht verwendet werden, um einen neuen `animation-range-start`-Wert festzulegen. Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sollten Sie `animation-range-start` _nach_ jeder Kurzformdeklaration von `animation` deklarieren, um zu vermeiden, dass der Wert auf `normal` zurückgesetzt wird.

`animation-range-start` kann zusammen mit der Eigenschaft {{cssxref("animation-range-end")}} auch über die Kurzform {{cssxref("animation-range")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer Scroll-Fortschritts-Timeline mit Bereichsstart

In diesem Beispiel wird `animation-range-start` auf ein Element angewendet, das über eine Scroll-Fortschritts-Timeline animiert wird. Dadurch beginnt die Animation deutlich bevor das Element in den Scrollport eintritt.

#### HTML

```html-nolint hidden
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
```

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das wir animieren werden. Wir haben viel Text hinzugefügt, um sicherzustellen, dass der Inhalt seinen Container überläuft; der zusätzliche Text wird hier der Kürze halber ausgeblendet.

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

Eine Scroll-Fortschritts-Timeline wird definiert, indem eine {{cssxref("animation-timeline/scroll", "scroll()")}}-Funktion als Wert der Eigenschaft {{cssxref("animation-timeline")}} festgelegt wird. Diese wird **nach** der Kurzform {{cssxref("animation")}} deklariert, um zu vermeiden, dass der Wert der Langformeigenschaft zurückgesetzt wird.

Wir haben außerdem `animation-range-start` festgelegt, damit die Animation früher als erwartet beginnt.

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

Weitere in diesem Beispiel angewendete Stile wurden hier der Kürze halber ausgeblendet.

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

Scrollen Sie, um das Element zu animieren. Beachten Sie, dass das Element bereits skaliert und halbtransparent ist, wenn es in den Viewport eintritt. Dies liegt daran, dass das Element bereits lange vor dem Eintritt in den Viewport mit der Animation begonnen hat.

{{EmbedLiveSample("Creating a scroll progress timeline with range start", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("view-timeline-inset")}}
- [`Element.animate()`](/de/docs/Web/API/Element/animate)-Eigenschaft `rangeStart`
- [Scrollgesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Verständnis von Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [View progress timeline: Bereiche und Visualisierer für den Animationsfortschritt](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
