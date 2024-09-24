---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}{{SeeCompatTable}}

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbarres Element (_Scroller_) und die Scrollbalkenachse anzugeben, die eine anonyme Scroll-Fortschrittszeitachse für die Animation des aktuellen Elements bereitstellt. Die Scroll-Fortschrittszeitachse wird durch das Scrollen des Scrollers zwischen oben und unten (oder links und rechts) fortschreiten. Die Position im Scrollbereich wird in einen Prozentsatz des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationszeitachse inaktiv (kein Fortschritt).

> [!NOTE]
> Jede Verwendung von `scroll()` entspricht einer eigenen Instanz von {{domxref("ScrollTimeline")}} in der [Web Animations API](/de/docs/Web/API/Web_Animations_API).

## Syntax

```css
/* Funktion ohne gesetzte Parameter */
animation-timeline: scroll();

/* Werte zur Auswahl des Scroller-Elements */
animation-timeline: scroll(nearest); /* Standard */
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* Werte zur Auswahl der Achse */
animation-timeline: scroll(block); /* Standard */
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* Beispiele, die Scroller und Achse spezifizieren */
animation-timeline: scroll(block nearest); /* Standard */
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameter

- scroller

  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschrittszeitachse bereitstellt, kann einer der folgenden sein:

    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der Scrollbalken auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das Element selbst.

- axis

  - : Der Wert für die Scrollbalkenachse kann einer der folgenden sein:

    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibrichtungen, wie im Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, die Achse in der Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschrittszeitachse

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschrittszeitachse animiert, die auf das zu animierende Element mit der `scroll()` Funktion angewendet wird.
Die Zeitleiste in diesem speziellen Beispiel wird vom nächsten Elternelement bereitgestellt, das (beliebigen) Scrollbalken hat, von dem Scrollbalken in der Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der untenstehende CSS-Code definiert ein Quadrat, das sich in entgegengesetzte Richtungen gemäß der Zeitleiste dreht, die durch die Eigenschaft `animation-timeline` bereitgestellt wird.
In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in der Blockrichtung des nächstgelegenen Vorfahren mit Scrollbalken auswählt; in diesem Fall den vertikalen Scrollbalken des "container"-Elements.

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
  animation-duration: 1ms; /* Firefox benötigt dies, um die Animation anzuwenden */
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

Der CSS-Code für den Container setzt seine Höhe auf 300px und wir setzen auch den Container so, dass er eine vertikale Bildlaufleiste erstellt, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, wodurch das Containerelement gezwungen wird, überzulaufen.
Diese beiden zusammen stellen sicher, dass der Container eine vertikale Bildlaufleiste hat, die es ermöglicht, ihn als Quelle der anonymen Scroll-Fortschrittszeitachse zu verwenden.

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

- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [CSS-Animationen verwenden](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
