---
title: "`animation-range` CSS-Eigenschaft"
short-title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft wird verwendet, um den Start und das Ende des Befestigungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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
animation-range: inherit;
animation-range: initial;
animation-range: revert;
animation-range: revert-layer;
animation-range: unset;
```

### Werte

Die Shorthand-Eigenschaft `animation-range` wird als ein oder mehrere einzelne Animationsbereiche spezifiziert, getrennt durch Kommata. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte spezifiziert, die aus `<timeline-range-name>` Werten, `<length-percentage>` Werten und/oder dem Schlüsselwort `normal` bestehen.

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}}, oder ein Paar aus `<timeline-range-name> <length-percentage>`, das den {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` gesetzt wird, wird das `<length-percentage>` standardmäßig auf `0%` gesetzt.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>`, oder ein Paar aus `<timeline-range-name> <length-percentage>`, das den {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` gesetzt wird, wird das `<length-percentage>` standardmäßig auf `100%` gesetzt.

## Beschreibung

Die Shorthand-Eigenschaft `animation-range` setzt die Werte `animation-range-start` und `animation-range-end`, und definiert, wo entlang der Animationszeitleiste die Animation beginnt und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Bereich Start und Bereich Ende der Zeitleiste angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode` Werte wenden die ersten Keyframe-Stile bis zum Bereichsstart, die letzten Keyframe-Stile nach dem Ende der Animation, bzw. sowohl davor als auch danach, an.

Der {{Glossary("Scroll_container", "Scrollbereich")}}, der als Sichtbereichsbereich der Ansicht bekannt ist, ist der Bereich, in dem das Objektelement einer Animation mit [benannter Ansichtsfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar gilt. Standardmäßig ist dies der vollständige Bereich des Scrollports, er kann jedoch mit der {{cssxref("view-timeline-inset")}} Eigenschaft angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>` Eigenschaft angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` gefolgt von `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, oder ein {{cssxref("timeline-range-name")}}, optional gefolgt von einem `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal ist gleichbedeutend mit `0%` für den Start und `100%` für das Ende. Das Setzen von `normal` mit einem `<length-percentage>` für entweder den Start- oder Endbereich ist ungültig.

### Festlegen des Bereichsstarts und Standardisieren des Bereichsendes

Wenn Sie nur `<animation-range-start>` definieren, entweder durch Setzen eines einzigen {{cssxref("length-percentage")}}, eines einzigen {{cssxref("timeline-range-name")}}, oder des Schlüsselworts `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzigen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` bestimmten Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und der `<animation-range-end>` wird implizit auf `normal` gesetzt. Beispielsweise:

- `animation-range: 20%;` entspricht `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` entspricht `animation-range-start: normal; animation-range-end: normal;`

Wenn der Wert ein einzelnes {{cssxref("timeline-range-name")}} (ohne ein folgendes `<length-percentage>`) ist, wird dieser Zeitleistenrangname sowohl auf die `<animation-range-start>` als auch auf die `<animation-range-end>` Komponenten angewendet, und die Bereiche von `0%` bzw. `100%` werden impliziert. Beispielsweise:

- `animation-range: contain;` entspricht `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` entspricht `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelnes `<timeline-range-name>` mit einem folgenden einzelnen `<length-percentage>` in dieser Reihenfolge ist, definiert das Paar den `<animation-range-start>`, und das definierte `<timeline-range-name>` wird auf das `<animation-range-end>` bei `100%` angewendet. Beispielsweise:

- `animation-range: cover 20%;` entspricht `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` entspricht `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizite Definition von sowohl Bereichsstart als auch Bereichsende mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte etwas anderes sind als ein einzelnes `<timeline-range-name>` gefolgt von einem `<length-percentage>`, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit gesetzt.

Wenn Sie zwei Werte einbeziehen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Beispielsweise:

- `animation-range: normal 25%;` entspricht `animation-range-start: normal; animation-range-end: 25%;`
- `animation-range: 25% 50%;` entspricht `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` entspricht `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` entspricht `animation-range-start: 25%; animation-range-end: normal;`

### Mehrere Animationen

Wenn Sie Bereiche für mehrere Animationen angeben, wird die Shorthand-Eigenschaft `animation-range` als ein oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommata. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und die Werte der `animation-range` Eigenschaft nicht übereinstimmen, werden die zusätzlichen Bereiche ignoriert, wenn es mehr `animation-range` Werte als Animationen gibt. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range` Werte wiederholt, bis es einen entsprechenden Bereich für jede Animation gibt. Wenn wir beispielsweise `animation-range: 25% 75%, normal;` setzen, wird der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range` Eigenschaft

In diesem Beispiel reduzieren wir die Dauer der Scroll-Animation des Ansichtsfortschritts, indem wir die `animation-range` Eigenschaft verwenden, um den Beginn und das Ende der Animation zu versetzen, und demonstrieren den Effekt der {{cssxref("animation-fill-mode")}} Eigenschaft auf verkürzte Animationszeitleisten.

#### HTML

In der Mitte einer Textwand fügen wir ein Element ein, das wir animieren werden. Wir fügen eine Menge Text ein, um sicherzustellen, dass unser Inhalt seinen Container überläuft, aber dies ist der Kürze halber versteckt.
Wir fügen auch ein Kontrollkästchen ein, um die {{cssxref("animation-fill-mode")}} Eigenschaft ein- und auszuschalten, um ihren Effekt auf verkürzte Animationszeitleisten zu demonstrieren. Dies ist ebenfalls versteckt.

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

Wir definieren eine Animation, die die Opazität, Skalierung und Hintergrundfarbe eines Elements animiert und dadurch bewirkt, dass es einblendet, vergrößert und die Farbe ändert, während die Animation fortschreitet. Wir wenden diese Animation mit der {{cssxref("animation")}} Shorthand auf das `animatedElement` an.

Eine Ansichtsfortschrittszeitleiste wird erstellt, indem die {{cssxref("animation-timeline/view", "view()")}} Funktion als Wert der {{cssxref("animation-timeline")}} Eigenschaft auf unser `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es nach oben durch das Dokument rollt. Wir deklarieren die `animation-timeline` Eigenschaft nach der Shorthand, da die Shorthand diese Eigenschaft zurücksetzt.

Zuletzt wird eine `animation-range` Deklaration gesetzt, damit die Animation später beginnt als erwartet und früher endet.

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

Wir fügen auch bedingte Stile hinzu: Wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode` Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile sind der Kürze halber versteckt.

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

Scrollen Sie, um zu sehen, dass das Element animiert wird.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Beachten Sie, wie die `from` oder `0%` Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Blockrandkante `10%` über die untere Kante des Containers hinaus ist; es ist voll groß, vollständig opak und magenta. Zu diesem Zeitpunkt wird die Animation angewendet und es wird mit den Werten, die durch den `0%` [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) definiert sind, gestylt. Wenn das `animation-range-end` erreicht ist, 25% vom oberen Rand des Scrollports, springt es zu seiner ursprünglichen Stildefinition zurück.

In der Regel möchten Sie `animation-fill-mode: both` setzen, wenn Sie [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung in den Standardzustand erfolgt, weil wir die {{cssxref("animation-fill-mode")}} Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach der Ausführung der Animation anzuwenden. Wir haben die Eigenschaft in diesem Beispiel anfänglich weggelassen, um die Auswirkungen von `animation-range` besser visualisieren zu können.

Aktivieren Sie das Kontrollkästchen, um die `animation-fill-mode` Eigenschaft auf das animierte Element anzuwenden, und scrollen Sie erneut: die Animationsstile sollten nun durchgehend angewendet werden.

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
- [Verständnis der Zeitleistenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Ansichtszeitleistenbereichsvisualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
