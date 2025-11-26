---
title: scroll()
slug: Web/CSS/Reference/Properties/animation-timeline/scroll
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

Die **`scroll()`** [CSS-Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Scroller und die Achse einer [anonymen Scroll-Fortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_scroll_progress_timelines) zu definieren.

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
  - : Das Scroller-Element, das die Scroll-Fortschritts-Timeline bereitstellt. Gültige Werte sind:
    - `nearest`
      - : Der nächste Vorfahre des aktuellen Elements, der auf einer der beiden Achsen Scrollleisten besitzt. Dies ist der Standardwert.
    - `root`
      - : Das Wurzelelement des Dokuments.
    - `self`
      - : Das aktuelle Element selbst.

- `<axis>`
  - : Ein {{ cssxref("axis") }} Schlüsselwortwert, der die Richtung oder Achse des Scrollports beschreibt, der die scrollgetriebene Animation steuert. Der Standardwert ist `block`.

## Beschreibung

Die `scroll()` CSS-Funktion kann als Einzelwert innerhalb der kommagetrennten {{cssxref("animation-timeline")}} Eigenschaft verwendet werden, um eine Scroll-Fortschritts-Timeline für eine {{cssxref("@keyframes")}} Animation zu spezifizieren. Sie definiert das scrollbare Element (_scroller_) und die Scrollleistenachse, die die Animationstimeline bereitstellen wird.

Standardmäßig bezieht sich `scroll()` auf die `block`-Achse des nächsten Vorfahrer-Scroll-Containers. Die Scroller- und Achsenwerte können in beliebiger Reihenfolge angegeben werden.

Die folgenden fünf Deklarationen sind gleichwertig:

```css
animation-timeline: scroll();
animation-timeline: scroll(block);
animation-timeline: scroll(nearest);
animation-timeline: scroll(block nearest);
animation-timeline: scroll(nearest block);
```

Die Scroll-Fortschritts-Timeline wird durch horizontales oder vertikales Scrollen des Scrollers vorangetrieben, je nach `<axis>` und [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems). Wenn die angegebene Achse keine Scrollleiste enthält, wird die Animationstimeline inaktiv sein.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einstellung einer anonymen Scroll-Fortschritts-Timeline

In diesem Beispiel wird das `#square`-Element mit einer anonymen Scroll-Fortschritts-Timeline animiert, die auf das zu animierende Element mithilfe der `scroll()` Funktion angewendet wird.
Die Timeline in diesem speziellen Beispiel wird vom nächsten Elternelement bereitgestellt, das (irgendeine) Scrollleiste hat, von der Scrollleiste in Blockrichtung.

#### HTML

Der HTML-Code für das Beispiel wird unten gezeigt.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

Das folgende CSS definiert ein Quadrat, das sich in alternierenden Richtungen gemäß der von der `animation-timeline` Eigenschaft bereitgestellten Timeline dreht.
In diesem Fall wird die Timeline durch `scroll(block nearest)` bereitgestellt, was bedeutet, dass sie die Scrollleiste in der Blockrichtung des nächsten Vorfahrenelements wählt, das Scrollleisten hat; in diesem Fall die vertikale Scrollleiste des "container"-Elements.

> [!NOTE]
> `block` und `nearest` sind tatsächlich die Standardparameterwerte, daher hätten wir nur `scroll()` verwenden können.

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

Das CSS für den Container setzt seine Höhe auf 300px und wir setzen den Container auch so, dass eine vertikale Scrollleiste erzeugt wird, wenn er überläuft.
Das "stretcher"-CSS setzt die Blockhöhe auf 600px, was das Containerelement zum Überlaufen zwingt.
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

Scrollen Sie, um zu sehen, wie das Quadratelement animiert wird.

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
