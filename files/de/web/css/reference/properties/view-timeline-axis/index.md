---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: 0cd53626ee53abb4fc33cc28c6033ee48e4dd3f5
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Scrollrichtung an, die für eine [benannte Ansicht-Fortschrittszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) verwendet werden soll.

## Syntax

```css
/* Logical property values */
view-timeline-axis: block;
view-timeline-axis: inline;

/* Physical property values */
view-timeline-axis: y;
view-timeline-axis: x;

/* Global values */
view-timeline-axis: inherit;
view-timeline-axis: initial;
view-timeline-axis: revert;
view-timeline-axis: revert-layer;
view-timeline-axis: unset;
```

### Werte

- `<axis>`
  - : Gibt die Scrollrichtung an, die von der Ansicht-Fortschrittszeitleiste verwendet wird. Der Wert kann eines der {{cssxref("axis")}} Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.

## Beschreibung

Die Eigenschaft `view-timeline-axis` gibt die Richtung, oder `<axis>`, der [benannten Ansicht-Fortschrittszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) an, die auf der Box des Elements basieren.

Standardmäßig verlaufen CSS {{cssxref("@keyframes")}} Animationen entlang der zeitbasierten Standardzeitleiste. Wenn Sie den Fortschritt der Animation stattdessen über eine Ansicht-Fortschrittszeitleiste einstellen, gibt `view-timeline-axis` die Richtung an, die den Verlauf der Zeitleiste steuert.

Für Ansicht-Fortschrittszeitleisten basiert die Fortbewegung der Animation entlang der Zeitleisten auf der Sichtbarkeit des Elements oder _Subjekts_. Die Eigenschaft `view-timeline-axis` wird auf das Subjekt gesetzt.

Das Subjekt muss in einem scrollbaren Element verschachtelt sein. Wenn das scrollbare Element in der Achsrichtung seinen Container nicht überläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die `view-timeline-axis` ist zusammen mit den Eigenschaften {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} ein Bestandteil der {{cssxref("view-timeline")}} Kurzschreibweise.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Ansicht-Fortschrittszeitleiste

In diesem Beispiel wird eine Ansicht-Fortschrittszeitleiste namens `--subject-reveal` definiert, indem die `view-timeline-name` Eigenschaft auf einem Subjektelement mit einer Klasse von "animation" verwendet wird. Diese Zeitleiste wird dann auf die Animation desselben Elements angewendet, indem `animation-timeline: --subject-reveal;` verwendet wird.

Um die Wirkung der `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div class="content">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p>
    Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin
    libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
    tincidunt lobortis feugiat vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras.
  </p>

  <p>
    A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat
    nisl vel pretium lectus.
  </p>

  <p>
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris.
  </p>
</div>
```

#### CSS

Im CSS setzen wir das `subject`-Element als Quelle einer Ansicht-Fortschrittszeitleiste namens `--subject-reveal` mit der `view-timeline-name` Eigenschaft. Die Scroll-Achse wird mit `view-timeline-axis: x;` festgelegt. Wir fügen auch `view-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen, veralteten Werte `horizontal` und `vertical` unterstützen, anstatt `x` und `y`.

Das `content`-Übergeordnete Element wird zum horizontalen Überlaufen gebracht, indem seine Inhalte mit `display: flex;` und `flex-flow: column wrap;` angeordnet werden.

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 50%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

p {
  font-family: "Helvetica", "Arial", sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --subject-reveal;
  view-timeline-axis: x;
  view-timeline-axis: horizontal;

  animation: appear 1ms linear both;
  animation-timeline: --subject-reveal;
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
  body::before {
    display: block;
    text-align: center;
    padding: 1em;
  }
  @supports not (view-timeline-axis: inherit) {
    body::before {
      content: "Your browser doesn't support the `view-timeline-axis` property.";
      background-color: wheat;
    }
  }
  @supports (view-timeline-axis: horizontal) {
    body::before {
      content: "Your browser supports legacy values for the `view-timeline-axis` property.";
      background-color: yellow;
    }
  }
}
```

#### Resultat

Scrollen Sie die horizontale Leiste am unteren Rand, um zu sehen, wie das Subjektelement animiert wird, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("view()")}}
- [Leitfaden: Scroll-gesteuerte Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
