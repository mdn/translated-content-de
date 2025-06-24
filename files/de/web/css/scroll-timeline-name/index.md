---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um den Namen einer _benannten Fortschritts-Timeline des Scrollens_ zu definieren. Diese wird durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreiten. `scroll-timeline-name` wird auf dem Scroller gesetzt, der die Timeline bereitstellen wird.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn das Element nicht über seinen Container in der Achsendimension hinausgeht oder wenn der Overflow verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

Die {{cssxref("scroll-timeline-axis")}}- und `scroll-timeline-name`-Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline)-Kurzform-Eigenschaft festgelegt werden.

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

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Fortschritts-Timeline des Scrollens definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Eigenschaft referenziert werden kann.

    > [!NOTE] > [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte müssen mit `--` beginnen, um Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Fortschritts-Timeline des Scrollens

In diesem Beispiel wird eine Scroll-Timeline namens `--squareTimeline` definiert, indem die `scroll-timeline-name`-Eigenschaft auf das Element mit der ID `container` angewendet wird. Diese wird dann auf die Animation des `#square`-Elements angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt diesen als Quelle einer Scroll-Timeline namens `--squareTimeline` mit der `scroll-timeline-name`-Eigenschaft. Hier wird keine [Scrollbar-Achse](/de/docs/Web/CSS/scroll-timeline-axis) definiert, da die vertikale Achse standardmäßig verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird auch so eingestellt, dass er eine vertikale Scrollbar erstellt, wenn er überläuft (die CSS-Regel für `height` auf dem `stretcher`-Element unten lässt den Inhalt den Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der Timeline dreht, die von der `animation-timeline`-Eigenschaft bereitgestellt wird, die auf die oben genannte Timeline `--squareTimeline` gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt entsteht, der das Containerelement überläuft und somit Scrollbars erstellt. Ohne dieses Element würde der Inhalt nicht über den Container überlaufen, es gäbe keine Scrollbar und folglich keine Scroll-Timeline, die mit der Animation-Timeline verbunden werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat beim Scrollen animiert wird.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS Scroll-Driven Animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
