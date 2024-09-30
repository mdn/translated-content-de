---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf den Scroller gesetzt, der die Timeline bereitstellt.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um das Containerelement anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn das Element seinen Container in der Achsendimension nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten wird, wird keine Timeline erstellt.

Die Eigenschaften {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` können auch mit der verkürzten Eigenschaft [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) gesetzt werden.

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

  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschritts-Timeline definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Eigenschaft referenziert werden kann.

    > **Hinweis:** [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte müssen mit `--` beginnen, um Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--squareTimeline` definiert, indem die `scroll-timeline-name`-Eigenschaft auf das Element mit der ID `container` gesetzt wird. Dies wird dann auf die Animation des `#square`-Elements angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der CSS-Code für den Container legt ihn als Quelle für eine Scroll-Timeline mit dem Namen `--squareTimeline` fest, indem die `scroll-timeline-name`-Eigenschaft verwendet wird. Es wird hier keine [Scrollbar-Achse](/de/docs/Web/CSS/scroll-timeline-axis) definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird auch so eingestellt, dass er eine vertikale Bildlaufleiste erstellt, wenn er überläuft (die CSS-`height`-Regel auf dem `stretcher`-Element unten lässt den Inhalt den Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --squareTimeline;
  position: relative;
}
```

Der untenstehende CSS-Code definiert ein Quadrat, das entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Timeline rotiert, die auf die oben genannte `--squareTimeline`-Timeline gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, was Inhalte erstellt, die das Containerelement überlaufen, wodurch Bildlaufleisten erzeugt werden. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Bildlaufleiste und somit keine Scroll-Timeline, die mit der Animations-Timeline assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um das Quadrat beim Scrollen animiert zu sehen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS-scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
