---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und eine Scrollbalkenachse anzugeben, die eine anonyme Scroll-Fortschrittszeitachse für die Animation des aktuellen Elements bereitstellen. Die Scroll-Fortschrittszeitachse wird durch Scrollen des Scrollers zwischen oben und unten (oder links und rechts) vorangetrieben. Die Position im Scrollbereich wird in einen Prozentwert des Fortschritts umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animations-Zeitachse inaktiv (hat keinen Fortschritt).

> [!NOTE]
> Jede Verwendung von `scroll()` entspricht einer eigenen Instanz von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) in der [Web-Animations-API](/de/docs/Web/API/Web_Animations_API).

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
  - : Der Wert zur Angabe des Scroller-Elements, das die Scroll-Fortschrittszeitachse bereitstellt, kann einer der folgenden sein:
    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der Scrollbalken auf einer der Achsen hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Wert der Scrollbalkenachse kann einer der folgenden sein:
    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, der Achse in Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibrichtungen, wie Standard-Englisch, ist dies dasselbe wie `y`, während es für vertikale Schreibrichtungen dasselbe wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inline-Achse des Scrollcontainers, der Achse in Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibrichtungen ist dies dasselbe wie `x`, während es für vertikale Schreibrichtungen dasselbe wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Werte für Scroller und Achse können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Eine anonyme Scroll-Fortschrittszeitachse festlegen

In diesem Beispiel wird das `#square`-Element unter Verwendung einer anonymen Scroll-Fortschrittszeitachse animiert, die mithilfe der `scroll()`-Funktion auf das zu animierende Element angewendet wird. Die Zeitachse in diesem speziellen Beispiel wird durch das nächste Elternelement bereitgestellt, das (irgendeinen) Scrollbalken hat, vom Scrollbalken in der Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel ist unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich in abwechselnden Richtungen entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Zeitachse dreht. In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in der Blockrichtung des nächstgelegenen Vorfahrenelements auswählt, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "container"-Elements.

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

Das CSS für den Container setzt dessen Höhe auf 300px und wir legen auch fest, dass der Container bei Überlauf einen vertikalen Scrollbalken erstellen soll. Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überlaufen des Container-Elements erzwingt. Diese beiden zusammen stellen sicher, dass der Container einen vertikalen Scrollbalken hat, der als Quelle der anonymen Scroll-Fortschrittszeitachse verwendet werden kann.

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

- [Scroll-gesteuerte CSS-Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
