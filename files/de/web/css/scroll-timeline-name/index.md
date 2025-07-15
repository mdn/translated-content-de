---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschrittszeitleiste_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortgeschritten wird. `scroll-timeline-name` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellt.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn das Element nicht in der Achsendimension über seinen Container hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Die {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` Eigenschaften können auch über die [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurzschreibweise gesetzt werden.

## Syntax

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### Werte

Erlaubte Werte für `scroll-timeline-name` sind:

- `none`
  - : Die Zeitleiste hat keinen Namen.
- `<dashed-ident>`
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschrittszeitleiste definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Eigenschaft referenziert werden kann.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, was hilft, Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschrittszeitleistenanimation

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--squareTimeline` mithilfe der `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` definiert. Diese wird dann auf die Animation auf dem `#square` Element angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt ihn als Quelle einer Scroll-Zeitleiste namens `--squareTimeline` mithilfe der `scroll-timeline-name` Eigenschaft. Es wird hier keine [Scrollbar-Achse](/de/docs/Web/CSS/scroll-timeline-axis) definiert, weil standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt und der Container ist auch so eingestellt, dass er bei Überlauf eine vertikale Bildlaufleiste erstellt (die CSS `height` Regel auf dem `stretcher` Element unten lässt den Inhalt aus seinem Container herausfließen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der von der `animation-timeline` Eigenschaft bereitgestellten Zeitleiste dreht, die auf die oben genannte `--squareTimeline` Zeitleiste gesetzt ist.

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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, was Inhalt erstellt, der aus dem Containerelement herausfließt und dadurch Bildlaufleisten erstellt. Ohne dieses Element würde der Inhalt nicht aus dem Container herausfließen, es würde keine Bildlaufleiste geben und somit auch keine Scroll-Zeitleiste, die der Animationszeitleiste zugeordnet werden könnte.

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
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
