---
title: "`scroll()` CSS-Funktion"
short-title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann mit der {{cssxref("animation-timeline")}}-Eigenschaft verwendet werden, um eine [anonyme Scroll-Fortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) zu erstellen, die den Scroller und die Achse der Zeitachse definiert.

## Syntax

```css
/* No arguments */
animation-timeline: scroll();

/* <scroller> argument only */
animation-timeline: scroll(nearest);
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/*`<axis>` argument only */
animation-timeline: scroll(block);
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* <scroller> and <axis> */
animation-timeline: scroll(block nearest);
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameter

- `<scroller>`
  - : Das Scroller-Element, das die Scroll-Fortschritts-Zeitachse bereitstellen wird. Gültige Werte umfassen:
    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der auf einer der beiden Achsen Scrollbalken hat. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- `<axis>`
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollport beschreibt, der die scrollgesteuerte Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll()` CSS-Funktion kann als einzelner Wert innerhalb der durch Kommas getrennten {{cssxref("animation-timeline")}}-Eigenschaft verwendet werden, um eine Scroll-Fortschritts-Zeitachse für eine {{cssxref("@keyframes")}}-Animation anzugeben. Es definiert das scrollbare Element (_Scroller_) und die Scrollbalkenachse, die die Animations-Zeitachse bereitstellen wird.

Standardmäßig verweist `scroll()` auf die `block`-Achse des `nearest` Vorfahren-Scrollcontainers. Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

Die folgenden fünf Deklarationen sind gleichwertig:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

Die Scroll-Fortschritts-Zeitachse wird durch das horizontale oder vertikale Scrollen des Scrollers durchlaufen, abhängig von der `<axis>` und dem [Schriftsystem](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems). Wenn die angegebene Achse keinen Scrollbalken enthält, wird die Animationszeitachse inaktiv sein.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Festlegen einer anonymen Scroll-Fortschritts-Zeitachse

In diesem Beispiel wird das `#square`-Element mithilfe einer anonymen Scroll-Fortschritts-Zeitachse animiert, die auf das zu animierende Element mithilfe der `scroll()`-Funktion angewendet wird.
Die Zeitachse in diesem speziellen Beispiel wird durch das nächstgelegene Elternelement bereitgestellt, das (jeden) Scrollbalken hat, von dem Scrollbalken in der Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel ist unten dargestellt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Der untenstehende CSS-Code definiert ein Quadrat, das sich in abwechselnde Richtungen dreht, entsprechend der durch die `animation-timeline`-Eigenschaft bereitgestellten Zeitachse.
In diesem Fall wird die Zeitachse durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass der Scrollbalken in der Blockrichtung des nächstgelegenen Vorfahrenelements ausgewählt wird, das Scrollbalken hat; in diesem Fall der vertikale Scrollbalken des „container“-Elements.

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

Der CSS-Code für den Container setzt seine Höhe auf 300px und wir legen auch fest, dass der Container einen vertikalen Scrollbalken erzeugt, falls er überläuft.
Die "stretcher" CSS setzt die Blockhöhe auf 600px, wodurch das Container-Element zum Überlaufen gezwungen wird.
Diese beiden zusammen stellen sicher, dass der Container einen vertikalen Scrollbalken hat, der als Quelle der anonymen Scroll-Fortschritts-Zeitachse verwendet werden kann.

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

```css hidden
@layer no-support {
  @supports not (animation-timeline: scroll()) {
    body::before {
      content: "Your browser doesn't support the CSS `scroll()` function.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
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

- [CSS-Animationen verwenden](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
