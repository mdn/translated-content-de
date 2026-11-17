---
title: CSS-Eigenschaft `view-timeline`
short-title: view-timeline
slug: Web/CSS/Reference/Properties/view-timeline
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`view-timeline`** definiert den Namen, die Richtung und die Inset-Werte einer [benannten View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

## Syntax

```css
/* One component */
view-timeline: none;
view-timeline: --custom_name_for_timeline;

/* Two components */
view-timeline: --custom_name_for_timeline block;
view-timeline: --custom_name_for_timeline y;
view-timeline: none inline;
view-timeline: none x;

/* Three components */
view-timeline: --custom_name_for_timeline block auto;
view-timeline: --custom_name_for_timeline block 20% 200px;

/* Global values */
view-timeline: inherit;
view-timeline: initial;
view-timeline: revert;
view-timeline: revert-layer;
view-timeline: unset;
```

### Werte

- `<view-timeline-name>`
  - : Siehe {{cssxref("view-timeline-name")}}. Der Standardwert ist `none`.
- `<view-timeline-inset>`
  - : Siehe {{cssxref("view-timeline-inset")}}. Der Standardwert ist `auto`.
- `<view-timeline-axis>`
  - : Siehe {{cssxref("view-timeline-axis")}}. Der Standardwert ist `block`.

## Beschreibung

Die Kurzschreibweise `view-timeline` definiert eine _benannte View-Progress-Timeline_, deren Fortschritt von der Sichtbarkeit eines Elements (des _Subjekts_) innerhalb eines scrollbaren Elements (des _Scrollers_) abhängt. Die Eigenschaft `view-timeline` wird für das Subjekt festgelegt. Wenn der Inhalt des Scrollers in Richtung der betreffenden Achse nicht über dessen Begrenzung hinausragt oder wenn überlaufender Inhalt verborgen oder abgeschnitten wird, wird keine Scroll-Progress-Timeline erstellt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt: Standardmäßig steht die Timeline bei `0%`, wenn das Subjekt erstmals an einer Kante des Scrollers sichtbar wird, und bei `100%`, wenn es die gegenüberliegende Kante erreicht.

`view-timeline` kann drei Arten von Werten enthalten: einen Namen für die benannte View-Progress-Timeline, einen Wert für die Scrollachse und bis zu zwei Inset-Werte für die Timeline.
Wird nur ein Wert angegeben, ist dieser der `view-timeline-name`. Auf diesen Namen wird anschließend in einer {{cssxref("animation-timeline")}}-Deklaration verwiesen, um das Element anzugeben, das im Verlauf der Timeline animiert wird. Das kann das Subjekt selbst sein, muss es aber nicht: Sie können auch ein anderes Element animieren, während sich das Subjekt durch den scrollbaren Bereich bewegt.

Die Kurzschreibweise `view-timeline` kann auf ein Containerelement angewendet werden, um eine Kombination aus `<view-timeline-name>`, `<view-timeline-inset>` und `<view-timeline-axis>` festzulegen. Mindestens ein Wert muss angegeben werden. Werden alle Werte angegeben, muss `<view-timeline-name>` zuerst stehen, gefolgt von `<view-timeline-axis>` und/oder `<view-timeline-inset>`.

Die in der Komponente `<view-timeline-name>` angegebenen Namen müssen eine durch Kommas getrennte Liste von {{cssxref("dashed-ident")}}-Werten sein (sie müssen also mit `--` beginnen) oder das Schlüsselwort `none`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benannte View-Progress-Timeline erstellen

Mit der Eigenschaft `view-timeline` wird für ein Subjektelement mit der `class` `animation` eine View-Progress-Timeline namens `--subject-reveal` definiert.
Mit `animation-timeline: --subject-reveal` wird diese Timeline anschließend für dasselbe Element festgelegt. Dadurch wird das Subjektelement animiert, während es beim Scrollen im Dokument nach oben wandert.

#### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

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

Das Element `subject` und das umschließende Element `content` erhalten eine minimale Gestaltung; für den Textinhalt werden grundlegende Schrifteinstellungen festgelegt:

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

Das `<div>` mit der Klasse `subject` erhält außerdem die Klasse `animation`. Hier wird mit `view-timeline` eine benannte View-Progress-Timeline definiert. Mit `animation-timeline` wird derselbe Name zugewiesen, um festzulegen, dass dieses Element im Verlauf der View-Progress-Timeline animiert wird.

Schließlich wird für das Element eine Animation angegeben, die seine Deckkraft und Skalierung verändert. Dadurch wird es eingeblendet und vergrößert, während es sich im Scroller nach oben bewegt.

```css
.animation {
  view-timeline: --subject-reveal block;
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

```css hidden
@layer no-support {
  @supports not (view-timeline: none) {
    body::before {
      content: "Your browser doesn't support the `view-timeline` property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um die Animation des Subjektelements zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("animation-timeline/view", "view()")}}
- [Leitfaden: Timelines für CSS-Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
- [CSS-Scroll-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
