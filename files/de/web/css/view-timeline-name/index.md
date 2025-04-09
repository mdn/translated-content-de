---
title: view-timeline-name
slug: Web/CSS/view-timeline-name
l10n:
  sourceCommit: d9cdeed408531b3a224d29b52e42d909c000c2a1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Fortschrittstimeline für Ansichten_ zu definieren. Diese wird basierend auf der Sichtbarkeitsänderung eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreiten. `view-timeline` wird auf dem Subjekt gesetzt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig ist die Timeline bei 0%, wenn das Subjekt an einem Rand des Scrollers erstmals sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Element anzugeben, das animiert wird, während die Timeline fortschreitet. Dies kann das Subjektelement sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension nicht über seinen Container hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Fortschrittstimeline erstellt.

Die `view-timeline-name`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} Eigenschaften können auch mit der {{cssxref("view-timeline")}} Kurzschreibweise gesetzt werden.

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

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Fortschrittstimeline für Ansichten definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Eigenschaft referenziert werden kann.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellung einer benannten Fortschrittstimeline für Ansichten

Eine Fortschrittstimeline für Ansichten namens `--subjectReveal` wird mit der `view-timeline-name` Eigenschaft auf einem Subjektelement mit der `class` von `animation` definiert. Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subjectReveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es nach oben durch das Dokument bewegt wird, wenn es gescrollt wird.

#### HTML

Das HTML für das Beispiel ist unten dargestellt.

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

Das `Subjekt`-Element und sein enthaltendes `Content`-Element werden minimal gestaltet, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält auch eine Klasse von `animation` — hier wird `view-timeline-name` gesetzt, um eine benannte Fortschrittstimeline für Ansichten zu definieren. Es wird ebenfalls ein `animation-timeline` Name mit demselben Wert vergeben, um zu erklären, dass dies das Element sein wird, das animiert wird, während die Fortschrittstimeline für Ansichten fortschreitet.

Zuletzt wird auf dem Element eine Animation angegeben, die seine Opazität und Skalierung animiert, sodass es einblendet und an Größe zunimmt, während es im Scroller nach oben bewegt wird.

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

Scrollen Sie, um zu sehen, wie das Subjektelement animiert wird.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}
- [CSS scroll-basierte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
