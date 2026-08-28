---
title: "`scroll-timeline` CSS-Eigenschaft"
short-title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um eine [benannte Scroll-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften, in dieser Reihenfolge:

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

Die `scroll-timeline`-Kurzform kann auf ein Containerelement angewendet werden, um sowohl die `scroll-timeline-name`- als auch die `scroll-timeline-axis`-Eigenschaften zu setzen. Sie wird auf den Scroller gesetzt, der die Timeline bereitstellen wird. Wenn der Container keinen Überlauf zum Scrollen hat oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Timeline erstellt.

Der Wert für das {{cssxref("scroll-timeline-name")}}, falls nicht auf `none` gesetzt, muss ein {{cssxref("dashed-ident")}} sein, was bedeutet, dass er mit `--` beginnen muss. Dies hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden. Der Name kann dann als Wert der {{cssxref("animation-timeline")}}-Eigenschaft eines Elements verwendet werden, um das scrollende Containerelement zu definieren, das seine [Animationstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) definiert, die den Animationsfortschritt beim Scrollen steuert.

Der optionale Scroll-, {{cssxref("axis")}}-Wert definiert die {{cssxref("scroll-timeline-axis")}}, die standardmäßig auf `block` gesetzt ist, wenn sie weggelassen wird. Wenn sowohl ein Name als auch eine Achse angegeben sind, muss die Reihenfolge der `<scroll-timeline-name>`-Wert gefolgt von dem `<axis>`-Wert sein. Wenn die `<axis>` zuerst genannt wird, ist die Deklaration ungültig und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--square-timeline` mittels der `scroll-timeline-name` Eigenschaft auf dem `#container`-Element definiert. Der Timeline-Name wird dann auf die Animation auf dem `#square`-Element angewendet, indem `animation-timeline: --square-timeline` verwendet wird.

#### HTML

Wir fügen einen Container mit zwei `<div>`-Kind-Elementen ein.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Wir setzen den Container auf eine Höhe von `300px`, damit er vertikal scrollt.

Mit der `scroll-timeline`-Eigenschaft definieren wir den Container als Quelle einer Scroll-Timeline namens `--square-timeline`, wobei wir den standardmäßigen vertikalen Scrollbalken explizit als Timeline-Controller setzen.

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

Wir stellen grundlegende Stile für das Quadrat bereit. Wir wenden die `rotateAnimation` mit der {{cssxref("animation-name")}}-Eigenschaft an. Standardmäßig würde dies die zeitbasierte Dokument-Timeline verwenden. Durch das Setzen der `animation-timeline`-Eigenschaft auf die oben genannte `--square-timeline`-Timeline setzen wir das Quadrat so, dass es sich entsprechend der scrollbasierten Timeline dreht, die fortschreitet, während der Container scrollt.

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

Wir stellen sicher, dass der Container überläuft, indem wir einen Strecker definieren, der breiter als sein Elternteil ist. Ohne Inhalt, der den Container überläuft, gäbe es keinen Scrollbalken und daher keine Scroll-Timeline. Wir definieren auch eine CSS-Keyframe-Animation, die die Elemente, auf die sie angewendet wird, um eine volle Rotation dreht.

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
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

Scrollen Sie die vertikale Leiste, um das Quadrat beim Scrollen animiert zu sehen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich, während Sie scrollen. Beim Verwenden von `scroll-timeline` hängt die Dauer der Animation davon ab, wie schnell Sie scrollen, nicht vom Wert der `animation-duration`-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}
- [Leitfaden: Scroll-gesteuerte Animationstimelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
