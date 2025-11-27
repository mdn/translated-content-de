---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: ea22b9b023727cf602c6f563689942a96d187459
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Beginn und das Ende eines Animationsbereichs entlang seiner Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation startet und endet.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist ein Shorthand für die folgenden CSS-Eigenschaften:

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

Die Shorthand-Eigenschaft `animation-range` wird als eine oder mehrere einzelne Animationsbereiche, getrennt durch Kommata, angegeben. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) oder ein `<timeline-range-name> <length-percentage>`-Paar, das den [`animation-range-start`](/de/docs/Web/CSS/Reference/Properties/animation-range-start) repräsentiert. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt ist, wird das `<length-percentage>` standardmäßig auf `0%` gesetzt.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name> <length-percentage>`-Paar, das den [`animation-range-end`](/de/docs/Web/CSS/Reference/Properties/animation-range-end) repräsentiert. Wenn ein `<timeline-range-name>` ohne ein `<length-percentage>` festgelegt ist, wird das `<length-percentage>` standardmäßig auf `100%` gesetzt.

## Beschreibung

Die Shorthand-Eigenschaft `animation-range` setzt die Werte `animation-range-start` und `animation-range-end` und definiert, wo entlang der Animationszeitleiste die Animation beginnt und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Beginn und dem Ende des Zeitleistenbereichs angewandt. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode`-Werte wenden die ersten Keyframe-Stile bis zum Beginn des Bereichs an, die letzten Keyframe-Stile nach dem Ende der Animation oder beide vor und nach der Animation an.

Der Bereich, der als {{Glossary("Scroll_container", "Scroll Port")}} bekannt ist, wird innerhalb des Sichtbarkeitsbereichs in der Ansicht benannt, in welchem das Zielelement einer Animation mit einer [benannten Ansicht-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar erachtet wird. Standardmäßig ist dies der gesamte Bereich des Scrollports, kann aber mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft angegeben werden, werden sie in der Reihenfolge `<animation-range-start>` dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, oder ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name), optional gefolgt von einem `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal entspricht `0%` für den Beginn und `100%` für das Ende. Das Festlegen von `normal` mit einem `<length-percentage>` für entweder den Start- oder Endbereich ist ungültig.

### Definieren des Bereichsanfangs und Standardwert des Bereichsendes

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Festlegen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}} oder des Schlüsselworts `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` spezifischen Regeln:

Wenn der Wert ein einziges `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und der `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` ist äquivalent zu `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` ist äquivalent zu `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelnes [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) (ohne ein darauf folgendes `<length-percentage>`) ist, wird dieser Zeitleisten-Bereichsname auf beide, `<animation-range-start>` und `<animation-range-end>`, Komponenten angewendet, und die Bereiche von `0%` und `100%` sind impliziert. Zum Beispiel:

- `animation-range: contain;` ist äquivalent zu `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` ist äquivalent zu `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelnes `<timeline-range-name>` mit einem einzelnen <length-percentage> danach, in dieser Reihenfolge, ist, definiert das Paar den `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf den `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` ist äquivalent zu `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` ist äquivalent zu `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizite Definition sowohl des Bereichsanfangs als auch des Bereichsendes mit zwei Werten

Wenn in Ihrer `animation-range`-Deklaration zwei oder mehr Werte enthalten sind und die Werte etwas anderes als ein einzelnes `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden beide `<animation-range-start>` und `<animation-range-end>` explizit gesetzt.

Wenn Sie zwei Werte einschließen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` ist äquivalent zu `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` ist äquivalent zu `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` ist äquivalent zu `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` ist äquivalent zu `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Beim Festlegen von Bereichen für mehrere Animationen wird die `animation-range` Shorthand-Eigenschaft als eine oder mehrere einzelne Animationsbereiche, getrennt durch Kommas, angegeben. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. In Fällen, in denen die Anzahl der Animationen und die Werte der `animation-range`-Eigenschaft nicht übereinstimmen, wenn es mehr `animation-range`-Werte als Animationen gibt, werden die zusätzlichen Bereiche ignoriert. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der Werte für `animation-range` wiederholt, bis es für jede Animation einen entsprechenden Bereich gibt. Beispiel: Wenn wir `animation-range: 25% 75%, normal;` setzen, wird der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Fortschritts-Scroll-Animation, indem wir die `animation-range`-Eigenschaft verwenden, um den Beginn und das Ende der Animation zu verschieben, und zeigen die Wirkung der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Animationszeitleisten.

#### HTML

In der Mitte einer Textwand fügen wir ein Element ein, das wir animieren werden. Wir fügen viel Text ein, um sicherzustellen, dass unser Inhalt seinen Container überläuft, aber dies wird zugunsten der Kürze ausgeblendet. Wir fügen auch eine Checkbox hinzu, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um deren Effekt auf verkürzte Animationszeitleisten zu demonstrieren. Dies ist auch ausgeblendet.

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
<label>
  <input type="checkbox" /> Add <code>animation-fill-mode: both;</code>
</label>
  </p>
</div>
```

#### CSS

Wir definieren eine Animation, die die Opazität, die Skalierung und die Hintergrundfarbe eines Elements animiert, sodass es beim Fortschreiten der Animation einblendet, skaliert und die Farbe ändert. Wir wenden diese Animation mit dem {{cssxref("animation")}}-Shorthand auf das `animatedElement` an.

Eine Fortschritts-Ansichtszeitleiste wird erstellt, indem die [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view) Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unserem `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird. Wir deklarieren die `animation-timeline`-Eigenschaft nach dem Shorthand, da das Shorthand diese Eigenschaft zurücksetzt.

Zuletzt wird eine `animation-range`-Deklaration gesetzt, um die Animation später beginnen und früher enden zu lassen als erwartet.

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

Wir enthalten auch bedingte Stile: Wenn die Checkbox aktiviert ist, wird die `animation-fill-mode`-Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile sind aus Gründen der Übersichtlichkeit ausgeblendet.

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

Beachten Sie, dass die `from`, oder `0%`, Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Blockrand-Kante `10%` über die untere Kante des Containers hinausgegangen ist; es ist voll groß, vollständig deckend und magenta. An diesem Punkt wird die Animation angewendet und das Element wird mit den durch den `0%` Keyframe-Selektor definierten Werten gestylt. Wenn das `animation-range-end` erreicht ist, 25% vom oberen Rand des Scrollports, springt es zu seiner ursprünglichen Stilgebung zurück.

Im Allgemeinen werden Sie `animation-fill-mode: both` setzen wollen, wenn Sie [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung zum Standardzustand tritt auf, da wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach der Ausführung der Animation anzuwenden. Wir haben die Eigenschaft in diesem Beispiel zunächst weggelassen, um die Auswirkungen von `animation-range` besser sichtbar zu machen.

Aktivieren Sie die Checkbox, um die `animation-fill-mode`-Eigenschaft auf das animierte Element anzuwenden, und scrollen Sie dann erneut: Die Animationsstile sollten nun kontinuierlich angewendet werden.

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
- [Ansichts-Zeitleistenbereich-Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
