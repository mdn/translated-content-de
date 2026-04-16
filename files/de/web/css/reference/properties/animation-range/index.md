---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 2b6ef419bcd9bcc4316ae59c41b3a956c8fa5749
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Anfang und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitleiste festzulegen, d.h. wo entlang der Zeitleiste eine Animation starten und enden wird.

## Bestandteile der Eigenschaften

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
animation-range: inherit;
animation-range: initial;
animation-range: revert;
animation-range: revert-layer;
animation-range: unset;
```

Die `animation-range`-Kurzform-Eigenschaft wird als eine oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommas. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte angegeben, die aus `<timeline-range-name>`-Werten, `<length-percentage>`-Werten und/oder dem Schlüsselwort `normal` bestehen.

### Werte

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}} oder ein `<timeline-range-name> <length-percentage>`-Paar, das den {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt ist, ist das `<length-percentage>` standardmäßig `0%`.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>` oder ein `<timeline-range-name> <length-percentage>`-Paar, das den {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt ist, ist das `<length-percentage>` standardmäßig `100%`.

## Beschreibung

Die `animation-range`-Kurzform-Eigenschaft legt die Werte für `animation-range-start` und `animation-range-end` fest und definiert, wo entlang der Animations-Zeitleiste die Animation starten und enden wird. Standardmäßig werden die in einer Keyframe-Animation definierten Stilelemente nur auf ein Element angewendet, während dieses Element animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animations-Zeitleiste dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Bereichsstart und dem Bereichsende der Zeitleiste angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie den {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode`-Werte wenden die ersten Keyframe-Stile bis zum Bereichsstart, die letzten Keyframe-Stile nach dem Ende der Animation oder beide sowohl davor als auch danach an.

Der {{Glossary("Scroll_container", "Scrollport")}}-Bereich, der als Bereich für die Sichtbarkeitsfortschritte bekannt ist, ist der Bereich, innerhalb dessen das Element einer Animation mit einer [benannten Sichtbarkeitsfortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar angesehen wird. Standardmäßig ist dies der vollständige Bereich des Scrollports, kann jedoch mit der {{cssxref("view-timeline-inset")}}-Eigenschaft angepasst werden.

Wenn zwei Werte als Bestandteile der `<animation-range>`-Eigenschaft angegeben werden, werden sie in der Reihenfolge `<animation-range-start>` gefolgt von `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}} oder ein {{cssxref("timeline-range-name")}}, gefolgt von einem `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal entspricht `0%` für den Start und `100%` für das Ende. Das Festlegen von `normal` mit einem `<length-percentage>` für entweder den Start- oder Endbereich ist ungültig.

### Definieren des Bereichsstarts und Festlegen des Bereichsendes als Standardwert

Wenn Sie nur `<animation-range-start>` durch Festlegen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}} oder das Schlüsselwort `normal` definieren oder indem Sie einen einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>` angeben, folgen dem berechneten Wert von `<animation-range-end>` spezifische Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert das `<animation-range-start>`, und das `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` ist gleichbedeutend mit `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` ist gleichbedeutend mit `animation-range-start: normal; animation-range-end: normal;`

Wenn der Wert ein einzelner {{cssxref("timeline-range-name")}} (ohne ein folgendes `<length-percentage>`)-Wert ist, wird dieser Zeitleistenbereichsname auf die Komponenten `<animation-range-start>` und `<animation-range-end>` angewendet, und die Bereiche von `0%` bzw. `100%` sind impliziert. Zum Beispiel:

- `animation-range: contain;` ist gleichbedeutend mit `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` ist gleichbedeutend mit `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelner `<timeline-range-name>` ist, gefolgt von einem einzelnen `<length-percentage>` in dieser Reihenfolge, definiert das Paar das `<animation-range-start>`, und der definierte `<timeline-range-name>` wird auf `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` ist gleichbedeutend mit `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` ist gleichbedeutend mit `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizites Definieren von Bereichsstart und -ende mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte alles andere als ein einzelner `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte einschließen und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` ist gleichbedeutend mit `animation-range-start: normal; animation-range-end: 25%;`
- `animation-range: 25% 50%;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` ist gleichbedeutend mit `animation-range-start: 25%; animation-range-end: normal;`

### Mehrere Animationen

Bei der Angabe von Bereichen für mehrere Animationen wird die `animation-range`-Kurzform-Eigenschaft als eine oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommas. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. In Situationen, in denen die Anzahl der Animationen und die `animation-range`-Eigenschaftswerte nicht übereinstimmen, werden die zusätzlichen Bereiche ignoriert, wenn es mehr `animation-range`-Werte als Animationen gibt. Wenn es mehr Animationen als Bereiche gibt, werden die Liste der `animation-range`-Werte wiederholt, bis es für jede Animation einen entsprechenden Bereich gibt. Zum Beispiel, wenn wir `animation-range: 25% 75%, normal;` festlegen, ist der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Ansicht-Fortschritts-Scroll-Animation, indem wir die `animation-range`-Eigenschaft verwenden, um den Start und das Ende der Animation zu versetzen, und demonstrieren die Wirkung der {{cssxref("animation-fill-mode")}}-Eigenschaft auf verkürzte Animations-Zeitleisten.

#### HTML

In der Mitte eines Textwalls fügen wir ein Element ein, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überfließt, aber dies ist der Kürze halber ausgeblendet. Wir fügen auch ein Kontrollkästchen ein, um die {{cssxref("animation-fill-mode")}}-Eigenschaft ein- und auszuschalten, um ihre Wirkung auf verkürzte Animations-Zeitleisten zu demonstrieren. Auch dies ist ausgeblendet.

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

Wir definieren eine Animation, die die Deckkraft, die Skalierung und die Hintergrundfarbe eines Elements animiert, wodurch es beim Fortschreiten der Animation verblasst, vergrößert wird und seine Farbe ändert. Wir wenden diese Animation mit der {{cssxref("animation")}}-Kurzform auf das `animatedElement` an.

Eine Fortschritts-Zeitleiste wird erstellt, indem die {{cssxref("animation-timeline/view", "view()")}}-Funktion als Wert der {{cssxref("animation-timeline")}}-Eigenschaft auf unser `animatedElement` gesetzt wird. Das Ergebnis ist, dass das Element animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird. Wir deklarieren die `animation-timeline`-Eigenschaft nach der Kurzform, da die Kurzform diese Eigenschaft zurücksetzt.

Schließlich wird eine `animation-range`-Deklaration festgelegt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

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

Wir fügen auch bedingte Formatierungen hinzu: Wenn das Kontrollkästchen aktiviert ist, wird die `animation-fill-mode`-Eigenschaft auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile sind ebenfalls der Kürze halber ausgeblendet.

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

Beachten Sie, wie die `from`- oder `0%`-Keyframe-Property-Werte nicht auf das animierte Element angewendet werden, bis der obere Blockaußenrand um `10%` über den unteren Rand des Containers hinausragt; es ist voll groß, vollständig deckend und magentafarben. Zu diesem Zeitpunkt wird die Animation angewendet, und es wird mit den Werten gestylt, die durch den `0%` [Keyframe-Selector](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) definiert sind. Wenn das `animation-range-end` erreicht ist, `25%` vom oberen Rand des Scrollport entfernt, springt es zu seinem ursprünglichen Styling zurück.

In der Regel sollten Sie `animation-fill-mode: both` einstellen, wenn Sie [Scroll-basierte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung zum Standardzustand erfolgt, weil wir die {{cssxref("animation-fill-mode")}}-Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach ihrer Ausführung anzuwenden. In diesem Beispiel haben wir die Eigenschaft zunächst weggelassen, um die Auswirkungen von `animation-range` besser visualisieren zu können.

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
- [Verstehen von Zeitleistenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Ansichts-Zeitleiste Bereichs-Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
