---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Scrollrichtung für eine [benannte Ansicht-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) fest.

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
  - : Gibt die Scrollrichtung an, die von der Ansicht-Fortschritts-Timeline verwendet wird. Der Wert kann einer der {{cssxref("axis")}} Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.

## Beschreibung

Die Eigenschaft `view-timeline-axis` legt die Richtung oder `<axis>` von [benannten Ansicht-Fortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) fest, die auf dem Box-Modell des Elements basieren.

Standardmäßig Fortschritte CSS {{cssxref("@keyframes")}} Animationen entlang der zeitbasierten Standard-Timeline. Wenn Sie den Animationsfortschritt stattdessen über eine Ansicht-Fortschritts-Timeline setzen, gibt `view-timeline-axis` die Richtung an, die die Timeline-Fortschreitung steuert.

Für Ansicht-Fortschritts-Timelines basiert die Fortschreitung der Animation entlang der Timelines auf der Sichtbarkeit des Elements oder _Subjekts_. Die Eigenschaft `view-timeline-axis` wird auf das Subjekt eingestellt.

Das Subjekt muss innerhalb eines scrollbaren Elements verschachtelt sein. Wenn das scrollbare Element nicht über seinen Container in der Achsenrichtung überfließt oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Fortschrittstimeline erstellt.

Die `view-timeline-axis` ist zusammen mit den Eigenschaften {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} ein Bestandteil der Kurzform-Eigenschaft {{cssxref("view-timeline")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren der Achse der Ansicht-Fortschritts-Timeline

In diesem Beispiel wird eine Ansicht-Fortschritts-Timeline namens `--subject-reveal` mittels der Eigenschaft `view-timeline-name` auf einem Subjektelement mit der Klasse "animation" definiert. Diese Timeline wird dann auf die Animation auf demselben Element angewendet, indem `animation-timeline: --subject-reveal;` verwendet wird.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel eine horizontale (nicht standardmäßige) Scrollleiste verwendet, um die Animation zu steuern.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

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

Im CSS setzen wir das `subject` Element als Quelle einer Ansicht-Fortschritts-Timeline namens `--subject-reveal` mittels der Eigenschaft `view-timeline-name`.
Die Scrollachse wird mit `view-timeline-axis: x;` gesetzt. Wir fügen auch `view-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen, veralteten Werte `horizontal` und `vertical`, anstelle von `x` und `y`, unterstützen.

Das Vorfahrelement `content` wird so gestaltet, dass es horizontal überläuft, indem seine Inhalte mit `display: flex;` und `flex-flow: column wrap;` angeordnet werden.

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

#### Ergebnis

Scrollen Sie die horizontale Leiste am unteren Rand, um das Subjektelement zu animieren, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("animation-timeline/view", "view()")}}
- [Leitfaden: Scroll-driven Animation Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
