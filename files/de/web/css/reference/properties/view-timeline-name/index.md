---
title: "`view-timeline-name` CSS property"
short-title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`view-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Namen eines oder mehrerer [benannter View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_view_progress_timeline), die dem Element zugeordnet sind.

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
  - : Gibt an, dass die Timeline keinen Namen hat. Dies ist der Standardwert.
- `<dashed-ident>`
  - : Bestimmt eine kommagetrennte Liste von {{cssxref("dashed-ident")}} benutzerdefinierten Namens-Identifikatoren. Alle `<dashed-ident>`-Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Beschreibung

Die `view-timeline-name` Eigenschaft wird verwendet, um den Namen einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines) festzulegen. Eine View-Progress-Timeline schreitet basierend auf der Sichtbarkeitsänderung eines Elements, das _Subjekt_ genannt wird, innerhalb eines scrollbaren Elements, dem _Scroller_, vor. Die `view-timeline-name` Eigenschaft wird am Subjekt festgelegt. Sie können auch `view-timeline-name` über die {{cssxref("view-timeline")}} Kurzschreibweise setzen.

Wenn das benannte Scroller-Element des Subjekts seinen Container in der [Achsendimension](/de/docs/Web/CSS/Reference/Properties/view-timeline-axis) nicht überläuft oder wenn das Überlaufverhalten versteckt oder abgeschnitten ist, wird keine Scroll-Progress-Timeline erstellt.

Sobald sie erstellt wurde, können die angegebenen `<dashed-ident>` Namenswerte in {{cssxref("animation-timeline")}} Deklarationen referenziert werden, um das Element anzugeben, das animiert werden soll, während die Timeline fortschreitet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benannte View-Progress-Timeline erstellen

Eine View-Progress-Timeline mit dem Namen `--subject-reveal` wird durch die `view-timeline-name` Eigenschaft auf einem Subjekt-Element mit der `class` von `animation` definiert.
Diese wird dann als Timeline für dasselbe Element mit `animation-timeline: --subject-reveal;` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert wird, während es beim Scrollen nach oben durch das Dokument bewegt wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

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

Das `subject`-Element und sein enthaltendes `content`-Element werden minimal gestylt, und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Das `<div>` mit der Klasse `subject` erhält ebenfalls die Klasse `animation` — hier wird `view-timeline-name` gesetzt, um eine benannte View-Progress-Timeline zu definieren. Es wird auch ein `animation-timeline` Name mit demselben Wert zugewiesen, um zu erklären, dass dies das Element ist, das animiert wird, während die View-Progress-Timeline fortschreitet.

Schließlich wird eine Animation auf dem Element festgelegt, die seine Opazität und Skalierung animiert, wodurch es einblendet und größer wird, während es den Scroller nach oben bewegt.

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
- [Scroll-gesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS-scroll-gesteuerte-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
