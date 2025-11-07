---
title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten View-Fortschrittszeitleiste_ zu definieren, die basierend auf der Sichtbarkeitsänderung eines Elements (bekannt als _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline` wird am Subjekt festgelegt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig steht die Zeitleiste bei 0%, wenn das Subjekt an einem Rand des Scrollers zuerst sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht. Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Deklaration referenziert, um das Element anzuzeigen, das animiert wird, wenn die Zeitleiste fortschreitet. Dies kann das Subjektelement sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension nicht über seinen Container überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Fortschrittszeitleiste erstellt.

Die Eigenschaften `view-timeline-name`, {{cssxref("view-timeline-axis")}} und {{cssxref("view-timeline-inset")}} können auch mit der {{cssxref("view-timeline")}} Kurzschreibweise festgelegt werden.

## Syntax

```css
view-timeline-name: none;
view-timeline-name: --custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `view-timeline-name` sind:

- `none`
  - : Die Zeitleiste hat keinen Namen.
- `<dashed-ident>`

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine View-Fortschrittszeitleiste definiert, welche dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Eigenschaft referenziert werden kann.

    > [!NOTE] > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Fortschrittszeitleiste

Eine View-Fortschrittszeitleiste mit dem Namen `--subject-reveal` wird mithilfe der `view-timeline-name` Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert.
Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Das `subject` Element und sein enthaltendes `content` Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` gegeben — hier wird `view-timeline-name` festgelegt, um eine benannte View-Fortschrittszeitleiste zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert vergeben, um zu deklarieren, dass dies das Element ist, das animiert wird, während die View-Fortschrittszeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Maßstab animiert und es beim Bewegen des Scrollers einblendet und vergrößert.

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

Scrollen Sie, um das Subjektelement animiert zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline")}}, {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}
- [CSS scroll-basierte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
