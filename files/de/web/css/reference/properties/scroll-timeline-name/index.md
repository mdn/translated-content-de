---
title: scroll-timeline-name
slug: Web/CSS/Reference/Properties/scroll-timeline-name
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`scroll-timeline-name`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Namen einer _benannten Scrollfortschritts-Zeitleiste_ zu definieren, die durch das Scrollen eines Scroll-Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline-name` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellen soll.

Der Name wird dann in einer {{cssxref("animation-timeline")}} Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn das Element in der Achsenrichtung seinen Container nicht überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Die Eigenschaften {{cssxref("scroll-timeline-axis")}} und `scroll-timeline-name` können auch mit der Kurzform der {{cssxref("scroll-timeline")}} Eigenschaft gesetzt werden.

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
  - : Ein beliebiger benutzerdefinierter Bezeichner, der einen Namen für eine Scrollfortschritts-Zeitleiste definiert, die dann in einer {{cssxref("animation-timeline")}} Eigenschaft referenziert werden kann.

    > [!NOTE]
    > {{cssxref("dashed-ident")}} Werte müssen mit `--` beginnen, um Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scrollfortschritts-Zeitleisten-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--square-timeline` mittels der Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation des `#square` Elements mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt ihn als Quelle einer Scroll-Zeitleiste mit dem Namen `--square-timeline` mittels der Eigenschaft `scroll-timeline-name` fest. Keine [Scrollbar-Achse](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis) wird hier definiert, da standardmäßig die vertikale Achse verwendet wird.

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird so eingestellt, dass er bei Überlauf eine vertikale Scrollleiste erstellt (die CSS `height` Regel auf dem `stretcher` Element unten lässt den Inhalt den Container überlaufen).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline-name: --square-timeline;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der durch die `animation-timeline` Eigenschaft bereitgestellten Zeitleiste dreht, welche auf die oben genannte `--square-timeline` Zeitleiste gesetzt ist.

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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalt entsteht, der das Container-Element überläuft und somit Scrollleisten erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und folglich keine Scroll-Zeitleiste, um mit der Animations-Zeitleiste assoziiert zu werden.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie sich das Quadrat beim Scrollen animiert.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}, {{cssxref("scroll-timeline-axis")}}
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
