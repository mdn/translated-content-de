---
title: "`view-timeline` CSS-Eigenschaft"
short-title: view-timeline
slug: Web/CSS/Reference/Properties/view-timeline
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`view-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) definiert den Namen, die Richtung und die Einfügewerte einer [benannten Fortschrittszeitachse in der Ansicht](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline).

## Zusammengesetzte Eigenschaften

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

Die `view-timeline` Kurzschreibweise definiert eine _benannte Fortschrittszeitachse in der Ansicht_, die basierend auf Änderungen der Sichtbarkeit eines Elements (des _Subjekts_) innerhalb eines scrollbaren Elements (_Scroller_) voranschreitet. Die `view-timeline`-Eigenschaft wird auf das Subjekt gesetzt. Wenn das Scroller-Element nicht in der Achsendimension über seinen Container hinausragt oder wenn das Überlaufen verborgen oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitachse erstellt.

Die Sichtbarkeit des Subjekts im Scroller wird verfolgt — standardmäßig steht die Zeitachse auf `0%`, wenn das Subjekt an einem Rand des Scrollers sichtbar wird, und auf `100%`, wenn es den gegenüberliegenden Rand erreicht.

Die `view-timeline` kann drei zusammengesetzte Werte enthalten: einen Namen für die benannte Fortschrittszeitachse, einen Scroll-Achsenwert und bis zu zwei Zeitleisten-Einfügewerte.
Wenn nur ein Wert angegeben wird, ist der Wert der `view-timeline-name`. Der Name wird dann in einer {{cssxref("animation-timeline")}}-Deklaration referenziert, um das Element anzugeben, das animiert wird, während die Zeitachse voranschreitet. Dies kann das Subjektelement sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

Die `view-timeline` Kurzschreibweise kann auf ein Container-Element angewendet werden, um eine Kombination der Werte `<view-timeline-name>`, `<view-timeline-inset>` und `<view-timeline-axis>` festzulegen. Mindestens ein Wert muss angegeben werden. Wenn alle Werte angegeben werden, muss die Reihenfolge `<view-timeline-name>` gefolgt von `<view-timeline-axis>` und/oder `<view-timeline-inset>` sein.

Die in der Komponente `<view-timeline-name>` angegebenen Namen müssen eine durch Kommas getrennte Liste von {{cssxref("dashed-ident")}} Werten sein (was bedeutet, dass sie mit `--` beginnen müssen) oder das Schlüsselwort `none`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschrittszeitachse in der Ansicht

Eine benannte Fortschrittszeitachse `--subject-reveal` wird unter Verwendung der `view-timeline`-Eigenschaft an einem Element mit der `class` `animation` definiert.
Dies wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subject-reveal` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen im Dokument nach oben bewegt wird.

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

Das `subject`-Element und das darin enthaltene `content`-Element werden minimal gestylt, und der Textinhalt wird mit einigen grundlegenden Schriftarten-Einstellungen versehen:

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

Das `<div>` mit der Klasse `subject` bekommt zusätzlich die Klasse `animation` — damit wird `view-timeline` gesetzt, um eine benannte Fortschrittszeitachse zu definieren. Es wird ebenfalls ein `animation-timeline` Name mit demselben Wert vergeben, um zu deklarieren, dass dies das Element ist, das animiert wird, während die Fortschrittszeitachse voranschreitet.

Schließlich wird eine Animation am Element spezifiziert, die dessen Deckkraft und Skalierung animiert, sodass es beim Scrollen verblasst und wächst.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("animation-timeline/view", "view()")}}
- [Leitfaden: CSS scrollgesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
