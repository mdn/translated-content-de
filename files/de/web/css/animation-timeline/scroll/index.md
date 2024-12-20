---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und eine Scrollleistenachse anzugeben, die eine anonyme Fortschrittszeitleiste für Animationen des aktuellen Elements liefert. Die Fortschrittszeitleiste wird durch das Scrollen des Scrollers zwischen oben und unten (oder links und rechts) fortgesetzt. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, ist die Animationszeitleiste inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Verwendung von `scroll()` entspricht einer eigenen Instanz von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

## Syntax

```css
/* Function with no parameters set */
animation-timeline: scroll();

/* Values for selecting the scroller element */
animation-timeline: scroll(nearest); /* Default */
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* Values for selecting the axis */
animation-timeline: scroll(block); /* Default */
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* Examples that specify scroller and axis */
animation-timeline: scroll(block nearest); /* Default */
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameter

- scroller

  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschrittszeitleiste bereitstellt, kann einer der folgenden sein:

    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der Scrollleisten auf irgendeiner Achse hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis

  - : Der Wert der Scrollleistenachse kann einer der folgenden sein:

    - `block`
      - : Die Scrollleiste auf der Blockachse des Scrollcontainers, die senkrecht zum Fluss des Textes in einer Zeile verläuft. Bei horizontalen Schreibmodi, wie z.B. im Englischen, entspricht dies `y`, während es bei vertikalen Schreibmodi `x` entspricht. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inlineachse des Scrollcontainers, die parallel zum Fluss des Textes in einer Zeile verläuft. Bei horizontalen Schreibmodi entspricht dies `x`, während es bei vertikalen Schreibmodi `y` entspricht.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschrittszeitleiste

In diesem Beispiel wird das `#square` Element mit einer anonymen Scroll-Fortschrittszeitleiste animiert, die auf das zu animierende Element mithilfe der `scroll()` Funktion angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird von dem nächstgelegenen Elternelement bereitgestellt, das eine (beliebige) Scrollleiste hat, von der Scrollleiste in der Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich abwechselnd in verschiedene Richtungen entsprechend der von der Eigenschaft `animation-timeline` bereitgestellten Zeitleiste dreht.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass die Scrollleiste in der Blockrichtung des nächstgelegenen Vorfahrenelements ausgewählt wird, das Scrollleisten hat; in diesem Fall die vertikale Scrollleiste des "container"-Elements.

> **Hinweis:** `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir einfach nur `scroll()` verwenden können.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
  animation-direction: alternate;
  animation-timeline: scroll(block nearest);
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

Das CSS für den Container setzt seine Höhe auf 300px, und wir setzen den Container auch so, dass er eine vertikale Scrollleiste erstellt, falls er überläuft.
Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was den Container zwingt, überzulaufen.
Diese zwei zusammen gewährleisten, dass der Container eine vertikale Scrollleiste hat, die als Quelle der anonymen Scroll-Fortschrittszeitleiste verwendet werden kann.

```css
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

#### Ergebnis

Scrollen Sie, um das animierte Square-Element zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
