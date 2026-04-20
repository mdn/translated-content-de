---
title: "`view-timeline-inset` CSS property"
short-title: view-timeline-inset
slug: Web/CSS/Reference/Properties/view-timeline-inset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`view-timeline-inset`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um einen oder zwei Werte anzugeben, die eine Anpassung der Position des Scrollports darstellen (siehe {{Glossary("Scroll_container", "Scrollcontainer")}} für weitere Details), in dem das Subjektelement einer Animation einer _benannten Sichtfortschritts-Timeline_ als sichtbar angesehen wird. Anders ausgedrückt ermöglicht dies, Start- und/oder End-Einsetzungen (oder Außensetzungen) anzugeben, die die Position der Timeline versetzen.

Diese Eigenschaft kann mit {{cssxref("animation-range")}} und deren Langform-Eigenschaften kombiniert oder anstelle davon verwendet werden, um den Anwendungsbereich einer Animation entlang ihrer Timeline festzulegen.
Siehe [CSS-Scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) für weitere Details.

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Fortschritts-Timeline erstellt.

Die `view-timeline-inset`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-name")}} Eigenschaften können auch mit der Abkürzungseigenschaft {{cssxref("view-timeline")}} festgelegt werden.

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
  - : Wenn festgelegt, wird der entsprechende {{cssxref("scroll-padding")}} (oder gleichwertiger Langform-Wert) für diese Kante des Scrollports verwendet. Wenn dies nicht festgelegt ist (oder auf `auto` gesetzt ist), beträgt der Wert normalerweise 0, obwohl einige User Agents Heuristiken verwenden können, um einen anderen Standardwert zu bestimmen, wenn dies angebracht ist.
- {{cssxref("length-percentage")}}
  - : Jeder gültige `<length-percentage>` Wert wird als Einsetz-/Außensetz-Wert akzeptiert.
    - Wenn der Wert positiv ist, wird die Position des Start-/Endpunkts der Animation um die angegebene Länge oder den Prozentsatz innerhalb des Scrollports verschoben.
    - Wenn der Wert negativ ist, wird die Position des Start-/Endpunkts der Animation um die angegebene Länge oder den Prozentsatz außerhalb des Scrollports verschoben, d.h. sie beginnt zu animieren, bevor sie im Scrollport erscheint, oder beendet das Animieren, nachdem sie den Scrollport verlassen hat.

Wenn zwei Werte angegeben werden, steht der erste Wert für die Start-Einsetzung/Außensetzung in der relevanten Achse (wo die Animation beginnt) und der zweite Wert für die End-Einsetzung/Außensetzung (wo die Animation endet). Wenn nur ein Wert angegeben wird, werden sowohl Start- als auch End-Einsetzung/Außensetzung auf denselben Wert gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Sichtfortschritts-Timeline mit Einsetzung

Eine Sichtfortschritts-Timeline, die `--subject-reveal` genannt wird, wird mithilfe der `view-timeline` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert. Dies wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird.

Eine `view-timeline-inset` Deklaration wird ebenfalls eingestellt, um die Animation später als erwartet beginnen zu lassen und früher zu beenden.

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline` eingestellt, um eine benannte Sichtfortschritts-Timeline zu definieren. Wir geben ihm auch eine `view-timeline-inset` Deklaration, um die Animation später als erwartet beginnen zu lassen und früher zu beenden. Es wird auch ein `animation-timeline` Name mit demselben Wert zugewiesen, um zu erklären, dass dies das Element ist, das animiert wird, während die Sichtfortschritts-Timeline fortschreitet.

Schließlich wird eine Animation auf dem Element angegeben, die seine Deckkraft und Skalierung animiert, wodurch es beim Aufwärtsschieben im Scroller einblendet und größer wird.

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

Scrollen Sie, um das Subjektelement animiert zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline with inset", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-name")}}
- [CSS-Scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
