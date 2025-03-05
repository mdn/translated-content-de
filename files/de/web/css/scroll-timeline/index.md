---
title: scroll-timeline
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Scroll-Fortschrittszeitachse_ zu definieren, die durch das Scrollen eines scrollbareren Elements (_Scroller_) von oben nach unten (oder von links nach rechts) voranschreitet. `scroll-timeline` wird auf dem Scroller gesetzt, der die Zeitachse bereitstellen wird. Die Start-Scroll-Position entspricht 0% Fortschritt und die End-Scroll-Position entspricht 100% Fortschritt. Wenn die 0%-Position und die 100%-Position übereinstimmen (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Zeitachse inaktiv.

`scroll-timeline` kann zwei Bestandwerte enthalten — einen Namen für die benannte Scroll-Fortschrittszeitachse und einen optionalen Wert für die Scroll-Achse.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)-Deklaration referenziert, um das Element des Containers zu kennzeichnen, das den Fortschritt der Animation durch die Scrollaktion steuert.

> [!NOTE]
> Wenn der Scroller in der Achsenrichtung nicht seinen Container überflutet oder der Überlauf verborgen oder abgeschnitten ist, wird keine Zeitachse erstellt.

## Bestandteilseigenschaften

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

Die `scroll-timeline` Kurzform-Eigenschaft kann auf ein Container-Element angewendet werden als eine Kombination der Werte `<scroll-timeline-name>` und `<scroll-timeline-axis>`. Mindestens einer der Werte muss angegeben werden. Wenn beide Werte angegeben werden, muss die Reihenfolge eingehalten werden: zuerst der `<scroll-timeline-name>`-Wert, gefolgt vom `<scroll-timeline-axis>`-Wert.

> **Hinweis:** `<scroll-timeline-name>`-Werte müssen [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident) Werte sein, das bedeutet, sie müssen mit `--` beginnen. Dies hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

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

### Erstellen einer benannten Scroll-Fortschrittszeitachse-Animation

In diesem Beispiel wird mit der `scroll-timeline-name` Eigenschaft eine Scroll-Zeitachse namens `--squareTimeline` auf dem Element mit der ID `container` definiert.
Diese wird dann auf die Animation auf dem `#square` Element angewendet, indem `animation-timeline: --squareTimeline` verwendet wird.

#### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS für den Container setzt diesen als Quelle einer Scroll-Zeitachse namens `--squareTimeline` mit der `scroll-timeline` Eigenschaft.
Es setzt auch die zu verwendende Scroll-Leiste für die Zeitachse als vertikale Scroll-Leiste (dies ist nicht wirklich erforderlich, da es der Standard ist).

Die Höhe des Containers wird auf `300px` gesetzt, und der Container wird auch so eingestellt, dass er eine vertikale Scroll-Leiste erstellt, wenn er überläuft (die CSS `height` Regel auf dem `stretcher` Element unten lässt den Inhalt den Container überlaufen).

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

Das folgende CSS definiert ein Quadrat, das sich gemäß der von `animation-timeline` bereitgestellten Zeitachse dreht, welche auf die oben benannte `--squareTimeline` Zeitachse eingestellt ist.

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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, was Inhalte erstellt, die das Container-Element überlaufen und damit Scroll-Leisten erzeugen.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es würde keine Scroll-Leiste geben, und daher keine Scroll-Zeitachse, die mit der Animationszeitachse assoziiert werden könnte.

#### Ergebnis

Scrollen Sie die vertikale Leiste, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat bewegt sich, während Sie scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die Eigenschaft `animation-duration` definiert, sodass Sie die scrollgesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
