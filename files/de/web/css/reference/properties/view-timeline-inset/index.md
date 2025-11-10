---
title: view-timeline-inset
slug: Web/CSS/Reference/Properties/view-timeline-inset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung an die Position des Scrollports darstellen (siehe {{Glossary("Scroll_container", "Scroll container")}} für weitere Details), in dem das Subjektelement einer _benannten View-Progress-Timeline_-Animation als sichtbar angesehen wird. Mit anderen Worten, dies ermöglicht es Ihnen, Start- und/oder End-Inset- (oder Outset-)Werte festzulegen, die die Position der Timeline versetzen.

Dies kann kombiniert oder anstelle von {{cssxref("animation-range")}} und seinen Langform-Eigenschaften verwendet werden, die zum Festlegen des Anwendungsbereichs einer Animation entlang ihrer Timeline verwendet werden können. Siehe [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroller-Element seinen Container in der Achsenrichtung nicht überläuft oder wenn das Überlaufrollen ausgeblendet oder abgeschnitten wird, wird keine Scroll-Fortschrittstimeline erstellt.

Die `view-timeline-inset`, {{cssxref("view-timeline-axis")}}, und {{cssxref("view-timeline-name")}} Eigenschaften können auch mithilfe der {{cssxref("view-timeline")}} Kurzform-Eigenschaft gesetzt werden.

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
  - : Wenn festgelegt, wird das entsprechende {{cssxref("scroll-padding")}} (oder der gleichwertige Langform-Wert) für diese Kante des Scrollports verwendet. Falls dies nicht festgelegt ist (oder auf `auto` gesetzt ist), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken verwenden können, um einen anderen Standardwert festzulegen, wenn es angebracht ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>`-Wert wird als Inset-/Outset-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endpunkts der Animation um die angegebene Länge oder den Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endpunkts der Animation um die angegebene Länge oder den Prozentsatz außerhalb des Scrollports verschoben, d.h. sie beginnt zu animieren, bevor sie im Scrollport erscheint, oder endet mit der Animation, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben werden, repräsentiert der erste Wert das Start-Inset/Outset in der entsprechenden Achse (wo die Animation beginnt) und der zweite Wert das End-Inset/Outset (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden Start- und End-Inset/Outset auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline mit Inset

Eine View-Progress-Timeline mit dem Namen `--subject-reveal` wird mit der Eigenschaft `view-timeline` auf einem Subjektelement mit einer `class` von `animation` definiert. Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

Eine `view-timeline-inset`-Deklaration wird ebenfalls festgelegt, um die Animation später als erwartet beginnen und früher enden zu lassen.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

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

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal gestylt, und dem Textinhalt werden einige grundlegende Schrifteinstellungen zugewiesen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` zugewiesen — hier wird `view-timeline` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset`-Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen. Ihm wird auch ein `animation-timeline`-Name mit demselben Wert zugewiesen, um zu deklarieren, dass dies das Element sein wird, das animiert wird, während die View-Progress-Timeline fortschreitet.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Transparenz und Skalierung animiert, wodurch es einblendet und sich vergrößert, während es den Scroller hinaufbewegt.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
