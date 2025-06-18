---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scrolling-Fortschritts-Zeitachse_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf das Element gesetzt, das die Zeitachse bereitstellt.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Container-Element anzugeben, das den Fortschritt der Animation durch die Scrollaktion steuert.

> [!NOTE]
> Wenn das Element in der Achsenrichtung nicht über seinen Container hinausgeht oder wenn der Überlauf ausgeblendet oder abgeschnitten ist, wird keine Zeitachse erstellt.

Die {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurzform-Eigenschaft gesetzt werden.

## Syntax

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `scroll-timeline-name` sind:

- `none`
  - : Die Zeitachse hat keinen Namen.
- `<dashed-ident>`

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschritts-Zeitachse definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Eigenschaft referenziert werden kann.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, um Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Zeitachse-Animation

In diesem Beispiel wird eine Scroll-Zeitachse namens `--squareTimeline` mit der `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation auf dem `#square` Element mit `animation-timeline: --squareTimeline` angewendet.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt diesen als Quelle einer Scroll-Zeitachse namens `--squareTimeline` mit der `scroll-timeline-name` Eigenschaft. Keine [Scrollbar-Achse](/de/docs/Web/CSS/scroll-timeline-axis) wird hier definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird so gesetzt, dass er eine vertikale Scrollleiste erzeugt, falls er überläuft (die CSS `height` Regel auf dem `stretcher` Element unten bewirkt, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Zeitachse dreht, die auf die oben genannte `--squareTimeline` Zeitachse eingestellt ist.

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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, was dazu führt, dass der Inhalt das Container-Element überläuft und dadurch Scrollleisten erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und folglich auch keine Scroll-Zeitachse, die mit der Animation-Zeitachse verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie sich das Quadrat beim Scrollen animiert.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
