---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: f6b253c16e6b1b9fe568c082a6f9f9bbd18a1c5d
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, also wo entlang der Zeitleiste eine Animation beginnen und enden wird.

## Zusammengehörige Eigenschaften

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

Die `animation-range`-Kurzschreibweise wird als ein oder mehrere einzelne Animationsbereiche angegeben, die durch Kommas getrennt sind. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) oder ein `<timeline-range-name> <length-percentage>`-Paar, das die {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` gesetzt ist, wird `<length-percentage>` standardmäßig auf `0%` gesetzt.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name> <length-percentage>`-Paar, das die {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` gesetzt ist, wird `<length-percentage>` standardmäßig auf `100%` gesetzt.

## Beschreibung

Die `animation-range`-Kurzschreibweise legt die `animation-range-start`- und `animation-range-end`-Werte fest und definiert, wo entlang der Animationszeitleiste die Animation beginnen und enden wird. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Anfang und Ende des Zeitraums der Zeitleiste angewendet. Um die Animation außerhalb dieses Zeitraums anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei Werte des `animation-fill-mode`-Wertes übertragen die ersten Keyframe-Stile bis zum Startbereich, die letzten Keyframe-Stile nach dem Ende der Animation oder beides davor und danach.

Der {{Glossary("Scroll_container", "Scrollbereich")}}, bekannt als Sichtbarkeitsbereich des Ansichtsfortschritts, ist der Bereich, in dem das Zielobjekt einer [benannten Ansichtsfortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar angesehen wird. Standardmäßig ist dies der gesamte Bereich des Scrollfensters, aber es kann mit der {{cssxref("view-timeline-inset")}}-Eigenschaft angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft angegeben sind, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, eine {{cssxref("length-percentage")}} oder ein [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name), gefolgt optional von einer `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal ist gleich `0%` für den Start und `100%` für das Ende. Das Setzen von `normal` mit einer `<length-percentage>` für den Start- oder Endbereich ist ungültig.

### Definieren des Startbereichs und Standardisieren des Endbereichs

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Setzen einer einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}} oder des Schlüsselworts `normal`, oder indem Sie einen einzelnen `<timeline-range-name>` gefolgt von einer einzelnen `<length-percentage>` angeben, folgt der berechnete Wert des `<animation-range-end>` spezifischen Regeln:

Wenn der Wert eine einzelne `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und der `<animation-range-end>` wird implizit auf `normal` gesetzt. Beispielsweise:

- `animation-range: 20%;` ist gleichbedeutend mit `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` ist gleichbedeutend mit `animation-range-start: 0%; animation-range-end: 100%;`

Wenn der Wert ein einzelner [`<timeline-range-name>`](/de/docs/Web/CSS/Reference/Values/timeline-range-name) (ohne eine folgende `<length-percentage>`) ist, wird dieser Zeitleistenbereichsname sowohl auf die `<animation-range-start>`- als auch auf die `<animation-range-end>`-Komponenten angewendet, und die Bereiche von `0%` und `100%` sind impliziert. Beispielsweise:

- `animation-range: contain;` entspricht `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` entspricht `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelner `<timeline-range-name>` mit einer einzelnen darauf folgenden `<length-percentage>` in dieser Reihenfolge ist, definiert das Paar den `<animation-range-start>`, und der definierte `<timeline-range-name>` wird bei `100%` auf den `<animation-range-end>` angewendet. Beispielsweise:

- `animation-range: cover 20%;` entspricht `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` entspricht `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizites Definieren von Start- und Endbereich mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte etwas anderes als ein einzelner `<timeline-range-name>`, gefolgt von einer `<length-percentage>`, sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte angeben und der erste Wert das Schlüsselwort `normal` oder eine `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Beispielsweise:

- `animation-range: normal 25%;` entspricht `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` entspricht `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` entspricht `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` entspricht `animation-range-start: 25%; animation-range-end: 100%;`

### Mehrere Animationen

Beim Festlegen von Bereichen für mehrere Animationen wird die `animation-range`-Kurzschreibweise als ein oder mehrere einzelne Animationsbereiche angegeben, die durch Kommas getrennt sind. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Für Situationen, in denen die Anzahl der Animationen und die Werte der `animation-range`-Eigenschaft nicht übereinstimmen, wenn es mehr `animation-range`-Werte als Animationen gibt, werden die zusätzlichen Bereiche ignoriert. Wenn es mehr Animationen als Bereiche gibt, wird die Liste der `animation-range`-Werte wiederholt, bis es für jede Animation einen entsprechenden Bereich gibt. Beispielsweise, wenn wir `animation-range: 25% 75%, normal;` festlegen, ist der Animationsbereich aller ungeradzähligen Animationen `25% 75%` und aller geraden Animationen `0% 100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel reduzieren wir die Dauer der Ansichtsfortschritts-Scroll-Animation, indem wir die `animation-range`-Eigenschaft verwenden, um den Start und das Ende der Animation zu versetzen und den Effekt der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Animationszeitleisten zu demonstrieren.

#### HTML

Inmitten eines Textwalls platzieren wir ein Element, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt den Container überläuft, aber dies ist aus Gründen der Kürze verborgen. Wir fügen auch ein Kontrollkästchen hinzu, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um ihre Auswirkungen auf verkürzte Animationszeitleisten zu demonstrieren. Auch dies ist verborgen.

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

Wir definieren eine Animation, die die Deckkraft, die Skalierung und die Hintergrundfarbe eines Elements animiert, wodurch es beim Fortschreiten der Animation einblendet, vergrößert und die Farbe ändert. Wir wenden diese Animation mit der {{cssxref("animation")}}-Kurzschreibweise auf das `animatedElement` an.

Eine Ansichtsfortschrittszeitleiste wird erstellt, indem die [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unserem `animatedElement` festgelegt wird. Das Ergebnis ist, dass das Element animiert wird, während es sich beim Scrollen nach oben durch das Dokument bewegt. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Kurzschreibweise, da die Kurzschreibweise diese Eigenschaft zurücksetzt.

Letztendlich wird eine `animation-range`-Deklaration festgelegt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

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

Die anderen Stile sind aus Gründen der Kürze verborgen.

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

Scrollen Sie, um das Element animiert zu sehen.

{{EmbedLiveSample("Examples", "100%", "480px")}}

Beachten Sie, wie die `from`- oder `0%`-Keyframe-Eigenschaftswerte nicht auf das animierte Element angewendet werden, bis die obere Blockrandkante `10%` hinter der unteren Kante des Containers liegt; es ist voll groß, vollständig undurchsichtig und magentafarben. An diesem Punkt wird die Animation angewendet, und sie wird mit den Werten des `0%`-Keyframe-Selektors gestaltet. Wenn das `animation-range-end` erreicht ist, 25% von oben des Scrollports, springt es zurück zu seinem ursprünglichen Stil.

Im Allgemeinen sollten Sie `animation-fill-mode: both` festlegen, wenn Sie [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung zum Standardzustand erfolgt, weil wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation vor und nach deren Ausführung auf ein Element anzuwenden. Wir haben diese Eigenschaft in diesem Beispiel zunächst weggelassen, um das Visualisieren der Effekte von `animation-range` zu erleichtern.

Aktivieren Sie das Kontrollkästchen, um die `animation-fill-mode`-Eigenschaft auf das animierte Element anzuwenden, und scrollen Sie erneut: Die Animationsstile sollten jetzt kontinuierlich angewendet werden.

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
- [CSS-Scroll-Animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [Visualisierer für Ansichtszeitleistenbereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
