---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und eine Scrollleistenachse anzugeben, die eine anonyme Scrollfortschritts-Zeitachse zum Animieren des aktuellen Elements bereitstellen. Die Fortschritts-Zeitachse wird durch Scrollen des Scrollers von oben nach unten (oder von links nach rechts) fortschreiten. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, wird die Animationszeitachse inaktiv sein (hat keinen Fortschritt).

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

  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschritts-Zeitachse bereitstellen wird, kann einer der folgenden sein:

    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der auf irgendeiner Achse Scrollleisten hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis

  - : Der Wert für die Scrollleistenachse kann einer der folgenden sein:

    - `block`
      - : Die Scrollleiste auf der Blockachse des Scrollcontainers, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie z.B. standardmäßiges Englisch, entspricht dies `y`, während es für vertikale Schreibrichtungen `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inline-Achse des Scrollcontainers, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen entspricht dies `x`, während es für vertikale Schreibrichtungen `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschritts-Zeitachse

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschritts-Zeitachse animiert, die mit der `scroll()`-Funktion auf das zu animierende Element angewendet wird.
Die Zeitachse in diesem speziellen Beispiel wird vom nächstgelegenen übergeordneten Element bereitgestellt, das (irgendwelche) Scrollleisten hat, und zwar von der Scrollleiste in der Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS unten definiert ein Quadrat, das sich entsprechend der von der `animation-timeline`-Eigenschaft bereitgestellten Zeitachse in wechselnden Richtungen dreht.
In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass die Scrollleiste in der Blockrichtung des nächstgelegenen übergeordneten Elements mit Scrollleisten ausgewählt wird; in diesem Fall die vertikale Scrollleiste des "container"-Elements.

> **Hinweis:** `block` und `nearest` sind eigentlich die Standardparameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt dessen Höhe auf 300px und wir setzen den Container auch so, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, wodurch das Containerelement zum Überlaufen gezwungen wird.
Diese beiden zusammen gewährleisten, dass der Container eine vertikale Scrollleiste hat, die als Quelle der anonymen Scroll-Fortschritts-Zeitachse verwendet werden kann.

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

Scrollen Sie, um zu sehen, wie das Quadratelement animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
