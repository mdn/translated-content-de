---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf den Scroller gesetzt, der die Timeline bereitstellt. Die Startposition des Scrollens repräsentiert 0% Fortschritt und die Endposition repräsentiert 100% Fortschritt. Wenn die 0%-Position und die 100%-Position zusammenfallen (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Timeline inaktiv.

`scroll-timeline` kann zwei Bestandteil-Werte enthalten – einen Namen für die benannte Scroll-Fortschritts-Timeline und einen optionalen Scroll-Achs-Wert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline) Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion anzutreiben.

> [!NOTE]
> Wenn der Scroller in der Achsendimension nicht seinen Container überläuft oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Timeline erstellt.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis)

## Syntax

```css
/* two values: one each for scroll-timeline-name and scroll-timeline-axis */
scroll-timeline: --custom_name_for_timeline block;
scroll-timeline: --custom_name_for_timeline inline;
scroll-timeline: --custom_name_for_timeline y;
scroll-timeline: --custom_name_for_timeline x;
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none y;
scroll-timeline: none x;

/* one value: scroll-timeline-name */
scroll-timeline: none;
scroll-timeline: --custom_name_for_timeline;
```

Die `scroll-timeline` Kurzform-Eigenschaft kann auf ein Containerelement als Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben sind, muss die Reihenfolge eingehalten werden: erst der `<scroll-timeline-name>` Wert, gefolgt vom `<scroll-timeline-axis>` Wert.

> **Hinweis:** `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft dabei, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

### Werte

- `<scroll-timeline-name>`

  - : Siehe [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name).

- `<scroll-timeline-axis>`
  - : Siehe [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis). Der Standardwert ist `block`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--squareTimeline` unter Verwendung der `scroll-timeline-name` Eigenschaft auf dem Element mit der ID `container` definiert. Diese wird dann auf die Animation auf das `#square` Element mit `animation-timeline: --squareTimeline` angewendet.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt diesen als Quelle einer Scroll-Timeline mit dem Namen `--squareTimeline` mithilfe der `scroll-timeline` Eigenschaft fest. Es stellt auch ein, dass die zu verwendende Scrollbar für die Timeline die vertikale Scrollbar ist (dies ist eigentlich nicht nötig, da es der Standard ist).

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird ebenfalls so eingestellt, dass eine vertikale Scrollbar erstellt wird, wenn er überläuft (die CSS `height` Regel auf dem `stretcher` Element unten sorgt dafür, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --squareTimeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --squareTimeline vertical;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich gemäß der durch die `animation-timeline` Eigenschaft bereitgestellten Timeline dreht, die auf die `--squareTimeline` Timeline gesetzt ist, die oben benannt wurde.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-timeline: --squareTimeline;
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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, was einen Inhalt erzeugt, der den Containerelement überläuft und dadurch Scrollleisten erzeugt. Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollbar und daher keine Scroll-Timeline, die mit der Animation-Timeline assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich beim Scrollen, und die Animationsdauer beim Verwenden von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die `animation-duration` Eigenschaft definiert, damit Sie die scroll-gesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
