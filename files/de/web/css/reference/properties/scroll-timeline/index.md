---
title: scroll-timeline
slug: Web/CSS/Reference/Properties/scroll-timeline
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`scroll-timeline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) wird verwendet, um eine _benannte Fortschrittszeitleiste beim Scrollen_ zu definieren, die durch das Scrollen eines scrollbaren Elements (_Scroller_) zwischen oben und unten (oder links und rechts) weitergeführt wird. `scroll-timeline` wird auf dasjenige Scrolling-Element gesetzt, das die Zeitleiste bereitstellt. Die Anfangsposition beim Scrollen repräsentiert einen Fortschritt von 0 % und die Endposition einen Fortschritt von 100 %. Wenn die 0 %- und 100 %-Position zusammenfallen (d.h. der Scroll-Container hat keinen Überlauf zum Scrollen), ist die Zeitleiste inaktiv.

`scroll-timeline` kann zwei zusamenfassende Werte enthalten — einen Namen für die benannte Scroll-Fortschrittszeitleiste und einen optionalen Scroll-Achsenwert.

Der Name wird dann in einer [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)-Deklaration referenziert, um das Element des Containers anzugeben, das verwendet wird, um den Fortschritt der Animation durch die Scroll-Aktion zu steuern.

> [!NOTE]
> Wenn der Scroller in der Achsrichtung nicht über sein Containermaß hinausragt oder wenn der Überlauf versteckt oder abgeschnitten ist, wird keine Zeitleiste erstellt.

## Zuzsammenfassende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis)

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

Die `scroll-timeline` Kurzschreibweise kann auf ein Container-Element als Kombination der `<scroll-timeline-name>` und `<scroll-timeline-axis>` Werte angewendet werden. Mindestens einer der Werte muss angegeben sein. Wenn beide Werte angegeben sind, muss die Reihenfolge `<scroll-timeline-name>` Wert gefolgt von `<scroll-timeline-axis>` Wert eingehalten werden.

> [!NOTE]
> `<scroll-timeline-name>`s müssen [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident) Werte sein, was bedeutet, dass sie mit `--` beginnen müssen. Dies hilft, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

### Werte

- `<scroll-timeline-name>`
  - : Siehe [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name).

- `<scroll-timeline-axis>`
  - : Siehe [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis). Der Standardwert ist `block`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erstellen einer benannten Scroll-Fortschrittszeitleisten-Animation

In diesem Beispiel wird eine Scroll-Zeitleiste mit dem Namen `--square-timeline` durch die Eigenschaft `scroll-timeline-name` am Element mit der ID `container` definiert.
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

Das CSS für den Container legt ihn als Quelle einer Scroll-Zeitleiste namens `--square-timeline` mithilfe der `scroll-timeline` Eigenschaft fest.
Es wird auch festgelegt, dass der vertikale Rollbalken für die Zeitleiste verwendet wird (dies ist eigentlich nicht erforderlich, da es der Standard ist).

Die Höhe des Containers ist auf `300px` festgelegt, und der Container ist ebenfalls so eingestellt, dass ein vertikaler Rollbalken erstellt wird, wenn er über seine Grenzen hinausgeht (die CSS-Regel `height` für das `stretcher` Element unten führt dazu, dass der Inhalt seinen Container überläuft).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --square-timeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --square-timeline vertical;
  position: relative;
}
```

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der durch die `animation-timeline` Eigenschaft bereitgestellten Zeitleiste dreht, die auf die oben benannte Zeitleiste `--square-timeline` gesetzt ist.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
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

Die `stretcher` CSS-Regel setzt die Blockhöhe auf `600px`, wodurch Inhalte erzeugt werden, die den Container überlaufen und somit Rollbalken erzeugt werden.
Ohne dieses Element würde der Inhalt den Container nicht überlaufen, es gäbe keinen Rollbalken und daher auch keine Zeitleiste, die der Animationszeitleiste zugeordnet werden könnte.

#### Ergebnis

Scrollen Sie den vertikalen Balken, um zu sehen, wie das Quadrat animiert wird, während Sie scrollen.

{{EmbedLiveSample("Creating_a_named_scroll_progress_timeline_animation", "100%", "320px")}}

Das Quadrat animiert sich beim Scrollen, und die Animationsdauer bei Verwendung von `scroll-timeline` hängt von der Scrollgeschwindigkeit ab (dennoch wurde die Eigenschaft `animation-duration` definiert, damit Sie die durch Scrollen gesteuerte Animation erkennen können).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline-axis`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-axis), [`scroll-timeline-name`](/de/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
