---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Fortschritts-Zeitachse beim Scrollen_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf den Scroller gesetzt, der die Zeitachse bereitstellt.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um anzugeben, welches Element des Containers verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn das Element in der Achsendimension nicht überläuft oder wenn das Überlaufen verborgen oder abgeschnitten wird, wird keine Zeitachse erstellt.

Die Eigenschaften {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` können auch mit der Abkürzungseigenschaft [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) gesetzt werden.

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

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Fortschritts-Zeitachse beim Scrollen definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Eigenschaft referenziert werden kann.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, um Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschritts-Zeitachse beim Scrollen

In diesem Beispiel wird eine Scroll-Zeitachse mit dem Namen `--squareTimeline` definiert, indem die `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` verwendet wird.
Diese wird dann auf die Animation des `#square` Elements angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Das HTML für das Beispiel wird unten angezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt ihn als Quelle einer Scroll-Zeitachse namens `--squareTimeline` mithilfe der `scroll-timeline-name` Eigenschaft. Keine [Scrollbar-Achse](/de/docs/Web/CSS/scroll-timeline-axis) wird hier definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container ist auch so eingestellt, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (die CSS-Regel `height` auf dem `stretcher` Element unten verursacht, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das CSS unten definiert ein Quadrat, das entsprechend der von der `animation-timeline` Eigenschaft bereitgestellten Zeitachse rotiert, welche auf die oben genannte `--squareTimeline` Zeitachse gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox benötigt dies, um die Animation anzuwenden */
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

Die CSS-Regel für `stretcher` setzt die Blockhöhe auf `600px`, was dazu führt, dass der Inhalt das Containerelement überläuft und dadurch Scrollleisten erstellt werden.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es würde keine Scrollleiste geben und folglich keine Scroll-Zeitachse, die mit der Animations-Zeitachse verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
