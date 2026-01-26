---
title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die Namen von einem oder mehreren [benannten View-Progresst-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline), die mit dem Element verknüpft sind.

## Syntax

```css
/* Keyword value */
view-timeline-name: none;

/* Custom identifier */
view-timeline-name: --custom_name_for_timeline;

/* Multiple identifiers */
view-timeline-name: --first_timeline_name, --another_timeline_name;

/* Global values */
view-timeline-name: inherit;
view-timeline-name: initial;
view-timeline-name: revert;
view-timeline-name: revert-layer;
view-timeline-name: unset;
```

### Werte

- `none`
  - : Zeigt an, dass die Timeline keinen Namen besitzt. Dies ist der Standardwert.
- `<dashed-ident>`
  - : Spezifiziert eine durch Kommata getrennte Liste von {{cssxref("dashed-ident")}} benutzerdefinierten Namenskennungen. Alle `<dashed-ident>`-Werte müssen mit `--` beginnen, um Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Beschreibung

Die Eigenschaft `view-timeline-name` wird verwendet, um den Namen einer [View-Progresst-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) festzulegen. Eine View-Progresst-Timeline wird basierend auf der Änderung der Sichtbarkeit eines Elements, das als _Subjekt_ bezeichnet wird, innerhalb eines scrollbaren Elements, das als _Scroller_ bezeichnet wird, fortschreiten. Die Eigenschaft `view-timeline-name` wird auf das Subjekt gesetzt. Sie können `view-timeline-name` auch über die Kurzform-Eigenschaft {{cssxref("view-timeline")}} festlegen.

Wenn das benannte Scroller-Element des Subjekts nicht über seinen Container in der [Achsendimension](/de/docs/Web/CSS/Reference/Properties/view-timeline-axis) überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scroll-Progresst-Timeline erstellt.

Sobald sie erstellt ist, können die angegebenen `<dashed-ident>`-Namen in {{cssxref("animation-timeline")}}-Deklarationen referenziert werden, um das Element anzugeben, das animiert wird, während die Timeline fortschreitet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten View-Progresst-Timeline

Eine View-Progresst-Timeline mit dem Namen `--subject-reveal` wird mithilfe der `view-timeline-name`-Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert. Diese wird dann als die Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

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

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal gestaltet, und dem Textinhalt werden einige grundlegende Schriftart-Einstellungen gegeben:

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

Das `<div>` mit der Klasse `subject` bekommt auch eine Klasse `animation` — hier wird `view-timeline-name` gesetzt, um eine benannte View-Progresst-Timeline zu definieren. Außerdem wird eine `animation-timeline` mit demselben Wert gegeben, um zu erklären, dass dies das Element sein wird, das animiert wird, während die View-Progresst-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Opazität und Skalierung animiert, sodass es verblasst und sich vergrößert, während es den Scroller nach oben bewegt.

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

```css hidden
@layer no-support {
  @supports not (view-timeline-name: none) {
    body::before {
      content: "Your browser doesn't support the `view-timeline-name` property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
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
- {{cssxref("view-timeline")}}
- [Scroll-gesteuerte Animationstimelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)-Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul
