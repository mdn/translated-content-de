---
title: CSS-Eigenschaft `animation-range`
short-title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`animation-range`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um den Start und das Ende des Anwendungsbereichs einer Animation entlang ihrer Zeitachse festzulegen, d.h. wo entlang der Zeitachse eine Animation startet und endet.

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

### Werte

Die Kurzschreibweise `animation-range` wird als ein oder mehrere einzelne Animationsbereiche, getrennt durch Kommas, angegeben. Jeder Animationsbereich wird als ein bis vier durch Leerzeichen getrennte Werte aus `<timeline-range-name>`, `<length-percentage>` und/oder dem Schlüsselwort `normal` angegeben.

- `<animation-range-start>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein {{cssxref("timeline-range-name")}}, oder ein `<timeline-range-name> <length-percentage>`-Paar, das den {{cssxref("animation-range-start")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt wird, ist der standardmäßige `<length-percentage>` `0%`.
- `<animation-range-end>`
  - : Das Schlüsselwort `normal`, ein `<length-percentage>`, ein `<timeline-range-name>`, oder ein `<timeline-range-name> <length-percentage>`-Paar, das den {{cssxref("animation-range-end")}} darstellt. Wenn ein `<timeline-range-name>` ohne `<length-percentage>` festgelegt wird, ist der standardmäßige `<length-percentage>` `100%`.

## Beschreibung

Die Kurzschreibweise `animation-range` setzt die Werte für `animation-range-start` und `animation-range-end` und definiert, wo entlang der Animationszeitachse die Animation startet und endet. Standardmäßig werden die in einer Keyframe-Animation definierten Stile nur auf ein Element angewendet, während dieses animiert wird. Wann eine Keyframe-Animation auf ein Element angewendet wird, hängt von der Animationszeitachse dieser Animation ab. Standardmäßig werden Animationen nur zwischen dem Beginn und Ende des Zeitachsenbereichs angewendet. Um die Animation außerhalb dieses Bereichs anzuwenden, setzen Sie {{cssxref("animation-fill-mode")}} auf `backwards`, `forwards` oder `both`. Diese drei `animation-fill-mode` Werte wenden die ersten Keyframe-Stile bis zum Beginn des Bereichs, die letzten Keyframe-Stile nach dem Ende der Animation oder beides vor und nach dem Ende an.

Der Bereich des {{Glossary("Scroll_container", "Scrollports")}}, der als Verfügbarkeitsbereich für die Fortschrittsansicht bekannt ist, ist der Bereich, innerhalb dessen das grundlegende Element einer Animation mit [benannter Fortschrittszeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) als sichtbar betrachtet wird. Standardmäßig umfasst dies den gesamten Bereich des Scrollports, kann jedoch mit der Eigenschaft {{cssxref("view-timeline-inset")}} angepasst werden.

Wenn zwei Werte als Komponenten der `<animation-range>`-Eigenschaft angegeben werden, werden sie in der Reihenfolge `<animation-range-start>` und dann `<animation-range-end>` interpretiert. Der Wert jeder Komponente ist entweder das Schlüsselwort `normal`, ein {{cssxref("length-percentage")}}, oder ein optional gefolgter {{cssxref("timeline-range-name")}} durch ein `<length-percentage>`. Diese Werte sind durch Leerzeichen getrennt. Normal entspricht `0%` für den Start und `100%` für das Ende. Das Setzen von `normal` mit einem `<length-percentage>` für den Start- oder Endbereich ist ungültig.

### Startbereich definieren und Endbereich standardmäßig festlegen

Wenn Sie nur den `<animation-range-start>` definieren, entweder durch Setzen eines einzelnen {{cssxref("length-percentage")}}, eines einzelnen {{cssxref("timeline-range-name")}}, oder des Schlüsselworts `normal`, oder durch Angabe eines einzelnen `<timeline-range-name>` gefolgt von einem einzelnen `<length-percentage>`, folgt der berechnete Wert von `<animation-range-end>` bestimmten Regeln:

Wenn der Wert ein einzelnes `<length-percentage>` oder das Schlüsselwort `normal` ist, definiert dieser Wert den `<animation-range-start>` und `<animation-range-end>` wird implizit auf `normal` gesetzt. Zum Beispiel:

- `animation-range: 20%;` entspricht `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` entspricht `animation-range-start: normal; animation-range-end: normal;`

Wenn der Wert ein einzelner {{cssxref("timeline-range-name")}} (ohne folgendes `<length-percentage>`) ist, wird dieser Zeitachsenbereichsname sowohl auf die Komponenten `<animation-range-start>` als auch `<animation-range-end>` angewendet, und die Bereiche `0%` bzw. `100%` sind impliziert. Zum Beispiel:

- `animation-range: contain;` entspricht `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` entspricht `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Wenn der Wert ein einzelner `<timeline-range-name>` mit einem einzelnen darauf folgenden `<length-percentage>` in dieser Reihenfolge ist, definiert das Paar den `<animation-range-start>`, und der angegebene `<timeline-range-name>` wird auf den `<animation-range-end>` bei `100%` angewendet. Zum Beispiel:

- `animation-range: cover 20%;` entspricht `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` entspricht `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Explizite Definition von Start- und Endbereich mit zwei Werten

Wenn zwei oder mehr Werte in Ihrer `animation-range`-Deklaration enthalten sind und die Werte etwas anderes als ein einzelner `<timeline-range-name>` gefolgt von einem `<length-percentage>` sind, werden sowohl `<animation-range-start>` als auch `<animation-range-end>` explizit festgelegt.

Wenn Sie zwei Werte angeben und der erste Wert das Schlüsselwort `normal` oder ein `<length-percentage>` ist, definiert dieser Wert den `<animation-range-start>`, und der zweite Wert definiert den `<animation-range-end>`. Zum Beispiel:

- `animation-range: normal 25%;` entspricht `animation-range-start: normal; animation-range-end: 25%;`
- `animation-range: 25% 50%;` entspricht `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` entspricht `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` entspricht `animation-range-start: 25%; animation-range-end: normal;`

### Mehrere Animationen

Bei der Angabe von Bereichen für mehrere Animationen wird die Kurzschreibweise `animation-range` als ein oder mehrere einzelne Animationsbereiche angegeben, getrennt durch Kommas. Jeder Animationsbereich wird auf die Animationen in der Reihenfolge angewendet, in der die {{cssxref("animation-name")}}s erscheinen. Bei Situationen, in denen die Anzahl der Animationen und die Werte der `animation-range`-Eigenschaft nicht übereinstimmen, werden, wenn es mehr `animation-range`-Werte als Animationen gibt, die zusätzlichen Bereiche ignoriert. Wenn es mehr Animationen als Bereiche gibt, werden die `animation-range`-Werte so oft wiederholt, bis für jede Animation ein entsprechender Bereich vorhanden ist. Zum Beispiel: Wenn wir `animation-range: 25% 75%, normal;` setzen, wird der Animationsbereich aller ungeraden Animationen `25% 75%` und aller geraden Animationen `0% 100%` sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung der `animation-range`-Eigenschaft

In diesem Beispiel verkürzen wir die Dauer der Fortschrittsanimation durch Verwendung der `animation-range`-Eigenschaft, um den Start- und Endpunkt der Animation zu versetzen, und demonstrieren die Wirkung der {{cssxref("animation-fill-mode")}} Eigenschaft auf verkürzten Animationen-Zeitlinien.

#### HTML

In der Mitte einer Textwand platzieren wir ein Element, das wir animieren werden. Wir fügen viel Text hinzu, um sicherzustellen, dass unser Inhalt seinen Container überfüllt, aber dies wird der Kürze wegen ausgeblendet. Wir fügen auch ein Kontrollkästchen hinzu, um die Eigenschaft {{cssxref("animation-fill-mode")}} ein- und auszuschalten, um ihre Wirkung auf verkürzte Animationszeitlinien zu demonstrieren. Auch dies ist ausgeblendet.

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

Wir definieren eine Animation, die die Deckkraft, Größe und Hintergrundfarbe eines Elements animiert, sodass es einblendet, vergrößert und die Farbe ändert, während die Animation fortschreitet. Wir wenden diese Animation auf das `animatedElement` mit der Kurzschreibweise {{cssxref("animation")}} an.

Eine Fortschrittszeitachse wird erstellt, indem die Funktion {{cssxref("animation-timeline/view", "view()")}} als Wert der Eigenschaft {{cssxref("animation-timeline")}} auf unserem `animatedElement` gesetzt wird. Dadurch wird das Element animiert, wenn es beim Scrollen durch das Dokument aufwärts bewegt wird. Wir deklarieren die Eigenschaft `animation-timeline` nach der Kurzschreibweise, da die Kurzschreibweise diese Eigenschaft zurücksetzt.

Zuletzt wird eine `animation-range`-Deklaration festgelegt, damit die Animation später beginnt als erwartet und früher endet.

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

Wir fügen auch bedingte Stile hinzu: Wenn das Kontrollkästchen aktiv ist, wird die Eigenschaft `animation-fill-mode` auf das animierte Element angewendet:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Die anderen Stile sind der Kürze wegen ausgeblendet.

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

Beachten Sie, dass die `from`- oder `0%`-Keyframe-Eigenschaften nicht auf das animierte Element angewendet werden, bis die obere Blockrahmenkante `10%` über die untere Kante des Containers hinausgeht; es ist von voller Größe, vollständig undurchsichtig und magenta. Zu diesem Zeitpunkt wird die Animation angewendet und es wird mit den Werten gestylt, die durch den `0%` [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) definiert sind. Wenn der `animation-range-end` erreicht wird, 25% vom oberen Rand des Scrollports, kehrt es zu seinem ursprünglichen Styling zurück.

In der Regel sollten Sie `animation-fill-mode: both` festlegen, wenn Sie [scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) erstellen. Der Sprung zum Standardzustand erfolgt, weil wir die {{cssxref("animation-fill-mode")}} Eigenschaft nicht auf das Element gesetzt haben, die verwendet werden kann, um die Stile einer Animation auf ein Element vor und nach der Ausführung der Animation anzuwenden. Wir haben die Eigenschaft in diesem Beispiel zunächst weggelassen, um die Auswirkungen von `animation-range` besser veranschaulichen zu können.

Aktivieren Sie das Kontrollkästchen, um die Eigenschaft `animation-fill-mode` auf das animierte Element anzuwenden und scrollen Sie dann erneut: Die Animationsstile sollten jetzt kontinuierlich angewendet werden.

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
- [Verstehen von Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Visualizer für Zeitachsenbereiche für Ansichten](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
