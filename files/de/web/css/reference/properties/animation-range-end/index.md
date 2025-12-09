---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

Die **`animation-range-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Punkt auf der Zeitleiste fest, an dem eine Animation enden soll.

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

/* Global values */
animation-range-end: inherit;
animation-range-end: initial;
animation-range-end: revert;
animation-range-end: revert-layer;
animation-range-end: unset;
```

### Werte

- `normal`
  - : Repräsentiert das Ende der Zeitleiste. Dies ist der Standardwert.
- {{cssxref("length-percentage")}}
  - : Gibt einen als Länge oder Prozentwert gemessenen Wert ab dem Beginn der Zeitleiste an.
- [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)
  - : Gibt einen benannten Zeitleistenbereich innerhalb der gesamten Zeitleiste an. Der Bereich beginnt bei `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen als Länge oder Prozentwert gemessenen Wert ab dem Beginn des angegebenen benannten Zeitleistenbereichs an.

## Beschreibung

Die `animation-range-end` Eigenschaft gibt das Ende des Anwendungsbereichs der Animation an. Das Ändern des Endes des Anwendungsbereichs kann potenziell das Ende der Animation verschieben, d.h. den Punkt, an dem die Keyframes bei `100%` Fortschritt landen, wenn die Wiederholungsanzahl `1` ist, und kann auch die effektive Dauer der Animation verkürzen.

Der Eigenschaftswert kann `normal`, ein `<length-percentage>` oder ein {{cssxref("timeline-range-name")}} mit einem optionalen `<length-percentage>` sein. Wenn der `<timeline-range-name>`-Wert keinen `<length-percentage>` enthält, wird der Prozentwert standardmäßig auf `100%` gesetzt.

Die `animation-range-end` Eigenschaft ist in der {{cssxref("animation")}} Kurzform als ein nur-Zurücksetzen-Wert enthalten. Das bedeutet, dass das Verwenden der `animation` Kurzform jeden zuvor deklarierten `animation-range-end` Wert auf `normal` zurücksetzt; die Kurzform kann nicht verwendet werden, um einen neuen `animation-range-end` Wert festzulegen. Beim Erstellen von [CSS Scroll-Driven-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sollten Sie `animation-range-end` _nach_ jeder `animation` Kurzform deklarieren, um zu vermeiden, dass der Wert auf `normal` zurückgesetzt wird.

Die `animation-range-end` Eigenschaft kann zusammen mit der {{cssxref("animation-range-start")}} Eigenschaft auch durch die Kurzform {{cssxref("animation-range")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer View-Progress-Zeitleiste mit einem Reichweitenende

In diesem Beispiel wird die `animation-range-end` auf ein Element angewendet, das über eine View-Progress-Zeitleiste animiert wird. Dies sorgt dafür, dass die Animation ihr letztes Keyframe erreicht, bevor das Element das Ende des umgebenden Viewports erreicht.

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

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das wir animieren werden. Wir haben viel Text hinzugefügt, um sicherzustellen, dass der Inhalt seinen Container überläuft; der zusätzliche Text ist hier aus Gründen der Übersichtlichkeit ausgeblendet.

```html-nolint
<div class="animatedElement">
```

```html-nolint hidden
<p>
  Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
  cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus
  orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam
  elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis
  ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed
  euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
  Netus et malesuada fames ac.
</p>
<p>
```

Wir haben auch ein Kontrollkästchen hinzugefügt, das die {{cssxref("animation-fill-mode")}} Eigenschaft umschalten wird, damit Sie sehen können, wie sich diese Eigenschaft auf Animationen mit verkürzten Zeitleisten auswirkt.

```html
<label>
  <input type="checkbox" /> Add <code>animation-fill-mode: forwards;</code>
</label>
```

```html hidden
  </p>
</div>
```

#### CSS

Wir haben eine View-Progress-Zeitleiste definiert, indem wir eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) Funktion als Wert der {{cssxref("animation-timeline")}} Eigenschaft festgelegt haben. Diese wird **nach** der {{cssxref("animation")}} Kurzform deklariert, um zu vermeiden, dass der Langformwert zurückgesetzt wird.

Wir haben auch `animation-range-end` gesetzt, um die Animation früher als erwartet enden zu lassen.

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range-end: exit 25%;
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

Wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode` Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: forwards;
}
```

Die anderen in diesem Beispiel angewendeten Stile sind aus Gründen der Übersichtlichkeit hier ausgeblendet.

```css hidden
.animatedElement {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

:has(:checked) .animatedElement {
  animation-fill-mode: both;
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
@supports not (animation-range-end: normal) {
  body::before {
    content: "Your browser does not support the 'animation-range-end' property.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

Scrollen Sie, um das Element zu animieren. Schalten Sie dann das Kontrollkästchen am Ende des Textblocks um und scrollen Sie erneut. Beachten Sie, wie das Element fertig animiert, wenn es 75% des Weges durch den Viewport erreicht, und wie es in seinen Standardzustand zurückkehrt, wenn die `animation-fill-mode` Eigenschaft nicht angewendet wird.

{{EmbedLiveSample("Creating a view progress timeline with a range end", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("view-timeline-inset")}}
- [`Element.animate()`](/de/docs/Web/API/Element/animate) `rangeStart` Eigenschaft
- [Scroll-gesteuerte Animationen Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View-Progress-Zeitleiste: Bereiche und Animation-Fortschrittsvisualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
