---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start)
- [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end)

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

Die Kurzschreibweise `animation-range` wird als ein oder mehrere einzelne Animationsbereiche angegeben, die durch Kommas getrennt sind. Jeder Animationsbereich wird als eine bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) oder ein `<timeline-range-name> <length-percentage>`-Paar, das das {{cssxref("animation-range-start")}} repräsentiert. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt wird, beträgt das `<length-percentage>` standardmäßig `0%`.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name> <length-percentage>`-Paar, das das {{cssxref("animation-range-end")}} repräsentiert. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt wird, beträgt das `<length-percentage>` standardmäßig `100%`.

## Beschreibung

Die Kurzschreibweise `animation-range` setzt die Werte `animation-range-start` und `animation-range-end` fest und definiert, wo entlang der Animationszeitleiste die Animation beginnt und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Styles nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Beginn und dem Ende des Bereichs der Zeitleiste angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode`-Werte wenden die ersten Keyframe-Styles bis zum Beginn des Bereichs an, die letzten Keyframe-Styles nach dem Ende der Animation oder beides vor und nach der Animation an.

Der {{Glossary("Scroll_container", "Scroll-Bereich")}}, bekannt als Sichtbarkeitsbereich des Ansichtsfortschritts, ist der Bereich, in dem das Subjektelement einer [benannten Zeitleiste des Ansichtsfortschritts](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar gilt. Standardmäßig ist dies der gesamte Bereich des Scrollports, aber er kann mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

Wenn zwei Werte als Komponenten der Eigenschaft `<animation-range>` angegeben werden, werden sie in der Reihenfolge `<animation-range-start>` und `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}} oder ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name), gefolgt von einem optionalen `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal entspricht `0%` für den Start und `100%` für das Ende. Das Setzen von `normal` mit einem `<length-percentage>` für den Start- oder Endbereich ist ungültig.

### Bestimmen des Startbereichs und Standard-Endbereichs

Wenn Sie nur das `<animation-range-start>` definieren, sei es durch das Setzen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}} oder des Schlüsselworts `normal`, oder durch das Angeben eines einzelnen `<timeline-range-name>`, gefolgt von einem einzelnen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` spezifischen Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert das `<animation-range-start>` und das `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` entspricht `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` entspricht `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelner [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) (ohne folgendes `<length-percentage>`) ist, wird dieser Zeitleistenbereichsname sowohl auf die `<animation-range-start>`- als auch auf die `<animation-range-end>`-Komponenten angewendet, und die Bereiche von `0%` und `100%` sind impliziert. Zum Beispiel:

- `animation-range: contain;` entspricht `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` entspricht `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelner `<timeline-range-name>` mit folgendem `<length-percentage>` in dieser Reihenfolge ist, definiert das Paar das `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf das `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` entspricht `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` entspricht `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizites Festlegen von Start- und Endbereich mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte etwas anderes als ein einzelnes `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte angeben und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert das `<animation-range-start>`, und der zweite Wert definiert das `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` entspricht `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` entspricht `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` entspricht `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` entspricht `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Wenn Sie Bereiche für mehrere Animationen festlegen, wird die Kurzschreibweise `animation-range` als ein oder mehrere einzelne Animationsbereiche angegeben, die durch Kommas getrennt sind. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. In Situationen, in denen die Anzahl der Animationen und die Werte der Eigenschaft `animation-range` nicht übereinstimmen, werden die zusätzlichen Bereiche ignoriert, wenn es mehr `animation-range`-Werte als Animationen gibt. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range`-Werte wiederholt, bis es für jede Animation einen entsprechenden Bereich gibt. Zum Beispiel, wenn wir `animation-range: 25% 75%, normal;` setzen, erhalten alle ungeraden Animationen den Bereich `25% 75%` und alle geraden Animationen `0% 100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Zeitleisten-Scroll-Animation durch die Nutzung der `animation-range`-Eigenschaft, um den Start und das Ende der Animation zu versetzen, und demonstrieren den Effekt der Eigenschaft {{cssxref("animation-fill-mode")}} auf verkürzte Animationszeitleisten.

#### HTML

Inmitten einer Textwand fügen wir ein Element ein, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Behälter überfließt, dies ist jedoch aus Gründen der Kürze verborgen. Wir fügen auch ein Kontrollkästchen hinzu, um die Eigenschaft {{cssxref("animation-fill-mode")}} ein- und auszuschalten, um ihre Wirkung auf verkürzte Animationszeitleisten zu demonstrieren. Auch dies ist verborgen.

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

Wir definieren eine Animation, die die Opazität, Skalierung und Hintergrundfarbe eines Elements animiert, sodass es einblendet, vergrößert und die Farbe ändert, während die Animation fortschreitet. Wir wenden diese Animation mit dem {{cssxref("animation")}}-Kurzschreibweise auf das `animatedElement` an.

Eine Zeitleiste für den Ansichtsfortschritt wird erstellt, indem die [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion als Wert der `animation-timeline`-Eigenschaft auf unserem `animatedElement` festgelegt wird. Das Ergebnis ist, dass das Element animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Kurzschreibweise, da die Kurzschreibweise diese Eigenschaft zurücksetzt.

Zuletzt wird eine `animation-range`-Deklaration gesetzt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

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

Wir fügen auch eine bedingte Formatierung hinzu: Wenn das Kontrollkästchen aktiviert ist, wird die Eigenschaft `animation-fill-mode` auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Styles sind aus Gründen der Kürze verborgen.

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

Scrollen Sie, um das animierte Element zu sehen.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Beachten Sie, dass die `from`- oder `0%`-Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Blockrandkante `10%` über die untere Kante des Containers hinaus liegt; es ist in voller Größe, vollständig undurchsichtig und magenta. An diesem Punkt wird die Animation angewendet und es wird mit den Werten aus dem `0%`-Keyframe-Selektor gestylt. Wenn das `animation-range-end` erreicht ist, 25% vom oberen Rand des Scrollports entfernt, springt es zurück zu seinem ursprünglichen Stil.

Im Allgemeinen möchte man `animation-fill-mode: both` setzen, wenn man [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellt. Der Sprung in den Standardzustand erfolgt, da wir die Eigenschaft {{cssxref("animation-fill-mode")}} nicht auf das Element gesetzt haben, die verwendet werden kann, um die Styles einer Animation vor und nach der Ausführung der Animation auf ein Element anzuwenden. Wir haben in diesem Beispiel die Eigenschaft zunächst weggelassen, um die Auswirkungen von `animation-range` besser zu visualisieren.

Aktivieren Sie das Kontrollkästchen, um die Eigenschaft `animation-fill-mode` auf das animierte Element anzuwenden, und scrollen Sie dann erneut: Die Animationsstile sollten nun kontinuierlich angewendet werden.

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
- [Zeitleistenbereich Visualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
