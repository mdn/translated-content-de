---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbarers Element (_scroller_) und die Achse der Scrollleiste anzugeben, die eine anonyme Scrollfortschritts-Timeline zur Animation des aktuellen Elements bereitstellen wird. Die Scrollfortschritts-Timeline schreitet durch das Scrollen des Scrollers zwischen oben und unten (oder links und rechts) voran. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, wird die Animationstimeline inaktiv sein (kein Fortschritt).

> [!NOTE]
> Jede Verwendung von `scroll()` entspricht ihrer eigenen einzigartigen Instanz von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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

  - : Der Wert zur Angabe des Scroller-Elements, das die Scrollfortschrittstimeline bereitstellen wird, kann eine der folgenden sein:

    - `nearest`
      - : Der nächste Vorfahr des aktuellen Elements, der Scrollleisten auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis

  - : Der Wert der Scrollleistenachse kann eine der folgenden sein:

    - `block`
      - : Die Scrollleiste auf der Block-Achse des Scroll-Containers, die die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie im Standardenglisch, ist dies dasselbe wie `y`, während es bei vertikalen Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inline-Achse des Scroll-Containers, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es bei vertikalen Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scroll-Containers.

> [!NOTE]
> Die Werte für Scroller und Achse können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ein anonyme Scrollfortschrittstimeline einstellen

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scrollfortschrittstimeline animiert, die auf das zu animierende Element mit der `scroll()`-Funktion angewendet wird. Die Timeline in diesem speziellen Beispiel wird durch das nächstgelegene Elternelement bereitgestellt, das (irgendeine) Scrollleiste hat, von der Scrollleiste in Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnden Richtungen nach der durch die Eigenschaft `animation-timeline` bereitgestellten Timeline dreht. In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollleiste in Blockrichtung des nächsten Vorfahren, der Scrollleisten hat, auswählen wird; in diesem Fall die vertikale Scrollleiste des "container"-Elements.

> **Hinweis:** `block` und `nearest` sind tatsächlich die Standardwerte der Parameter, daher könnten wir einfach nur `scroll()` verwenden.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft. Das "stretcher" CSS setzt die Blockhöhe auf 600px, was das Container-Element zwingt, überzulaufen. Diese beiden zusammen stellen sicher, dass der Container eine vertikale Scrollleiste hat, die es erlaubt, als Quelle der anonymen Scrollfortschrittstimeline verwendet zu werden.

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

Scrollen Sie, um zu sehen, wie das quadratische Element animiert wird.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
