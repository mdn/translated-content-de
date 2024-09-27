---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Zeitleiste_ zu definieren, die durch Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitleiste bereitstellen soll. Die Startposition des Scrollens stellt 0 % Fortschritt dar, und die Endposition des Scrollens stellt 100 % Fortschritt dar. Wenn die 0 %-Position und die 100 %-Position zusammenfallen (d. h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Zeitleiste inaktiv.

`scroll-timeline` kann zwei konstituierende Werte enthalten — einen Namen für die benannte Scroll-Fortschritts-Zeitleiste und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`]-Deklaration (/de/docs/Web/CSS/animation-timeline) referenziert, um das Element des Containers zu kennzeichnen, das den Fortschritt der Animation durch die Scroll-Aktion steuert.

> [!NOTE]
> Wenn der Scroller in der Achsendimension nicht über sein Container-Element hinausgeht oder wenn der Überlauf verborgen oder abgeschnitten ist, wird keine Zeitleiste erstellt.

## Bestimmende Eigenschaften

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

Die `scroll-timeline`-Kurzschreibweise kann auf ein Containerelement als Kombination von `<scroll-timeline-name>` und `<scroll-timeline-axis>` Werten angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben werden, muss die Reihenfolge `<scroll-timeline-name>` gefolgt von `<scroll-timeline-axis>` sein.

> **Hinweis:** `<scroll-timeline-name>` muss [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte verwenden, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellen einer benannten Scroll-Fortschritts-Zeitleisten-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste namens `--squareTimeline` mithilfe der Eigenschaft `scroll-timeline-name` auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation des `#square`-Elements angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container legt diesen als die Quelle einer Scroll-Zeitleiste namens `--squareTimeline` mit der Eigenschaft `scroll-timeline` fest.
Zudem wird die zu verwendende Scrollleiste für die Zeitleiste als vertikale Scrollleiste festgelegt (dies ist nicht zwingend erforderlich, da es der Standard ist).

Die Höhe des Containers ist auf `300px` gesetzt, und der Container ist auch so eingestellt, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft (die CSS-Regel `height` auf dem `stretcher`-Element unten lässt den Inhalt den Container überlaufen).

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

Das untenstehende CSS definiert ein Quadrat, das entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Zeitleiste rotiert, die oben auf die `--squareTimeline`-Zeitleiste gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, was dazu führt, dass der Inhalt den Containerelement überläuft und dadurch Scrollleisten erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollleiste und somit keine Scroll-Zeitleiste, die mit der Animations-Zeitleiste verbunden wäre.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich während des Scrollens, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die Eigenschaft `animation-duration` definiert, sodass die scrollgesteuerte Animation erkannt werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
