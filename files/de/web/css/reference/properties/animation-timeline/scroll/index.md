---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: 1bfe630bd8538b64c97c7f684f5ee647a76c1a28
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_scroller_) und eine Scrollleistenachse anzugeben, die eine anonyme Scroll-Fortschritt-Zeitachse für die Animation des aktuellen Elements bereitstellt. Die Scroll-Fortschritt-Zeitachse wird durch Scrollen des Scrollers zwischen oben und unten (oder links und rechts) durchlaufen. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0% am Anfang und 100% am Ende.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animations-Zeitachse inaktiv (hat keinen Fortschritt).

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
  - : Der Wert, der das Scroller-Element angibt, das die Scroll-Fortschritt-Zeitachse bereitstellt, kann einer der folgenden sein:
    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der Scrollbalken auf einer der beiden Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Wert der Scrollleistenachse kann einer der folgenden sein:
    - `block`
      - : Die Scrollleiste auf der Blockachse des Scroll-Containers, welche die Achse ist, die senkrecht zur Fließrichtung des Textes innerhalb einer Zeile liegt. Für horizontale Schreibmodi, wie zum Beispiel Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibmodi dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Die Scrollleiste auf der Inline-Achse des Scroll-Containers, welche die Achse ist, die parallel zur Fließrichtung des Textes innerhalb einer Zeile liegt. Für horizontale Schreibmodi ist dies dasselbe wie `x`, während es für vertikale Schreibmodi dasselbe wie `y` ist.
    - `y`
      - : Die Scrollleiste auf der vertikalen Achse des Scroll-Containers.
    - `x`
      - : Die Scrollleiste auf der horizontalen Achse des Scroll-Containers.

> [!NOTE]
> Die Werte für scroller und axis können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschritt-Zeitachse

In diesem Beispiel wird das `#square`-Element mithilfe einer anonymen Scroll-Fortschritt-Zeitachse animiert, die mit der `scroll()`-Funktion auf das zu animierende Element angewendet wird.
Die Zeitachse in diesem speziellen Beispiel wird durch das nächstgelegene übergeordnete Element bereitgestellt, das über einen (beliebigen) Scrollbalken verfügt, von dem Scrollbalken in der Blockrichtung.

#### HTML

Das HTML für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in entgegengesetzten Richtungen gemäß der durch die `animation-timeline`-Eigenschaft bereitgestellten Zeitachse dreht.
In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass es den Scrollbalken in der Blockrichtung des nächstgelegenen Vorfahrenelements auswählt, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir einfach `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass er einen vertikalen Scrollbalken erzeugt, wenn er überläuft. Das "stretcher"-CSS setzt die Blockhöhe auf 600px, wodurch das Containerelement gezwungen wird, überzulaufen.
Diese beiden zusammen sorgen dafür, dass der Container einen vertikalen Scrollbalken hat, wodurch er als Quelle der anonymen Scroll-Fortschritt-Zeitachse verwendet werden kann.

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

Scrollen Sie, um das quadratische Element in der Animation zu sehen.

{{EmbedLiveSample("Setting an anonymous scroll progress timeline", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- [`animation-timeline`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
