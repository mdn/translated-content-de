---
title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschrittszeitleiste_ zu definieren, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf den Scroller gesetzt, der die Zeitleiste bereitstellen wird.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion voranzutreiben.

> [!NOTE]
> Wenn das Element in der Achsendimension nicht über seinen Container hinausläuft oder wenn der Überlauf ausgeblendet oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Die {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline) Kurzform-Eigenschaft gesetzt werden.

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
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschrittszeitleiste definiert, die dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Eigenschaft referenziert werden kann.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, um Konflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschrittszeitleisten-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--square-timeline` definiert, indem die `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` verwendet wird.
Diese wird dann auf die Animation auf dem `#square` Element mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt fest, dass er die Quelle einer Scroll-Zeitleiste mit dem Namen `--square-timeline` ist, indem die `scroll-timeline-name` Eigenschaft verwendet wird. Hier wird keine [Scrollbar-Achse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) definiert, da die vertikale Achse standardmäßig verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container ist ebenfalls darauf eingestellt, eine vertikale Scrollbar zu erstellen, wenn er überläuft (die CSS `height` Regel auf dem `stretcher`-Element unten lässt den Inhalt über seinen Container hinauslaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der durch die `animation-timeline` Eigenschaft bereitgestellten Zeitleiste dreht, die auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timeline: --square-timeline;
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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt entsteht, der das Container-Element überläuft und dadurch Scrollbalken erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollbar und somit keine Scroll-Zeitleiste, die mit der Animationszeitleiste verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
