---
title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf dem Scroller gesetzt, der die Timeline bereitstellen wird.

Der Name wird dann in einer {{cssxref("animation-timeline")}}-Deklaration referenziert, um anzugeben, welches Element des Containers verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn das Element nicht über seinen Container in der Achsendimension hinausgeht oder wenn der Überlauf ausgeblendet oder abgeschnitten ist, wird keine Timeline erstellt.

Die Eigenschaften {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` können auch mit der {{cssxref("scroll-timeline")}}-Kurzform-Eigenschaft gesetzt werden.

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
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschritts-Timeline definiert, der dann in einer {{cssxref("animation-timeline")}}-Eigenschaft referenziert werden kann.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)-Werte müssen mit `--` beginnen, was hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline namens `--square-timeline` definiert, indem die Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` gesetzt wird.
Diese wird dann auf die Animation des `#square`-Elements angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn als Quelle einer Scroll-Timeline namens `--square-timeline` fest, indem die Eigenschaft `scroll-timeline-name` verwendet wird. Keine [Scrollbar-Achse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) ist hier definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers ist auf `300px` eingestellt und der Container ist ebenfalls so festgelegt, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (die CSS-`height`-Regel auf dem unten stehenden `stretcher`-Element lässt den Inhalt den Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht, die auf die oben genannten `--square-timeline`-Timeline gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, was Inhalte erzeugt, die das Container-Element überlaufen lassen und daher Scrollleisten erstellen.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste, und daher auch keine Scroll-Timeline, die mit der Animations-Timeline assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-axis")}}
- {{cssxref("timeline-scope")}}
- [CSS-scrollbasierte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
