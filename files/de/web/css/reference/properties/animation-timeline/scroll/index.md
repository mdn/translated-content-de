---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und die Scroll-Leiste-Achse anzugeben, die eine anonyme Scroll-Fortschritts-Zeitachse für die Animation des aktuellen Elements bereitstellt. Die Scroll-Fortschritts-Zeitachse wird durch das Scrollen des Scrollers von oben nach unten (oder von links nach rechts) durchlaufen. Die Position im Scroll-Bereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scroll-Leiste enthält, wird die Animation-Zeitachse inaktiv sein (ohne Fortschritt).

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
  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschritts-Zeitachse bereitstellen wird, kann einer der folgenden sein:
    - `nearest`
      - : Der nächste Vorfahr des aktuellen Elements, der Scroll-Leisten auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Stamm-Element des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Wert der Scroll-Leisten-Achse kann einer der folgenden sein:
    - `block`
      - : Die Scroll-Leiste auf der Block-Achse des Scroll-Containers, die die Achse ist, die senkrecht zum Textfluss innerhalb einer Zeile verläuft. Für horizontale Schreibrichtungen, wie beim Standardenglisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scroll-Leiste auf der Inline-Achse des Scroll-Containers, die die Achse ist, die parallel zum Textfluss in einer Zeile verläuft. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Die Scroll-Leiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scroll-Leiste auf der horizontalen Achse des Scroll-Containers.

> [!NOTE]
> Die Werte für Scroller und Achse können in beliebiger Reihenfolge angegeben werden.

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen Scroll-Fortschritts-Zeitachse

In diesem Beispiel wird das `#square`-Element mithilfe einer anonymen Scroll-Fortschritts-Zeitachse animiert, die mit der `scroll()` Funktion auf das zu animierende Element angewendet wird.
Die Zeitachse in diesem speziellen Beispiel wird vom nächsten Elternelement bereitgestellt, das eine (beliebige) Scroll-Leiste hat, von der Scroll-Leiste in Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich abwechselnd in entgegengesetzte Richtungen dreht, entsprechend der von der Eigenschaft `animation-timeline` bereitgestellten Zeitachse.
In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass die Scroll-Leiste in Blockrichtung des nächsten Vorfahren-Elements gewählt wird, das Scroll-Leisten hat; in diesem Fall die vertikale Scroll-Leiste des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standard-Parameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen auch den Container so, dass er eine vertikale Scroll-Leiste erzeugt, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt.
Diese beiden zusammen gewährleisten, dass der Container eine vertikale Scroll-Leiste hat, die es ihm erlaubt, als Quelle der anonymen Scroll-Fortschritts-Zeitachse verwendet zu werden.

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

- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
