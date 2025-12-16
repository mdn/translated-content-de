---
title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: aefcc1599f9a67bfb4e0e5f48b2175eac61739fe
---

Die **`view-timeline-axis`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Scrollrichtung, die für eine [benannte Sichtfortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline) verwendet werden soll.

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
  - : Spezifiziert die Scrollrichtung, die von der Sichtfortschritts-Timeline verwendet wird. Der Wert kann einer der {{cssxref("axis")}} Schlüsselwörter sein: `block`, `inline`, `x` oder `y`. Der Standardwert ist `block`.

## Beschreibung

Die `view-timeline-axis` Eigenschaft spezifiziert die Richtung, oder `<axis>`, von [benannten Sichtfortschritts-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline), die auf dem Rahmen des Elements basieren.

Standardmäßig verlaufen CSS {{cssxref("@keyframes")}} Animationen entlang der zeitbasierten Standard-Timeline. Wenn Sie stattdessen den Animationsfortschritt über eine Sichtfortschritts-Timeline einstellen, legt `view-timeline-axis` die Richtung fest, die den Fortschritt der Timeline steuert.

Bei Sichtfortschritts-Timelines basiert der Fortschritt der Animation entlang der Timelines auf der Sichtbarkeit des Elements oder des _Subjekts_. Die `view-timeline-axis` Eigenschaft wird am Subjekt gesetzt.

Das Subjekt muss in einem scrollbaren Element verschachtelt sein. Wenn das scrollbare Element in der Achsendimension nicht über seinen Container hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Fortschritts-Timeline erstellt.

Die `view-timeline-axis` ist zusammen mit den Eigenschaften {{cssxref("view-timeline-inset")}} und {{cssxref("view-timeline-name")}} Bestandteil der Kurzform {{cssxref("view-timeline")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definition der Achse der Sichtfortschritts-Timeline

In diesem Beispiel wird eine Sichtfortschritts-Timeline namens `--subject-reveal` mittels der `view-timeline-name` Eigenschaft an einem Subjektelement mit der Klasse "animation" definiert. Diese Timeline wird dann auf die Animation desselben Elements angewendet, mit `animation-timeline: --subject-reveal;`.

Um die Wirkung von `view-timeline-axis` zu demonstrieren, wird in diesem Beispiel ein horizontaler (nicht standardmäßiger) Scrollbalken verwendet, um die Animation zu steuern.

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

Im CSS setzen wir das `subject` Element als Quelle einer Sichtfortschritts-Timeline namens `--subject-reveal` mit der `view-timeline-name` Eigenschaft. Die Scrollachse wird mit `view-timeline-axis: x;` festgelegt. Wir fügen auch `view-timeline-axis: horizontal;` für Browser hinzu, die die nicht standardmäßigen, veralteten Werte `horizontal` und `vertical` statt `x` und `y` unterstützen.

Das `content` Vorfahrenelement wird horizontal überlaufen, indem seine Inhalte mit `display: flex;` und `flex-flow: column wrap;` layoutet werden.

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

Scrollen Sie die horizontale Leiste unten, um das Subjektelement zu animieren, während Sie scrollen.

{{EmbedLiveSample("Defining_the_axis_of_the_view_progress_timeline", "100%", "450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- {{cssxref("view()")}}
- [Leitfaden: Scroll-gesteuerte Animationstimelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
