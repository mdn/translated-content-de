---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und die Scrollleisten-Achse anzugeben, die eine anonyme Scroll-Fortschritts-Timeline für die Animation des aktuellen Elements bereitstellt. Die Scroll-Fortschritts-Timeline wird durch Scrollen des Scrollers zwischen oben und unten (oder links und rechts) fortgesetzt. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt – 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keine Scrollbar enthält, ist die Animationstimeline inaktiv (kein Fortschritt).

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

  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschritts-Timeline bereitstellen wird, kann einer der folgenden sein:
    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der Scrollleisten auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Wert der Scrollleisten-Achse kann einer der folgenden sein:
    - `block`
      - : Die Scrollbar auf der Block-Achse des Scroll-Containers, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Linie ist. Für horizontale Schreibmodi, wie z.B. Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollbar auf der Inline-Achse des Scroll-Containers, welche die Achse in der Richtung ist, die parallel zum Textfluss in einer Zeile verläuft. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Die Scrollbar auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scrollbar auf der horizontalen Achse des Scroll-Containers.

> [!NOTE]
> Die Werte für scroller und axis können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine anonyme Scroll-Fortschritts-Timeline setzen

In diesem Beispiel wird das `#square`-Element unter Verwendung einer anonymen Scroll-Fortschritts-Timeline animiert, die mittels der `scroll()`-Funktion auf das zu animierende Element angewendet wird. Die Timeline in diesem konkreten Beispiel wird vom nächstgelegenen übergeordneten Element bereitgestellt, das (irgendeine) Scrollbar hat, von der Scrollbar in der Blockrichtung.

#### HTML

Das HTML für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in alternierenden Richtungen gemäß der Timeline dreht, die durch die Eigenschaft `animation-timeline` bereitgestellt wird. In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass die Scrollbar in der Blockrichtung des nächstgelegenen Vorfahrelements ausgewählt wird, das Scrollleisten hat; in diesem Fall die vertikale Scrollbar des "container"-Elements.

> [!NOTE] > `block` und `nearest` sind tatsächlich die Standardwertparameter, also hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und setzt den Container so, dass eine vertikale Scrollbar erstellt wird, falls er überläuft. Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was das Containerelement zwingt, überzulaufen. Diese beiden zusammen sorgen dafür, dass der Container eine vertikale Scrollbar hat, die als Quelle für die anonyme Scroll-Fortschritts-Timeline verwendet werden kann.

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

- [CSS scroll-driven animations](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
