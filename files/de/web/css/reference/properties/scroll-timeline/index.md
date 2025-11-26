---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) wird verwendet, um eine [benannte Scroll-Fortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) zu definieren, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften in dieser Reihenfolge:

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

Die Kurzschreibweise `scroll-timeline` kann auf ein Containerelement angewendet werden, um sowohl die Eigenschaften `scroll-timeline-name` als auch `scroll-timeline-axis` festzulegen. Sie wird auf den Scroller gesetzt, der die Zeitachse bereitstellt. Wenn das Container-Element keinen Überlauf zum Scrollen hat oder der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitachse erstellt.

Der Wert für das {{cssxref("scroll-timeline-name")}}, falls nicht auf `none` gesetzt, muss ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) sein, was bedeutet, dass er mit `--` beginnen muss. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden. Der Name kann dann als Wert der {{cssxref("animation-timeline")}}-Eigenschaft eines Elements verwendet werden, um das scrollende Containerelement festzulegen, das seine [Animations-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#named_scroll_progress_timelines) definiert und den Fortschritt der Animation während des Scrollens steuert.

Der optionale scroll {{cssxref("axis")}} Wert definiert die {{cssxref("scroll-timeline-axis")}}, die bei Auslassung standardmäßig `block` ist. Wenn sowohl ein Name als auch eine Achse angegeben sind, muss die Reihenfolge zuerst den `<scroll-timeline-name>` und dann den `<axis>` Wert aufweisen. Wenn die `<axis>` zuerst aufgeführt ist, ist die Deklaration ungültig und wird ignoriert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Zeitachsen-Animation

In diesem Beispiel wird eine Scroll-Zeitachse mit dem Namen `--square-timeline` mithilfe der `scroll-timeline-name`-Eigenschaft auf das `#container`-Element definiert. Der Zeitachsenname wird dann mit `animation-timeline: --square-timeline` auf die Animation des `#square`-Elements angewendet.

#### HTML

Wir fügen einen Container mit zwei Kind-`<div>`-Elementen ein.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Wir setzen den Container auf `300px` Höhe, um vertikal zu scrollen.

Mit der `scroll-timeline`-Eigenschaft definieren wir den Container als Quelle einer Scroll-Zeitachse mit dem Namen `--square-timeline` und legen explizit die standardmäßige vertikale Bildlaufleiste als Zeitachsencontroller fest.

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

Wir bieten Grundstile für das Quadrat an. Wir wenden die `rotateAnimation` mit der {{cssxref("animation-name")}}-Eigenschaft an. Standardmäßig würde dies die zeitbasierte Dokument-Zeitachse verwenden. Indem wir die `animation-timeline`-Eigenschaft auf die oben genannte `--square-timeline`-Zeitachse setzen, stellen wir das Quadrat so ein, dass es entsprechend der scroll-basierten Zeitachse gedreht wird, die im Fortschritt fortschreitet, während der Container scrollt.

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

Wir stellen sicher, dass der Container überläuft, indem wir einen Dehnungsbereich definieren, der breiter als sein übergeordnetes Element ist. Ohne Inhalt, der den Container überläuft, gäbe es keine Bildlaufleiste und somit keine Scroll-Zeitachse. Wir definieren auch eine CSS-Keyframe-Animation, die die Elemente, auf die sie angewendet wird, um eine volle Rotation dreht.

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

Scrollen Sie die vertikale Leiste, um das Quadrat bei Ihrem Scrollvorgang zu animieren.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert beim Scrollen. Bei Verwendung von `scroll-timeline` hängt die Dauer der Animation davon ab, wie schnell Sie scrollen, nicht vom Wert der `animation-duration`-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline-name")}}
- [Leitfaden: Scroll-gesteuerte Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
