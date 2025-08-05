---
title: scroll-timeline-name
slug: Web/CSS/scroll-timeline-name
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschritt-Zeitleiste_ zu definieren, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellen wird.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Containerelement anzugeben, das den Fortschritt der Animation durch die Scroll-Aktion antreibt.

> [!NOTE]
> Wenn das Element in der Achsrichtung nicht über seinen Container hinausragt oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Die {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline) Kurzschreibweise gesetzt werden.

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
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschritt-Zeitleiste definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Eigenschaft referenziert werden kann.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte müssen mit `--` beginnen, was hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritt-Zeitleiste-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--square-timeline` definiert, indem die `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` verwendet wird.
Diese wird dann auf die Animation auf dem `#square` Element angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der CSS-Code für den Container legt fest, dass er die Quelle einer Scroll-Zeitleiste mit dem Namen `--square-timeline` ist, indem die `scroll-timeline-name` Eigenschaft verwendet wird. Hier ist keine [Scrollbar-Achse](/de/docs/Web/CSS/scroll-timeline-axis) definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers ist auf `300px` gesetzt, und der Container wird auch so eingestellt, dass er eine vertikale Scrollbar erstellt, wenn er überläuft (die CSS `height` Regel auf dem `stretcher` Element unten lässt den Inhalt den Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Der folgende CSS-Code definiert ein Quadrat, das sich gemäß der Zeitleiste dreht, die durch die `animation-timeline` Eigenschaft bereitgestellt wird, die auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, was Inhalte erzeugt, die das Containerelement überlaufen lassen und dadurch Scrollleisten erzeugt. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollbar und folglich keine Scroll-Zeitleiste, die mit der Animationszeitleiste verknüpft werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um das Quadrat beim Scrollen zu animieren.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
