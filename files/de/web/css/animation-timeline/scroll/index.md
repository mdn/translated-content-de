---
title: scroll()
slug: Web/CSS/animation-timeline/scroll
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann mit {{cssxref("animation-timeline")}} verwendet werden, um ein scrollbares Element (_Scroller_) und die Scrollbalkenachse anzugeben, die eine anonyme Fortschrittszeitleiste für das Animieren des aktuellen Elements bereitstellt. Die Fortschrittszeitleiste wird durch das Scrollen des Scrollers zwischen oben und unten (oder links und rechts) fortschreiten. Die Position im Scrollbereich wird in einen Fortschrittsprozentsatz umgewandelt — 0 % am Anfang und 100 % am Ende.

> [!NOTE]
> Wenn die angegebene Achse keinen Scrollbalken enthält, ist die Animationszeitleiste inaktiv (hat keinen Fortschritt).

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
  - : Der Wert zur Angabe des Scroller-Elements, das die Fortschrittszeitleiste bereitstellt, kann einer der folgenden sein:
    - `nearest`
      - : Der nächstgelegene Vorfahre des aktuellen Elements, der Scrollbalken auf einer Achse hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- axis
  - : Der Wert der Scrollbalkenachse kann einer der folgenden sein:
    - `block`
      - : Der Scrollbalken auf der Blockachse des Scrollcontainers, der die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Bei horizontalen Schreibmodi, wie dem Standard-Englisch, ist dies das gleiche wie `y`, während es bei vertikalen Schreibmodi das gleiche wie `x` ist. Dies ist der Standardwert.
    - `inline`
      - : Der Scrollbalken auf der Inlineachse des Scrollcontainers, der die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Bei horizontalen Schreibmodi ist dies das gleiche wie `x`, während es bei vertikalen Schreibmodi das gleiche wie `y` ist.
    - `y`
      - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
    - `x`
      - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

> [!NOTE]
> Die Werte für Scroller und Achse können in beliebiger Reihenfolge angegeben werden.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Fortschrittszeitleiste

In diesem Beispiel wird das `#square`-Element mit einer anonymen Fortschrittszeitleiste animiert, die auf das zu animierende Element mithilfe der `scroll()`-Funktion angewendet wird. Die Zeitleiste in diesem speziellen Beispiel wird vom nächstgelegenen übergeordneten Element bereitgestellt, das (irgendeinen) Scrollbalken hat, und zwar vom Scrollbalken in Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten angezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das untenstehende CSS definiert ein Quadrat, das sich entsprechend der von der Eigenschaft `animation-timeline` bereitgestellten Zeitleiste abwechselnd in verschiedene Richtungen dreht. In diesem Fall wird die Zeitleiste durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie den Scrollbalken in Blockrichtung des nächstgelegenen Vorfahren auswählt, der Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des "Container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir auch einfach `scroll()` verwenden können.

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

Das CSS für den Container legt seine Höhe auf 300px fest und wir setzen den Container auch so, dass er einen vertikalen Scrollbalken erzeugt, wenn er überfließt. Das "Stretcher"-CSS setzt die Blockhöhe auf 600px, was das Überfließen des Containerelements erzwingt. Diese beiden zusammen sorgen dafür, dass der Container einen vertikalen Scrollbalken hat, der als Quelle der anonymen Fortschrittszeitleiste verwendet werden kann.

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

{{EmbedLiveSample("Festlegen einer anonymen Fortschrittszeitleiste", "100%", "320px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [`animation-timeline`](/de/docs/Web/CSS/animation-timeline)
