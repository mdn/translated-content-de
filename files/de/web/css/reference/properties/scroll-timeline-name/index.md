---
title: "`scroll-timeline-name` CSS property"
short-title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) vorangetrieben wird. `scroll-timeline-name` wird auf dem Scroller gesetzt, der die Timeline bereitstellen wird.

Der Name wird dann in einer {{cssxref("animation-timeline")}}-Deklaration referenziert, um anzugeben, welches Element des Containers verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn das Element seinen Container in der Achsdimension nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

Die Eigenschaften {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` können auch mit der {{cssxref("scroll-timeline")}}-Kurzschreibweise festgelegt werden.

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
    > {{cssxref("dashed-ident")}}-Werte müssen mit `--` beginnen, um Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--square-timeline` definiert, indem die `scroll-timeline-name`-Eigenschaft auf dem Element mit der ID `container` verwendet wird.
Diese wird dann auf die Animation auf dem `#square`-Element angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn als die Quelle einer Scroll-Timeline mit dem Namen `--square-timeline` fest, indem die `scroll-timeline-name`-Eigenschaft verwendet wird. Es ist hier keine [Scrollbar-Achse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container ist auch so eingestellt, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (die CSS `height`-Regel auf dem `stretcher`-Element unten lässt den Inhalt seinen Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der durch die Eigenschaft `animation-timeline` bereitgestellten Timeline dreht, welche auf die oben benannte `--square-timeline`-Timeline gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, was Inhalt erzeugt, der den Container überläuft und dadurch Scrollleisten erstellt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und somit keine Scroll-Timeline, die mit der Animationstimeline assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-axis")}}
- {{cssxref("timeline-scope")}}
- [Scrollgesteuerte Animationen in CSS](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
