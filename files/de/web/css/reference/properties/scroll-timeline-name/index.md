---
title: "`scroll-timeline-name` CSS property"
short-title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`scroll-timeline-name`** wird verwendet, um den Namen einer [benannten Scroll-Fortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) zu definieren.

## Syntax

```css
/* Keyword value */
scroll-timeline-name: none;

/* Named timeline */
scroll-timeline-name: --custom_name_for_timeline;

/* Global values */
scroll-timeline-name: inherit;
scroll-timeline-name: initial;
scroll-timeline-name: revert;
scroll-timeline-name: revert-layer;
scroll-timeline-name: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Werte angegeben:

- `none`
  - : Die Zeitleiste hat keinen Namen.
- `<dashed-ident>`
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scroll-Fortschritts-Zeitleiste definiert, auf den anschließend in einer {{cssxref("animation-timeline")}}-Eigenschaft verwiesen werden kann.

## Beschreibung

Die Eigenschaft `scroll-timeline-name` wird verwendet, um den Namen einer _benannten Scroll-Fortschritts-Zeitleiste_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_scroller_) zwischen oben und unten (oder links und rechts) durchlaufen wird.

Legen Sie die Eigenschaft `scroll-timeline-name` auf dem Scroller fest, der die Zeitleiste bereitstellt. Auf den Namen wird dann in einer {{cssxref("animation-timeline")}}-Deklaration verwiesen, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scrollaktion anzutreiben.

Wenn das Element seinen Container in der Achsendimension nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Zeitleiste erstellt.

`scroll-timeline-name` kann zusammen mit der Eigenschaft {{cssxref("scroll-timeline-axis")}} auch mithilfe der Kurzform {{cssxref("scroll-timeline")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Zeitleistenanimation

In diesem Beispiel wird mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` eine Scroll-Zeitleiste namens `--square-timeline` definiert.
Diese wird dann mithilfe von `animation-timeline: --square-timeline` auf die Animation des Elements `#square` angewendet.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn mithilfe der Eigenschaft `scroll-timeline-name` als Quelle einer Scroll-Zeitleiste namens `--square-timeline` fest. Hier wird keine [Scrollbar-Achse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird außerdem so festgelegt, dass er bei Überlauf eine vertikale Scrollbar erstellt (die CSS-Regel `height` für das unten stehende Element `stretcher` sorgt dafür, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das folgende CSS definiert ein Quadrat, das sich entsprechend der von der Eigenschaft `animation-timeline` bereitgestellten Zeitleiste dreht, welche auf die oben benannte Zeitleiste `--square-timeline` gesetzt ist.

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

Die CSS-Regel `stretcher` setzt die Blockhöhe auf `600px`, wodurch Inhalt erstellt wird, der das Container-Element überläuft und dadurch Scrollbars erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollbar und somit keine Scroll-Zeitleiste, die der Animations-Zeitleiste zugeordnet werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat beim Scrollen animiert wird.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-axis")}}
- {{cssxref("timeline-scope")}}
- [Scroll-gesteuerte Animations-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
