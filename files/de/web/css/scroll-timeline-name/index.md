---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschritt-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf dem Scroller festgelegt, der die Timeline bereitstellt.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn das Element nicht in der Achsendimension über seinen Container hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

Die Eigenschaften {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` können auch mithilfe der Kurznotation [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) festgelegt werden.

## Syntax

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `scroll-timeline-name` sind:

- `none`
  - : Die Timeline hat keinen Namen.
- `<dashed-ident>`

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschritt-Timeline definiert, die dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Eigenschaft referenziert werden kann.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, um Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritt-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline namens `--squareTimeline` mithilfe der `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation des `#square` Elements angewandt, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt diesen als Quelle einer Scroll-Timeline namens `--squareTimeline` mithilfe der `scroll-timeline-name` Eigenschaft fest. Keine [Scrollbalken-Achse](/de/docs/Web/CSS/scroll-timeline-axis) ist hier definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers ist auf `300px` gesetzt und der Container ist auch so eingestellt, dass er bei Überlauf einen vertikalen Scrollbalken erstellt (die CSS-Regel `height` auf dem `stretcher` Element unten lässt den Inhalt den Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das folgende CSS definiert ein Quadrat, das sich gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Timeline dreht, die auf die oben genannte `--squareTimeline` Timeline gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timeline: --squareTimeline;
  position: absolute;
  bottom: 0;
}

#stretcher {
  height: 600px;
  background: #dedede;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt entsteht, der das Container-Element überläuft und somit Scrollbalken erstellt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keinen Scrollbalken und folglich keine Scroll-Timeline, die mit der Animationstimeline verbunden werden könnte.

#### Ergebnis

Scrollen Sie den vertikalen Balken, um das Quadrat zu animieren, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
