---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Abkürzungseigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d.h. wo entlang der Zeitachse eine Animation beginnen und enden wird.

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

## Syntax

```css
/* Range start value only*/
/* Single value syntax */
animation-range: normal;
animation-range: 20%;
animation-range: 100px;
animation-range: cover;
animation-range: contain;
/* Two value syntax */
animation-range: cover 20%;
animation-range: contain 100px;

/* Range start and end values */
/* Two value syntax */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit;
/* Three value syntax */
animation-range: cover cover 200px;
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
/* Four value syntax */
animation-range: cover 0% cover 200px;
animation-range: entry 10% exit 100%;

/* Global values */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

Die Abkürzungseigenschaft `animation-range` wird als eine oder mehrere einzelne Animationsbereiche spezifiziert, getrennt durch Kommas. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte definiert, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}}, oder ein `<timeline-range-name> <length-percentage>`-Paar, das den {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt wird, lautet der Standardwert für das `<length-percentage>` `0%`.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>`, oder ein `<timeline-range-name> <length-percentage>`-Paar, das den {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt wird, lautet der Standardwert für das `<length-percentage>` `100%`.

## Beschreibung

Die Abkürzungseigenschaft `animation-range` setzt die Werte `animation-range-start` und `animation-range-end`, die festlegen, wo auf der Animationszeitachse die Animation beginnen und enden wird. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitachse dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Start und Ende des Zeitachsendbereichs angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode`-Werte wenden die ersten Keyframe-Stile bis zum Startbereich an, die letzten Keyframe-Stile nachdem die Animation endet, oder beides davor und danach.

Der {{Glossary("Scroll_container", "Scrollport-Bereich")}}, der als Sichtbarkeitsbereich für die Fortschrittsansicht bekannt ist, ist der Bereich, innerhalb dessen das Zielelement einer [benannten Fortschrittsansicht-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)-Animation als sichtbar angesehen wird. Standardmäßig ist dies der gesamte Bereich des Scrollports, aber es kann mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, eine {{cssxref("length-percentage")}}, oder ein {{cssxref("timeline-range-name")}}, optional gefolgt von einer `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal entspricht `0%` für den Start und `100%` für das Ende. Die Einstellung von `normal` mit einer `<length-percentage>` für entweder den Start- oder Endbereich ist ungültig.

### Definieren des Startbereichs und Standardisieren des Endbereichs

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Festlegen einer einzigen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}}, oder des Schlüsselworts `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einer einzigen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` bestimmten Regeln:

Wenn der Wert eine einzelne `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und der `<animation-range-end>` wird implizit auf `normal` gesetzt. Beispiel:

- `animation-range: 20%;` ist gleichbedeutend mit `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` ist gleichbedeutend mit `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelner {{cssxref("timeline-range-name")}} (ohne eine folgende `<length-percentage>`) ist, wird dieser Zeitachsenbereichsname sowohl auf die `<animation-range-start>`- als auch die `<animation-range-end>`-Komponenten angewendet, und die Bereiche von `0%` bzw. `100%` werden impliziert. Beispiel:

- `animation-range: contain;` ist gleichbedeutend mit `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` ist gleichbedeutend mit `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einziger `<timeline-range-name>` mit einer folgenden `<length-percentage>` in dieser Reihenfolge ist, definiert das Paar den `<animation-range-start>` und der definierte `<timeline-range-name>` wird bei `100%` auf den `<animation-range-end>` angewendet. Beispiel:

- `animation-range: cover 20%;` ist gleichbedeutend mit `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` ist gleichbedeutend mit `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizite Definition sowohl des Start- als auch des Endbereichs mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte irgendetwas anderes als ein einzelner `<timeline-range-name>` gefolgt von einer `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit gesetzt.

Wenn Sie zwei Werte angeben und der erste Wert das Schlüsselwort `normal` oder eine `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Beispiel:

- `animation-range: normal 25%;` ist gleichbedeutend mit `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Bei der Angabe von Bereichen für mehrere Animationen wird die Abkürzungseigenschaft `animation-range` als eine oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommas. Jeder Animationsbereich wird in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. In Situationen, in denen die Anzahl der Animationen und die Werte der `animation-range`-Eigenschaft nicht übereinstimmen, werden, wenn es mehr `animation-range`-Werte als Animationen gibt, die zusätzlichen Bereiche ignoriert. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range`-Werte wiederholt, bis ein entsprechender Bereich für jede Animation vorhanden ist. Beispiel: Wenn wir `animation-range: 25% 75%, normal;` setzen, gilt der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Scroll-Animationsansicht, indem wir die `animation-range`-Eigenschaft verwenden, um den Start und das Ende der Animation zu verschieben, und demonstrieren die Auswirkung der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Zeitachsen der Animation.

#### HTML

In der Mitte einer Textwand platzieren wir ein Element, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überläuft, aber dies wird der Kürze halber verborgen. Wir fügen auch ein Kontrollkästchen hinzu, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um deren Auswirkungen auf verkürzte Animationszeitleisten zu demonstrieren. Auch dies wird verborgen.

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

```html
<div class="animatedElement"></div>
```

```html-nolint hidden
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
  <label>
    <input type="checkbox" /> Add <code>animation-fill-mode: both;</code>
  </label>
</div>
```

#### CSS

Wir definieren eine Animation, die die Deckkraft, die Skalierung und die Hintergrundfarbe eines Elements animiert, sodass es einblendet, vergrößert und die Farbe ändert, während die Animation fortschreitet. Wir wenden diese Animation auf das `animatedElement` mit der {{cssxref("animation")}}-Abkürzung an.

Eine Fortschritts-Zeitachse der Ansicht wird erstellt, indem die {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unserem `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es nach oben durch das Dokument bewegt wird, wenn es gescrollt wird. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Abkürzung, da die Abkürzung diese Eigenschaft zurücksetzt.

Zuletzt wird eine `animation-range`-Deklaration gesetzt, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range: entry 10% exit -25%;
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

Wir fügen auch bedingte Styles hinzu: Wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode`-Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Styles werden der Kürze halber ausgeblendet.

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
@supports not (animation-range: normal) {
  body::before {
    content: "Your browser does not support the 'animation-range' property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

Scrollen Sie, um das sich animierende Element zu sehen.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Beachten Sie, wie die `from`- oder `0%`-Keyframe-Eigenschaften nicht auf das animierte Element angewendet werden, bis die obere Blockrahmenkante `10%` über die untere Kante des Containers hinaus ist; es hat volle Größe, volle Deckkraft und ist magenta. An diesem Punkt wird die Animation angewendet und sie wird mit den Werten gestylt, die mit dem `0%` [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) definiert sind. Wenn das `animation-range-end` erreicht ist, 25% vom oberen Rand des Scrollports, springt es zurück zu seinem ursprünglichen Stil.

Im Allgemeinen werden Sie `animation-fill-mode: both` setzen wollen, wenn Sie [scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung zum Standardzustand tritt auf, weil wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach der Ausführung der Animation anzuwenden. In diesem Beispiel haben wir die Eigenschaft zunächst weggelassen, um die Auswirkungen von `animation-range` besser zu veranschaulichen.

Aktivieren Sie das Kontrollkästchen, um die `animation-fill-mode`-Eigenschaft auf das animierte Element anzuwenden und scrollen Sie dann erneut: Die Animationsstile sollten nun kontinuierlich angewendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("animation-fill-mode")}}
- [Verständnis von Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS-scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Ansicht-Zeitrahmen-Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
