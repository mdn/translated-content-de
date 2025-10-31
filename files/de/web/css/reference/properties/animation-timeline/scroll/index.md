---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`scroll()`**-[CSS-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann zusammen mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und eine Scrollbalkenachse anzuzeigen, die eine anonyme Scroll-Fortschritts-Timeline für die Animation des aktuellen Elements bereitstellt. Die Scroll-Fortschritts-Timeline wird durch Scrollen des Scrollers zwischen oben und unten (oder links und rechts) fortgeschritten. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt – 0% am Anfang und 100% am Ende.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationstimeline inaktiv (hat null Fortschritt).

> [!NOTE]
> Jede Verwendung von `scroll()` entspricht einer eigenen eindeutigen Instanz von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

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
  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschritts-Timeline bereitstellt, kann einer der folgenden sein:
    - `nearest`
      - : Der nächste Vorfahr des aktuellen Elements, der Scrollbalken auf einer der beiden Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Root-Element des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Wert für die Scrollbalkenachse kann einer der folgenden sein:
    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, also die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibmodi, wie Standardenglisch, ist das dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, also die Achse in der Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibmodi ist das dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Werte für scroller und axis können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellen einer anonymen Scroll-Fortschritts-Timeline

In diesem Beispiel wird das `#square`-Element unter Verwendung einer anonymen Scroll-Fortschritts-Timeline animiert, die mithilfe der `scroll()`-Funktion auf das zu animierende Element angewendet wird. Die Timeline in diesem speziellen Beispiel wird durch das nächste übergeordnete Element bereitgestellt, das (irgendeinen) Scrollbalken hat, wobei der Scrollbalken in Blockrichtung verwendet wird.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in alternierenden Richtungen gemäß der durch die Eigenschaft `animation-timeline` bereitgestellten Timeline dreht. In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in Blockrichtung des nächsten Vorfahrenelements mit Scrollbalken auswählt; in diesem Fall der vertikale Scrollbalken des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, sodass wir nur `scroll()` hätten verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen auch den Container so, dass ein vertikaler Scrollbalken erzeugt wird, wenn er überläuft. Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was den Container dazu zwingt, überzulaufen. Diese beiden zusammen stellen sicher, dass der Container einen vertikalen Scrollbalken hat, der als Quelle der anonymen Scroll-Fortschritts-Timeline verwendet werden kann.

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

Scrollen Sie, um das animierte Quadrat-Element zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
