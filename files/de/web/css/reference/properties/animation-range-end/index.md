---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: c8dc6b8523834ea235951685dcd1a9124509b615
---

Die **`animation-range-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Punkt auf der Zeitlinie fest, an dem eine Animation enden soll.

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
  - : Repräsentiert das Ende der Zeitlinie. Dies ist der Standardwert.
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, gemessen vom Anfang der Zeitlinie.
- [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name)
  - : Bezeichnet einen benannten Zeitlinienbereich innerhalb der gesamten Zeitlinie. Der Bereich beginnt bei `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, gemessen vom Anfang des angegebenen benannten Zeitlinienbereichs.

## Beschreibung

Die Eigenschaft `animation-range-end` legt das Ende des Anbindungsbereichs der Animation fest. Die Änderung des Endes des Anbindungsbereichs kann potenziell das Ende der Animation verschieben, also den Punkt, an dem Keyframes bei einem Fortschritt von `100%` landen, wenn die Iterationsanzahl `1` beträgt, und kann auch die effektive Dauer der Animation verkürzen.

Der Eigenschaftswert kann `normal`, ein `<length-percentage>` oder ein {{cssxref("timeline-range-name")}} mit einem optionalen `<length-percentage>` sein. Wenn der `<timeline-range-name>`-Wert keinen `<length-percentage>` enthält, wird als Standardprozentsatz `100%` angenommen.

Die Eigenschaft `animation-range-end` ist in der {{cssxref("animation")}} Kurzschreibweise als reiner Reset-Wert enthalten. Das bedeutet, dass bei der Verwendung der `animation`-Kurzschreibweise jeder zuvor deklarierte `animation-range-end`-Wert auf `normal` zurückgesetzt wird; die Kurzschreibweise kann nicht verwendet werden, um einen neuen `animation-range-end`-Wert festzulegen. Beim Erstellen von [CSS scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sollten Sie `animation-range-end` _nach_ jeder `animation`-Kurzschreibweise deklarieren, um zu verhindern, dass der Wert auf `normal` zurückgesetzt wird.

Die Eigenschaft `animation-range-end`, zusammen mit der {{cssxref("animation-range-start")}} Eigenschaft, kann auch mithilfe der {{cssxref("animation-range")}} Kurzschreibweise gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer Fortschrittsansicht-Zeitlinie mit einem Bereichsende

In diesem Beispiel wird `animation-range-end` auf ein Element angewendet, das über eine Fortschrittsansicht-Zeitlinie animiert wird. Dies führt dazu, dass die Animation ihren letzten Keyframe erreicht, noch bevor das Element das Ende seines enthaltenen Viewports erreicht.

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

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das wir animieren werden. Wir haben viel Text hinzugefügt, um sicherzustellen, dass der Inhalt seinen Container überflutet; der zusätzliche Text ist der Kürze halber hier ausgeblendet.

```html
<div class="animatedElement"></div>
```

```html hidden
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
<p></p>
```

Wir haben auch ein Kontrollkästchen hinzugefügt, das die {{cssxref("animation-fill-mode")}} Eigenschaft umschaltet, sodass Sie sehen können, wie sich diese Eigenschaft auf Animationen mit verkürzten Zeitlinien auswirkt.

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

Wir haben eine Fortschrittsansicht-Zeitlinie definiert, indem wir eine [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) Funktion als Wert der {{cssxref("animation-timeline")}} Eigenschaft gesetzt haben. Diese wird **nach** der {{cssxref("animation")}} Kurzschreibweise deklariert, um zu vermeiden, dass der Langschreibwerte zurückgesetzt wird.

Wir haben auch `animation-range-end` gesetzt, damit die Animation früher als erwartet endet.

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

Die anderen in diesem Beispiel angewendeten Stile sind der Kürze halber hier ausgeblendet.

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

Scrollen Sie, um das Element zu sehen, das animiert wird. Dann schalten Sie das Kontrollkästchen am Ende des Textblocks um und scrollen Sie erneut. Beachten Sie, wie das Element seine Animation beendet, wenn es 75% des Weges durch den Viewport erreicht hat, und wie es zu seinem Standardzustand zurückkehrt, wenn die `animation-fill-mode` Eigenschaft nicht angewandt wird.

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
- [Scroll-gesteuerte Animationszeitlinien](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Fortschrittsansicht-Zeitlinie: Bereiche und Animationsfortschrittsvisualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
