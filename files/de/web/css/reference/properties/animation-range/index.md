---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation beginnt und endet.

## Zusammengesetzte Eigenschaften

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

Die `animation-range`-Kurzform-Eigenschaft wird als ein oder mehrere einzelne Animationsbereiche angegeben, die durch Kommata getrennt sind. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}}, oder ein Paar `<timeline-range-name> <length-percentage>`, das den {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt wird, wird `<length-percentage>` standardmäßig auf `0%` gesetzt.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>`, oder ein Paar `<timeline-range-name> <length-percentage>`, das den {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt wird, wird `<length-percentage>` standardmäßig auf `100%` gesetzt.

## Beschreibung

Die `animation-range`-Kurzform-Eigenschaft legt die `animation-range-start`- und `animation-range-end`-Werte fest und definiert, wo entlang der Animationszeitleiste die Animation beginnt und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Stile einem Element nur dann zugeordnet, wenn dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Beginn und dem Ende des Zeitbereichs angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode`-Werte wenden die ersten Keyframe-Stile bis zum Beginn des Zeitbereichs an, die letzten Keyframe-Stile nach dem Ende der Animation oder beides davor und danach.

Der {{Glossary("Scroll_container", "Scroll-Port")}}-Bereich, bekannt als Sichtbarkeitsbereich des Fortschritts, ist der Bereich, innerhalb dessen das Subjektelement einer [benannten Zeitleiste für Fortschritte](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines)-Animation als sichtbar gilt. Standardmäßig entspricht dies dem gesamten Bereich des Scrollports, kann jedoch mit der {{cssxref("view-timeline-inset")}}-Eigenschaft angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, oder ein {{cssxref("timeline-range-name")}} gegebenenfalls gefolgt von einem `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal ist gleich `0%` für Beginn und `100%` für das Ende. Das Setzen von `normal` mit einem `<length-percentage>` für den Beginn oder das Ende des Bereichs ist ungültig.

### Bereichsbeginn definieren und Bereichsende standardmäßig setzen

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Festlegen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}}, oder des Schlüsselworts `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>`, folgt der berechnete Wert des `<animation-range-end>` bestimmten Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und der `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` entspricht `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` entspricht `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelnes {{cssxref("timeline-range-name")}} (ohne folgendes `<length-percentage>`) ist, wird dieser Zeitbereichsname auf beide Komponenten, sowohl `<animation-range-start>` als auch `<animation-range-end>`, angewendet, und die Bereiche `0%` und `100%` sind entsprechend impliziert. Zum Beispiel:

- `animation-range: contain;` entspricht `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` entspricht `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelnes `<timeline-range-name>` ist, gefolgt von einem einzelnen `<length-percentage>` in dieser Reihenfolge, definiert das Paar den `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` entspricht `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` entspricht `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Bereichsbeginn und -ende explizit mit zwei Werten definieren

Wenn in Ihrer `animation-range`-Deklaration zwei oder mehr Werte enthalten sind und die Werte etwas anderes als ein einzelnes `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit gesetzt.

Wenn Sie zwei Werte einschließen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` entspricht `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` entspricht `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` entspricht `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` entspricht `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Wenn Sie Bereiche für mehrere Animationen angeben, wird die `animation-range`-Kurzform-Eigenschaft als ein oder mehrere einzelne Animationsbereiche angegeben, die durch Kommas getrennt sind. Jeder Animationsbereich wird in der Reihenfolge auf die Animationen angewendet, in der die {{cssxref("animation-name")}}s erscheinen. In Fällen, in denen die Anzahl der Animationen und die `animation-range`-Eigenschaftswerte nicht übereinstimmen, werden bei mehr `animation-range`-Werten als Animationen die zusätzlichen Bereiche ignoriert. Bei mehr Animationen als Bereichen wird die Liste der `animation-range`-Werte wiederholt, bis ein entsprechender Bereich für jede Animation vorhanden ist. Beispielsweise, wenn wir `animation-range: 25% 75%, normal;` festlegen, ist der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%`.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Sicht fortschrittsbasierte Scroll-Animation durch Verwendung der `animation-range`-Eigenschaft, um den Beginn und das Ende der Animation zu verschieben, und demonstrieren die Wirkung der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Animation-Zeitleisten.

#### HTML

Inmitten einer Textwand fügen wir ein Element ein, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überläuft, aber dies wird der Kürze halber ausgeblendet.
Wir fügen auch ein Kontrollkästchen hinzu, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um deren Effekt auf verkürzte Animation-Zeitleisten zu demonstrieren. Auch dies ist ausgeblendet.

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

Wir definieren eine Animation, die die Deckkraft, den Maßstab und die Hintergrundfarbe eines Elements animiert, wodurch es beim Fortschreiten der Animation einblendet, vergrößert und die Farbe ändert. Wir wenden diese Animation mit der {{cssxref("animation")}}-Kurzform auf das `animatedElement` an.

Eine Fortschrittszeitleiste der Ansicht wird erstellt, indem die {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unser `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es durch das Dokument nach oben bewegt wird, wenn es gescrollt wird. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Kurzform, da die Kurzform diese Eigenschaft zurücksetzt.

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

Wir fügen auch ein bedingtes Styling hinzu: Wenn das Kontrollkästchen markiert ist, wird die `animation-fill-mode`-Eigenschaft auf das animierte Element angewendet:

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

Scrollen Sie, um das animierte Element zu sehen.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Beachten Sie, wie die Werte der `from`- oder `0%`-Schlüsselbild-Eigenschaften nicht auf das animierte Element angewendet werden, bis der obere Blockrahmenrand `10%` über den unteren Rand des Containers hinausreicht; es ist in voller Größe, voll transparent und magenta. An diesem Punkt wird die Animation angewendet, und es wird mit den Werten gestylt, die durch den `0%` [Keyframe-Selector](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) definiert sind. Wenn das `animation-range-end` erreicht wird, 25% vom oberen Rand des Scrollports aus, springt es zurück zu seinem ursprünglichen Stil.

Im Allgemeinen sollten Sie `animation-fill-mode: both` einstellen, wenn Sie [scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung in den Standardzustand tritt auf, weil wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation vor und nach deren Ausführung auf ein Element anzuwenden. Wir haben die Eigenschaft in diesem Beispiel zunächst weggelassen, um die Auswirkungen von `animation-range` besser zu visualisieren.

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
- [CSS-Scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [Sichtbarkeitsbereich der Zeitleiste visualisieren](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
