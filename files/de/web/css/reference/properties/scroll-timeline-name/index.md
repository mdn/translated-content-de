---
title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschrittszeitleiste_ zu definieren. Diese wird durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) vorangetrieben. `scroll-timeline-name` wird auf den Scroller gesetzt, der die Zeitleiste bereitstellt.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline) Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn das Element in der Achsendimension seinen Container nicht überläuft oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Die {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline) Kurzschreibweise gesetzt werden.

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
    > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte müssen mit `--` beginnen, was hilft, Konflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschrittszeitleisten-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--square-timeline` definiert, indem die `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` verwendet wird. Diese wird dann auf die Animation des `#square` Elements angewendet, indem `animation-timeline: --square-timeline` gesetzt wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt ihn als Quelle einer Scroll-Zeitleiste namens `--square-timeline` mittels der `scroll-timeline-name` Eigenschaft. Keine [Scrollleistenachse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) wird hier definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers ist auf `300px` gesetzt, und der Container ist auch so eingestellt, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (die CSS `height` Regel auf dem `stretcher` Element unten sorgt dafür, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das gemäß der durch die `animation-timeline` Eigenschaft bereitgestellten Zeitleiste rotiert, welche auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

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

Die `stretcher` CSS Regel setzt die Blockhöhe auf `600px`, was Inhalt erzeugt, der das Containerelement überläuft und somit Scrollleisten erstellt.
Ohne dieses Element würde der Inhalt nicht den Container überlaufen, es gäbe keine Scrollleiste und folglich keine Scroll-Zeitleiste, die mit der Animationszeitleiste assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat je nach Scrollbewegung animiert wird.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
