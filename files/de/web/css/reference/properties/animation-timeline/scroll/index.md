---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und die Scroll-Leiste-Achse anzugeben, die eine anonyme Scroll-Fortschritts-Timeline zum Animieren des aktuellen Elements bereitstellt. Die Scroll-Fortschritts-Timeline wird durch das Scrollen des Scrollers zwischen oben und unten (oder links und rechts) vorangetrieben. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollleiste enthält, bleibt die Animationstimeline inaktiv (keine Fortschritte).

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
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der Scrollleisten auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Scrollleiste-Achsenwert kann einer der folgenden sein:
    - `block`
      - : Die Scrollleiste auf der Blockachse des Scroll-Containers, die die Achse in der Richtung senkrecht zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen, wie im Standardenglisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inline-Achse des Scroll-Containers, die die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scroll-Containers.

> [!NOTE]
> Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einrichten einer anonymen Scroll-Fortschritts-Timeline

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschritts-Timeline animiert, die auf das zu animierende Element mit der `scroll()`-Funktion angewendet wird.
Die Timeline in diesem speziellen Beispiel wird durch das nächstgelegene übergeordnete Element bereitgestellt, das über eine (beliebige) Scrollleiste verfügt, von der Scrollleiste in der Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das unten stehende CSS definiert ein Quadrat, das sich in abwechselnden Richtungen gemäß der durch die Eigenschaft `animation-timeline` bereitgestellten Timeline dreht.
In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass die Scrollleiste in der Blockrichtung des nächstgelegenen Vorfahrelements ausgewählt wird, das Scrollleisten hat; in diesem Fall die vertikale Scrollleiste des "container"-Elements.

> [!NOTE] > `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher könnten wir einfach `scroll()` verwenden.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass er eine vertikale Scrollleiste erstellt, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was den Container zwingt, überzulaufen.
Diese beiden zusammen gewährleisten, dass der Container eine vertikale Scrollleiste hat, die als Quelle der anonymen Scroll-Fortschritts-Timeline verwendet werden kann.

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

- [CSS scroll-basierte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
