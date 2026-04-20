---
title: CSS-Eigenschaft `scroll-timeline`
short-title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um eine [benannte Scroll-Fortschritt-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften in dieser Reihenfolge:

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

Die `scroll-timeline` Kurzschreibweise kann auf ein Containerelement angewendet werden, um sowohl die `scroll-timeline-name` als auch die `scroll-timeline-axis` Eigenschaften festzulegen. Sie wird auf den Scroller gesetzt, der die Zeitleiste bereitstellt. Wenn das Container-Element keinen Überlauf zum Scrollen hat oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitleiste erstellt.

Der Wert für die {{cssxref("scroll-timeline-name")}}, falls nicht auf `none` gesetzt, muss ein {{cssxref("dashed-ident")}} sein, was bedeutet, dass er mit `--` beginnen muss. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden. Der Name kann dann als Wert der {{cssxref("animation-timeline")}} Eigenschaft eines Elements verwendet werden, um das scrollende Containerelement zu definieren, das seine [Animationszeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) definiert und den Animationsfortschritt beim Scrollen steuert.

Das optionale Scroll-{{cssxref("axis")}}-Wert definiert die {{cssxref("scroll-timeline-axis")}}, die standardmäßig `block` ist, wenn sie weggelassen wird. Wenn sowohl ein Name als auch eine Achse angegeben sind, muss die Reihenfolge der `<scroll-timeline-name>`-Wert gefolgt vom `<axis>`-Wert sein. Wenn die `<axis>` zuerst aufgeführt ist, ist die Deklaration ungültig und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritt-Zeitleistenanimation

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--square-timeline` definiert, indem die Eigenschaft `scroll-timeline-name` auf das `#container` Element angewendet wird. Der Zeitleistenname wird dann auf die Animation des `#square` Elementes mit `animation-timeline: --square-timeline` angewendet.

#### HTML

Wir fügen einen Container mit zwei `<div>`-Kind-Elementen ein.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Wir setzen den Container auf `300px` Höhe, um ihn vertikal scrollen zu lassen.

Durch die Verwendung der `scroll-timeline` Eigenschaft definieren wir den Container als Quelle einer Scroll-Zeitleiste namens `--square-timeline` und setzen explizit die Standard-vertikale Scrollleiste als den Zeitstrahl-Controller.

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

Wir stellen grundlegende Styles für das Quadrat bereit. Wir wenden die `rotateAnimation` mit der {{cssxref("animation-name")}} Eigenschaft an. Standardmäßig würde dies die zeitbasierte Dokumentenzeitleiste verwenden. Durch das Setzen der `animation-timeline` Eigenschaft auf die oben benannte `--square-timeline` Zeitleiste, wird das Quadrat so eingestellt, dass es sich entsprechend der scroll-basierten Zeitleiste dreht, die fortschreitet, während der Container scrollt.

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

Wir stellen sicher, dass der Container überläuft, indem wir einen Dehner definieren, der breiter als sein Elterncontainer ist. Ohne Inhalt, der den Container überläuft, gäbe es keine Scrollleiste und daher keine Scroll-Zeitleiste. Wir definieren auch eine CSS-Schlüsselbildanimation, die die Elemente, auf die sie angewendet wird, um eine volle Umdrehung dreht.

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

Scrollen Sie die vertikale Leiste, um zu sehen, wie sich das Quadrat beim Scrollen animiert.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich beim Scrollen. Bei der Verwendung von `scroll-timeline` hängt die Dauer der Animation davon ab, wie schnell Sie scrollen, nicht vom Wert der `animation-duration` Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}
- [Leitfaden: Scroll-getriebene Animationszeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
