---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
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
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang der Zeitleiste gemessen wird.
- {{cssxref("timeline-range-name")}}
  - : Gibt einen benannten Zeitleistenbereich innerhalb der gesamten Zeitleiste an. Der Bereich beginnt bei `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang des angegebenen benannten Zeitleistenbereichs gemessen wird.

## Beschreibung

Die `animation-range-end` Eigenschaft spezifiziert das Ende des Anwendungsbereichs der Animation. Das Ändern des Endes des Anwendungsbereichs kann potenziell das Ende der Animation verschieben, also den Punkt, an dem Schlüsselbilder auf `100%` Fortschritt landen, wenn die Iterationsanzahl `1` ist, und kann auch die effektive Dauer der Animation verkürzen.

Der Eigenschaftswert kann `normal`, ein `<length-percentage>`, oder ein {{cssxref("timeline-range-name")}} mit einem optionalen `<length-percentage>` sein. Wenn der `<timeline-range-name>` Wert kein `<length-percentage>` enthält, beträgt der Standardwert des Prozentsatzes `100%`.

Die `animation-range-end` Eigenschaft ist als nur-zurücksetzbarer Wert in der {{cssxref("animation")}} Kurzschrift enthalten. Das bedeutet, dass die Verwendung der `animation` Kurzschrift einen zuvor deklarierten `animation-range-end` Wert auf `normal` zurücksetzt; die Kurzschrift kann nicht verwendet werden, um einen neuen `animation-range-end` Wert festzulegen. Beim Erstellen von [CSS-Scroll-gesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sollten Sie `animation-range-end` _nach_ der Deklaration einer `animation` Kurzschrift deklarieren, um zu vermeiden, dass der Wert auf `normal` zurückgesetzt wird.

Die Eigenschaft `animation-range-end`, zusammen mit der {{cssxref("animation-range-start")}} Eigenschaft, kann auch durch Verwendung der Kurzschrift {{cssxref("animation-range")}} gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer Fortschrittszeitleiste mit einem Bereichsende

In diesem Beispiel wird `animation-range-end` auf ein Element angewendet, das über eine Fortschrittszeitleiste animiert wird. Dadurch erreicht die Animation ihr letztes Schlüsselbild, bevor das Element das Ende seines umgebenden Viewports erreicht.

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

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das wir animieren. Wir haben viel Text hinzugefügt, um sicherzustellen, dass der Inhalt seinen Container überläuft; der zusätzliche Text wird hier der Kürze halber ausgeblendet.

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

Wir haben auch ein Kontrollkästchen hinzugefügt, das die {{cssxref("animation-fill-mode")}} Eigenschaft umschaltet, sodass Sie sehen können, wie diese Eigenschaft Animationen mit verkürzten Zeitleisten beeinflusst.

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

Wir haben eine Fortschrittszeitleiste definiert, indem wir eine {{cssxref("animation-timeline/view", "view()")}} Funktion als Wert der {{cssxref("animation-timeline")}} Eigenschaft gesetzt haben. Dies wird **nach** der {{cssxref("animation")}} Kurzschrift deklariert, um zu vermeiden, dass der Langformwert zurückgesetzt wird.

Wir haben auch `animation-range-end` gesetzt, um die Animation früher enden zu lassen als erwartet.

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

Die anderen in diesem Beispiel angewendeten Stile wurden hier der Kürze halber ausgeblendet.

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

Scrollen Sie, um das Element zu animieren. Schalten Sie dann das Kontrollkästchen am Ende des Textblocks um und scrollen Sie erneut. Beachten Sie, wie das Element die Animation beendet, wenn es 75% durch den Viewport ist und wie es in seinen Standardzustand zurückkehrt, wenn die `animation-fill-mode` Eigenschaft nicht angewendet wird.

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
- [Scroll-gesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Fortschrittszeitleiste anzeigen: Bereiche und Animationen Fortschrittsvisualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
