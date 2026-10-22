---
title: "`animation-range-end` CSS property"
short-title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 3144662126702b3473a0c9537c5ec8ff61457ff5
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`animation-range-end`** legt den Punkt auf der Zeitleiste fest, an dem eine Animation enden soll.

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

Diese Eigenschaft wird als kommagetrennte Liste von Werten angegeben. Jeder Wert kann eine der folgenden Formen haben:

- `normal`
  - : Steht für das Ende der Zeitleiste. Dies ist der Standardwert.
- {{cssxref("length-percentage")}}
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang der Zeitleiste aus gemessen wird.
- {{cssxref("timeline-range-name")}}
  - : Gibt einen benannten Zeitleistenbereich innerhalb der gesamten Zeitleiste an. Der Bereich endet bei `100%`.
- `<timeline-range-name> <length-percentage>`
  - : Gibt einen Längen- oder Prozentwert an, der vom Anfang des angegebenen benannten Zeitleistenbereichs aus gemessen wird.

## Beschreibung

Die Eigenschaft `animation-range-end` legt das Ende des Bereichs fest, an den die Animation gebunden ist. Wenn dieses Ende geändert wird, kann sich auch das Ende der Animation verschieben – also der Punkt, an dem Keyframes mit einem Fortschritt von `100%` liegen, wenn die Anzahl der Durchläufe `1` beträgt. Außerdem kann sich dadurch die effektive Dauer der Animation verkürzen.

Der Eigenschaftswert kann `normal`, ein `<length-percentage>` oder ein {{cssxref("timeline-range-name")}} mit einem optionalen `<length-percentage>` sein. Wenn für `<timeline-range-name>` kein `<length-percentage>` angegeben ist, beträgt der Prozentwert standardmäßig `100%`.

Wenn Sie mehrere kommagetrennte Werte angeben, gelten diese für die Animationen in der Reihenfolge, in der die Werte von {{cssxref("animation-name")}} aufgeführt sind. Siehe [Mehrere Werte für Animationseigenschaften festlegen](/de/docs/Web/CSS/Guides/Animations/Using#setting_multiple_animation_property_values).

Die Eigenschaft `animation-range-end` ist in der Kurzschreibweise {{cssxref("animation")}} nur als zurückzusetzender Wert enthalten. Das bedeutet, dass die Kurzschreibweise `animation` einen zuvor deklarierten Wert von `animation-range-end` auf `normal` zurücksetzt; mit ihr lässt sich kein neuer Wert für `animation-range-end` festlegen. Wenn Sie [scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen, sollten Sie `animation-range-end` _nach_ einer etwaigen `animation`-Kurzschreibweise deklarieren, damit der Wert nicht auf `normal` zurückgesetzt wird.

Die Eigenschaft `animation-range-end` kann zusammen mit {{cssxref("animation-range-start")}} auch über die Kurzschreibweise {{cssxref("animation-range")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Zeitleiste für den Ansichtsfortschritt mit einem Bereichsende erstellen

In diesem Beispiel wird `animation-range-end` auf ein Element angewendet, das über eine Zeitleiste für den Ansichtsfortschritt animiert wird. Dadurch erreicht die Animation ihren letzten Keyframe deutlich bevor das Element das Ende des Viewports seines Containers erreicht.

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

In der Mitte eines langen Textblocks haben wir ein Element eingefügt, das animiert werden soll. Wir haben viel Text hinzugefügt, damit der Inhalt über seinen Container hinausragt; der zusätzliche Text ist hier der Kürze halber ausgeblendet.

```html-nolint
<div class="animatedElement"></div>
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

Außerdem haben wir ein Kontrollkästchen eingefügt, mit dem sich die Eigenschaft {{cssxref("animation-fill-mode")}} ein- und ausschalten lässt. So können Sie sehen, wie sich diese Eigenschaft auf Animationen mit verkürzten Zeitleisten auswirkt.

```html
<label>
  <input type="checkbox" /> Add <code>animation-fill-mode: forwards;</code>
</label>
```

```html-nolint hidden
  </p>
</div>
```

#### CSS

Wir haben eine Zeitleiste für den Ansichtsfortschritt definiert, indem wir eine {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der Eigenschaft {{cssxref("animation-timeline")}} festgelegt haben. Diese wird **nach** der Kurzschreibweise {{cssxref("animation")}} deklariert, damit der Wert der einzelnen Eigenschaft nicht zurückgesetzt wird.

Außerdem haben wir `animation-range-end` festgelegt, damit die Animation früher als erwartet endet.

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
:has(:checked) ~ .animatedElement {
  animation-fill-mode: forwards;
}
```

Die übrigen Formatierungen dieses Beispiels sind der Kürze halber ausgeblendet.

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

Scrollen Sie, um die Animation des Elements zu sehen. Aktivieren oder deaktivieren Sie dann das Kontrollkästchen am Ende des Textblocks und scrollen Sie erneut. Beachten Sie, dass die Animation des Elements endet, sobald es 75 % des Weges durch den Viewport zurückgelegt hat. Wenn die Eigenschaft `animation-fill-mode` nicht angewendet wird, kehrt das Element an diesem Punkt in seinen Ausgangszustand zurück.

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
- Die Eigenschaft `rangeStart` von [`Element.animate()`](/de/docs/Web/API/Element/animate)
- [Zeitleisten für scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Namen von Zeitleistenbereichen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- Das Modul [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Visualisierung von Bereichen und Animationsfortschritt einer Zeitleiste für den Ansichtsfortschritt](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
