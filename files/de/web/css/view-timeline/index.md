---
title: view-timeline
slug: Web/CSS/view-timeline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`view-timeline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um eine _benannte Ansichtsfortschritts-Timeline_ zu definieren, die auf Basis der Änderung der Sichtbarkeit eines Elements (bekannt als _Subjekt_) in einem scrollbaren Element (_Scroller_) fortschreitet. `view-timeline` wird auf das Subjekt gesetzt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt — standardmäßig befindet sich die Timeline bei 0%, wenn das Subjekt erstmals an einem Rand des Scrollers sichtbar ist, und bei 100%, wenn es den gegenüberliegenden Rand erreicht.

`view-timeline` kann zwei konstituierende Werte enthalten — einen Namen für die benannte Ansichtsfortschritts-Timeline und einen optionalen Wert für die Scrollachse. Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Element anzugeben, das animiert wird, während die Timeline fortschreitet. Dies kann das Subjektelement sein, muss es aber nicht — Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn der Scroller in der Achsendimension seinen Container nicht überläuft oder wenn das Überlauf versteckt oder abgeschnitten ist, wird keine Timeline erstellt.

## Konstituierende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis)

## Syntax

```css
/* two values: one each for view-timeline-name and view-timeline-axis */
view-timeline: --custom_name_for_timeline block;
view-timeline: --custom_name_for_timeline inline;
view-timeline: --custom_name_for_timeline y;
view-timeline: --custom_name_for_timeline x;
view-timeline: none block;
view-timeline: none inline;
view-timeline: none y;
view-timeline: none x;

/* one value: view-timeline-name */
view-timeline: none;
view-timeline: --custom_name_for_timeline;
```

Die `view-timeline` Shorthand-Eigenschaft kann auf ein Container-Element als Kombination der Werte `<view-timeline-name>` und `<view-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben werden, muss die Reihenfolge `<view-timeline-name>` gefolgt von `<view-timeline-axis>` sein.

> **Hinweis:** `<view-timeline-name>` muss [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

### Werte

- `<view-timeline-name>`

  - : Siehe [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name).

- `<view-timeline-axis>`
  - : Siehe [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis). Der Standardwert ist `block`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Ansichtsfortschritts-Timeline

Eine Ansichtsfortschritts-Timeline namens `--subjectReveal` wird definiert, indem die `view-timeline` Eigenschaft auf ein Subjektelement mit einer `class` von `animation` gesetzt wird. Diese wird dann als Timeline für dasselbe Element mittels `animation-timeline: --subjectReveal` gesetzt. Das Ergebnis ist, dass das Subjektelement animiert wird, wenn es nach oben durch das Dokument scrollt.

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

Das `subject`-Element und sein beinhaltendes `content`-Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` gegeben — hier wird `view-timeline` gesetzt, um eine benannte Ansichtsfortschritts-Timeline zu definieren. Es bekommt auch einen `animation-timeline`-Namen mit dem gleichen Wert, um zu erklären, dass dies das Element ist, das animiert wird, während die Ansichtsfortschritts-Timeline fortschreitet.

Zuletzt wird eine Animation auf dem Element spezifiziert, die seine Deckkraft und Skalierung animiert und es verblassen und vergrößern lässt, während es den Scroller hinaufbewegt.

```css
.animation {
  view-timeline: --subjectReveal block;
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
    opacity: 1,
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

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- {{cssxref("timeline-scope")}}
- [`view-timeline-axis`](/de/docs/Web/CSS/view-timeline-axis), [`view-timeline-name`](/de/docs/Web/CSS/view-timeline-name)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
