---
title: view-timeline-name
slug: Web/CSS/view-timeline-name
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um den Namen einer _benannten Ansichtsprozesstimeline_ zu definieren, die basierend auf der Veränderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline` wird auf das Subjekt gesetzt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig befindet sich die Timeline bei 0 %, wenn das Subjekt zuerst an einem Rand des Scrollers sichtbar ist, und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.
Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um das Element anzugeben, das animiert wird, während die Timeline fortschreitet. Dies kann das Subjektelement sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn das Element seinen Container in der Achse nicht überläuft oder wenn das Overflow verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

Die {{cssxref("view-timeline-axis")}} und `view-timeline-name` Eigenschaften können auch mit der [`view-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurzschreibweise gesetzt werden.

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

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Ansichtsprozesstimeline definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Eigenschaft referenziert werden kann.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte müssen mit `--` beginnen, was hilft, Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellung einer benannten Ansichtsprozesstimeline

Eine Ansichtsprozesstimeline mit dem Namen `--subjectReveal` wird mit der `view-timeline-name` Eigenschaft auf einem Subjektelement mit der `class` `animation` definiert.
Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal formatiert, und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse `animation` — hier wird `view-timeline-name` gesetzt, um eine benannte Ansichtsprozesstimeline zu definieren. Es wird auch ein `animation-timeline` Name mit dem gleichen Wert gegeben, um zu deklarieren, dass dies das Element sein wird, das animiert wird, während die Ansichtsprozesstimeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, was dazu führt, dass es einblendet und größer wird, während es den Scroller nach oben bewegt.

```css
.animation {
  view-timeline-name: --subjectReveal;
  animation-timeline: --subjectReveal;

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

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline`](/de/docs/Web/CSS/view-timeline), [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)