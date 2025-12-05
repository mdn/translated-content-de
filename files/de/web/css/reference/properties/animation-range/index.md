---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS)-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Beginn und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Bestandteileigenschaften

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

Die `animation-range`-Kurzform-Eigenschaft wird als eine oder mehrere einzelne Animationsbereiche angegeben, die durch Kommata getrennt sind. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name), oder ein `<timeline-range-name> <length-percentage>`-Paar, das die {{cssxref("animation-range-start")}} repräsentiert. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt wird, beträgt das `<length-percentage>` standardmäßig `0%`.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name> <length-percentage>`-Paar, das die {{cssxref("animation-range-end")}} repräsentiert. Wenn ein `<timeline-range-name>` festgelegt wird, ohne dass ein `<length-percentage>` folgt, beträgt das `<length-percentage>` standardmäßig `100%`.

## Beschreibung

Die `animation-range`-Kurzform-Eigenschaft setzt die Werte von `animation-range-start` und `animation-range-end` und definiert, wo entlang der Animationszeitleiste die Animation beginnt und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Range-Start und Range-Ende der Zeitleiste angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode`-Werte wenden die ersten Keyframe-Stile bis zum Range-Start an, die letzten Keyframe-Stile nach dem Ende der Animation oder beides, vor und nach der Animation.

Der {{Glossary("Scroll_container", "Scroll-Port")}}-Bereich, bekannt als Sichtbarkeitsbereich des Fortschritts der Ansicht, ist der Bereich, in dem das Zielelement einer [benannten Zeitleiste des Sichtbarkeitsfortschritts](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar angesehen wird. Standardmäßig ist dies der volle Bereich des Scroll-Ports, aber er kann mithilfe der {{cssxref("view-timeline-inset")}}-Eigenschaft angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft angegeben werden, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, eine {{cssxref("length-percentage")}}, oder ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name), optional gefolgt von einem `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal entspricht `0%` für den Start und `100%` für das Ende. Das Festlegen von `normal` mit einem `<length-percentage>` für entweder den Start- oder den Endbereich ist ungültig.

### Definition des Range-Starts und Standardfestlegung des Range-Endes

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Festlegen einer einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}}, oder das Schlüsselwort `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>`, folgen die berechneten Werte des `<animation-range-end>` bestimmten Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und der `<animation-range-end>` wird implizit auf `normal` festgelegt. Zum Beispiel:

- `animation-range: 20%;` entspricht: `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` entspricht: `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelner [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) (ohne ein nachfolgendes `<length-percentage>`) ist, wird dieser Zeitleistenbereichsnamen sowohl auf die `<animation-range-start>`- als auch auf die `<animation-range-end>`-Komponenten angewendet, und es werden die Bereiche von `0%` und `100%` entsprechend impliziert. Zum Beispiel:

- `animation-range: contain;` ist identisch mit: `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` ist identisch mit: `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelner `<timeline-range-name>` mit einem einzelnen `<length-percentage>` ist, in dieser Reihenfolge, definiert das Paar den `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf den `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` ist identisch mit: `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` ist identisch mit: `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizites Definieren von Range-Start und Range-Ende mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte alles andere als ein einzelner `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte einschließen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>` und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` ist identisch mit: `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` ist identisch mit: `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` ist identisch mit: `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` ist identisch mit: `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Wenn Sie Bereiche für mehrere Animationen festlegen, wird die `animation-range`-Kurzform-Eigenschaft als eine oder mehrere einzelne Animationsbereiche angegeben, die durch Kommata getrennt sind. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s angezeigt werden. In Situationen, in denen die Anzahl der Animationen und der `animation-range`-Eigenschaftswerte nicht übereinstimmen, werden die zusätzlichen Bereiche ignoriert, wenn es mehr `animation-range`-Werte als Animationen gibt. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range`-Werte wiederholt, bis es für jede Animation einen entsprechenden Bereich gibt. Zum Beispiel, wenn wir `animation-range: 25% 75%, normal;` setzen, ist der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Animation des Sichtbarkeitsfortschritts, indem wir die `animation-range`-Eigenschaft verwenden, um den Start und das Ende der Animation zu verschieben, und demonstrieren die Wirkung der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Animationszeitleisten.

#### HTML

In der Mitte einer Textwand platzieren wir ein Element, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überfüllt, aber dies wird der Kürze halber ausgeblendet.
Wir fügen auch ein Kontrollkästchen hinzu, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um ihre Wirkung auf verkürzte Animationszeitleisten zu demonstrieren. Auch dies wird ausgeblendet.

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

Wir definieren eine Animation, die die Deckkraft, den Maßstab und die Hintergrundfarbe eines Elements animiert und dazu führt, dass es langsam auftaucht, sich vergrößert und die Farbe wechselt, während die Animation fortschreitet. Wir wenden diese Animation mit der {{cssxref("animation")}}-Kurzform auf das `animatedElement` an.

Eine Zeitleiste des Sichtbarkeitsfortschritts wird erstellt, indem die [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unserem `animatedElement` festgelegt wird. Das Ergebnis ist, dass das Element animiert wird, wenn es beim Scrollen nach oben im Dokument bewegt wird. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Kurzform, da diese Eigenschaft durch die Kurzform zurückgesetzt wird.

Schließlich wird eine `animation-range`-Deklaration festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

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

Wir fügen auch bedingtes Styling hinzu: wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode`-Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile werden der Kürze halber ausgeblendet.

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

Scrollen Sie, um zu sehen, wie das Element animiert wird.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Beachten Sie, wie die `from`- oder `0%`-Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Randlinie des Blocks `10%` über die untere Kante des Containers hinausgeht; es ist in voller Größe, vollständig undurchsichtig und magentafarben. Zu diesem Zeitpunkt wird die Animation angewendet und es wird mit den Werten gestylt, die durch die `0%`-Keyframe-Selektion festgelegt sind. Wenn das `animation-range-end` erreicht ist, 25% vom oberen Rand des Scroll-Ports entfernt, springt es zurück zu seinem ursprünglichen Styling.

Im Allgemeinen sollten Sie `animation-fill-mode: both` setzen, wenn Sie [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung in den Standardzustand tritt auf, weil wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach der Ausführung der Animation anzuwenden. Wir haben die Eigenschaft in diesem Beispiel zunächst weggelassen, um die Auswirkungen von `animation-range` besser sichtbar zu machen.

Aktivieren Sie das Kontrollkästchen, um die `animation-fill-mode`-Eigenschaft auf das animierte Element anzuwenden und dann erneut zu scrollen: die Animationsstile sollten jetzt kontinuierlich angewendet werden.

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
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [Visualisierungswerkzeug für Zeitleistenbereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
