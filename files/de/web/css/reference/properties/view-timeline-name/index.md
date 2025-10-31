---
title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten View-Progress-Timeline_ zu definieren, die basierend auf der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline` wird auf dem Subjekt festgelegt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Timeline bei 0%, wenn das Subjekt zum ersten Mal an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.
Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Deklaration referenziert, um das Element anzugeben, das animiert werden soll, während die Timeline fortschreitet. Dies kann das Subjekt-Element sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn das Scroller-Element seinen Container in der Achsenrichtung nicht überfließt oder wenn der Überfluss versteckt oder abgeschnitten ist, wird keine Scroll-Progress-Timeline erstellt.

Die Eigenschaften `view-timeline-name`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} können auch mit der Kurzform {{cssxref("view-timeline")}} gesetzt werden.

## Syntax

```css
view-timeline-name: none;
view-timeline-name: --custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `view-timeline-name` sind:

- `none`
  - : Die Timeline hat keinen Namen.
- `<dashed-ident>`
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine View-Progress-Timeline definiert, welcher dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Eigenschaft referenziert werden kann.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, um Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progress-Timeline

Eine View-Progress-Timeline namens `--subject-reveal` wird mithilfe der Eigenschaft `view-timeline-name` auf einem Subjektelement mit der `class` von `animation` definiert.
Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Dem `<div>` mit der Klasse `subject` wird ebenfalls die Klasse `animation` zugewiesen — hier wird `view-timeline-name` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Es erhält auch einen `animation-timeline` Namen mit demselben Wert, um zu erklären, dass dies das animierte Element ist, während die View-Progress-Timeline fortschreitet.

Zuletzt wird auf dem Element eine Animation spezifiziert, die seine Deckkraft und Skalierung animiert, wodurch es ausgeblendet und beim Scrollen in der Größe nach oben skaliert wird.

```css
.animation {
  view-timeline-name: --subject-reveal;
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

Scrollen Sie, um das animierte Subjekt-Element zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
