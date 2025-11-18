---
title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft wird verwendet, um den Namen einer _benannten Scroll-Fortschrittszeitleiste_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf den Scroller gesetzt, der die Zeitleiste bereitstellen wird.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)-Deklaration referenziert, um das Containerelement anzuzeigen, das verwendet wird, um den Fortschritt der Animation durch die Scrollaktion zu steuern.

> [!NOTE]
> Wenn das Element in der Achsendimension nicht überläuft oder wenn das Überlaufen versteckt oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Die {{cssxref("scroll-timeline-axis")}}- und `scroll-timeline-name`-Eigenschaften können auch mit der [`scroll-timeline`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline)-Kurzschreibweise gesetzt werden.

## Syntax

```css
scroll-timeline-name: none;
scroll-timeline-name: --custom_name_for_timeline;
```

### Werte

Zulässige Werte für `scroll-timeline-name` sind:

- `none`
  - : Die Zeitleiste hat keinen Namen.
- `<dashed-ident>`
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschrittszeitleiste definiert, der dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)-Eigenschaft referenziert werden kann.

    > [!NOTE]
    > [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)-Werte müssen mit `--` beginnen, was hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschrittszeitleistenanimation

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--square-timeline` mithilfe der `scroll-timeline-name`-Eigenschaft auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation des Elements `#square` mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der CSS-Code für den Container legt fest, dass er die Quelle einer Scroll-Fortschrittszeitleiste namens `--square-timeline` mithilfe der `scroll-timeline-name`-Eigenschaft ist. Es ist keine [Scrollbar-Achse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers ist auf `300px` gesetzt und der Container wird außerdem so eingestellt, dass er eine vertikale Scrollleiste erstellt, falls er überläuft (die CSS-`height`-Regel auf dem `stretcher`-Element unten lässt den Inhalt über seinen Container hinauslaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Der untenstehende CSS-Code definiert ein Quadrat, das sich nach der Zeitleiste dreht, die durch die `animation-timeline`-Eigenschaft bereitgestellt wird, die auf die oben genannte `--square-timeline`-Zeitleiste gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt erstellt wird, der das Containerelement überläuft und dadurch Scrollbalken erstellt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keinen Scrollbalken und folglich keine Scroll-Zeitleiste, die mit der Animationszeitleiste assoziiert werden könnte.

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
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
