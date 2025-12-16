---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Befestigungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnen und enden wird.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `animation-range` Kurzschreibweise wird als eine oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommas. Jeder Animationsbereich wird als ein bis vier Leerzeichen getrennte Werte spezifiziert, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}} oder ein `<timeline-range-name> <length-percentage>`-Paar, das das {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` gesetzt wird, wird das `<length-percentage>` standardmäßig auf `0%` gesetzt.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name> <length-percentage>`-Paar, das das {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` gesetzt wird, wird das `<length-percentage>` standardmäßig auf `100%` gesetzt.

## Beschreibung

Die `animation-range` Kurzschreibweise legt die `animation-range-start` und `animation-range-end` Werte fest, die definieren, wo entlang der Animationszeitleiste die Animation beginnt und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Startbereich und dem Endbereich der Zeitleiste angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode` Werte wenden die ersten Keyframe-Stile bis zum Beginn des Bereichs, die letzten Keyframe-Stile nach dem Ende der Animation oder beides davor und danach an.

Der {{Glossary("Scroll_container", "Scrollport-Bereich")}}, bekannt als der Bereich für die Fortschrittsansicht, ist der Bereich, innerhalb dessen das Zielelement einer [benannten Fortschrittsansicht-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) Animation als sichtbar angesehen wird. Standardmäßig ist dies der vollständige Bereich des Scrollports, kann jedoch mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>` Eigenschaft angegeben werden, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, oder ein {{cssxref("timeline-range-name")}}, optional gefolgt von einem `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. `Normal` ist gleich `0%` für den Start und `100%` für das Ende. Das Setzen von `normal` mit einem `<length-percentage>` für entweder den Start- oder den Endbereich ist ungültig.

### Festlegen des Bereichsstarts und Standardeinstellung des Bereichsende

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Festlegen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}}, des Schlüsselworts `normal` oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` spezifischen Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und das `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` entspricht `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` entspricht `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelner {{cssxref("timeline-range-name")}} (ohne ein `<length-percentage>` dahinter) ist, wird dieser Timeline-Bereichsname auf beide `<animation-range-start>` und `<animation-range-end>` Komponenten angewendet, und die Bereiche von `0%` bzw. `100%` werden impliziert. Zum Beispiel:

- `animation-range: contain;` entspricht `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` entspricht `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelner `<timeline-range-name>` mit einem nachfolgenden `<length-percentage>` ist, definiert das Paar den `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf das `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` entspricht `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` entspricht `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizite Definition von sowohl Bereichsstart als auch Bereichsende mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range` Deklaration enthalten sind und die Werte alles andere als ein einzelner `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte einschließen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` entspricht `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` entspricht `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` entspricht `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` entspricht `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Beim Festlegen von Bereichen für mehrere Animationen wird die `animation-range` Kurzschreibweise als eine oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommas. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}en erscheinen. In Situationen, in denen die Anzahl der Animationen und die `animation-range` Eigenschaftswerte nicht übereinstimmen, wenn es mehr `animation-range` Werte als Animationen gibt, werden die zusätzlichen Bereiche ignoriert. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range` Werte wiederholt, bis es für jede Animation einen entsprechenden Bereich gibt. Zum Beispiel, wenn wir `animation-range: 25% 75%, normal;` setzen, ist der Animationsbereich aller ungerader Animationen `25% 75%` und aller geraden Animationen wird `0% 100%` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range` Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Fortschrittsansicht-Scrollanimation, indem wir die `animation-range` Eigenschaft verwenden, um den Anfang und das Ende der Animation zu versetzen, und demonstrieren die Wirkung der {{cssxref("animation-fill-mode")}} Eigenschaft auf verkürzte Animationszeitleisten.

#### HTML

Inmitten einer Textwand fügen wir ein Element ein, das wir animieren werden. Wir fügen eine Menge Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überläuft, jedoch wird dies der Kürze halber ausgeblendet. Wir fügen auch ein Kontrollkästchen hinzu, um die {{cssxref("animation-fill-mode")}} Eigenschaft ein- und auszuschalten, um deren Wirkung auf verkürzte Animationszeitleisten zu demonstrieren. Auch dies wird ausgeblendet.

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

Wir definieren eine Animation, die die Deckkraft, Skalierung und Hintergrundfarbe eines Elements animiert, wodurch es beim Fortschreiten der Animation einblendet, größer wird und die Farbe ändert. Wir wenden diese Animation mit der {{cssxref("animation")}} Kurzschreibweise auf `animatedElement` an.

Eine Fortschrittsansicht-Zeitleiste wird erstellt, indem die {{cssxref("animation-timeline/view", "view()")}} Funktion als Wert der {{cssxref("animation-timeline")}} Eigenschaft auf unserem `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es sich beim Scrollen nach oben durch das Dokument bewegt. Wir deklarieren die `animation-timeline` Eigenschaft nach der Kurzschreibweise, da die Kurzschreibweise diese Eigenschaft zurücksetzt.

Zuletzt wird eine `animation-range` Deklaration festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

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

Wir fügen auch bedingte Stilregeln ein: Wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode` Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile sind der Kürze halber ausgeblendet.

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

Beachten Sie, dass die `from` oder `0%` Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Blockrandkante `10%` über die untere Kante des Containers hinausragt; es ist in voller Größe, vollständig undurchsichtig und magenta. An diesem Punkt wird die Animation angewendet und es wird mit den vom `0%` Keyframe-Selektor definierten Werten gestylt. Wenn das `animation-range-end` erreicht ist, 25% vom oberen Rand des Scrollports, springt es zurück zu seinem ursprünglichen Styling.

Generell sollten Sie `animation-fill-mode: both` einstellen, wenn Sie [scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung zum Standardzustand erfolgt, weil wir nicht die {{cssxref("animation-fill-mode")}} Eigenschaft auf das Element gesetzt haben, welche verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach der Ausführung der Animation anzuwenden. Wir haben die Eigenschaft in diesem Beispiel ursprünglich weggelassen, um die Auswirkungen von `animation-range` besser zu visualisieren.

Aktivieren Sie das Kontrollkästchen, um die `animation-fill-mode` Eigenschaft auf das animierte Element anzuwenden, und scrollen Sie dann erneut: Die Animationsstile sollten jetzt kontinuierlich angewendet werden.

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
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View timeline range visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
