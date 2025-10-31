---
title: view-timeline
slug: Web/CSS/Reference/Properties/view-timeline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`view-timeline`**-[CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Sichtfortschritt-Zeitleiste_ zu definieren, die durch die Veränderung der Sichtbarkeit eines Elements (bekannt als das _Subjekt_) innerhalb eines scrollbaren Elements (_Scroller_) fortschreitet. `view-timeline` wird auf dem Subjekt gesetzt.

Die Sichtbarkeit des Subjekts innerhalb des Scrollers wird verfolgt – standardmäßig befindet sich die Zeitleiste bei 0 %, wenn das Subjekt zum ersten Mal an einem Rand des Scrollers sichtbar ist und bei 100 %, wenn es den gegenüberliegenden Rand erreicht.

`view-timeline` kann zwei zusammengesetzte Werte enthalten – einen Namen für die benannte Sichtfortschritt-Zeitleiste und einen optionalen Scrollachsenwert. Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)-Deklaration referenziert, um anzuzeigen, welches Element animiert wird, während die Zeitleiste fortschreitet. Dies kann das Subjektelement sein, muss es aber nicht – Sie können ein anderes Element animieren, während sich das Subjekt durch den Scrollbereich bewegt.

> [!NOTE]
> Wenn das Scroller-Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Scrollfortschritt-Zeitleiste erstellt.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("view-timeline-name")}}

## Syntax

```css
/* three values: one each for view-timeline-name, view-timeline-inset and view-timeline-axis */
view-timeline: --custom_name_for_timeline block auto;
view-timeline: --custom_name_for_timeline block 20% 200px;

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

Die `view-timeline`-Kurzschreibweise kann auf ein Containerelement als Kombination der Werte `<view-timeline-name>`, `<view-timeline-inset>` und `<view-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben werden, muss die Reihenfolge eingehalten werden: Der Wert `<view-timeline-name>` gefolgt vom Wert `<view-timeline-axis>` und/oder dem Wert `<view-timeline-inset>`.

> [!NOTE]
> `<view-timeline-name>`-Werte müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Konflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

### Werte

- `<view-timeline-name>`
  - : Siehe {{cssxref("view-timeline-name")}}. Der Standardwert ist `none`.
- `<view-timeline-inset>`
  - : Siehe {{cssxref("view-timeline-inset")}}. Der Standardwert ist `auto`.
- `<view-timeline-axis>`
  - : Siehe {{cssxref("view-timeline-axis")}}. Der Standardwert ist `block`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Sichtfortschritt-Zeitleiste

Eine Sichtfortschritt-Zeitleiste namens `--subject-reveal` wird mit der `view-timeline`-Eigenschaft auf einem Subjektelement mit einer `class` von `animation` definiert. Diese wird dann als Zeitleiste für dasselbe Element mit `animation-timeline: --subject-reveal` festgelegt. Das Ergebnis ist, dass das Subjektelement animiert, während es nach oben durch das Dokument scrollt.

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

Das `subject`-Element und sein enthaltenes `content`-Element werden minimal gestylt und der Textinhalt erhält einige grundlegende Schriftart-Einstellungen:

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

Dem `<div>` mit der Klasse `subject` wird auch eine Klasse `animation` hinzugefügt – hier wird `view-timeline` gesetzt, um eine benannte Sichtfortschritt-Zeitleiste zu definieren. Es wird auch ein `animation-timeline`-Name mit demselben Wert angegeben, um zu deklarieren, dass dies das Element sein wird, das animiert wird, während die Sichtfortschritt-Zeitleiste fortschreitet.

Zuletzt wird eine Animation auf dem Element angegeben, die seine Deckkraft und Größe animiert, wodurch es beim Aufwärtsbewegen im Scroller einblendet und vergrößert.

```css
.animation {
  view-timeline: --subject-reveal block;
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

Scrollen Sie, um das animierte Subjektelement zu sehen.

{{EmbedLiveSample("Creating a named view progress timeline", "100%", "480px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-axis")}}, {{cssxref("view-timeline-inset")}}, {{cssxref("view-timeline-name")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
