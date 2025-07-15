---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschritts-Timeline_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) fortschreitet. `scroll-timeline` wird auf den Scroller gesetzt, der die Timeline bereitstellt. Die Start-Scroll-Position stellt 0 % Fortschritt dar und die End-Scroll-Position stellt 100 % Fortschritt dar. Wenn die 0 %-Position und die 100 %-Position zusammenfallen (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Timeline inaktiv.

`scroll-timeline` kann zwei Komponentenwerte enthalten — einen Namen für die benannte Scroll-Fortschritts-Timeline und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn der Scroller seinen Container in der Achsendimension nicht überläuft oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Timeline erstellt.

## Komponenten-Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `scroll-timeline`-Kurzschreibweise kann auf ein Container-Element als Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>` angewendet werden. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben sind, muss die Reihenfolge dem Wert `<scroll-timeline-name>` gefolgt vom Wert `<scroll-timeline-axis>` entsprechen.

> [!NOTE]
> `<scroll-timeline-name>`-Werte müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)-Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellung einer benannten Scroll-Fortschritts-Timeline-Animation

In diesem Beispiel wird eine Scroll-Timeline mit dem Namen `--squareTimeline` unter Verwendung der `scroll-timeline-name`-Eigenschaft auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation auf dem `#square`-Element unter Verwendung von `animation-timeline: --squareTimeline` angewendet.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt diesen als Quelle einer Scroll-Timeline mit dem Namen `--squareTimeline` unter Verwendung der `scroll-timeline`-Eigenschaft.
Es setzt auch die zu verwendende Scrollbar für die Timeline als vertikale Scrollbar (dies ist eigentlich nicht nötig, da es der Standard ist).

Die Höhe des Containers ist auf `300px` gesetzt, und der Container ist auch so eingestellt, dass er eine vertikale Scrollbar erstellt, wenn er überläuft (die CSS-`height`-Regel auf dem `stretcher`-Element unten lässt den Inhalt den Container überlaufen).

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

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der von der `animation-timeline`-Eigenschaft bereitgestellten Timeline dreht, die auf die oben genannte `--squareTimeline`-Timeline gesetzt ist.

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

Die `stretcher`-CSS-Regel setzt die Blockhöhe auf `600px`, wodurch ein Inhalt entsteht, der das Container-Element überläuft und somit Scrollbars erzeugt.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keine Scrollbar und damit keine Scroll-Timeline, die mit der Animation-Timeline assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich beim Scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die `animation-duration`-Eigenschaft definiert, damit Sie die scrollgesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
