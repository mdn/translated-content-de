---
title: view-timeline
slug: Web/CSS/Reference/Properties/view-timeline
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die **`view-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) definiert den Namen, die Richtung und die Inset-Werte einer [benannten Fortschritts-Timeline der Ansicht](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).

## Bestandteile

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

### Beschreibung

Die `view-timeline`-Kurzschreibweise definiert eine _benannte Fortschritts-Timeline der Ansicht_, die basierend auf Änderungen der Sichtbarkeit eines Elements (dem _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. Die `view-timeline`-Eigenschaft wird auf dem Subjekt gesetzt. Wenn das Scroller-Element in der Achsendimension nicht über seinen Container hinausragt oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Fortschritts-Timeline erstellt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig steht die Timeline bei `0%`, wenn das Subjekt zuerst an einem Rand des Scrollers sichtbar ist, und bei `100%`, wenn es den gegenüberliegenden Rand erreicht.

Die `view-timeline` kann drei Bestandteilwerte enthalten: einen Namen für die benannte Fortschritts-Timeline der Ansicht, einen Scroll-Achsenwert und bis zu zwei Timeline-Inset-Werte. Wenn nur ein Wert angegeben wird, ist der Wert der `view-timeline-name`. Der Name wird dann in einer {{cssxref("animation-timeline")}}-Deklaration referenziert, um das Element anzugeben, das animiert wird, während die Timeline fortschreitet. Dies kann das Subjekt sein, muss es aber nicht — Sie können ein anderes Element animieren, während das Subjekt sich durch den Scrollbereich bewegt.

Die `view-timeline`-Kurzschreibweise kann auf ein Container-Element angewendet werden, um eine Kombination der Werte `<view-timeline-name>`, `<view-timeline-inset>` und `<view-timeline-axis>` festzulegen. Mindestens ein Wert muss angegeben werden. Wenn alle Werte angegeben sind, muss die Reihenfolge `<view-timeline-name>` gefolgt von `<view-timeline-axis>` und/oder `<view-timeline-inset>` sein.

Die im `<view-timeline-name>`-Bestandteil angegebenen Namen müssen eine Liste von kommagetrennten {{cssxref("dashed-ident")}}-Werten sein (was bedeutet, dass sie mit `--` beginnen müssen) oder das Schlüsselwort `none`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschritts-Timeline der Ansicht

Eine Fortschritts-Timeline der Ansicht mit dem Namen `--subject-reveal` wird mithilfe der `view-timeline`-Eigenschaft auf einem Subjekt-Element mit einer `class` von `animation` definiert. Diese wird dann als Timeline für dasselbe Element mithilfe von `animation-timeline: --subject-reveal` festgelegt. Dadurch wird das Subjekt-Element animiert, während es beim Scrollen nach oben durch das Dokument bewegt wird.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

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

Dem `<div>` mit der Klasse `subject` wird auch die Klasse `animation` zugewiesen — hier wird `view-timeline` gesetzt, um eine benannte Fortschritts-Timeline der Ansicht zu definieren. Es wird auch ein `animation-timeline`-Name mit demselben Wert zugewiesen, um anzugeben, dass dies das Element ist, das animiert wird, während die Fortschritts-Timeline der Ansicht fortschreitet.

Abschließend wird eine Animation auf das Element angewendet, die seine Deckkraft und Skalierung animiert, wodurch es beim Bewegen des Scrollers verblasst und wächst.

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
      padding: 1em;
    }
  }
}
```

#### Ergebnis

Scrollen Sie, um das Subjektelement animieren zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)
- [Leitfaden: CSS Scroll-getriebene Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
- [CSS Scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
