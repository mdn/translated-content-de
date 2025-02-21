---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scoller_) und die Scrollleistenachse anzugeben, die eine anonyme Scroll-Fortschrittszeitleiste zum Animieren des aktuellen Elements bereitstellen. Die Scroll-Fortschrittszeitleiste wird durch Scrollen des Scrollers zwischen oben und unten (oder links und rechts) durchlaufen. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, ist die Animationszeitleiste inaktiv (kein Fortschritt).

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

  - : Der Wert zur Angabe des Scrollers, der die Scroll-Fortschrittszeitleiste bereitstellt, kann einer der folgenden sein:

    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der Scrollleisten auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Root-Element des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis

  - : Der Wert der Scrollleistenachse kann einer der folgenden sein:

    - `block`
      - : Die Scrollleiste auf der Block-Achse des Scrollcontainers, die die Achse in der Richtung senkrecht zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi, wie im Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inline-Achse des Scrollcontainers, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Werte für Scroller und Achse können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschrittszeitleiste

In diesem Beispiel wird das Element `#square` mithilfe einer anonymen Scroll-Fortschrittszeitleiste animiert, die auf das zu animierende Element mithilfe der `scroll()`-Funktion angewendet wird. Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen übergeordneten Element bereitgestellt, das (irgendeine) Scrollleiste hat, und zwar von der Scrollleiste in Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das CSS unten definiert ein Quadrat, das sich in alternierenden Richtungen gemäß der durch die Eigenschaft `animation-timeline` bereitgestellten Zeitleiste dreht. In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollleiste in Blockrichtung des nächstgelegenen übergeordneten Elements auswählt, das Scrollleisten hat; in diesem Fall die vertikale Scrollleiste des "container"-Elements.

> **Hinweis:** `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass eine vertikale Scrollleiste erstellt wird, falls er überläuft. Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was das Container-Element zwingt, überzulaufen. Diese beiden zusammen stellen sicher, dass der Container eine vertikale Scrollleiste hat, die als Quelle der anonymen Scroll-Fortschrittszeitleiste verwendet werden kann.

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

- [CSS scrollbasierte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
