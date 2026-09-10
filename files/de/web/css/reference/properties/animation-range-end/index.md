---
title: "`animation-range-end` CSS property"
short-title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 22c0b3059ff71d769af670478cc41605581108d1
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-range-end`** legt den Punkt auf der Timeline fest, an dem eine Animation enden soll.

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

/* Multiple values */
animation-range-end:
  cover 80%,
  contain 700px;

/* Global values */
animation-range-end: inherit;
animation-range-end: initial;
animation-range-end: revert;
animation-range-end: revert-layer;
animation-range-end: unset;
```

### Werte

Diese Eigenschaft wird als durch Kommas getrennte Liste von Werten angegeben. Jeder Wert kann einer der folgenden sein:

- `normal`
  - : Repräsentiert das Ende der Timeline. Dies ist der Standardwert.
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn der Timeline aus gemessen wird.
- {{cssxref("timeline-range-name")}}
  - : Gibt einen benannten Timeline-Bereich innerhalb der gesamten Timeline an. Der Bereich endet bei `100%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Beginn des angegebenen benannten Timeline-Bereichs aus gemessen wird.

## Beschreibung

Die Eigenschaft `animation-range-end` legt das Ende des Bindungsbereichs der Animation fest. Das Ändern des Endes des Bindungsbereichs kann möglicherweise das Ende der Animation verschieben, also den Punkt, an dem auf einen Fortschritt von `100%` abgebildete Keyframes bei einer Iterationsanzahl von `1` landen, und kann außerdem die effektive Dauer der Animation verkürzen.

Der Eigenschaftswert kann `normal`, ein `<length-percentage>` oder ein {{cssxref("timeline-range-name")}} mit einem optionalen `<length-percentage>` sein. Wenn der Wert `<timeline-range-name>` kein `<length-percentage>` enthält, ist der Prozentwert standardmäßig `100%`.

Bei der Angabe mehrerer durch Kommas getrennter Werte werden diese auf die Animationen in der Reihenfolge angewendet, in der die Werte von {{cssxref("animation-name")}} erscheinen. Siehe [Mehrere Werte für Animationseigenschaften festlegen](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

Die Eigenschaft `animation-range-end` ist als reiner Zurücksetzungswert in der Kurzform {{cssxref("animation")}} enthalten. Das bedeutet, dass die Verwendung der Kurzform `animation` jeden zuvor deklarierten Wert von `animation-range-end` auf `normal` zurücksetzt; die Kurzform kann nicht verwendet werden, um einen neuen Wert für `animation-range-end` festzulegen. Beim Erstellen von [CSS-scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) sollten Sie `animation-range-end` _nach_ jeder Kurzformdeklaration von `animation` deklarieren, um zu vermeiden, dass der Wert auf `normal` zurückgesetzt wird.

Die Eigenschaft `animation-range-end` kann zusammen mit der Eigenschaft {{cssxref("animation-range-start")}} auch über die Kurzform {{cssxref("animation-range")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine View-Progress-Timeline mit einem Bereichsende erstellen

In diesem Beispiel wird `animation-range-end` auf ein Element angewendet, das über eine View-Progress-Timeline animiert wird. Dadurch erreicht die Animation ihren letzten Keyframe lange bevor das Element das Ende seines enthaltenden Viewports erreicht.

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

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das wir animieren werden. Wir haben viel Text hinzugefügt, um sicherzustellen, dass der Inhalt seinen Container überläuft; der zusätzliche Text wird hier aus Gründen der Kürze ausgeblendet.

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

Wir haben außerdem ein Kontrollkästchen eingefügt, das die Eigenschaft {{cssxref("animation-fill-mode")}} umschaltet, damit Sie sehen können, wie diese Eigenschaft Animationen mit verkürzten Timelines beeinflusst.

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

Wir haben eine View-Progress-Timeline definiert, indem wir eine Funktion {{cssxref("animation-timeline/view", "view()")}} als Wert der Eigenschaft {{cssxref("animation-timeline")}} festgelegt haben. Diese wird **nach** der Kurzform {{cssxref("animation")}} deklariert, um zu vermeiden, dass der Wert der Langform-Eigenschaft zurückgesetzt wird.

Wir haben außerdem `animation-range-end` festgelegt, damit die Animation früher als erwartet endet.

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

Wenn das Kontrollkästchen aktiviert ist, wird die Eigenschaft `animation-fill-mode` auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: forwards;
}
```

Die anderen in diesem Beispiel angewendeten Stile wurden hier aus Gründen der Kürze ausgeblendet.

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

Scrollen Sie, um die Animation des Elements zu sehen. Schalten Sie dann das Kontrollkästchen am Ende des Textblocks um und scrollen Sie erneut. Beachten Sie, wie das Element seine Animation beendet, wenn es zu 75 % durch den Viewport gelangt ist, und wie es an diesem Punkt zu seinem Standardzustand zurückkehrt, wenn die Eigenschaft `animation-fill-mode` nicht angewendet wird.

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
- [`Element.animate()`](/de/docs/Web/API/Element/animate)-Eigenschaft `rangeStart`
- [Scrollgesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Timeline-Bereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [View-Progress-Timeline: Visualisierung von Bereichen und Animationsfortschritt](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
