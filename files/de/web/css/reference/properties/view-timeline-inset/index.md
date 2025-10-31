---
title: view-timeline-inset
slug: Web/CSS/Reference/Properties/view-timeline-inset
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die CSS-Eigenschaft **`view-timeline-inset`** wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports darstellen, in dem das thematische Element einer _benannten View-Progress-Timeline_ Animation als sichtbar gilt (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für weitere Details). Anders ausgedrückt, ermöglicht dies das Festlegen von Anfangs- und/oder End-Inset-Werten (oder Outset-Werten), die die Position der Timeline versetzen.

Dies kann in Kombination mit oder anstelle von {{cssxref("animation-range")}} und deren Langform-Eigenschaften verwendet werden, die den Anwendungsbereich einer Animation entlang ihrer Timeline festlegen können. Weitere Details finden Sie unter [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations).

> [!NOTE]
> Wenn das Scrollelement nicht über seinen Container in der Achsendimension hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Fortschritts-Timeline erstellt.

Die Eigenschaften `view-timeline-inset`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-name")}} können auch mithilfe der Kurzform-Eigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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

Zulässige Werte für `view-timeline-inset` sind:

- `auto`
  - : Wenn festgelegt, wird das entsprechende {{cssxref("scroll-padding")}} (oder ein äquivalenter Langform-Wert) für diese Kante des Scrollports verwendet. Wenn dies nicht festgelegt ist (oder auf `auto` gesetzt), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken verwenden können, um gegebenenfalls einen anderen Standardwert zu bestimmen.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>`-Wert wird als Inset-/Outset-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Anfangs/Endes der Animation um die angegebene Länge oder den Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Anfangs/Endes der Animation um die angegebene Länge oder den Prozentsatz außerhalb des Scrollports verschoben, d.h. die Animation beginnt, bevor sie im Scrollport erscheint, oder endet, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert das Start-Inset/-Outset in der relevanten Achse (wo die Animation beginnt) und der zweite Wert das End-Inset/-Outset (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden Start- und End-Inset/-Outset auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline mit Inset

Eine View-Progress-Timeline mit dem Namen `--subject-reveal` wird mithilfe der `view-timeline`-Eigenschaft auf einem thematischen Element mit einer `class` von `animation` definiert.
Dies wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das thematische Element animiert wird, während es nach oben durch das Dokument bewegt wird, wenn gescrollt wird.

Eine `view-timeline-inset`-Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen und früher beenden zu lassen.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

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

Das `subject`-Element und sein enthaltendes `content`-Element sind minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Dem `<div>` mit der Klasse `subject` wird außerdem eine Klasse `animation` gegeben — hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset`-Deklaration, um die Animation später als erwartet zu beginnen und früher zu beenden. Es erhält auch einen `animation-timeline`-Namen mit demselben Wert, um anzugeben, dass dies das Element sein wird, das animiert wird, während die View-Progress-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element angegeben, die seine Deckkraft und Skalierung animiert, sodass es verblasst und größer wird, während es sich den Scroller hinaufbewegt.

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

Scrollen Sie, um das sich animierende thematische Element zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
