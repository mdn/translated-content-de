---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 40420c48bda031e98b350371ff4222fa02d4c41f
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um eine [benannte Scroll-Fortschritts-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) zu definieren, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) durchlaufen wird.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften in der Reihenfolge:

- {{cssxref("scroll-timeline-name")}}
- {{cssxref("scroll-timeline-axis")}}

## Syntax

```css
/* One value */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;

/* Two values */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none inline;
scroll-timeline: none y;

/* Global values */
scroll-timeline: inherit;
scroll-timeline: initial;
scroll-timeline: revert;
scroll-timeline: revert-layer;
scroll-timeline: unset;
```

### Werte

- {{cssxref("scroll-timeline-name", "&lt;scroll-timeline-name>")}}
  - : Ein {{cssxref("dashed-ident")}} oder das Schlüsselwort `none`.

- {{cssxref("scroll-timeline-axis", "&lt;scroll-timeline-axis>")}}
  - : Ein {{cssxref("axis")}} Schlüsselwort. Der Standardwert ist `block`.

## Beschreibung

Die `scroll-timeline` Kurzform-Eigenschaft kann auf ein Containerelement angewendet werden, um sowohl die `scroll-timeline-name` als auch die `scroll-timeline-axis` Eigenschaften festzulegen. Sie wird auf dem Scroller festgelegt, der die Zeitleiste bereitstellt. Wenn das Container-Element keinen Überlauf zum Scrollen hat oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Der Wert für die {{cssxref("scroll-timeline-name")}}, wenn nicht auf `none` gesetzt, muss ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) sein, was bedeutet, dass er mit `--` beginnen muss. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden. Der Name kann dann als Wert der {{cssxref("animation-timeline")}} Eigenschaft eines Elements verwendet werden, um das scrollende Container-Element zu definieren, das seine [Animationszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) definiert und den Animationsfortschritt während des Scrollens steuert.

Der optionale Scroll-{{cssxref("axis")}} Wert definiert die {{cssxref("scroll-timeline-axis")}}, die standardmäßig `block` ist, wenn sie weggelassen wird. Wenn sowohl ein Name als auch eine Achse angegeben sind, muss die Reihenfolge der `<scroll-timeline-name>` Wert gefolgt von dem `<axis>` Wert sein. Wenn die `<axis>` zuerst aufgelistet wird, ist die Deklaration ungültig und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Zeitleisten-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--square-timeline` verwendet, indem die `scroll-timeline-name` Eigenschaft auf das `#container` Element angewendet wird. Der Zeitleistenname wird dann auf die Animation des `#square` Elements mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Wir fügen einen Container mit zwei Kind-`<div>`-Elementen hinzu.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Wir setzen den Container auf `300px` Höhe, um ihn vertikal scrollen zu lassen.

Mit der `scroll-timeline` Eigenschaft definieren wir den Container als Quelle einer Scroll-Zeitleiste mit dem Namen `--square-timeline`, wobei der Standard-vertikale Rollbalken explizit als Zeitleisten-Controller festgelegt wird.

```css
#container {
  height: 300px;
  overflow-y: scroll;

  scroll-timeline: --square-timeline y;
  /* Firefox supports the non-standard vertical/horizontal syntax */
  scroll-timeline: --square-timeline vertical;

  position: relative;
}
```

Wir bieten grundlegende Stile für das Quadrat. Wir wenden die `rotateAnimation` mit der {{cssxref("animation-name")}} Eigenschaft an. Standardmäßig würde dies die zeitbasierte Dokumenten-Zeitleiste verwenden. Indem wir die `animation-timeline` Eigenschaft auf die oben genannte Zeitleiste `--square-timeline` setzen, legen wir fest, dass sich das Quadrat entsprechend der scrollbasierten Zeitleiste dreht, die fortschreitet, während der Container scrollt.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 0;

  animation: rotateAnimation 1ms linear;
  animation-timeline: --square-timeline;
}
```

Wir sorgen dafür, dass der Container überläuft, indem wir einen Strecker definieren, der breiter ist als sein Elternteil. Ohne Inhalt, der den Container überflutet, gäbe es keinen Scrollbalken und daher keine Scroll-Zeitleiste. Wir definieren auch eine CSS-Keyframe-Animation, die die darauf angewendeten Elemente um eine volle Umdrehung dreht.

```css
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

```css hidden
@layer no-support {
  @supports not (scroll-timeline: --square-timeline) {
    body::before {
      content: "Your browser doesn't support the `scroll-timeline` property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Ergebnis

Scrollen Sie die vertikale Leiste, um das Quadrat beim Scrollen animieren zu sehen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat wird beim Scrollen animiert. Beim Verwenden der `scroll-timeline` hängt die Dauer der Animation davon ab, wie schnell Sie scrollen, und nicht vom Wert der `animation-duration` Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}
- [Leitfaden: Scroll-gesteuerte Animations-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
