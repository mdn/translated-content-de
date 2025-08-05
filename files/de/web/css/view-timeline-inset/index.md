---
title: view-timeline-inset
slug: Web/CSS/view-timeline-inset
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um ein oder zwei Werte anzugeben, die eine Anpassung an die Position des Scrollport (siehe {{Glossary("Scroll_container", "Scroll-Container")}} für mehr Details) darstellen, in dem das Betreffselement einer _benannten Ansicht-Fortschritts-Timeline_-Animation als sichtbar angesehen wird. Anders ausgedrückt, erlaubt dies Ihnen, Start- und/oder End-Inset- (oder Outset-) Werte anzugeben, die die Position der Timeline versetzen.

Dies kann mit oder anstelle von {{cssxref("animation-range")}} und seinen Langform-Eigenschaften kombiniert werden, die verwendet werden können, um den Anwendungsbereich einer Animation entlang ihrer Timeline festzulegen.
Siehe [CSS Scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroller-Element in der Achsenrichtung sein Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Fortschritts-Timeline erstellt.

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
  - : Wenn gesetzt, wird die entsprechende {{cssxref("scroll-padding")}} (oder gleichwertiger Langform-Wert) für diese Kante des Scrollports verwendet. Wenn dies nicht gesetzt ist (oder auf `auto` gesetzt), wird der Wert normalerweise 0 sein, obwohl einige Benutzeragenten Heuristiken verwenden können, um einen anderen Standardwert festzulegen, wenn es angebracht ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Inset-/Outset-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endes der Animation um die angegebene Länge oder Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endes der Animation um die angegebene Länge oder Prozentsatz außerhalb des Scrollports verschoben, d.h. es wird mit der Animation beginnen, bevor es im Scrollport erscheint, oder wird nach dem Verlassen des Scrollports beenden.

Wenn zwei Werte angegeben sind, stellt der erste Wert das Start-Inset/Outset in der relevanten Achse dar (wo die Animation beginnt) und der zweite Wert das End-Inset/Outset (wo die Animation endet). Wenn nur ein Wert angegeben ist, werden Start- und End-Inset/Outset beide auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Ansicht-Fortschritts-Timeline mit Inset

Eine Ansicht-Fortschritts-Timeline mit dem Namen `--subject-reveal` wird mit der `view-timeline` Eigenschaft auf einem Betreffselement mit einer `class` von `animation` definiert.
Dies wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Betreffselement animiert wird, während es sich nach oben durch das Dokument bewegt, während es gescrollt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls gesetzt, um die Animation später als erwartet beginnen und früher enden zu lassen.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

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

Das `subject`-Element und sein enthaltendes `content`-Element sind minimal gestylt, und der Textinhalt bekommt einige grundlegende Schriftart-Einstellungen:

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
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse von `animation` — hier wird `view-timeline` gesetzt, um eine benannte Ansicht-Fortschritts-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, um die Animation später als erwartet beginnen und früher enden zu lassen. Es wird auch ein `animation-timeline` Name mit demselben Wert gegeben, um anzugeben, dass dies das Element sein wird, das animiert wird, während die Ansicht-Fortschritts-Timeline fortschreitet.

Zuletzt wird eine Animation auf das Element spezifiziert, die seine Opazität und Skalierung animiert, wodurch es verblasst und größer wird, während es den Scroller hinauf bewegt.

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

Scrollen Sie, um das animierte Betreffselement zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
