---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und die Achse der Bildlaufleiste anzugeben, die eine anonyme Scroll-Fortschrittsmoduslinie für die Animation des aktuellen Elements bereitstellen. Der Fortschrittsmodus erfolgt durch Scrollen des Scrollers zwischen oben und unten (oder links und rechts). Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt – 0% am Anfang und 100% am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Bildlaufleiste enthält, ist die Animationszeitachse inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Verwendung von `scroll()` entspricht einer eigenen einzigartigen Instanz von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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

  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschrittsmoduslinie bereitstellt, kann einer der folgenden sein:

    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der auf einer der beiden Achsen Bildlaufleisten hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis

  - : Der Achswert der Bildlaufleiste kann einer der folgenden sein:

    - `block`
      - : Die Bildlaufleiste auf der Blockachse des Scroll-Containers, die die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Bei horizontalen Schreibrichtungen, wie z.B. im Standard-Englisch, entspricht dies der `y`-Achse, während es bei vertikalen Schreibrichtungen der `x`-Achse entspricht. Dies ist der Standardwert.
    - `inline`
      - : Die Bildlaufleiste auf der Inline-Achse des Scroll-Containers, die die Achse in Richtung parallel zum Textfluss in einer Zeile ist. Bei horizontalen Schreibrichtungen entspricht dies der `x`-Achse, während es bei vertikalen Schreibrichtungen der `y`-Achse entspricht.
    - `y`
      - : Die Bildlaufleiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Bildlaufleiste auf der horizontalen Achse des Scroll-Containers.

> [!NOTE]
> Die Werte für Scroller und Achse können in beliebiger Reihenfolge angegeben werden.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen Scroll-Fortschrittsmoduslinie

In diesem Beispiel wird das `#square`-Element mithilfe einer anonymen Scroll-Fortschrittsmoduslinie animiert, die auf das zu animierende Element mit der `scroll()`-Funktion angewendet wird. Die Zeitachse in diesem speziellen Beispiel wird vom nächsten übergeordneten Element bereitgestellt, das eine (beliebige) Bildlaufleiste hat, und zwar von der Bildlaufleiste in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das unten stehende CSS definiert ein Quadrat, das sich in alternativen Richtungen entsprechend der von der `animation-timeline`-Eigenschaft bereitgestellten Zeitachse dreht. In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass es die Bildlaufleiste in der Blockrichtung des nächsten Vorfahrenfeldes mit Bildlaufleisten auswählt; in diesem Fall die vertikale Bildlaufleiste des "container"-Elements.

> **Hinweis:** `block` und `nearest` sind eigentlich die Standardparameterwerte, daher könnten wir einfach `scroll()` verwenden.

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

Das CSS für den Container setzt seine Höhe auf 300px fest und wir setzen den Container auch so, dass er eine vertikale Bildlaufleiste erzeugt, wenn er überläuft. Das "stretcher" CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Containerelements erzwingt. Diese beiden zusammen stellen sicher, dass der Container eine vertikale Bildlaufleiste hat, die es ihm ermöglicht, als Quelle der anonymen Scroll-Fortschrittsmoduslinie verwendet zu werden.

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

Scrollen Sie, um zu sehen, wie das Quadrat-Element animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
