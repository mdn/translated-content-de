---
title: CSS-Eigenschaft `animation-range`
short-title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Anhangsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d.h. wo entlang der Zeitachse eine Animation starten und enden wird.

## Bestandteileigenschaften

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
animation-range: inherit;
animation-range: initial;
animation-range: revert;
animation-range: revert-layer;
animation-range: unset;
```

Die Kurzschreibweise `animation-range` wird als eine oder mehrere einzelne Animationsbereiche angegeben, die durch Kommata getrennt sind. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}} oder ein Paar `<timeline-range-name> <length-percentage>`, das den {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt wird, defaultet `<length-percentage>` auf `0%`.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein Paar `<timeline-range-name> <length-percentage>`, das den {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt wird, defaultet `<length-percentage>` auf `100%`.

## Beschreibung

Die Kurzschreibweise `animation-range` legt die Werte `animation-range-start` und `animation-range-end` fest und definiert, wo entlang der Animationszeitleiste die Animation beginnen und enden wird. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Beginn und dem Ende der Zeitleistenbereich angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, legen Sie für {{cssxref("animation-fill-mode")}} `backwards`, `forwards` oder `both` fest. Diese drei `animation-fill-mode`-Werte wenden die Stile des ersten Keyframes bis zum Bereichsstart, die Stile des letzten Keyframes nach dem Ende der Animation oder jeweils vor und nach der Animation an.

Der Bereich des {{Glossary("Scroll_container", "Scroll-Ports")}}, bekannt als Sichtbarkeitsbereich des Fortschritts, ist der Bereich, in dem das Subjektelement einer [benannten Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)-Animation als sichtbar betrachtet wird. Standardmäßig ist dies der gesamte Bereich des Scrollports, aber es kann mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft spezifiziert werden, werden sie in der Reihenfolge `<animation-range-start>` gefolgt von `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, oder ein {{cssxref("timeline-range-name")}}, der optional von einem `<length-percentage>` gefolgt wird. Diese Werte werden mit Leerzeichen getrennt. Normal entspricht `0%` für den Start und `100%` für das Ende. Die Festlegung von `normal` mit einem `<length-percentage>` entweder für den Anfangs- oder Endbereich ist ungültig.

### Festlegen des Bereichsanfrangs und Standardisierung des Bereichsende

Wenn Sie nur `<animation-range-start>` definieren, entweder durch Festlegen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}}, oder des Schlüsselworts `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` bestimmten Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und das `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` ist gleichbedeutend mit `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` ist gleichbedeutend mit `animation-range-start: normal; animation-range-end: normal;`

Wenn der Wert ein einzelnes {{cssxref("timeline-range-name")}} (ohne ein folgendes `<length-percentage>`) ist, wird dieser Zeitleistenbereichsname sowohl auf die `<animation-range-start>`- als auch `<animation-range-end>`-Komponenten angewendet und die Bereiche von `0%` bzw. `100%` impliziert. Zum Beispiel:

- `animation-range: contain;` ist gleichbedeutend mit `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` ist gleichbedeutend mit `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelnes `<timeline-range-name>` mit einem darauf folgenden `<length-percentage>` ist, in dieser Reihenfolge, definiert das Paar den `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf den `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` ist gleichbedeutend mit `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` ist gleichbedeutend mit `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizites Definieren von sowohl Bereichsanfang als auch Bereichsende mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte alles andere als ein einzelnes `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte einschließen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` ist gleichbedeutend mit `animation-range-start: normal; animation-range-end: 25%;`
- `animation-range: 25% 50%;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: normal;`

### Mehrere Animationen

Bei der Angabe von Bereichen für mehrere Animationen wird die Kurzschreibweise `animation-range` als eine oder mehrere einzelne Animationsbereiche angegeben, die durch Kommata getrennt sind. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}-Einstellungen erscheinen. In Situationen, in denen die Anzahl der Animationen und die Werte der `animation-range`-Eigenschaft nicht übereinstimmen, werden, wenn es mehr `animation-range`-Werte als Animationen gibt, die zusätzlichen Bereiche ignoriert. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range`-Werte wiederholt, bis jeder Animation ein entsprechender Bereich zugeordnet ist. Wenn wir zum Beispiel `animation-range: 25% 75%, normal;` setzen, wird der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Fortschrittsanimation der Sichtbarkeit, indem wir die `animation-range`-Eigenschaft verwenden, um den Anfang und das Ende der Animation zu verschieben, und demonstrieren die Wirkung der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Animationszeitleisten.

#### HTML

Inmitten eines Textblocks fügen wir ein Element ein, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überläuft, aber dieser bleibt der Kürze halber verborgen. Wir fügen auch ein Kontrollkästchen hinzu, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um ihre Wirkung auf verkürzte Animationszeitleisten zu demonstrieren. Auch dies bleibt verborgen.

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

Wir definieren eine Animation, die die Opazität, Skalierung und Hintergrundfarbe eines Elements animiert, sodass es beim Fortschreiten der Animation einblendet, vergrößert und die Farbe ändert. Wir wenden diese Animation mithilfe der {{cssxref("animation")}}-Kurzschreibweise auf das `animatedElement` an.

Eine Fortschrittszeitleiste der Sichtbarkeit wird erstellt, indem die {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unserem `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es nach oben durch das Dokument scrollt. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Kurzschreibweise, da die Kurzschreibweise diese Eigenschaft zurücksetzt.

Schließlich wird eine `animation-range`-Deklaration gesetzt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

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

Wir fügen auch bedingte Stile hinzu: Wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode`-Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile sind der Kürze halber verborgen.

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

Beachten Sie, wie die `from`- oder `0%`-Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Blockrandkante `10%` über die untere Kante des Containers hinausgeht; es ist vollständig groß, vollständig undurchsichtig und magenta. An diesem Punkt wird die Animation angewendet und es wird mit den durch den `0%`- [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) definierten Werten gestylt. Wenn das `animation-range-end` erreicht ist, 25% von der oberen Kante des Scrollports, springt es zurück zu seinem ursprünglichen Stil.

Im Allgemeinen möchten Sie `animation-fill-mode: both` festlegen, wenn Sie [scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung in den Standardzustand erfolgt, weil wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation vor und nach der Ausführung auf ein Element anzuwenden. Wir haben die Eigenschaft in diesem Beispiel zunächst weggelassen, um die Auswirkungen von `animation-range` besser visualisieren zu können.

Aktivieren Sie das Kontrollkästchen, um die `animation-fill-mode`-Eigenschaft auf das animierte Element anzuwenden, und scrollen Sie dann erneut: Die Animationsstile sollten jetzt kontinuierlich angewendet werden.

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
- [Verständnis von Zeitleistenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Ansichtszeitbereichs-Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
