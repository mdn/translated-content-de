---
title: view-timeline-name
slug: Web/CSS/view-timeline-name
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um den Namen einer _benannten Ansichtsfortschritts-Zeitachse_ zu definieren, welche durch die Veränderung der Sichtbarkeit eines Elements (bekannt als das _Subject_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline` wird auf das Subject gesetzt.

Die Sichtbarkeit des Subjects innerhalb des Scrollers wird verfolgt — standardmäßig ist die Zeitachse bei 0%, wenn das Subject erstmals an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um anzugeben, welches Element animiert wird, wenn die Zeitachse voranschreitet. Dies kann das Subject-Element sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subject durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn das Scroller-Element seinen Container in der Achsendimension nicht überläuft oder wenn der Überlauf versteckt oder geklippt ist, wird keine Fortschritts-Zeitachse erzeugt.

Die `view-timeline-name`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} Eigenschaften können auch mit der {{cssxref("view-timeline")}} Kurzschreibweise gesetzt werden.

## Syntax

```css
view-timeline-name: none;
view-timeline-name: --custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `view-timeline-name` sind:

- `none`
  - : Die Zeitachse hat keinen Namen.
- `<dashed-ident>`

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Ansichtsfortschritts-Zeitachse definiert, die dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Eigenschaft referenziert werden kann.

    > [!NOTE] > [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte müssen mit `--` beginnen, um Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Ansichtsfortschritts-Zeitachse

Eine Ansichtsfortschritts-Zeitachse namens `--subjectReveal` wird mithilfe der `view-timeline-name` Eigenschaft auf einem Subject-Element mit einer `class` von `animation` definiert. Diese wird dann als Zeitachse für dasselbe Element mit `animation-timeline: --subjectReveal;` festgelegt. Das Ergebnis ist, dass das Subject-Element animiert wird, während es beim Scrollen durch das Dokument nach oben bewegt wird.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

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

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schriftarteinstellungen:

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

Das `<div>` mit der Klasse `subject` erhält ebenfalls die Klasse `animation` — hier wird `view-timeline-name` gesetzt, um eine benannte Ansichtsfortschritts-Zeitachse zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert angegeben, um zu deklarieren, dass dies das Element ist, das animiert wird, während die Ansichtsfortschritts-Zeitachse fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Größe animiert, wodurch es beim Bewegen nach oben im Scroller verblasst und größer wird.

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

Scrollen Sie, um das animierte Subject-Element zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}
- [CSS Scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
