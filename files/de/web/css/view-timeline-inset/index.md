---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: bb52c01c1534149f1e3e4755e2576ef7828ecc0f
---

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um ein oder zwei Werte anzugeben, die eine Anpassung an die Position des Scrollports (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für weitere Details) darstellen, in dem das Zielelement einer _benannten Fortschrittszeitleisten_-Animation als sichtbar angesehen wird. Anders ausgedrückt, ermöglicht dies das Festlegen von Start- und/oder Endinset-(oder Outset-)Werten, die die Position der Zeitleiste versetzen.

Dies kann zusammen mit oder anstelle von {{cssxref("animation-range")}} und den zugehörigen Langform-Eigenschaften verwendet werden, die verwendet werden können, um den Anwendungsbereich einer Animation entlang ihrer Zeitleiste festzulegen.
Siehe [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scrollelement sein Container in der Achsendimension nicht überläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die `view-timeline-inset`, {{cssxref("view-timeline-axis")}}, und {{cssxref("view-timeline-name")}} Eigenschaften können auch mit der {{cssxref("view-timeline")}} Kurzform-Eigenschaft gesetzt werden.

## Syntax

```css
/* Single value */
view-timeline-inset: auto;
view-timeline-inset: 200px;
view-timeline-inset: 20%;

/* Two values */
view-timeline-inset: 20% auto;
view-timeline-inset: auto 200px;
view-timeline-inset: 20% 200px;
```

### Werte

Erlaubte Werte für `view-timeline-inset` sind:

- `auto`
  - : Wenn gesetzt, wird das entsprechende {{cssxref("scroll-padding")}} (oder der entsprechende Langform-Wert) für diese Kante des Scrollports verwendet. Wenn dies nicht gesetzt (oder auf `auto` gesetzt) ist, beträgt der Wert normalerweise 0, obwohl einige Benutzeragenten Heuristiken verwenden könnten, um einen anderen Standardwert zu bestimmen, wenn dies angebracht ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>`-Wert wird als Inset-/Outset-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Ende der Animation innerhalb des Scrollports um die angegebene Länge oder den angegebenen Prozentsatz verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Ende der Animation außerhalb des Scrollports um die angegebene Länge oder den angegebenen Prozentsatz verschoben, d.h. es beginnt zu animieren, bevor es im Scrollport erscheint, oder beendet das Animieren, nachdem es den Scrollport verlassen hat.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert das Start-Inset/Outset in der relevanten Achse (wo die Animation beginnt) und der zweite Wert repräsentiert das End-Inset/Outset (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden Start- und End-Inset/Outset auf den gleichen Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschrittszeitleiste mit Inset

Eine Fortschrittszeitleiste namens `--subject-reveal` wird definiert, indem die `view-timeline` Eigenschaft auf einem Zielelement mit einer `class` von `animation` verwendet wird.
Dies wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Zielelement animiert wird, wenn es nach oben durch das Dokument bewegt wird, während es gescrollt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen und früher enden zu lassen.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

```html
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

  <div class="subject animation"></div>

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
</div>
```

#### CSS

Das `subject` Element und das umgebende `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftsatzeinstellungen:

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
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
```

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` gesetzt, um eine benannte Fortschrittszeitleiste zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um anzugeben, dass dies das animierte Element ist, während die Fortschrittszeitleiste voranschreitet.

Zuletzt wird eine Animation auf dem Element angegeben, die dessen Opazität und Maßstab animiert, wodurch es verblasst und sich vergrößert, wenn es sich nach oben im Scroller bewegt.

```css
.animation {
  view-timeline: --subject-reveal block;
  view-timeline-inset: 70% -100px;
  animation-timeline: --subject-reveal;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Ergebnis

Scrollen Sie, um zu sehen, wie das Zielelement animiert wird.

{{EmbedLiveSample("Erstellen einer benannten Fortschrittszeitleiste mit Inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
